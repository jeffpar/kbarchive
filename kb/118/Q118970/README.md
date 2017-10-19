---
layout: page
title: "Q118970: SMTP: Error (9) Closing MS-DOS Socket for LAN Workplace"
permalink: /kb/118/Q118970/
---

## Q118970: SMTP: Error (9) Closing MS-DOS Socket for LAN Workplace

	Article: Q118970
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Mail Gateway to SMTP attempts to close a socket after
	receiving or sending a message, and the gateway PC has LAN Workplace for MS-DOS,
	you may receive an error (9):
	
	  07:32:32 - Translating remote address: "14403LUTY@KCPBLDG05.BV.COM"
	  07:32:32 - Comparing: kcpbldg05.bv.com to KCPBLDG05.BV.COM
	  07:32:32 - Mapped KCPBLDG05.BV.COM to POWER/KCPBLDG05
	  07:32:32 - Mapped to "CSI:POWER/KCPBLDG05/14403LUTY"
	  07:32:35 - spawning SMTPPUT
	  07:33:22 - spawn(SMTPPUT)=0
	
	  [tx] 250
	
	  07:33:24 - WARNING getline: NL with no CR
	
	  [rx] QUIT
	  [tx] 221 See you later
	
	  07:33:24 - Closing socket 2
	  07:33:24 - ERROR close: (9) Bad file number
	  07:33:24 - ERROR close: (9) Bad file number
	  07:33:24 - SMTP connection closed
	  07:33:24 - Idling: 46350 bytes, largest 45326
	  07:33:25 - spawning SMTPGET
	  07:33:39 - spawn(SMTPGET)=0
	
	CAUSE
	=====
	
	If the version of Novell TCPIP.EXE on the SMTP gateway is dated 11/13/92, it is
	not the most current version and it produces this error.
	
	RESOLUTION
	==========
	
	Install the version dated 9/28/93. Also, in the NET.CFG file, change the Link
	Driver section to include these lines only:
	
	  Link Driver 3C509
	
	  Frame Ethernet_II
	  Frame Ethernet_802.3
	  Protocol IPX 0 Ethernet_802.3
	
	Additional query words: smtp attachment case
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
