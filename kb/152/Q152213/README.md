---
layout: page
title: "Q152213: Flight Simulator: Cannot Open PID File During Setup"
permalink: /kb/152/Q152213/
---

## Q152213: Flight Simulator: Cannot Open PID File During Setup

	Article: Q152213
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the Flight Simulator Setup program, the following message may
	appear:
	
	  cannot open PID file...setup aborted
	
	RESOLUTION
	==========
	
	Windows 95
	----------
	
	The best solution is to optimize Windows 95 for Flight simulator. To optimize
	Windows 95 for Flight Simulator, see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q140600 DF1269: Optimizing Windows 95 for Flight Simulator
	
	  Q138208 How to Create a Flight Simulator Shortcut in Windows 95/98
	
	MS-DOS
	------
	
	This issue is caused by conflicting terminate-and-stay-resident (TSR) programs or
	insufficient environment space and can usually be resolved by creating the
	Fssystem boot disk when running on a MS-DOS based system.
	
	NOTE: Do not create a system Startup disk on systems running Microsoft Windows
	95.
	
	Fssystem.exe creates a boot disk with the optimum memory configuration for your
	machine. See the inside back cover of your Microsoft Flight Simulator Pilot's
	Handbook for more information on how to use Fssystem.exe.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  Creating and System and Startup and Disk
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q136908 FLTSIM 5.1: Problems Creating and Using a System Startup Disk
	
	To increase the environment space, open the Config.sys file in a text editor
	(such as Notepad) and add the following line
	
	  SHELL=C:\<valid path>\COMMAND.COM /E:1024 /P
	
	where <valid path> is the path to your Command.com file.
	
	
	Additional query words: 5.10 flightsim fltsim dos d_fltsim flt sim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbprb
	
	=============================================================================
	
