const questions = [
    {
        id: 1,
        title: "Question",
        subtitle: "Raccourci : Frame selection",
        options: [
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "F", win: "F" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "G", win: "G" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "G", win: "G" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "F", win: "F" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 2,
        title: "Question",
        subtitle: "Raccourci : afficher la règles",
        options: [
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "F", win: "F" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 3,
        title: "Question",
        subtitle: "Raccourci : créer un composant",
        options: [
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "C", win: "C" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "K", win: "K" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "C", win: "C" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "K", win: "K" }
                ],
                isCorrect: true
            }
        ]
    },
    {
        id: 4,
        title: "Question",
        subtitle: "Raccourci : coller les propriétés",
        options: [
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "V", win: "V" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "V", win: "V" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "V", win: "V" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌃", win: "Alt" },
                    { mac: "V", win: "V" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 5,
        title: "Question",
        subtitle: "Raccourci : sélectionner le parent",
        options: [
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "U", win: "U" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "↵", win: "↵" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "↵", win: "↵" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "▲", win: "▲" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 6,
        title: "Question",
        subtitle: "Raccourci : paste to replace",
        options: [
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "R", win: "R" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "V", win: "V" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 7,
        title: "Question",
        subtitle: "Raccourci : Détacher une instance",
        options: [
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "D", win: "D" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "D", win: "D" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "B", win: "B" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "B", win: "B" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 8,
        title: "Question",
        subtitle: "Raccourci : Masquer/Afficher les Grilles (Layout Grids)",
        options: [
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "G", win: "G" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌃", win: "Ctrl" },
                    { mac: "G", win: "G" },
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "G", win: "G" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "G", win: "G" }
                ],
                isCorrect: false
            }
        ]
    },
    {
        id: 9,
        title: "Question",
        subtitle: "Raccourci : Mode “Outline” (Vue fil de fer)",
        options: [
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "O", win: "O" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "O", win: "O" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "Y", win: "Y" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "Y", win: "Y" }
                ],
                isCorrect: true
            }
        ]
    },
    {
        id: 10,
        title: "Question",
        subtitle: "Raccourci : Réduire tous les calques (Collapse Layers)",
        options: [
            {
                keys: [
                    { mac: "⌘", win: "Ctrl" },
                    { mac: "L", win: "L" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⇧", win: "⇧" },
                    { mac: "L", win: "L" }
                ],
                isCorrect: false
            },
            {
                keys: [
                    { mac: "⌥", win: "Alt" },
                    { mac: "L", win: "L" }
                ],
                isCorrect: true
            },
            {
                keys: [
                    { mac: "⌃", win: "Ctrl" },
                    { mac: "L", win: "L" }
                ],
                isCorrect: false
            }
        ]
    }
];