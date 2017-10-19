---
layout: page
title: "Q191696: Upgrading Host Security Files May Cause Corrupted Database"
permalink: /kb/191/Q191696/
---

## Q191696: Upgrading Host Security Files May Cause Corrupted Database

	Article: Q191696
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upgrading SNA Server 4.0 Service Pack 1 Host Security files (from the HOSTSEC
	directory) may cause corruption to the Host Account Database (DBase.dbs). When
	the database becomes corrupted, it may prevent users from using the Single
	Sign-On (SSO) feature, also known as automatic logon. Other symptoms may be that
	the Host Account Cache service (SNADATABASE) stops responding to RPC requests.
	
	The application log of the event viewer shows the following two events coming
	from source SNA Host Security, after SP1 is upgraded.
	
	  Event ID 1247 - Unable to decrypt data Supplied code 0x80090005
	
	  Event ID 1283 - Database has been corrupted - contact system support
	  Supplied code 0x1
	
	CAUSE
	=====
	
	The cause is not currently known but is under investigation.
	
	WORKAROUND
	==========
	
	To work around this problem, you can remove and reinstall the Host Security
	components. Because a removal is required, the Host Security Database must be
	repopulated again, either by using the Host Account Manager (UDConfig.exe) or by
	using the command-line utility SNACFG.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
