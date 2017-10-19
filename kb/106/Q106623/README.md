---
layout: page
title: "Q106623: FFAPI: ERR MSG: Unknown Service or Bad Address"
permalink: /kb/106/Q106623/
---

## Q106623: FFAPI: ERR MSG: Unknown Service or Bad Address

	Article: Q106623
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail File Format API (FFAPI) "put" programs may return the following
	errors:
	
	  151-1-2 - Unknown service xxx
	  142-1-2 - Bad Address
	
	CAUSE
	=====
	
	File Format API (FFAPI) uses address type CSI (for Consumer Software Inc.) to
	denote a Microsoft Mail style address. For example, if a foreign directory
	synchronization message is being submitted to MS Mail Directory Synchronization
	from FFAPI, the "TO:" line could be one of the following:
	
	  TO:CSI:net/po/$system
	  TO:net/po/$system
	
	Inside the message body, however, address updates and the reqname field use
	address type PCM (for PC Mail) because this part of the message is processed by
	directory synchronization. For example:
	
	  [dirsync]
	  task=export
	  reqname=PCM:net/po
	  transactions=inbody
	
	  [dirsync-transactions]
	  1200 A Martin, Robert PCM:net/po/rmartin
	
	RESOLUTION
	==========
	
	Specify address type CSI or no address type at all whenever FFAPI has to
	interpret the address. Otherwise, use address type PCM.
	
	Additional query words: import errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
