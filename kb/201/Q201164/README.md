---
layout: page
title: "Q201164: XADM:  Knowledge Consistency Checker Returns Events 2024, 1124"
permalink: /kb/201/Q201164/
---

## Q201164: XADM:  Knowledge Consistency Checker Returns Events 2024, 1124

	Article: Q201164
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Knowledge Consistency Checker, one of the following pop-up
	error messages may be displayed:
	
	  Knowledge consistency has been successfully verified.
	
	  An internal error has occurred during directory replication. Stop and then
	  restart the directory service. Then try directory replication again.
	
	  Microsoft Exchange Administrator ID no: c1030b0d
	
	  -or-
	
	  Knowledge consistency has been successfully verified.
	
	  The Knowledge Consistency Checker could not connect to the local directory
	  server to start the check. Verify that the directory service is started.
	
	  Microsoft Exchange Administrator ID no: c1030b1f
	
	The following events may also be logged in the Windows NT Application Event log:
	
	  Event ID: 1124
	  Source: MSExchangeDS
	  Type: Error
	  Category: Knowledge Consistency
	  Text: The consistency checker encountered an
	  internal error and can't continue checking the
	  consistency of this directory. Stop and restart
	  this Microsoft Exchange Server computer.
	
	  Event ID: 2024
	  Source: MSExchangeAdmin
	  Type: Warning
	  Category: Replication Configuration
	  Text: An error was encountered by the knowledge
	  consistency checker on server '<server name>'.
	  <<0xc1030b0d - An internal error has occurred during
	  directory replication. Stop and then restart the
	  directory service. Then try directory replication again.>>
	
	CAUSE
	=====
	
	The following registry entries do not contain the correct Organization, Site, or
	Server Name, respectively:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	  \Parameters\Enterprise
	
	  NOTE: The above registry key is all one path; it has been wrapped for
	  readablilty.
	
	  -or-
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	  \Parameters\Site
	
	  NOTE: The above registry key is all one path; it has been wrapped for
	  readablilty.
	
	  -or-
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	  \Parameters\Server
	
	NOTE: The above registry key is all one path; it has been wrapped for
	readablilty.
	
	WORKAROUND
	==========
	
	To work around this behavior, change the registry entries to match the correct
	Organization, Site, and Server Names specified in the Microsoft Exchange
	Directory and restart the server. To verify the correct Directory Name for the
	Organization, Site, and Server, run the Microsoft Exchange Administrator program
	in Raw Mode and note the "Directory-Name" attribute in Raw Properties for each
	of the three objects.
	
	MORE INFORMATION
	================
	
	This behavior can occur if a server is reinstalled with an incorrect
	Organization, Site, or Server name, and only the following registry entry has
	been corrected rather than performing a reinstallation of the server:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\X500DN
	
	The System Attendant may still start, and this behavior may not be otherwise
	noticeable.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
