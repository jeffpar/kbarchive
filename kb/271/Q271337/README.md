---
layout: page
title: "Q271337: FS2000: View Through Windshield of Boeing 777-300 Is Black"
permalink: kb/271/Q271337/
---

## Q271337: FS2000: View Through Windshield of Boeing 777-300 Is Black

	Article: Q271337
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay fsim kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you fly the default Boeing 777-300 aircraft in Cockpit view in Microsoft
	Flight Simulator 2000, the instrument panel may appear but the view through the
	windshield may be entirely black.
	
	CAUSE
	=====
	
	This behavior can occur if a video adapter based on the Voodoo Banshee chip set
	is installed in the computer.
	
	Installing updated video drivers from 3Dfx, the manufacturer of the Voodoo
	Banshee chip set, or installing updated video drivers for your video adapter may
	not resolve the issue.
	
	Standard troubleshooting steps may also not resolve the issue.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the Panel.cfg file for the Boeing 777-300.
	
	NOTE: Before you modify the Panel.cfg file, make sure that Flight Simulator 2000
	is installed in the following folder on your hard disk:
	
	  Program Files\Microsoft Games\FS2000
	
	If the program is installed in a different folder, you must uninstall the program
	and then reinstall the program in the default installation folder.
	
	To modify the Panel.cfg file for the Boeing 777-300:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  "<drive>:\program files\microsoft games\fs2000\aircraft\b777_300\panel"
	
	  where <drive> is the drive letter of the hard disk on which Flight
	  Simulator 2000 is installed.
	
	3. Double-click the Panel.cfg file.
	
	4. In the "Choose the program you want to use" box, click Notepad.
	
	5. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	6. On the Search menu, click Find.
	
	7. In the "Find what" box, type "[Window00]" (without the quotation marks), and
	  then click Find Next.
	
	8. Close the Find window.
	
	9. Press the END key.
	
	10. Press ENTER, and then type the following line:
	
	  "render_3d_window=1" (without the quotation marks)
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame flightsim fs2000 fs2k invisible dark empty
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
