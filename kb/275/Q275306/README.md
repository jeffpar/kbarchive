---
layout: page
title: "Q275306: Encarta 2001: Photographs Not Displayed When You View Articles"
permalink: kb/275/Q275306/
---

## Q275306: Encarta 2001: Photographs Not Displayed When You View Articles

	Article: Q275306
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana, Third Edition 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view articles in one of the Microsoft Encarta programs listed at the
	beginning of this article, some photographs in the article may not be displayed,
	and you may receive one of the following error messages:
	
	  Missing Photo <filename>
	
	where <filename> is the file name of the photograph that the program is
	unable to display.
	
	  -or-
	
	  Missing Pho
	
	  -or-
	
	  Missing PID <File number>.JSM '<File Name>'
	
	for example: Missing PID T013483A.JSM 'Ben Franklin'.
	
	-or-
	
	  Image <xxxx>.jpg is missing.
	
	
	CAUSE
	=====
	
	This behavior can occur if your CD-ROM drive is unable to read the CD-ROM that
	contains the photograph the program is attempting to display.
	
	RESOLUTION
	==========
	
	To resolve this issue, clean your disc. If this does not resolve issue, use one
	the following methods in the order in which they are presented.
	
	Uninstall and Reinstall the Program
	-----------------------------------
	
	To uninstall and reinstall one of the programs listed at the beginning of this
	article:
	
	1. Quit all programs that are running on your computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. In the list of installed programs, click one of the programs listed at the
	  beginning of this article, and then click Add/Remove.
	
	5. Follow the instructions on the screen to uninstall the program.
	
	6. Repeat steps 4 and 5 to uninstall each of the programs listed at the
	  beginning of this article, if they appear in the list of installed programs.
	
	7. Click OK, and then close Control Panel.
	
	8. Delete the folders for the programs that you uninstalled in steps 4 through
	  7. To do this:
	
	  a. Click Start, point to Programs, and then click Windows Explorer.
	
	  b. In the left pane, click the Program Files folder to highlight it.
	
	  c. In the right pane, right-click the Microsoft Encarta folder, and then
	     click Delete.
	
	     If you are prompted to confirm the deletion, click Yes or "Yes to All".
	
	  d. Double-click the Common Files folder.
	
	  e. Double-click the Microsoft Shared folder.
	
	  f. Right-click the Reference 2001 folder, and then click Delete.
	
	     If you are prompted to confirm the deletion, click Yes or "Yes to All".
	
	  g. Right-click the Reference Titles folder, and then clickDelete.
	
	     If you are prompted to confirm the deletion, click Yes or "Yes to All".
	
	  h. Right-click the Information Retrieval folder, and then click Delete.
	
	     If you are prompted to confirm the deletion, click Yes or "Yes to All".
	
	  i. Close Windows Explorer.
	
	9. Clean boot your computer.
	
	Manually Register the Required Files
	------------------------------------
	
	To manually register the files that are required by the program:
	
	1. Close all folders and quit all programs that are running on your computer.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type "refreg.exe" (without the quotation marks).
	
	By default, the file is installed in the following folder:
	
	  c:\Program Files\Common Files\Microsoft Shared\Reference 2001
	
	4. In the Look in box, click My Computer, and then click Find Now.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK:
	
	  "c:\Program Files\Common Files\Microsoft Shared\Reference 2001" (including
	  the quotation marks)
	
	7. Right-click an empty space on the taskbar, and then click "Tile Windows
	  Vertically" (or horizontally) so that you can simultaneously see both windows
	  on the desktop.
	
	8. In the list of found files, drag and drop the following files on top of the
	  Regsvr32.exe file:
	   - Refjic.dll
	   - Refsv.dll
	   - Sfc10.ocx
	   - Treedata.dll
	   - Wheel2ee.dll
	
	  NOTE: You receive a message stating that registration was successful for each
	  file.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot CD-ROM read errors, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: multi multi-media media mm ee2001 ers2001 ea3 eiwa ewed PHO Picture missing pictures
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaAfricana300 kbEncartaReference2001 kbEncartaWorldAtlas2001 kbEncartaWorldEngDict2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
