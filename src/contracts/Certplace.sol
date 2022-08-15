// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Certplace {
    string public name;
    uint256 public applicantCount = 0;
    uint256 public lecCount = 0;
    uint256 public requestCount = 0;
    uint256 public instCount = 0;
    uint256 public orgCount = 0;

    mapping(uint256 => Applicant) public applicants;
    mapping(uint256 => Lecturer) public lectures;
    mapping(uint256 => Request) public requests;
    mapping(uint256 => Institute) public institutes;
    mapping(uint256 => Organisation) public organisations;

    struct Applicant {
        uint256 id;
        string name;
        string lastName;
        string email;
        string phone;
        string homeAddress;
        string nationalId;
        address payable wallet;
        uint256 institute;
    }

    event ApplicantAdded(
        uint256 id,
        string name,
        string lastName,
        string email,
        string phone,
        string homeAddress,
        string nationalId,
        address payable wallet,
        uint256 institute
    );

    struct Lecturer {
        uint256 id;
        string name;
        string lastName;
        string email;
        string phone;
        address payable wallet;
        uint256 institute;
    }

    event LecturerAdded(
        uint256 id,
        string name,
        string lastName,
        string email,
        string phone,
        address payable wallet,
        uint256 institute
    );

    struct Request {
        uint256 id;
        uint256 sender;
        uint256 receiver;
        bool responded;
        bool response;
    }

    event RequestAdded(
        uint256 id,
        uint256 sender,
        uint256 receiver,
        bool responded,
        bool response
    );

    struct Institute {
        uint256 id;
        string name;
        string instType;
        string description;
        string location;
        string phone;
        string email;
        address payable wallet;
    }

    event InstituteCreated(
        uint256 id,
        string name,
        string instType,
        string description,
        string location,
        string phone,
        string email,
        address payable wallet
    );

    struct Organisation {
        uint256 id;
        string name;
        string description;
        string orgType;
        string location;
        string phone;
        string email;
        address payable wallet;
    }

    event OrganisationAdded(
        uint256 id,
        string name,
        string description,
        string orgType,
        string location,
        string phone,
        string email,
        address payable wallet
    );

     event RecordPublished(
      address from,
      address to,
      uint tokens
    );

    constructor() public {
        name = "Cert-Manager";
    }

    function addInstitute(
        string memory _name,
        string memory _instType,
        string memory _desc,
        string memory _location,
        string memory _phone,
        string memory _email
    ) public {
        //Make sure Values are correct

        //Increament count
        instCount++;

        //Add Institute
        institutes[instCount] = Institute(
            instCount,
            _name,
            _instType,
            _desc,
            _location,
            _phone,
            _email,
            payable(msg.sender)
        );

        //Trigger Event
        emit InstituteCreated(
            instCount,
            _name,
            _instType,
            _desc,
            _location,
            _phone,
            _email,
            payable(msg.sender)
        );
    }

    function addApplicant(
        string memory _name,
        string memory _lastName,
        string memory _email,
        string memory _phone,
        string memory _homeAddress,
        string memory _nationalId,
        address payable _wallet,
        uint256 _institute
    ) public {
        //increase Applicant count
        applicantCount++;

        //Add applicant
        applicants[applicantCount] = Applicant(
            applicantCount,
            _name,
            _lastName,
            _email,
            _phone,
            _homeAddress,
            _nationalId,
            _wallet,
            _institute
        );

        //Trigger and Event
        emit ApplicantAdded(
            applicantCount,
            _name,
            _lastName,
            _email,
            _phone,
            _homeAddress,
            _nationalId,
            _wallet,
            _institute
        );
    }

    function addOrganisation(
        string memory _name,
        string memory _description,
        string memory _orgType,
        string memory _location,
        string memory _phone,
        string memory _email
    ) public {
        //Increament orgCount
        orgCount++;

        //Add organisation
        organisations[orgCount] = Organisation(
            orgCount,
            _name,
            _description,
            _orgType,
            _location,
            _phone,
            _email,
            payable(msg.sender)
        );

        //Trigger event
        emit OrganisationAdded(
            orgCount,
            _name,
            _description,
            _orgType,
            _location,
            _phone,
            _email,
            payable(msg.sender)
        );
    }

    function addLecturer(
        string memory _name,
        string memory _lastName,
        string memory _email,
        string memory _phone,
        address payable _wallet,
        uint256 _institute
    ) public {
        //Increament lecCount
        lecCount++;

        //Add lecturer
        lectures[lecCount] = Lecturer(
            lecCount,
            _name,
            _lastName,
            _email,
            _phone,
            _wallet,
            _institute
        );

        //Trigger event
        emit LecturerAdded(
            lecCount,
            _name,
            _lastName,
            _email,
            _phone,
            _wallet,
            _institute
        );
    }

    function addRequest(
        uint256 _sender,
        uint256 _receiver,
        bool _responded,
        bool _response
    ) public {
        //Increament requestCount
        requestCount++;

        //Add Request
        requests[requestCount] = Request(
            requestCount,
            _sender,
            _receiver,
            _responded,
            _response
        );

        //Trigger and event
        emit RequestAdded(
            requestCount,
            _sender,
            _receiver,
            _responded,
            _response
        );
    }

    function publishResult(
        uint256 _lecInst,
        uint256 _student,
        uint256 _stuInst
    ) public payable returns (bool) {
        if (msg.value > 0 && (_lecInst == _stuInst)) {
            address payable _wallet = applicants[_student].wallet;
            payable(_wallet).transfer(msg.value);

            emit RecordPublished(msg.sender, _wallet, msg.value);
            return true;
        } else {
            return false;
        }
    }
}
