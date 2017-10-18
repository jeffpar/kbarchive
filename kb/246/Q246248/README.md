---
layout: page
title: "Q246248: XWEB: Diagnostic Logging Levels for OWA Defined in Admin.exe"
permalink: kb/246/Q246248/
---

## Q246248: XWEB: Diagnostic Logging Levels for OWA Defined in Admin.exe

	Article: Q246248
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You may want to enable logging on a server to gather diagnostics information for
	troubleshooting purposes. This article describes the diagnostics logging
	settings that allow monitoring of Outlook Web Access (OWA) activity.
	
	MORE INFORMATION
	================
	
	To monitor OWA client connections to the directory service and the information
	store on the Exchange Server computer:
	
	1. Start the Microsoft Exchange Server Administrator progam.
	
	2. Click the server you want to monitor, and on the File menu, click Properties.
	
	3. Click the Diagnostics Logging tab.
	
	4. Click MSExchangeDS in the left pane, and in the right pane, set Security,
	  ExDS Interface, MAPI Interface, Directory Access, LDAP Interface, and Name
	  Resolution to Maximum.
	
	5. Click the plus sign (+) by MSExchangeIS in the left pane, click System, and
	  then in right pane, set Connections and General to Maximum.
	
	6. Under MSExchangeIS, click Private, and set General and Logons to Maximum.
	
	If you look at one logon through OWA, you see three MAPI Interface events from
	the directory service, then a Connections event to the information store, then a
	Logons event, again to the information store, and then another Connections event
	to the information store.
	
	The following events are recorded in the application log in Event Viewer if the
	above listed diagnostic logging is enabled. Several events such as 1136, 1137,
	and 1170 may appear multiple times during one user's logon.
	
	  Event ID 1170 MSExchangeDS MAPI Interface
	  A client process connected to the directory with remote procedure call (RPC)
	  string binding ncalrpc:SERVER1[MSExchangeDS_LPC].
	
	  Event ID 1136 MSExchangeDS MAPI Interface
	  Internal event: Function NspiBind entered
	
	  Event ID 1170 MSExchangeDS MAPI Interface
	  A client process connected to the directory with remote procedure call (RPC)
	  string binding nvalrpc:SERVER1(MSExchangeDS_LPC)
	
	  Event ID 1136 MSExchangeDS ExDS Interface
	  Internal event: Function ds_read entered
	
	  Event ID 1137 MSExchangeDS ExDS Interface
	  Internal event: Function ds_read completed with an elapsed time of 0.
	
	  Event ID 1007 MSExchangeIS Connections
	  Kermitdom\administrator connected as
	  /o=Microsoft/ou=server1/cn=Recipients/cn=administrator
	
	  Event ID 1009 MSExchangeIS Private Logons
	  Kermitdom\administrator logged on as
	  /o=Microsoft/ou=server1/cn=Recipients/cn=administrator
	
	If you have more than one OWA server, you can modify the RPC Binding order in the
	registry to allow logging to show the binding of the OWA server's IP address to
	the directory service port:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, type Regedit in the Open box, and then click OK.
	
	2. Locate the following registry key.
	
	  HKEY_Local_Machine\Software\Microsoft\Exchange\Exchange Provider
	
	3. Click RPC_Binding_Order, and then remove NCALRPC from the binding order value
	  in the right pane.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
