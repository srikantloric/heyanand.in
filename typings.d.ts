type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;

};

interface ReferLinks extends Base{
    title: string;
    sideImage: Image;
}

interface Image{
    _ref: string;
    _type: "reference";
}