---
layout: page
title: "Q115446: X400: X400GATE.EXE Hangs on 74+ Characters in Subject Line"
permalink: /kb/115/Q115446/
---

## Q115446: X400: X400GATE.EXE Hangs on 74+ Characters in Subject Line

{% raw %}

	Article: Q115446
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
	
	The X400GATE.EXE hangs when too many characters (74 or more) are in the subject
	line of the outgoing message. The same message coming into the system does not
	hang the gateway.
	
	The gateway logs the messages before hanging with these errors (notice the
	negative byte count):
	
	  Extracting message from local message store: 0000xxxx
	  ERROR 3 (creating PO1 originator address): Malformed address: type <0>
	  ERROR 3 (converting PC mail message to X.400): No Originator Found
	  ERROR 3 (converting PC mail message to X.400): Local from to x400 con...
	
	  Pointer count: 256; byte count: -117212
	
	Note: the SUBJECT length for this example was 170 characters.
	
	CAUSE
	=====
	
	Field length limitations cause this problem.
	
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
	  X400gate.exe   3.2.2
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	This affects messages coming in from Profs that you reply to. They come in fine
	but hang the gateway once you reply to them. If you forward the message it also
	works fine and does not hang the gateway.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	STEPS TO REPRODUCE BEHAVIOR
	---------------------------
	
	1. Set up the X.400 gateway.
	
	2. Create a message in the Windows client. (MS-DOS handles the subject
	  differently and does not hang the gateway.) Send the message to an X.400
	  user.
	
	3. Run the gateway. Notice that the gateway PC hangs when it tries to send the
	  message.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
