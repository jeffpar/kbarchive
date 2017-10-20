---
layout: page
title: "Q138832: How to Enable SNA Server IPX/SPX Clients to Use SPXII"
permalink: /kb/138/Q138832/
---

## Q138832: How to Enable SNA Server IPX/SPX Clients to Use SPXII

{% raw %}

	Article: Q138832
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	One of the protocols that the SNA Server client server interface uses is native
	IPX/SPX. SNA Server can be configured to talk over the improved SPXII protocol.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <SNAROOT>\SYSTEM\SNANW.DLL to correct this
	problem.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	An improved version of SPX is SPXII. SPXII has the following advantages:
	
	- SPXII can use the maximum packet size allowable by the network type. On an
	  Ethernet LAN, for example, an SPX II packet can be a full 1518 bytes.
	  Standard SPX is only capable of sending 576 byte packets.
	
	- SPXII can use "windowing" where multiple packets can be outstanding at one
	  time. It uses negative acknowledgments (NAKs) to indicate that some packets
	  were not received. Standard SPX allows only one packet to be outstanding at
	  any time.
	
	To enable the newer SPXII protocol to work with SNA Server, add the following
	subkey to the registry:
	
	  \Hkey_Local_machine
	    \System
	      \CurrentControlSet
	        \Services
	          \SnaBase
	            \Parameters
	               \SnaSpx
	
	Then, add the following value:
	
	  SPXII:REG_SZ:yes
	
	
	SPXII has been supported since SNA Server 2.1 with the addition of the registry
	entry, but only on Windows NT 3.5/3.51, not on Windows NT 3.1.
	
	Client support is as follows:
	
	- Windows 95: Enable the same registry entry as above.
	
	- Windows NT: Enable the same registry entry as above.
	
	- Windows 3.x and MS-DOS: SPX-II is not Supported on these platforms.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
