---
layout: page
title: "Q143395: Microsoft Exchange Folder Name Truncated to &quot;Micros~1&quot;"
permalink: /kb/143/Q143395/
---

## Q143395: Microsoft Exchange Folder Name Truncated to &quot;Micros~1&quot;

{% raw %}

	Article: Q143395
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
	
	After you install Microsoft Exchange, the Program Files\Microsoft Exchange
	folder name may be truncated to Program Files\Micros~1, or Progra~1\
	Micros~<x>, where <x> can be any number.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Exchange folder or the Program Files
	folder was deleted or damaged before you installed Microsoft Exchange.
	
	RESOLUTION
	==========
	
	To restore the correct folder name and verify that the program will function
	correctly, follow these steps:
	
	1. Remove Microsoft Exchange using the Add/Remove Programs tool in Control
	  Panel.
	
	2. Use Windows Explorer or My Computer to delete any remaining Microsoft
	  Exchange or Micros~<x> folders in the Program Files folder, where
	  <x> is any number from 1 to 9.
	
	3. Install Microsoft Exchange using the Add/Remove Programs tool in Control
	  Panel.
	
	4. Rename the Micros~1 folder to Test. Acknowledge the error messages that
	  occur. Rename the Test folder to Microsoft Exchange, and acknowledge the
	  error messages that occur.
	
	  The reason you rename the Micros~1 folder to Test and then to Microsoft
	  Exchange is that renaming the Micros~1 folder directly to Microsoft Exchange
	  would create a short name of Micros~2 for the folder, which would not solve
	  the problem.
	
	5. Use the right mouse button to click the Microsoft Exchange folder, and then
	  click Properties on the menu that appears. Verify that the short name for the
	  folder is Micros~1, and then choose OK.
	
	6. Extract the Mlset32.exe and Mlshext.dll files from your original Windows 95
	  disks or CD-ROM to the Microsoft Exchange folder. For information about using
	  the Extract tool, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	  The Mlset32.exe file is located in the Win95_07.cab cabinet file on disk 7 or
	  the Windows 95 CD-ROM. The Mlshext.dll file is located in the Win95_06.cab
	  cabinet file on disk 6 or the Windows 95 CD-ROM.
	
	7. Double-click the Mlset32.exe file in the Microsoft Exchange folder to run it.
	  Follow the instructions in the Microsoft Exchange Wizard.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange requires the Program Files\Microsoft Exchange folder to have
	the short folder name Progra~1\Micros~1. If this is not the case, Microsoft
	Exchange cannot be installed correctly.
	
	For more information about not being able to open or compose a message in
	Microsoft Exchange, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q137245 Cannot Open or Compose Message in Microsoft Exchange
	
	Additional query words: hang
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
