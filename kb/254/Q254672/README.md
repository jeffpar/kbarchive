---
layout: page
title: "Q254672: FS2000 Err Msg: Cache File Open Error"
permalink: kb/254/Q254672/
---

## Q254672: FS2000 Err Msg: Cache File Open Error

	Article: Q254672
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg fsim kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start or while you are running Microsoft Flight Simulator
	2000, you may receive the following error message:
	
	  Cache File Open Error. File Missing On Open cache\XXXX\XXXX\XXXX
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- Your CD-ROM drive is unable to read the Flight Simulator 2000 CD-ROM.
	
	- The scenery cache files are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove Flight Simulator 2000
	----------------------------
	
	To remove Flight Simulator 2000:
	
	1. Insert the Flight Simulator 2000 Disc 1 CD-ROM into the CD-ROM drive. Press
	  and hold down the SHIFT key as you insert the CD-ROM to prevent Setup from
	  starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, click Microsoft Flight Simulator 2000, and then
	  click Add/Remove.
	
	5. Click Uninstall.
	
	6. When you are prompted to confirm that you want to remove Flight Simulator
	  2000, click Yes.
	
	7. Click OK, and then click OK again.
	
	8. Close Control Panel.
	
	Delete the FS2000 Folder
	------------------------
	
	To delete the FS2000 folder:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "FS2000" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Make sure that the "Include subfolders" check box is selected.
	
	5. Click Find Now.
	
	6. Right-click the FS2000 folder, click Delete, and then click Yes.
	
	7. Close the "Find: Files named FS2000" window.
	
	Install Flight Simulator 2000
	-----------------------------
	
	To install Flight Simulator 2000:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	3. Follow the instructions on the screen to install the program.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, remove Flight Simulator 2000, and then perform
	a custom installation of the program, in which you only install the scenery
	files that you want to use. A custom installation of a limited number of scenery
	files may resolve this issue if only certain scenery cache files are damaged.
	
	To do this:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "FS2000" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Make sure that the "Include subfolders" check box is selected.
	
	5. Click Find Now.
	
	6. Right-click the FS2000 folder, click Delete, and then click Yes.
	
	7. Close the "Find: Files named FS2000" window.
	
	8. Click Start, and then click Run.
	
	9. In the Open box, type the following line, and then click OK:
	
	  <drive>:\setup.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	10. Follow the instructions on the screen until the Install Options screen is
	  displayed.
	
	11. Click to select Custom, and then click OK.
	
	12. Under On CD, click a scenery file, and then click On Hard Disk.
	
	13. Repeat step 12 for each scenery file that you want to include in your
	  installation of Flight Simulator 2000.
	
	14. Click OK.
	
	15. Follow the instructions on the screen to finish the custom installation of
	  Flight Simulator 2000.
	
	If the issue continues to occur, your CD-ROM drive may be unable to read the
	Flight Simulator 2000 CD-ROM.
	
	For additional information about how to troubleshoot CD-ROM read errors, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: msgame flightsim fltsim fs2k corrupted
	
	======================================================================
	Keywords          : kberrmsg fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
