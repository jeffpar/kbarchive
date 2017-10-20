---
layout: page
title: "Q113252: BUG: Viewer Setup Causes Error in SYMTAB11.C"
permalink: /kb/113/Q113252/
---

## Q113252: BUG: Viewer Setup Causes Error in SYMTAB11.C

{% raw %}

	Article: Q113252
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The setup script included with the Microsoft Multimedia Publishing Toolkit
	version 2.0 displays the error message:
	
	  Setup has encountered a problem.
	  Please report File='COMMON\SYMTAB11.C', Line='616' to Microsoft Product
	  Support Services.
	
	CAUSE
	=====
	
	This error is generated when a setup script tries to replace a list item that is
	past the end of the list using ReplaceListItem.
	
	The setup script shipped with Viewer, TITLE.MST, expects the value returned by
	GetWindowsDir() to be in uppercase letters. It contains the line:
	
	     ReplaceListItem szExtras$, ASC(MID$(GetWindowsDir(), 1, 1)) -
	           ASC("A") + 1, STR$(4096)
	
	The MID$ function call creates a substring of length 1 and starting at position 1
	of the string returned by GetWindowsDir(). This substring will be the drive
	letter of the drive from which Windows was started. The ASC function call
	generates the numeric ASCII code for this character. Then the numeric ASCII code
	for "A" is subtracted from this number. The script expects the result of this to
	be between 0 and 25, and it increments this number by 1 and uses it as an index
	into the szExtras$ list, which contains 26 items. If GetWindowsDir() returns an
	uppercase string, the result of the subtraction will indeed be between 0 and 25.
	However, if GetWindowsDir() returns a lowercase string, the result will be out
	of range.
	
	The value returned by GetWindowsDir() would be lowercase if the PATH statement in
	the user's AUTOEXEC.BAT used lowercase for the name of the Windows directory.
	
	You can see the value that would be returned by the GetWindowsDir() function by
	typing SET from an MS-DOS prompt in Windows, and checking the value of the
	"windir" environment variable. This environment variable is set by Windows when
	it starts up, and it has the same value as is returned by GetWindowsDir().
	
	RESOLUTION
	==========
	
	On line 252 of TITLE.MST, change the ReplaceListItem call from
	
	     ReplaceListItem szExtras$, ASC(MID$(GetWindowsDir(), 1, 1)) -
	           ASC("A") + 1, STR$(4096)
	
	to the following:
	
	     ReplaceListItem szExtras$, ASC(MID$(UCASE$
	           (GetWindowsDir()), 1, 1)) - ASC("A") + 1, STR$(4096)
	
	This will capitalize the value returned from GetWindowsDir(). If the Windows
	directory is on drive C, this code will subtract "A" from "C", and then add 1,
	resulting in a value of 3. The szExtras$ symbol has items 1-26, one for each
	possible drive letter. The value 3 is a valid item in this list.
	
	If you are getting the SYMTAB11.C error but cannot edit the .MST file, you can
	avoid the error by capitalizing the PATH statement in your AUTOEXEC.BAT file.
	
	Additional query words: 2.00 buglist2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
