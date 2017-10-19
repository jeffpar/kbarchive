---
layout: page
title: "Q169226: Path of Nested Desktop Folder Not Displayed Correctly"
permalink: /kb/169/Q169226/
---

## Q169226: Path of Nested Desktop Folder Not Displayed Correctly

	Article: Q169226
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Windows NT Explorer window for a folder that resides within
	another folder (a nested folder) on your desktop, the path that is displayed in
	the title bar is incorrect. The path of the nested folder is shown as being
	directly off of the desktop, instead of being within the parent folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Double-click My Computer, and then click Options on the View menu.
	
	2. On the View tab, click the "Display the full path in the title bar" check box
	  to select it, and then click OK.
	
	3. Create a folder named Test1 on the desktop. Open the Test1 folder, and verify
	  that the correct path is displayed in the title bar, as in the following
	  example:
	
	     C:\Winnt\Profiles\<username>\Desktop\Test1
	
	4. In the Test1 folder, create a new folder named Test2. Open the Test2 folder,
	  and note that an incorrect path is displayed, as in the following example:
	
	     C:\Winnt\Profiles\<username>\Desktop\Test2
	
	This issue affects only the display of the path in the title bar; the actual
	directory structure is correct.
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
