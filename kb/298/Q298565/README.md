---
layout: page
title: "Q298565: XCON: Internet Mail Connector Does Not Start wit Event ID 4086"
permalink: /kb/298/Q298565/
---

## Q298565: XCON: Internet Mail Connector Does Not Start wit Event ID 4086

	Article: Q298565
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to manually start the Microsoft Exchange Internet Mail Connector
	(IMC) on a Microsoft Windows NT 4.0 computer, you may receive the following
	error message:
	
	  Services
	  Could not start the Microsoft Exchange Internet Mail Connector service on
	  \\<computername>.
	  Error 2140: An internal Windows NT error occurred.
	
	In addition, the following event ID message may be logged in the Application
	event log:
	
	  Event ID: 4086
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Initialization/Termination
	  Description: Unable to start the service because the configuration could not
	  be loaded from the Microsoft Exchange directory or Windows NT Registry.
	
	CAUSE
	=====
	
	This issue can occur if the value of the following registry key does not match
	the corresponding directory entry:
	
	  HKEY_LOCAL_MACHINE\
	  System\CurrentControlSet\Services\MSExchangeIMC\Parameters\SiteDN
	
	This issue can also occur if the wrong Organization or Site name was used when
	Exchange Server was reinstalled on the computer.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, edit the value of the registry key so that it matches the
	corresponding directory entry, or reinstall Exchange Server using the correct
	Organization and Site names.
	
	To edit the registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the SiteDN value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\
	  System\CurrentControlSet\Services\MSExchangeIMC\Parameters\SiteDN
	
	3. Check the value for this key. Make sure that the Organization [o=], Site
	  [ou=], and Server directory names [cn=] exactly match the properties of the
	  Organization, Site, and Server objects as they are displayed in the Exchange
	  Server Administrator program. To determine the names of these objects, follow
	  these steps:
	
	  a. Start the Administrator program.
	
	  b. In the left pane, click to expand the Organization object, click to expand
	     the Site object, and then click to expand the Server object.
	
	  c. On the File menu, click Properties. The directory name of each of these
	     objects must exactly match the corresponding attributes in the registry
	     setting that is described in step three.
	
	4. Quit Registry Editor.
	
	Additional query words: IMS, 4086, 2140
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
