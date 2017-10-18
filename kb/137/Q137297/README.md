---
layout: page
title: "Q137297: NetWare Clients Not Receiving Shared Network Distribution"
permalink: kb/137/Q137297/
---

## Q137297: NetWare Clients Not Receiving Shared Network Distribution

	Article: Q137297
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbusage kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A NetWare client computer running VLM that logs on to a NetWare 4.x server may
	not be able to receive any shared network applications, program groups or icons
	distributed by Systems Management Server.
	
	RESOLUTION
	==========
	
	To correct this problem, log in to the NetWare 4.x server in bindery emulation
	mode using the following syntax:
	
	  login <servername>/<username> /B
	
	If you do not use the /B parameter, you are logging into the NetWare server using
	NetWare Directory Services (NDS) context structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms PGC Program Group Control
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbusage kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
