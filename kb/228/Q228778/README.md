---
layout: page
title: "Q228778: How to Administer IIS 4.0 on a Different Domain through the MMC"
permalink: kb/228/Q228778/
---

## Q228778: How to Administer IIS 4.0 on a Different Domain through the MMC

	Article: Q228778
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect through the Microsoft Management Console (MMC) to an IIS
	4.0 computer that resides on a different domain, the following error message may
	occur:
	
	  Unable to Administer the <Specific IIS Service> Service on <Server
	  Name> because the following error occurred.
	  Access is Denied.
	
	CAUSE
	=====
	
	The user account that you are logged in as on the workstation or server from
	which you are running the MMC does not exist on the remote IIS 4.0 computer that
	you are trying to connect to. Therefore, you can not be authenticated as an
	administrator of the IIS 4.0 resources on the remote computer. If you cannot be
	authenticated as an administrator, then the MMC will deny you access to those
	resources.
	
	RESOLUTION
	==========
	
	The following resolution needs to be performed on the domain or server where the
	remote IIS 4.0 computer is located.
	
	Create a similar account and password on the other domain using User Manager for
	Domains. If the server is a standalone server, use User Manager on the server to
	create the user account.
	
	Perform these steps on the remote IIS 4.0 computer that you want to administer:
	
	1. If the IIS 4.0 computer is a standalone server, run User Manager. Otherwise
	  run User Manager for Domains.
	
	2. Create a user account with the same user name and password as the account
	  that you are logged on to on the local workstation or server.
	
	3. To be able to fully administer the remote IIS 4.0 computer, make this new
	  account a member of the Local Administrators Group on the remote IIS 4.0
	  computer.
	
	You can now run the MMC on your system and access and manage the IIS 4.0
	resources of the remote system.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
