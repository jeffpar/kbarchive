---
layout: page
title: "Q99717: PROFS: Err Msg: DOS ERROR 5090, 119: Host Timeout Error"
permalink: /kb/099/Q99717/
---

## Q99717: PROFS: Err Msg: DOS ERROR 5090, 119: Host Timeout Error

	Article: Q99717
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 2.1b, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to IBM PROFS and OfficeVision (PROFS Gateway) has two
	sets of program code: one is installed on the VM host, and the other
	(VMGATE.EXE) is on the LAN side of the gateway, in the mail executables
	subdirectory.
	
	VMGATE polls both portions of the gateway as they run, checking the host for the
	PROFS:IDLE or PROFS:READY indicators and for other host system messages on the
	state of the PROFS gateway.
	
	The gateway may stop due to a time-out error, usually signaled by one of the
	following errors:
	
	  DOS ERROR 5090 Host Timeout error
	
	  -or-
	
	  DOS ERROR 119 Host Timeout error
	
	CAUSE
	=====
	
	These errors indicate disrupted communications between the two sides of the
	gateway, most often caused when the host VM ID goes into an endless loop, stops
	(hangs), or is somehow logged off.
	
	Conditions that can trigger the host time-out error are:
	
	- The VM ID is logged in on the wrong emulator session.
	
	- Some VM system files are missing.
	
	- No IND$FILE is present on the VM system.
	
	- There is a bad emulator.
	
	- There are corrupt send and receive files in the emulator package.
	
	- Screen compression software is present on the 3174 controller.
	
	RESOLUTION
	==========
	
	If you believe you have emulator problems, contact the emulator vendor. The VM
	administrator must investigate and correct any file irregularities or omissions.
	On the list above, the easiest to correct is the first one: check to see if the
	VM ID is logged in on the wrong emulator session, and be sure to remove the
	gateway VM ID from all auto logoff procedures.
	
	Additional query words: 2.10b 3.00 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300 kbMailGateIBMPROFS210b
	Version           : :2.1b,3.0
	
	=============================================================================
	
