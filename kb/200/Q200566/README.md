---
layout: page
title: "Q200566: XFOR: FPNW Required on WinNT 3.51 using MS Mail and NWLINK"
permalink: /kb/200/Q200566/
---

## Q200566: XFOR: FPNW Required on WinNT 3.51 using MS Mail and NWLINK

{% raw %}

	Article: Q200566
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server 4.0 on Windows NT 3.51 Service Pack 4 (SP4), with
	NWLINK running frame types 802.2 and 802.3 with a unique internal ID number, may
	have difficulty setting up the Microsoft Mail Connector (MSMC). This may happen
	if the Microsoft Mail Postoffice is located on a Novell NetWare file server that
	is running frame type 802.2.
	
	RESOLUTION
	==========
	
	You need to install File and Print services for NetWare (FPNW) for the Microsoft
	Mail Connector to be able to connect to the Microsoft Mail Postoffice located on
	the Netware file server that is running frame type 802.2.
	
	STATUS
	======
	
	Clients connecting to the computer running Windows NT Server can connect with
	802.2 and 802.3, but the Windows NT Server computer can only see 802.3 servers.
	
	This behavior is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
