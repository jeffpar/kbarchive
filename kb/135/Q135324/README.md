---
layout: page
title: "Q135324: PPT7: Running a Peer-to-Peer Presentation Conference"
permalink: /kb/135/Q135324/
---

## Q135324: PPT7: Running a Peer-to-Peer Presentation Conference

{% raw %}

	Article: Q135324
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbnetwork kbualink97
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Presentation Conference was designed for use across networks using the
	TCP/IP protocol, it is also possible to do a Presentation Conference on a
	peer-to-peer basis using computers that are connected by cable.
	
	MORE INFORMATION
	================
	
	NOTE: Before you perform the following procedure, make sure both computers have
	a Direct Cable Connection and that TCP/IP is installed. For more information,
	please consult Windows Help or your printed documentation.
	
	To ensure that two or more computers can conference via cabling, manually modify
	each computer's TCP/IP protocol properties. To do this, follow these steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Configuration tab.
	
	4. From the list of installed network components, click TCP/IP, and then click
	  Properties.
	
	5. Click the IP Address tab and then do the following:
	  a. Click Specify An IP Address.
	
	  b. Provide one of the following IP Addresses:
	
	       - For presenter:    20  20  20  1
	       - For audience:     20  20  20  2
	
	     The value in the IP box identifies the IP address for your local computer
	     or, if more than one network card is installed, for the network adapter
	     card selected in the Adapter box.
	
	  c. Provide a Subnet Mask:
	
	       - For both presenter and audience: 255  255  255  0
	
	     NOTE: The value in the Subnet Mask box identifies the network membership
	     for the selected network adapter and its host ID. The system uses this
	     value to separate the IP address into host and network IDs.
	
	  d. Click OK two times.
	
	  e. If you are prompted to Restart Windows, click Yes.
	
	6. Disable the Windows NT domain network property. To do this, follow these
	  steps:
	  a. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  b. Double-click the Network icon.
	
	  c. Click the Configuration tab.
	
	  d. Choose Client for Microsoft Networks, and click Properties.
	
	  e. Clear the Log On To Windows NT domain check box.
	
	  f. Click OK.
	
	REFERENCES
	==========
	
	For more information about presentation conferencing, click the Index tab in
	PowerPoint Help, type the following text
	
	  "presentation conferences" (without the quotation marks)
	
	and then double-click the selected text. Select a topic from the list.
	
	Additional query words: 7.00 ppt95 tcpip
	
	======================================================================
	Keywords          : kbnetwork kbualink97 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
