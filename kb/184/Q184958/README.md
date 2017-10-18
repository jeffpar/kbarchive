---
layout: page
title: "Q184958: CART: Game Stops Responding When You Enter the Racing School"
permalink: kb/184/Q184958/
---

## Q184958: CART: Game Stops Responding When You Enter the Racing School

	Article: Q184958
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CART Precision Racing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enter the Racing School or load the racetrack art in CART Precision
	Racing, the screen may be blank and the computer may appear to stop responding
	(hang).
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that ActiveX scripts are enabled in Microsoft
	Internet Explorer. To do this, use the appropriate method listed below.
	
	Internet Explorer Version 3.x
	-----------------------------
	
	1. Start Internet Explorer.
	
	2. On the View menu, click Options.
	
	3. Click the Security tab.
	
	4. Click the following check boxes to select them:
	
	   - Allow Downloading Of Active Content
	
	   - Enable ActiveX Controls And Plug-Ins
	
	   - Run ActiveX Scripts
	
	   - Enable Java Programs
	
	5. Click OK.
	
	Internet Explorer 4.0 and Later
	-------------------------------
	
	1. Start Internet Explorer.
	
	2. On the View menu (Internet Explorer 4.0) or Tools menu (Internet Explorer
	  5.0), click Internet Options.
	
	3. Click the Security tab.
	
	4. Click Medium (More Secure), and then click OK.
	
	If the problem continues to occur, remove and reinstall Active Movie. To remove
	and reinstall Active Movie, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the following line, and then click Find Now:
	
	  amovie.ocx actmovie.exe quartz.dll
	
	3. In the list of found files, right-click a file, and then click Delete for
	  each found file.
	
	4. Insert the CART Precision Racing CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key when you insert the CD-ROM to prevent CART Precision
	  Racing from starting automatically.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup\amovie.exe
	
	  where <drive> is the letter of your CD-ROM drive.
	
	7. Follow the installation instructions on the screen.
	
	Test to see if the issue is resolved. If the issue still occurs, reduce the
	graphics hardware acceleration. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (The Basic Acceleration Setting).
	
	5. Click OK, and then click OK.
	
	6. Click Yes to restart the computer.
	
	Additional query words: cart black hand freeze C.A.R.T. indy sim simulator button hourglass kbimu homegame msgame
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : kbHomeMMsearch kbGamesSearch kbCARTRacingSearch kbCARTRacing
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
