---
layout: page
title: "Q126304: X400: Non-delivery Reports to Incorrect User by Softswitch EMX"
permalink: /kb/126/Q126304/
---

## Q126304: X400: Non-delivery Reports to Incorrect User by Softswitch EMX

	Article: Q126304
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Read receipts and delivery notifications may be sent to the incorrect address by
	Softswitch EMX if the unique identifier the Microsoft Mail Gateway to X.400
	places on each message is not unique.
	
	CAUSE
	=====
	
	The X400GATE.EXE program uses the message protocol data unit (MPDU) identifier,
	an IA5 string that includes the Coordinated Universal Time (UTC time) as the
	unique identifier; however, this MPDU is not unique if the gateway ends the
	translation of two outgoing X.400 messages in the same second.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  X400gate.exe   3.2.14
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	MORE INFORMATION
	================
	
	If a Microsoft Mail Windows client user sends a Mail message to the UNIX user
	with Delivery Report and Read Receipt, this bug causes a critical error on the
	Softswitch MTA (EMX) side which operates an X.400 backbone message switch. If a
	message is forwarded by the EMX, it stores the message and, if a notification is
	requested by the sender, waits for the report
	
	If the requested report arrives, the EMX searches the corresponding original
	message according to the specified MPDU ID. EMX takes the originator address of
	the original message and submits the report to that address. Because the MPDUs
	of the original messages are not unique, the EMX often associates a report to
	the wrong original message, and thus submits the report to a different user.
	
	The X.400 gateway has been modified to ensure that the time used is always
	unique. The last time used is now stored and compared to the time retrieved on
	the next message. If they are the same, the program will continue to ask for a
	time until it receives a different time than the one stored. It then stores this
	new time value, for comparison on the next message.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
