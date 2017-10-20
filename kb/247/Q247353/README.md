---
layout: page
title: "Q247353: DLC Connections Fail to Restart after Outage"
permalink: /kb/247/Q247353/
---

## Q247353: DLC Connections Fail to Restart after Outage

{% raw %}

	Article: Q247353
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a network problem causes an SNA Server DLC 802.2 connection to fail (causing
	event ID 23 to be logged by SNA Server), the connection should automatically
	recover to an "Active" state after the problems are gone. However, under certain
	conditions, the connection may not recover, and the status may stay at "Pending"
	when you use one of the following token ring adapters:
	
	   - IBM 16/4 Token-Ring PCI Adapter 2
	
	- IBM 16/4 Token-Ring PCI Adapter
	
	- Compaq Netelligent Token-Ring Adapter
	
	- Compaq Netflex Token-Ring Adapter
	
	CAUSE
	=====
	
	This problem is caused by the IBM token ring driver Ibmtrp.sys, dated 11/4/96
	(version 1.08). This problem is described on the IBM Web site; for information,
	go to the following location:
	
	  http://app-01.www.ibm.com/support/support_doc/nhd/s0002/body/13554.shtml
	
	The Ibmtrp.sys driver is used for the following network adapters:
	
	   - IBM 16/4 Token-Ring PCI Adapter 2
	
	- IBM 16/4 Token-Ring PCI Adapter
	
	- Compaq Netelligent Token-Ring Adapter
	
	Microsoft is not aware of a fix for the Compaq Netflex Token-Ring Adapter, which
	uses a different driver.
	
	Note that Microsoft is not able to confirm that a switch is failing when this
	problem occurs. The DLC connections drop (indicated by the SNA Server Event 23
	Outage xAF errors), and at the time of the failures, network errors are
	occurring (Token Ring soft errors). Updating the driver allows the connections
	to recover after an outage.
	
	RESOLUTION
	==========
	
	Update the token ring driver (Ibmtrp.sys) to version 2.22, dated 7/21/97 or
	later.
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	The outage that initiated the problem is logged in the Application event log as
	event ID 23 with an outage code of 0xAF. This event is almost always an
	indicator of a network problem.
	
	The token ring re-insertion problem is not specific to DLC connectivity. In a lab
	environment, the problem was recreated with the PING utility over IP.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
