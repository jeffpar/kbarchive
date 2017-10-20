---
layout: page
title: "Q189009: DHCP Reservations Show an Expiration Date"
permalink: /kb/189/Q189009/
---

## Q189009: DHCP Reservations Show an Expiration Date

{% raw %}

	Article: Q189009
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a DHCP database becomes corrupted, it may be necessary to rebuild the
	database from the registry.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q173396
	  TITLE : How to Restore a Corrupted DHCP Database File
	
	After doing the reconcile, when you view the properties for a client lease, the
	computer name will be listed as the IP address of the lease and an arbitrary
	hexadecimal value will be listed as the client identifier. These will be
	replaced with the appropriate information as the clients renew their leases.
	
	You will also notice that reservations now have a lease expiration. Normally,
	reservations should have "Infinite" for Lease Expires: under Client Properties
	(or N/A if the client has never actually leased the reserved IP address).
	
	The lease expiration date will also be reseated back to Infinite when the client
	renews its IP address.
	
	There is one scenario when this does not happen.
	
	If you go to Active Leases, double-click the reservation and select OK to exit,
	the following message will be displayed:
	
	  The Unique Identifier you have entered may not be correct. Do you want to use
	  this Identifier anyway?
	
	If you select Yes, the client will NOT get its reserved IP address. Instead it
	will get the next available IP address from the scope.
	
	To prevent clients from recieving IP addresses before the DHCP server completes
	the reconciliation process, you must take the DHCP server off the network prior
	to rebuilding the database. If you leave the DHCP server on the network, this
	behavior may occur.
	
	RESOLUTION
	==========
	
	This problem can be fixed by going back to the reservation before the client
	renews and replacing the arbitrary hexadecimal value listed as the client Unique
	Identifier with the media access control address for the client.
	
	If you try to change the hexadecimal value after the client has already renewed
	and received a different IP address, you will get the following error:
	
	  An error occurred while accessing the DHCP database; look at the DHCP server
	  event log for more information
	
	You will also receive the following message in Event Viewer:
	
	  Event ID   : 1014
	  Source     : JET
	  Description: The JET Database call returned the following Error: -1605.
	
	This happens because the client media access control address is already in the
	database.
	
	At this point, you can release the IP address from the client side (Ipconfig.exe
	/RELEASE on Windows NT or Winipcfg.exe and select Release on Windows 95), and
	enter the media access control address to the reservation again. The client will
	be able to lease its reservation now.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Version 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
