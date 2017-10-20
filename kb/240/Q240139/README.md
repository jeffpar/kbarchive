---
layout: page
title: "Q240139: Stop 0x0000000A with HP Netserver and HP 10/100 Ethernet Adapter"
permalink: /kb/240/Q240139/
---

## Q240139: Stop 0x0000000A with HP Netserver and HP 10/100 Ethernet Adapter

{% raw %}

	Article: Q240139
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Hewlett-Packard (HP) 10/100TX PCI ethernet adapter in
	conjunction with the Hptxnt.sys driver on your Hewlett-Packard NetServer-based
	computer running Windows NT 4.0 with Service Pack 3, you may receive a STOP
	error message similar to the message listed below on a blue screen:
	
	  STOP 0x0000000A (0x24100104, 0x00000002, 0x00000000, 0xf236a279)
	  IRQ_NOTLESS_OR_EQUAL
	
	CAUSE
	=====
	
	This issue can occur because there is a conflict between the updated drivers
	included with Windows NT 4.0 Service Pack 3 and the Network Driver Interface
	Specification (NDIS) network adapter driver supplied by HP.
	
	RESOLUTION
	==========
	
	To correct this issue, install the latest Ndis.sys and Hptxnt.sys drivers from
	HP. You may want to contact Hewlett-Packard Technical Support for updated
	versions of these files at (650)-857-1501 or visit their Web site at:
	
	  http://www.hp.com/ghp/services.html (http://www.hp.com/ghp/services.html)
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
