---
layout: page
title: "Q97878: Encarta: Setup Diagnostic Fails"
permalink: /kb/097/Q97878/
---

## Q97878: Encarta: Setup Diagnostic Fails

{% raw %}

	Article: Q97878
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1993
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Included in the Encarta Setup procedure is a diagnostic of the CD-ROM drive to
	check system requirements and determine Multimedia PC (MPC) compatibility. The
	diagnostic tests the drive for the following MPC parameters:
	
	- Audio support installed
	
	- MIDI support installed
	
	- Windows 3.1 installed
	
	- CD-ROM drive data transfer rate
	
	- Available RAM memory
	
	- VGA display installed
	
	The most common failure is the transfer rate test. The specification requires a
	150k per second transfer rate without exceeding 40 percent of the CPU bandwidth.
	In this case, CPU bandwidth is the amount of time the CPU must spend doing the
	transfer versus other concurrent tasks. If the drive requires more than 40
	percent of the CPU bandwidth (the diagnostic actually allows up to 47 percent),
	it will be flagged as non-MPC compatible. In some cases of non-MPC compliance,
	the diagnostic warns of possible problems with some features of Encarta.
	
	NOTE: MPC compatible drives that have low available system resources may be
	flagged as non-MPC compatible. To avoid this flag, ensure that non-necessary
	programs are closed and that at least 80 percent of Windows resources are free
	before installing Encarta.
	
	MORE INFORMATION
	================
	
	The result of this diagnostic test can be written to a file and viewed
	separately. To do this:
	
	1. Start Setup and continue to the Welcome screen.
	
	2. Click Help.
	
	3. Press and hold down the ALT key and type "len" (lowercase without the
	  quotation marks). The machine beeps as the letters are typed.
	
	4. Continue Setup through the Diagnostics check screen (at least).
	
	Setup creates a file in the root directory called DEBUG.CD. Open DEBUG.CD in
	Write. (You also can open the file in Notepad, but it will be harder to read.)
	You will see the results of each of four tests that Setup runs. The CPU
	bandwidth test is returned as a percentage called "CPU BLOCKED". For example, a
	value of 52.4 percent for this test result would mean that the CD-ROM drive
	consumed 52.4 percent of the CPU bandwidth when transferring data. The MPC
	specification calls for a maximum consumption of 40 percent of the CPU
	bandwidth.
	
	Additional query words: non MPC non-MPC CD ROM 1.00 multimedia multi-media multi media debug install power failed NEC multispin spin multi-spin fails fail check-out yield cdrom
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : 1993
	
	=============================================================================
	

{% endraw %}
