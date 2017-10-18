---
layout: page
title: "Q114427: How AWFAX Initializes a Class 1 or Class 2 Fax Modem"
permalink: kb/114/Q114427/
---

## Q114427: How AWFAX Initializes a Class 1 or Class 2 Fax Modem

	Article: Q114427
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes the process Microsoft At Work PC Fax uses to
	initialize Class 1 and Class 2 fax modems. This information is useful for
	troubleshooting initialization problems--the commands below can be sent to the
	fax modem using Windows Terminal to determine exactly where initialization
	fails.
	
	MORE INFORMATION
	================
	
	1. Any command that is specified on the SetupCommand= entry in the EFAXPUMP.INI
	  file is executed.
	
	2. The following commands are sent to the modem:
	
	  AT&F   - Resets the modem to factory defaults
	  E0     - Turns echo off
	  V1     - Causes verbose responses
	  Q0     - Puts the modem in quiet mode
	  &C1    - Keeps DSR asserted
	  &D3    - Tells the modem to reset on DTR
	  &D2    - Has same affect as &D3 on modems that do not support &D3
	  S0=0   - Turns AutoAnswer off
	  S7=255 - Sets the training time-out to 255 seconds
	  S8=    - Pause time for commas in Dial string, then either X4
	           (recognize busy/dial tone) or X0 (for blind dial)
	  \Q1    - XON/XOFF for Microcom and compatible modems
	  &K4    - Hayes-compatible XON/XOFF command
	  \J0    - Microcom command for do not send DTE/DCE (megahertz modems
	           recognize this command also)
	  &E5    - Multitech XON/XOFF command
	  *F2    - Bidirectional XON/XOFF flow control
	
	3. The Setup command is run again and issues an AT+FCLASS=1 or AT+FCLASS=2
	  (depending on the modem class) and either answers the phone or picks it up to
	  dial.
	
	Additional query words: 3.11 init call efax fax modem
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
