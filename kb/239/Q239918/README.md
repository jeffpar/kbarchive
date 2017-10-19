---
layout: page
title: "Q239918: NDIS_STATUS_RESET_END Message May Not Be Processed Correctly"
permalink: /kb/239/Q239918/
---

## Q239918: NDIS_STATUS_RESET_END Message May Not Be Processed Correctly

	Article: Q239918
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an IBM Token Ring PCI "Wake-on-LAN" network adapter, the Data
	Link Control protocol (DLC) may receive an Adapter Reset message from Ndis.vxd
	and log Reset_Start in the DLCTRC log file. However, once the reset occurs, DLC
	cannot reestablish a binding to the adapter driver, and all DLC traffic stops
	from the computer. Once DLC traffic stops, all DLC programs may time out. Other
	protocols, including TCP/IP, NetBEUI, and IPX continue to function on the
	network as normal, and resource connections can still be established. The
	computer must be rebooted to cause DLC32 to function again.
	
	CAUSE
	=====
	
	Event processing within the DLC protocol can become deadlocked because of a
	timing issue with NDIS_STATUS_RESET_START and NDIS_STATUS_RESET_END messages.
	Long delays between the receipt of the NDIS_STATUS_RESET_START and
	NDIS_STATUS_RESET_END messages cause the event queue within DLC to stop
	processing messages.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time      Version     Size     File name   Platform
	  ---------------------------------------------------------------
	  7/14/99   5:05:59pm 4.10.1999   237,474  Dlc.vxd     Windows 95
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	There is also an updated driver from IBM that in conjunction with this fix
	allows this particular network adapter to function properly. This new driver is
	written to the NDIS 4.0 specification.
	
	Additional query words: hang w95qfe
	
	======================================================================
	Keywords          : kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
