---
layout: page
title: "Q128438: SMTP: Err Msg: Sockets Error: the Value for Key Host Name..."
permalink: kb/128/Q128438/
---

## Q128438: SMTP: Err Msg: Sockets Error: the Value for Key Host Name...

	Article: Q128438
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you try to load a sockets application:
	
	  Sockets error: the value for Key host name not found in TCPUTILS.INI file by
	  sockets
	
	CAUSE
	=====
	
	Some versions of Microsoft TCPIP software do not properly build the TCPUTILS.INI
	file. The [TCPGLOBAL] section should have something similar to the line
	hostname=lmhost entry.
	
	RESOLUTION
	==========
	
	Manually edit the TCPUTIL.INI file, and add the hostname entry to the TCPGLOBAL
	section.
	
	NOTE: The hostname should be the machine name.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
