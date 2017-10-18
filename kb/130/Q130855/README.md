---
layout: page
title: "Q130855: SNA Server Admin Backup Option Requires a File Extension"
permalink: kb/130/Q130855/
---

## Q130855: SNA Server Admin Backup Option Requires a File Extension

	Article: Q130855
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you back up an SNA Server configuration using SNA Server Admin, you must
	specify a file extension. If you do not specify a file extension, the following
	error message appears:
	
	  Error: 3859
	  The configuration filename is invalid.
	  Verify that a primary or Backup server is running in the domain you
	  are trying to administer.
	
	NOTE: This does not happen in SNA Server version 3.0 (Manager).
	
	WORKAROUND
	==========
	
	To work around this problem, specify a file extension when backing up your
	configuration file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	and 2.11. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
