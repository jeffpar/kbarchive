---
layout: page
title: "Q195518: FS98 Err Msg: Fltsim98 Caused an Invalid Page Fault in Main.dll"
permalink: kb/195/Q195518/
---

## Q195518: FS98 Err Msg: Fltsim98 Caused an Invalid Page Fault in Main.dll

	Article: Q195518
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Flight Simulator 98, you may receive the following
	error message:
	
	  Fltsim98 caused an invalid page fault in module Main.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Main.dll file is missing, damaged, or an
	incorrect version.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "main.dll", and then click Find Now.
	
	3. In the list of found files, right-click the Main.dll file, and then click
	  Rename.
	
	  NOTE: If you have more than one version of Flight Simulator installed on the
	  computer, more than one copy of the Main.dll file is also installed. The
	  Main.dll file installed by Flight Simulator 98 is either 181 or 182 KB in
	  size.
	
	4. Type "main.old", and then press ENTER.
	
	5. Insert the Flight Simulator 98 CD-ROM into your CD-ROM drive.
	
	  Press and hold down the SHIFT key as you insert the Flight Simulator 98 CD-ROM
	  to prevent Flight Simulator 98 from starting automatically.
	
	6. Click Start, point to Programs, and then click Windows Explorer.
	
	7. On the View menu, click Options or Folder Options.
	
	8. On the View tab, click Show All Files, and then click OK.
	
	  NOTE: If you are using Microsoft Windows 98 or Internet Explorer 4.0 Desktop
	  Update, click Show All Files under Hidden Files in the Advanced Settings box,
	  and then click OK.
	
	9. In the All Folders pane, double-click the CD-ROM drive containing the Flight
	  Simulator 98 CD-ROM.
	
	10. Click the FS98 folder.
	
	11. Double-click the Modules folder.
	
	12. Click the Main.dll file.
	
	13. On the Edit menu, click Copy.
	
	14. Quit Windows Explorer.
	
	15. Click Start, and then click Run.
	
	16. In the Open box, type the following line, and then click OK
	
	  <drive>:\Program Files\Microsoft Games\Flight Simulator\Modules
	
	  where <drive> is the letter of the hard disk on which Flight Simulator
	  98 is installed.
	
	17. On the Edit menu, click Paste.
	
	18. Close the Modules window, and then restart the computer.
	
	
	Additional query words: msgame fs98 flightsim crash gpf ipf kbimu homegame
	
	======================================================================
	Keywords          : kberrmsg fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
