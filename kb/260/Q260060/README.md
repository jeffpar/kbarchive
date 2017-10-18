---
layout: page
title: "Q260060: XCON: Routing Calculation Complete, Registry Appears Corrupted"
permalink: kb/260/Q260060/
---

## Q260060: XCON: Routing Calculation Complete, Registry Appears Corrupted

	Article: Q260060
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Server system attendant performs a routing
	calculation, the following event may be logged in the Microsoft Windows NT Event
	Viewer application event log:
	
	  Event ID: 5000
	  Type: Error
	  Source: MSExchangeSA
	  Description: Recalculation of the routing table is complete. Result: The
	  message transfer agent (MTA) information in the Windows NT registry appears to
	  be corrupted.
	  Take steps to repair or restore the registry entries for the MTA.
	
	CAUSE
	=====
	
	This issue can occur if the message transfer agent (MTA) is missing a crucial
	registry entry that defines its own X.500 Distinguished Name (DN).
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Add the missing registry entry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/MSExchangeMTA/Parameters
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value
	
	  Value Name: X500DN
	  Data Type: REG_SZ:
	  Value:
	  /o=<organization>/ou=<site>/cn=Configuration/cn=Servers/cn=<server_name>/cn=Microsoft
	  MTA
	
	     where <organization> is your correct organization name, <site>
	     is your correct site name, and <server_name> is the correct name of
	     the Exchange Server computer.
	
	  d. Quit Registry Editor.
	
	2. Stop and start the Exchange Server MTA services.
	
	3. Recalculate your site routing:
	
	  a. In the Exchange Server Administrator program, click to expand the Site
	     object, click Configuration, and double-click the Site Addressing object
	     to open its properties.
	
	  b. Click the Routing tab, and then click Recalculate Routing. The following
	     message is displayed:
	
	  It will take several minutes for the new routing information to be replicated
	  across your site and then take effect.
	
	  c. Check the Event Viewer application event log and wait for the following
	     event to be logged:
	
	  Event ID: 5000
	  Source: MSExchangeSA
	  Type: Information
	  Category: General
	  Description: Recalculation of the routing table is Complete. Result: The
	  operation has completed successfully.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
