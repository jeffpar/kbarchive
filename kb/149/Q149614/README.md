---
layout: page
title: "Q149614: Replaceable Parameter Not Saved When Editing File Type"
permalink: /kb/149/Q149614/
---

## Q149614: Replaceable Parameter Not Saved When Editing File Type

	Article: Q149614
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a replaceable parameter when you are editing an action for a file
	type, the replaceable parameter may not be saved when you click OK to close the
	Editing Action For Type dialog box. No error message is displayed, but if you
	edit the action again, the parameter does not appear.
	
	CAUSE
	=====
	
	This behavior occurs if you do not place quotation marks around the replaceable
	parameter.
	
	RESOLUTION
	==========
	
	To work around this behavior, edit the action again and place quotation marks
	around the replaceable parameter. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. Click the File Types tab.
	
	4. Click the file type you want to modify, and then click Edit.
	
	5. Click the action you want to modify in the list of actions, and then click
	  Edit.
	
	6. Type the appropriate command line or DDE command in the appropriate box,
	  placing quotation marks around the replaceable parameter. For example, to
	  cause the action that you are modifying to open files in WordPad, type the
	  following command in the Application Used To Perform Action box
	
	  " "<path>:\wordpad.exe" "%1" " (without the quotation marks)
	
	  where <path> is the full path to Wordpad.exe.
	
	7. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
