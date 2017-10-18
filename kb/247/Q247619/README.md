---
layout: page
title: "Q247619: FS2000: Program Hangs with nVIDIA Riva TNT-Based Video Adapter"
permalink: kb/247/Q247619/
---

## Q247619: FS2000: Program Hangs with nVIDIA Riva TNT-Based Video Adapter

	Article: Q247619
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Flight Simulator 2000, the program may stop responding
	(hang).
	
	CAUSE
	=====
	
	This behavior can occur if a video adapter based on the nVIDIA Riva TNT chip set
	is installed in your computer.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the FS2000.cfg file. To do this:
	
	1. Quit Flight Simulator 2000.
	
	2. Click Start, point to Find, and then click "Files or Folders."
	
	3. In the Named box, type "fs2000.cfg" (without the quotation marks).
	
	4. In the "Look in" box, click the hard disk on which Flight Simulator 2000 is
	  installed.
	
	5. Click to select the Include Subfolders check box, and then click Find Now.
	
	6. In the list of found files, double-click the Fs2000.cfg file.
	
	  NOTE: If the Open With dialog box appears, click NotePad in the "Choose the
	  program you want to use" box, and then click OK.
	
	7. In the Fs2000.cfg file, press CTRL+END, and then press ENTER.
	
	8. Type the following lines, pressing ENTER after you type each line:
	
	  [HARDWARE]
	  TextureAGP=0
	  TextureManagement=1
	
	9. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: flightsim fsim fs fs2000 fs2k msgame display graphics 3d chipset
	
	======================================================================
	Keywords          : kbdisplay kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
