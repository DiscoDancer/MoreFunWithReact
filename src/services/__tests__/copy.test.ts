import CopyService from "../copy.service";

it('CopyService test', ()=> {
    // assign
    const human =  {
        name: "Ivan",
        profession: {
            name: "driver",
            company: "Leningrad Energo"
        }
    };

    // action
    const copy = CopyService.deepcopy(human);

    // assert
    expect(copy.name).toBe("Ivan");
    expect(copy.profession.name).toBe("driver");
    expect(copy.profession.company).toBe("Leningrad Energo");
});