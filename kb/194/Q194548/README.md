---
layout: page
title: "Q194548: X400: Message with Long Free-Form Name Cannot Be Delivered"
permalink: /kb/194/Q194548/
---

## Q194548: X400: Message with Long Free-Form Name Cannot Be Delivered

	Article: Q194548
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
	
	If the Microsoft Mail Gateway to X.400 sends a message with a free-form name
	that is longer than 64 characters to a foreign system, the message transfer
	agent (MTA) on the foreign system may indicate that it cannot deliver the
	message because the free-form name is invalid.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to X.400 normally uses the contents of the personal
	name (PN) field to create the free-form name. However, if the PN field is empty,
	the entire X.400 address is used to create the free-form name. When this occurs,
	it is possible for the free-form name to be longer than 64 characters.
	
	The NIST Stable Implementation Agreements for Open Systems Interconnection
	Protocols specify that the maximum length for free-form names is 64 characters.
	Therefore, some foreign systems are unable to process messages with free-form
	names that are longer than 64 characters.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
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
	  X400gate.exe   3.2.8
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	Additional query words: ffn
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
