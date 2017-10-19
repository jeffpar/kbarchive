---
layout: page
title: "Q145599: Network Software Installation Problems With Xircom Netaccess"
permalink: /kb/145/Q145599/
---

## Q145599: Network Software Installation Problems With Xircom Netaccess

	Article: Q145599
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Xircom Netaccess Multiport modem in Windows NT, you may
	have problems installing other network software or components (for example:
	TCP/IP or related components, such as DHCP or WINS) that require protocol
	binding with your network adapter.
	
	CAUSE
	=====
	
	The Xircom Netaccess Multiport modem card provides multiple modem access that
	you can use with the Remote Access Service (RAS). This card is not a network
	adapter, but it appears as a network adapter when you network bindings in
	Control Panel Network.
	
	RESOLUTION
	==========
	
	The Xircom Netaccess Multiport modem adapter is not on Windows NT Hardware
	Compatibility List (HCL). Microsoft does not support this adapter or the driver
	provided by the manufacturer.
	
	To work around this problem:
	
	1. In Control Panel Network, click Bindings.
	
	2. In the "Show Bindings for" list, select the Xircom Netaccess adapter.
	
	3. Select the protocol that is bound with the Xircom Netaccess Multiport modem
	  and click Disable. Do not disable the binding with Ndis-Wan.
	
	4. Click OK and quit Network Settings.
	
	5. Shut down and restart Windows NT.
	
	For more information, contact Xircom Technical Support at (805) 376-9200, or you
	can send an electronic mail (e-mail) to the following:
	
	  cs@xircom.com
	
	The third-party products discussed here are manufactured by Xircom, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
