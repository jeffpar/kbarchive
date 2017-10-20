---
layout: page
title: "Q129693: X400: Err Msg: ERROR 4 (Converting X.400 Delivery Report)..."
permalink: /kb/129/Q129693/
---

## Q129693: X400: Err Msg: ERROR 4 (Converting X.400 Delivery Report)...

{% raw %}

	Article: Q129693
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
	
	Microsoft Mail Gateway to X.400 may display the following error:
	
	  18:00:40 ERROR 4 (converting X.400 delivery report): Decoding X.400 Message
	  18:00:41 ERROR 4 (transmitting message to local message store):
	  Translate to local form failed on message: 00000F7D
	
	CAUSE
	=====
	
	When a message is sent to an invalid address via the X.400 gateway (connected to
	a certain types of X.400 service providers), the non-delivery report is not
	returned to the originator, but instead is rejected and placed into the BAD
	directory.
	
	The X.400 gateway routine that is responsible for Delivery reports incorrectly
	counts the number of bytes already decoded. This occurs when an element with a
	definite length includes elements of indefinite length.
	
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
	  X400gate.exe   3.2.17
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	MORE INFORMATION
	================
	
	The following is a sample log from an X.400 gateway that is experiencing this
	problem:
	
	  18:00:40 Transmitting message to local message store: 00000F7D
	  18:00:40 ERROR 4 (converting X.400 delivery report): Decoding X.400 Message
	  18:00:41 ERROR 4 (transmitting message to local message store):
	  Translate to local form failed on message: 00000F7D
	  Copying to 'bad' directory: W:x400/outgoing/LSAMTA/00000F7D
	  18:00:42 WARNING 4 (transmitting message): Failed transmitting
	  message; MTA: LSAMTA
	  pointer count: 513; byte count: 13944
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
