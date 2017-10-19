---
layout: page
title: "Q111062: Flight Simulator 5.0 Setup Cannot Copy SETUP.EXE"
permalink: /kb/111/Q111062/
---

## Q111062: Flight Simulator 5.0 Setup Cannot Copy SETUP.EXE

	Article: Q111062
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Flight Simulator, after using the FSSYSTEM.EXE program to
	create a startup disk, Setup may quit and display the following error message:
	
	  Cannot copy SETUP.EXE.
	
	RESOLUTION
	==========
	
	This problem occurs on machines that do not have a COMMAND.COM file in the
	MS-DOS directory.
	
	To correct this problem, copy COMMAND.COM from the startup disk (or from the root
	of your hard disk drive) to your <drive>:\<DOS> directory, where
	<drive> is your hard disk drive and <DOS> is your MS-DOS directory.
	For example, if your hard disk drive is drive C and your MS-DOS directory is
	DOS, copy COMMAND.COM to C:\DOS.
	
	MORE INFORMATION
	================
	
	When the FSSYSTEM.EXE program creates a startup disk, it sets the path in the
	AUTOEXEC.BAT to the following:
	
	  path A:\;C:\DOS
	
	If you remove the startup disk from drive A after starting your machine, and if
	COMMAND.COM is not present in the C:\DOS directory, the Setup program cannot
	find COMMAND.COM. If Setup cannot find COMMAND.COM, it quits.
	
	Additional query words: 5.00 flightsim fltsim dos FS5 abort exit stop
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
