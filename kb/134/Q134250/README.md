---
layout: page
title: "Q134250: No Compaq Netflex Drivers in Windows NT 3.51 for RISC Platforms"
permalink: /kb/134/Q134250/
---

## Q134250: No Compaq Netflex Drivers in Windows NT 3.51 for RISC Platforms

{% raw %}

	Article: Q134250
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When installing or upgrading Windows NT 3.51 on a RISC platform, the Compaq
	Netflex network interface card (NIC) is not recognized or the driver is not
	updated.
	
	NOTE: The Windows NT 3.5 driver does not work correctly on version 3.51.
	
	CAUSE
	=====
	
	Microsoft has removed support for Netflex NICs from Windows NT because Compaq
	only supports the Intel platform with the adapters.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	The Compaq Netflex NIC in RISC computers is supported by Microsoft. It is
	currently the only Token Ring adapter supporting promiscuous mode for RISC
	platforms. A driver for this NIC is planned for future versions of Windows NT.
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	NOTE: The files are located in the \SUPPORT\NDIS\NETFLEX directory on the Service
	Pack CD.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
