import { islands } from "./databases";

export const userFormFildsAll = [
  {
    label: "email",
    category: "registration",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "email",
    view: "yes",
    require: "",
    type: "email",
    dir: "ltr",
    label_dv: "އީމެއިލް",
    obj: ""
  },
  {
    label: "password",
    category: "registration",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "password",
    view: "yes",
    require: "",
    type: "password",
    dir: "ltr",
    label_dv: "ޕާސްވޯޑް",
    obj: ""
  },
  {
    label: "confirmpassword",
    category: "registration",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "confirmpassword",
    view: "yes",
    require: "",
    type: "confirmpassword",
    dir: "ltr",
    label_dv: " ޕާސްވޯޑް އަދި އެއްފަހަރު",
    obj: ""
  },
  {
    label: "nid",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "nid",
    view: "yes",
    require: "",
    type: "text",
    dir: "ltr",
    label_dv: "އައިޑީ ކާޑު ނަންބަރ",
    obj: ""
  },
  {
    label: "fullname",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "fullname",
    view: "yes",
    require: "",
    type: "text",
    dir: "rtl",
    label_dv: "ފުރިހަމަ ނަން",
    obj: ""
  },
  {
    label: "currentaddress",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "currentaddress",
    view: "yes",
    require: "",
    type: "text",
    dir: "rtl",
    label_dv: "ގޭގެ ނަން",
    obj: ""
  },
  {
    label: "currentisland",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "currentisland",
    view: "yes",
    require: "",
    type: "select",
    dir: "rtl",
    label_dv: "މިހާރު ދިރިއުޅޭ ރަށް",
    obj: islands
  },
  {
    label: "registeredaddress",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "registeredaddress",
    view: "yes",
    require: "",
    type: "text",
    dir: "rtl",
    label_dv: "ދާއިމީ އެޑްރެސް",
    obj: ""
  },
  {
    label: "registeredisland",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "registeredisland",
    view: "yes",
    require: "",
    type: "select",
    dir: "rtl",
    label_dv: "ރަޖިސްޓަރީވެފައިވާ ރަށް",
    obj: islands
  },
  {
    label: "Date of Birth",
    category: "register_basic",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "dob",
    view: "yes",
    require: "yes",
    type: "date",
    dir: "rtl",
    label_dv: "އުފަންދުވަސް",
    obj: ""
  },
  {
    label: "gender",
    category: "profile_basics",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "gender",
    view: "yes",
    require: "",
    type: "select",
    dir: "rtl",
    label_dv: "ޖިންސް",
    obj: [{ id: "m", body: "m" }, { id: "f", body: "f" }]
  },
  {
    label: "Attach Idcard copy",
    category: "register_basic",
    step: "part1",
    tab: "own",
    need: "no",
    id: "userIdCopy",
    view: "yes",
    require: "",
    type: "file",
    dir: "ltr",
    label_dv: "އައިޑީކާޑުގެ ކޮޕީ",
    obj: ""
  },
  {
    label: "Phone",
    category: "register_basic",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "phone",
    view: "yes",
    require: "yes",
    type: "text",
    dir: "ltr",
    label_dv: "ފޯން",
    obj: ""
  },

  {
    label: "Secret Phrase",
    category: "register_basic",
    step: "part1",
    tab: "own",
    need: "yes",
    id: "secret",
    view: "yes",
    require: "yes",
    type: "text",
    dir: "ltr",
    label_dv: "ސިއްރު ބަހެއް",
    obj: ""
  },

]