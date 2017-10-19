---
layout: page
title: "Q247429: Unable to Open the Primary SNA Server Configuration File"
permalink: /kb/247/Q247429/
---

## Q247429: Unable to Open the Primary SNA Server Configuration File

	Article: Q247429
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start SNA Server Manager remotely from a computer in a non-trusted
	domain, SNA Server Manager starts with the following error message:
	
	  Unable to open the Primary SNA Server configuration file. Okay to attempt
	  opening a backup SNA Server in Read-only mode?
	
	In the Application event log, event ID 705 is posted with the following
	information:
	
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security. Access denied
	  ---Error Code : 43
	
	CAUSE
	=====
	
	The problem is caused by a user ID or password mismatch between the non-trusted
	domain computer and the primary SNA Server computer's local account.
	
	RESOLUTION
	==========
	
	One solution is to create a trust relationship and add the remote user account
	to the primary SNA Server computer's local administrators group. Another
	solution is to add the user ID and password from the non-trusted domain to the
	primary SNA Server computer's local administrators group.
	
	MORE INFORMATION
	================
	
	The SNA Server configuration file (Com.cfg) is located on the primary SNA Server
	computer in the SNA\System\Config directory. By default, the Com.cfg file is
	managed by the primary SNA Server computer's local administrators group. (This
	can be reconfigured in the SNA Server Manager Subdomain properties by selecting
	Permissions on the Security tab.)
	
	In order for a non-trusted domain user to be able to remotely run SNA Server
	Manager, the login user ID and password must be added to the local
	administrators group on the primary SNA Server computer. Then the credentials
	are validated through Windows NT Server Pass-through authentication.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q247322 Error Reading Configuration File When Using the 3270 Applet
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
