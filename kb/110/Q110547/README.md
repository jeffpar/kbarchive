---
layout: page
title: "Q110547: Flight Simulator: Error Code (02)"
permalink: kb/110/Q110547/
---

## Q110547: Flight Simulator: Error Code (02)

	Article: Q110547
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to save a situation in Flight Simulator, you may receive the
	following error:
	
	  Disk Error
	  Error Creating File
	  Filename: PILOTS\<filename>
	  Error Code: File does not exist (02)
	
	MORE INFORMATION
	================
	
	This error message indicates that Flight Simulator was unable to create the
	situation file. This occurs when an invalid character has been entered for the
	MS-DOS filename.
	
	Follow these steps to reproduce this situation:
	
	1. Start Flight Simulator 5.0.
	
	2. From the Options menu, click Save Situation.
	
	3. In the Situation Title box type "test:1" (without the quotation marks) and
	  press ENTER on the keyboard. Note that the filename is TEST:1, the colon is
	  an invalid character for MS-DOS filenames.
	
	4. Click OK.
	
	Additional query words: 5.00 5.00a flightsim fltsim dos two 0002 FS5 saving save mode
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
