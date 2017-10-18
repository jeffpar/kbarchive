---
layout: page
title: "Q317140: Event ID 3870, 7023, 2504 and 7002 Messages Are Logged"
permalink: kb/317/Q317140/
---

## Q317140: Event ID 3870, 7023, 2504 and 7002 Messages Are Logged

	Article: Q317140
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): ocsso
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart a Windows NT-based computer, the following event ID messages
	may be logged in the System log in Event Viewer:
	
	  Event ID: 3870
	  Source: Workstation
	  <ComputerName> is not a valid computer name.
	
	  -and-
	
	  Event ID: 7023
	  Source: Service Control Manager Error
	  The Workstation service terminated with the following error:
	  A duplicate name exists on the network.
	
	  -and-
	
	  Event ID: 2504
	  Source: Server
	  Description: The server could not bind to the transport
	  Device\Netbt_<AdapterName>
	
	  -and-
	
	  Event ID: 7002
	  Source: Service Control Manager
	  The TCP/IP NetBIOS Helper service depends on the NetworkProvider group and no
	  member of this group started.
	
	  -and-
	
	  Event ID: 7009
	  Source: Service Control Manager
	  Description: Timeout (120000 milliseconds) waiting for service to connect.
	
	  -and-
	
	  Event ID: 7001
	  Source: Service Control Manager
	  The Messenger service depends on the Workstation service which failed to start
	  because of the following error:
	  A duplicate name exists on the network.
	
	  -and-
	
	  Event ID: 7001
	  Source: Service Control Manager Error
	  The Alerter service depends on the Workstation service which failed to start
	  because of the following error:
	  A duplicate name exists on the network.
	
	  -and-
	
	  Event ID: 7001
	  Source: Service Control Manager Error
	  The Computer Browser service depends on the Workstation service, which failed
	  to start because of the following error:
	  A duplicate name exists on the network.
	
	CAUSE
	=====
	
	This behavior can occur if any one of the following conditions is true:
	
	- The computer has two network adapters and both network adapters attempt to
	  register the same NetBIOS name with the Microsoft Windows Internet Naming
	  Service (WINS).
	
	  -or-
	
	- A static entry exists in the WINS database.
	
	  -or-
	
	- There is a problem with a hardware component of the network, for example, a
	  switch or router.
	
	RESOLUTION
	==========
	
	To troubleshoot and resolve this issue:
	
	1. If your computer is multiple-homed, disable the NetBEUI protocol that is
	  bound to one of the network adapters.
	
	  For additional information about how to disable the NetBEUI protocol, click
	  the article numbers below to view the articles in the Microsoft Knowledge
	  Base:
	
	  Q197157 Workstation Service Does Not Start
	
	  Q103470 NetBIOS Name Conflicts When NetBEUI Used on Multiple NICs
	
	  If you continue to receive the event ID messages that are described in the
	  "Symptoms" section of this article after you disable the NetBEUI protocol, go
	  to step 2.
	
	2. Determine if the WINS database contains static mappings.
	
	  If a static entry exists, remove it, and then restart the computer. For
	  additional information about how to remove static WINS entries, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q177140 How to Remove Static WINS Entries from All WINS Servers
	
	  If you continue to receive the event ID messages that are described in the
	  "Symptoms" section of this article after you remove the static WINS entries,
	  go to step 3.
	
	3. Disconnect the network cable from the computer, and then restart the
	  computer.
	
	  If you no longer receive the event ID messages that are described in the
	  "Symptoms" section of this article, investigate possible network issues. For
	  example, remove or disable the network components one by one to isolate the
	  cause of this behavior, and then test to determine whether the event ID
	  messages occur again.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot the error messages that are
	described in the 'Symptoms' section of this article, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q166184 Event ID 3870 Not a Valid Computer Name
	
	For additional information about how to configure WINS in Windows NT, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q185786 Recommended Practices for WINS
	
	Additional query words:
	
	======================================================================
	Keywords          : ocsso 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
