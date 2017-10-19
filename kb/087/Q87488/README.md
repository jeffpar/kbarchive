---
layout: page
title: "Q87488: X400: Dist_umpdu Routing Failed Error Message"
permalink: /kb/087/Q87488/
---

## Q87488: X400: Dist_umpdu Routing Failed Error Message

	Article: Q87488
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This error condition may appear on the startup screen or in the log file when
	you start the Microsoft Mail Gateway to X.400:
	
	  R_ERROR: [MTA] <Dist_umpdu> Routing Failed; O/R name:
	  /c=ca/admd=MICROSOFT/pn=DOE.JOHN
	
	This error condition arises when the routing table has not been programmed
	correctly. When the gateway MTA receives a piece of mail, it must reference the
	ROUTE.CFG table in order to reference the MTA to forward the mail to. If the
	gateway cannot ascertain the correct MTA, the error condition is generated.
	
	To program the routing table, refer to the "Microsoft Mail Gateway to X.400
	Administrator's Guide" and configure the file ROUTE.CFG with an appropriate
	editor.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
