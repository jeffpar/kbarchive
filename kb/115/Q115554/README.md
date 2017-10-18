---
layout: page
title: "Q115554: PROFS: Function of VMGATE and the 3270 Emulation Software"
permalink: kb/115/Q115554/
---

## Q115554: PROFS: Function of VMGATE and the 3270 Emulation Software

	Article: Q115554
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Gateway to PROFS transfers messages between the IBM PROFS mail
	system and the Microsoft Mail system by means of the 3270 emulation software
	that runs on the gateway computer in conjunction with the VMGATE.EXE program.
	
	MORE INFORMATION
	================
	
	Messages are either sent to the host or received from the host. VMGATE works in
	conjunction with the 3270 emulator to transfer messages between the VM host and
	the Microsoft Mail environment.
	
	Messages are transferred to the host system in five minute intervals, or
	according to the -nxx VMGATE command-line option. At each interval the VMGATE
	program checks the VMGATE subdirectory for the outgoing PROFS mailbag,
	PROFSIN.DAT. If the mailbag is there, VMGATE suspends itself and spawns the
	emulator's SEND program, using the following hard-coded command line:
	
	  Send Maildata path:\VMGATE\PROFSIN.DAT PROFSIN CSI A (lrecl 80 recfm F
	
	SEND.EXE transfers messages to the VM host side of the gateway, where it is
	processed and routed to the intended users.
	
	The VMGATE program polls the host screen session, displaying "PROFS: idle" on the
	host screen if there are no messages to be transferred; if there are messages,
	VMGATE displays "PROFS:ready," then suspends itself and spawns the Receive
	program, using the following hard-coded command line:
	
	  Receive maildata path:\VMGATE\PROFSOUT.DAT PROFSOUT $MESSAGE A
	
	
	Additional query words: 3.00 profs gateway vmgate emulators
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
