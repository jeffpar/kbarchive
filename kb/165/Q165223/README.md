---
layout: page
title: "Q165223: File Transfer Does Not Convert DBCS Characters Properly"
permalink: /kb/165/Q165223/
---

## Q165223: File Transfer Does Not Convert DBCS Characters Properly

	Article: Q165223
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	3270 Applet file transfer does not convert DBCS characters between EBCDIC and
	ANSI. All DBCS characters are treated as SBCS characters.
	
	CAUSE
	=====
	
	The 3270 Applet does not support DBCS File Transfer.
	
	RESOLUTION
	==========
	
	The 3270 Applet for the Windows 95 and Windows NT clients now supports DBCS File
	transfer. The following file has been updated:
	
	  Ftp3270.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
