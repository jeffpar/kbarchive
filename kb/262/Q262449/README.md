---
layout: page
title: "Q262449: Err Msg: Unable to Locate Windows NT Account Synchronization"
permalink: /kb/262/Q262449/
---

## Q262449: Err Msg: Unable to Locate Windows NT Account Synchronization

	Article: Q262449
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Host Integration Server 2000 end-user client is installed on a computer
	running Windows 95 or Windows 98, the following error message may occur when you
	open the Host Account Configuration tool (UDConfig.exe):
	
	  Unable to locate Windows NT Account Synchronization Service in the target
	  Windows NT domain. To browse other domains, use the "Select Domain" option of
	  the "File" menu.
	
	CAUSE
	=====
	
	The end-user UDConfig client cannot locate the Windows NT or Windows 2000 domain
	name that contains the master database where the Host Account Cache (HAC)
	resides.
	
	RESOLUTION
	==========
	
	Change the Windows 95 or Windows 98 workgroup name to match the Windows NT or
	Windows 2000 domain name.
	
	MORE INFORMATION
	================
	
	When you open the UDConfig tool, it tries to find the location of the master
	database. This is the Windows NT or Windows 2000 domain name. When the end-user
	client is installed on a computer running Windows 95 or Windows 98, this
	information is pulled from the workgroup name that is configured on that
	computer.
	
	For additional information regarding this error message, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q252778 SNA Win9x Host Account Manager Unable to Locate MDB Domain
	
	Additional query words: his2000 hac sso
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
