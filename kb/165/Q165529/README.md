---
layout: page
title: "Q165529: WD97: Style Changes When Numbering Applied to Based On Style"
permalink: kb/165/Q165529/
---

## Q165529: WD97: Style Changes When Numbering Applied to Based On Style

	Article: Q165529
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new style based on an existing style and then define the
	existing (based on) style to include numbering, the new style will also be
	defined to include numbering.
	
	NOTE: Numbering includes Bulleted, Numbered, and Outline Numbered.
	
	CAUSE
	=====
	
	This behavior is by design and is different from earlier versions of Word. Any
	custom style inherits numbering that is applied to the style it is based on.
	
	WORKAROUND
	==========
	
	Do not apply numbering to the existing style. Instead, apply numbering to the
	new style.
	
	MORE INFORMATION
	================
	
	In earlier versions of Word, if you create a new style, for example MyStyle, and
	base it on the built-in Heading 1 style, it takes on the Heading 1 style
	attributes. If you then define Heading 1 to have heading numbering, Heading 1
	will have the heading numbering attribute applied to it, but MyStyle will not.
	
	In Word 97 for Windows, when you define the Heading 1 style to have heading
	numbering, both Heading 1 and MyStyle have the heading number attribute applied
	to them.
	
	For more information about creating a new style, click Contents And Index on the
	Help menu, click the Index tab in Help Topics: Microsoft Word, type the
	following text
	
	  styles, creating
	
	and then double-click the selected text to go to the "create new styles" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	REFERENCES
	==========
	
	For more information about working with numbering, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157138 WD97: Outline Numbering Is Not Reapplied
	
	  Q157834 WD97: Switching Between Bullets and Numbers Removes Indents
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	  Q164618 WD97: Conversion of Bullets and Numbering
	
	For more information about numbering, click Contents And Index on the Help menu,
	click the Index tab in Help Topics: Microsoft Word, type the following text
	
	  numbers, inserting
	
	and then double-click the selected text to go to the "Add bullets or numbers to
	lists" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
