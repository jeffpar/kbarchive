---
layout: page
title: "Q258140: XFOR: Error Message Occurs When You Enable a User to Relay"
permalink: kb/258/Q258140/
---

## Q258140: XFOR: Error Message Occurs When You Enable a User to Relay

	Article: Q258140
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you enable an individual user to use the relay functionality, the relay
	procedure fails, and the user receives the following error message:
	
	  550 Relaying Is Prohibited
	
	CAUSE
	=====
	
	This issue can occur when you enter the subnet mask as (or if the mask is set
	to) 255.0.0.0, 255.255.0.0, 255.255.255.0 or 255.255.255.255. If you click the
	Routing Restrictions button in Exchange Server Service Pack 2 (SP2) or later,
	you must enter a subnet mask.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use either of the following methods:
	
	- Method One:
	
	  1. Open the Internet Mail Service properties, click the Routing tab, and then
	     click Routing Restrictions.
	
	  2. Click to select the "Hosts and clients with these IP addresses" check box.
	
	  3. Click Add, and then enter the user's IP address (for example,
	     123.123.123.123) in the IP address box.
	
	  4. In the Mask box, set the subnet mask to 255.255.255.<x>, where
	     <x> is the last octet of the user's IP address (for example,
	     255.255.255.123), and then click OK.
	
	  5. Use the Services tool in Control Panel to stop and restart the Internet
	     Mail Service.
	
	- Method Two:
	
	  1. Open the Internet Mail Service properties, click the Routing tab, and then
	     click Routing Restrictions.
	
	  2. Click to select the "Hosts and clients with these IP addresses" check box.
	
	  3. Click Add, type the user's IP address in the IP Address box, type any
	     subnet mask in the Mask box, and then click OK.
	
	  4. Use the Services tool in Control Panel to stop and restart the Internet
	     Mail Service.
	
	  5. Start Registry Editor (Regedt.32.exe).
	
	  6. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	  7. Double-click the RelayAllowList value, delete the subnet mask and
	     semicolon, (leaving only the user's IP address), and then click OK.
	
	NOTE: After you finish this procedure, if you open the Internet Mail Service
	properties, click the Routing tab, and then click Routing Restrictions, the Mask
	box is blank. To apply these changes, use the Services tool in Control Panel to
	stop and restart the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	For additional information on routing restrictions with Exchange Server 5.5,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q196626 XFOR: Restricting Routing in the Internet Mail Service
	
	Additional query words: access denied error 0x800CCC79 0x800CCC78
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : :5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
