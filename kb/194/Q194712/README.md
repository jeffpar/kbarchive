---
layout: page
title: "Q194712: X400: Cannot Start Gateway if PO Has Large Serial Number"
permalink: kb/194/Q194712/
---

## Q194712: X400: Cannot Start Gateway if PO Has Large Serial Number

	Article: Q194712
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a Microsoft Mail for PC Networks postoffice with a serial number
	of <xx>-<yyyyy>, where <yyyyy> is greater than 64,536 (for
	example, 32-64537), and then attempt to start the Microsoft Mail Gateway to
	X.400 so that the gateway processes messages from the Microsoft Mail (PC)
	postoffice, the gateway may not start successfully.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to X.400 does not process serial numbers in this
	range properly.
	
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
	  X400gate.exe   3.2.1
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
