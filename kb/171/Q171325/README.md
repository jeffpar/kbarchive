---
layout: page
title: "Q171325: Incorrect Icons Displayed for .ico Files"
permalink: /kb/171/Q171325/
---

## Q171325: Incorrect Icons Displayed for .ico Files

	Article: Q171325
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): win95 kbshell
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	SYMPTOMS
	========
	
	When you view icon (.ico) files, the icons may display the default Windows
	system icon instead of the actual icon image.
	
	CAUSE
	=====
	
	The .ico file association is missing, or is damaged.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, see the online Help in
	Registry Editor.
	
	To resolve this issue, follow these steps:
	
	1. Double-click My Computer, and then click Options on the View menu.
	
	2. Verify that the Icon file type appears on the File Types tab. If the Icon
	  file type does not appear in the Registered File Types box, skip to step 10.
	
	3. Click Icon in the Registered File Types box, and then click Edit.
	
	4. Verify that the following settings exist, and then click OK:
	
	   - The Description Of Type box contains "Icon" (without the quotation marks).
	
	   - If there is a Confirm Open After Download check box, it should be
	     selected.
	
	5. If the settings do not appear exactly as listed in step 4, click Remove,
	  click Yes, and then click OK. If the settings do appear as listed in step 4,
	  skip to step 10.
	
	6. Click New Type.
	
	7. In the Description Of Type box, type "Icon" (without the quotation marks).
	
	8. In the Associated Extension box, type "ICO" (without the quotation marks).
	
	9. Click OK, and then click Close.
	
	10. Use Registry Editor to view the
	
	  HKEY_CLASSES_ROOT\.ico
	
	  key, and then verify that the default string contains the following value:
	
	  icofile
	
	  If the .ico key does not exist, create it, and then insert the value listed
	  above. If any other values exist in the .ico key, delete them.
	
	11. Use Registry Editor to view the
	
	  HKEY_CLASSES_ROOT\icofile
	
	  key, and then verify that the default string contains the following value:
	
	  icon
	
	  If the icofile key does not exist, create it, and then insert the value
	  listed above. If any other values exist, delete them.
	
	12. Create a new key in the icofile key called "DefaultIcon" (without the
	  quotation marks) , and type "%1" (without the quotation marks) as this key's
	  default value.
	
	13. Quit Registry Editor, and then restart your computer.
	
	MORE INFORMATION
	================
	
	When this issue occurs, the default system icon may be displayed for all the
	icons on the desktop.
	
	======================================================================
	Keywords          : win95 kbshell 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:4.0,95
	Hardware          : x86
	
	=============================================================================
	
