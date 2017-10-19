---
layout: page
title: "Q132464: X400: Err Msg: Error 12 (Restarting MTA):..."
permalink: /kb/132/Q132464/
---

## Q132464: X400: Err Msg: Error 12 (Restarting MTA):...

	Article: Q132464
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.x of Microsoft Mail Gateway to X.400 may not be able to successfully
	restart the gateway when you use a Restart Interval greater than zero. The
	Restart Interval, as documented on page 89 of the Microsoft Mail Gateway to
	X.400 "Administrator's Guide," determines how frequently the X400GATE program
	automatically stops and restarts. The following error is displayed when the
	gateway attempts to restart and fails:
	
	  ERROR 12 (restarting MTA): execv (N:\mailexe\x400gate.exe, argv) failed
	
	The gateway may also produce an error:
	
	  ENOMEM (not enough memory)
	
	CAUSE
	=====
	
	A message to a large number of recipients was sent prior to a restart interval.
	This caused the gateway to run out of memory; thus, it was unable to start.
	
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
	  X400gate.exe   3.2.16
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	versions 3.0 and 3.2.
	
	MORE INFORMATION
	================
	
	The memory is now compacted before restarting the gateway.
	
	Restart intervals are configured in the x400adm program, and instruct the gateway
	how often to stop and restart automatically.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
