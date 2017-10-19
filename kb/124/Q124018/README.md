---
layout: page
title: "Q124018: Multimedia: Setup Hangs at: &quot;Searching for Installed Components"
permalink: /kb/124/Q124018/
---

## Q124018: Multimedia: Setup Hangs at: &quot;Searching for Installed Components

	Article: Q124018
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 1995
	Operating System(s): 
	Keyword(s): kbmm kbsetup kbprb
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete NBA Basketball for Windows, 1994-1995, 1995-1996 editions 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup for the program listed at the top of this article may appear to stop
	responding (hang) while Setup searches for installed components.
	
	RESOLUTION
	==========
	
	Use the resolution section for your multimedia program/
	
	Basketball
	----------
	
	Pressing CTRL+ESC on the keyboard brings up the Task List, which will show two
	Microsoft Complete Basketball Setup entries. One of these entries may be a
	window that lost focus during setup. Switch to this entry and choose OK to close
	the window. Setup should now continue.
	
	Encarta 96 Encyclopedia
	-----------------------
	
	This problem may be caused by CPU utilization required to control the CD ROM
	drive. Testing with MSInfo may indicate that the CD ROM does not meet MPC
	minimum requirement (Transfer rate of 300KB/second with less than 40% CPU
	utilization).
	
	MORE INFORMATION
	================
	
	If there are no sound drivers installed on the system, Setup opens a dialog box
	that tells you this. If you click outside of this dialog box (or minimize it),
	it loses focus. The Setup window will then say searching for installed
	components, and will not continue to the next dialog box until the "no sound
	card" dialog box is found and the OK button is chosen.
	
	Additional query words: 1994 1995 1994multi media multimedia multi-media mmtitles set up err stop halt continue freeze frozen halted stopped stopping wait waiting lockup lock up crash pause
	
	======================================================================
	Keywords          : kbmm kbsetup kbprb 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbEncartaEncycSearch kbCompleteBasketballSearch kbCompleteNBABasketball1994 kbEncartaEnCyc1996
	Version           : 1994 1995
	
	=============================================================================
	
