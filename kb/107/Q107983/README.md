---
layout: page
title: "Q107983: Flight Simulator 5.0: Error 039/+00901 on Pentium Processors"
permalink: /kb/107/Q107983/
---

## Q107983: Flight Simulator 5.0: Error 039/+00901 on Pentium Processors

	Article: Q107983
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On machines using the Pentium processor, you may receive one of the following
	error messages
	
	  Fatal Error Number 0039/+00901
	
	  Fatal Error 039/+00939
	
	when running Flight Simulator 5.0 in the VGA 320 x 400 mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Download the Flight Simulator 5.0a Update
	-----------------------------------------
	
	Download the Flight Simulator 5.0a Update. For more information about how to
	download and install the 5.0a Update, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q112223 File Available that Updates Flight Simulator 5.0 to 5.0a
	
	Run a Debug Script
	------------------
	
	Before starting the following procedure, make a copy of the file Vgb.gra, then do
	the following to correct the problem:
	
	1. Switch to the C:\FLTSIM5 directory in MS-DOS.
	
	2. Type "debug vgb.gra" (without the quotation marks) and press ENTER. A "-"
	  prompt is displayed.
	
	3. Type "e cs:429a f8" (without the quotation marks) and press ENTER. You return
	  to a "-" prompt.
	
	4. Type "w" (without the quotation marks) and press ENTER. Writing 0E18E Bytes
	  is displayed.
	
	5. Type "q" (without the quotation marks), and then press ENTER to quit.
	
	MORE INFORMATION
	================
	
	This problem occurs when using the 320 x 400 VGA video mode (VGB.GRA), but
	should not occur when using the 640 x 400 SVGA mode.
	
	Microsoft has confirmed this to be a problem in Flight Simulator version 5.0 for
	MS-DOS.
	
	This problem was corrected in Flight Simulator 5.0a.
	
	Additional query words: 5.00 5.00a flightsim fltsim dos 320x400 640x400 fs5 901 939
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
