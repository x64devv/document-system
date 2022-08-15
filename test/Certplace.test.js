const Certplace = artifacts.require('./Certplace.sol')

contract('Certplace', ([deployer, lecturer, applicant]) => {
    let certplace

    before(async () => {
        certplace = await Certplace.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await certplace.address

            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })


        it('has a name', async () => {
            const name = await certplace.name()
            assert.equal(name, "Cert-Manager")
        })
    })

    describe('Institue', async () => {
        let result, count;

        before(async () => {
            result = await certplace.addInstitute('Midlands State University', 'University', 'This is a university Description', 'Senga, Gweru, ZW', '123 123 123', 'info@msu.ac.zw');
            count = await certplace.instCount();
        })

        it('Adds Institute Successfully', async () => {

            const addEvent = result.logs[0].args
            assert.equal(addEvent.id.toNumber(), count.toNumber(), 'Id matches count')

        })
    })

    describe('Applicant', async () => {
        let result, count;

        before(async () => {
            result = await certplace.addApplicant('Jack', 'Jones', 'jack.jones@students.msu.ac.zw', '123 123 123', 'Senga, Gweru, ZW', '00-123456Z78', applicant, 1);
            count = await certplace.applicantCount();
        })

        it('Adds Applicant Successfully', async () => {

            const addEvent = result.logs[0].args
            assert.equal(addEvent.id.toNumber(), count.toNumber(), 'Id matches count')

        })
    })



    describe('Organisation', async () => {
        let result, count;

        before(async () => {
            result = await certplace.addOrganisation('Econet', 'A leading telecoms company', 'Telecoms', 'Henge Street, Samy Levy, ZW', '123 123 123', 'info@econet.co.zw');
            count = await certplace.orgCount();
        })

        it('Adds Organisation Successfully', async () => {

            const addEvent = result.logs[0].args
            assert.equal(addEvent.id.toNumber(), count.toNumber(), 'Id matches count')

        })
    })


    describe('Lecturer', async () => {
        let result, count;

        before(async () => {
            result = await certplace.addLecturer('John', 'Doe', 'john.doe@staff.msu.ac.zw', '123 123 123', lecturer, 1);
            count = await certplace.lecCount();
        })

        it('Adds Lecturer Successfully', async () => {

            const addEvent = result.logs[0].args
            assert.equal(addEvent.id.toNumber(), count.toNumber(), 'Id matches count')

        })
    })


    describe('Request', async () => {
        let result, count;

        before(async () => {
            result = await certplace.addRequest(1, 1, false, false);
            count = await certplace.lecCount();
        })

        it('Adds Request Successfully', async () => {

            const addEvent = result.logs[0].args
            assert.equal(addEvent.id.toNumber(), count.toNumber(), 'Id matches count')

        })

        it('Fectches Request Successfully', async () => {
            const request = await certplace.requests(count)
            console.log(request.response)
        
        })
    })


    describe('Publish Record', async () => {
        let result;

        before(async () => {
            result = await certplace.publishResult(1,1,1, {from: lecturer, value: 4*web3.utils.toWei('1', 'Ether')});
        })

        it('Publishes Record Successfully', async () => {

            const publishEvent = result.logs[0].args

            console.log(publishEvent.tokens)

            // assert.equal(publishEvent.tokens.toNumber(),4*web3.utils.toWei('1', 'Ether'))

        })
    })


})