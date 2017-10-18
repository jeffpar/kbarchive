---
layout: page
title: "Q175196: FS/CFS: Runway is Not Visible or Game Screen is Black"
permalink: kb/175/Q175196/
---

## Q175196: FS/CFS: Runway is Not Visible or Game Screen is Black

	Article: Q175196
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbui fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a flight in any of the programs listed at the beginning of this
	article, you may be unable to see the runway.
	
	NOTE: When you press the ALT key or switch to Windows mode, you may be able to
	see the game menus at the top of the screen.
	
	CAUSE
	=====
	
	This behavior can occur if you are not in Cockpit view.
	
	RESOLUTION
	==========
	
	To resolve this behavior, on the Views menu in Flight Simulator, point to View
	Mode and then click Cockpit.
	
	If you are still unable to see the runway when you start a flight, manually edit
	the Fltsim98.cfg, Fs2000.cfg, or Cfs2.cfg file to change the default view to
	Cockpit. To do this:
	
	1. Quit Flight Simulator if it is running.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type the appropriate following line for your version of
	  Flight Simulator:
	
	  Combat Flight Simulator 2:
	
	  cfs2.cfg
	
	  Flight Simulator 98:
	
	  fltsim98.cfg
	
	  Flight Simulator 2000:
	
	  fs2000.cfg
	
	4. In the "Look in" box, click My Computer, and then click Find Now.
	
	5. In the list of found files, double-click the Cfs2.cfg, Fltsim98.cfg, or the
	  Fs2000.cfg file.
	
	  If you are prompted to select the program you want to use to open the
	  Cfs2.cfg, Fltsim98.cfg, or Fs2000.cfg file, click Notepad in the "Choose the
	  program you want to use box", and then click OK.
	
	6. On the Search menu in Notepad, click Find.
	
	7. In the Find What box, type "loadwindow" (without the quotation marks), and
	  then click Find Next.
	
	8. When the LOADWINDOW line is highlighted, click Cancel to close the Find
	  dialog box.
	
	  NOTE: If the LOADWINDOW line is not found, you must add it to the [PREFS]
	  section of the file.
	
	9. Change the LOADWINDOW line to match the following line:
	
	  LOADWINDOW=1
	
	NOTE: If the LOADWINDOW= has a value other than 1, the screen is completely black
	when you play the game.
	
	10. On the File menu, click Exit. If you are prompted to save the changes, click
	  Yes.
	
	11. Restart Flight Simulator.
	
	Additional query words: flightsim fltsim flt sim fs98 fs2000 fs2k black dark night view Cockpit scenery cfs2 combatfs
	
	======================================================================
	Keywords          : kbui fs98 kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
