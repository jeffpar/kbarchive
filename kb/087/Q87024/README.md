---
layout: page
title: "Q87024: SMTP: Specific Hardware Needed by the Gateway"
permalink: kb/087/Q87024/
---

## Q87024: SMTP: Specific Hardware Needed by the Gateway

	Article: Q87024
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP requires a dedicated IBM PC, XT, AT, 80386 or
	80486 compatible computer to run the SMTP gateway software. This computer needs
	to have access to the Microsoft Mail database and a designated SMTP host. The
	Microsoft Mail database normally resides on a local-area network (LAN) server
	and access is achieved through a network adapter using the appropriate network
	shell/driver software (for example, Microsoft LAN Manager or Novell NetWare).
	The SMTP host is accessed by means of a network adapter and the use of a TCP/IP
	stack.
	
	Access to both the Mail database and the SMTP host can be achieved either through
	one adapter or through separate adapters. To use one adapter, the LAN
	shell/driver must coexist with the TCP/IP stack on this adapter. To verify
	whether this is possible, consult the installation manuals for these
	shell/driver software products. If two adapters are to be used, consult the
	installation manuals for the adapters as well.
	
	"System Requirements" section on pages 1 and 2 (in Chapter 1, "A Brief
	Introduction") of the "Microsoft Mail Gateway to SMTP Administrator's Guide"
	
	Network adapter manuals
	
	TCP/IP stack manual
	
	Network shell/driver manual
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
