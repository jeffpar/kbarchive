---
layout: page
title: "Q194384: X400: Cannot Send Message with 246-Byte P1 File Through Gateway"
permalink: /kb/194/Q194384/
---

## Q194384: X400: Cannot Send Message with 246-Byte P1 File Through Gateway

	Article: Q194384
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
	
	When you attempt to send a message with an associated P1 file that is 246 bytes
	in size through the Microsoft Mail Gateway to X.400, the message may not be sent
	successfully and the X.400 log file may contain entries similar to the
	following:
	
	- 10:31:24 ERROR 3 (RTS): Sending message 000011D4 failed
	
	- 10:31:24 ERROR 3 (RTS): Association aborted
	
	The gateway repeatedly attempts to send the message until the gateway is stopped
	and no other messages are sent during this time. Note that this problem only
	occurs when you are using version 3.2.11 or later of the X400gate.exe file, but
	earlier than version 3.2.21.
	
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
	  X400gate.exe   3.2.21
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
