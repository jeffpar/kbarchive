---
layout: page
title: "Q231303: XFOR: New Internet Mail Service Feature for Setting Size Limit"
permalink: kb/231/Q231303/
---

## Q231303: XFOR: New Internet Mail Service Feature for Setting Size Limit

	Article: Q231303
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55sp1 exc55sp2 EXC55SP3Fea
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Service enables setting the same Inbound and Outbound size
	restrictions.
	
	The current behavior is by design. Currently, the product enables for a size
	limit to be set for the Exchange Server Internet Mail Service that is used for
	both incoming and outgoing messages. A new feature was added to enable
	administrators to control the size of incoming and outgoing messages
	independently.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for Exchange Server version
	5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+-------------------------+
	| File name    | Version  | 
	+-------------------------+
	| Msexcimc.exe | 5.5.2591 | 
	+-------------------------+
	
	This feature was first included in Exchange Server 5.5 Service Pack 3.
	
	
	The combination of two new registry settings, and an update to the Exchange
	Server Internet Mail Server, may implement the new feature.
	
	The registry setting used to re-map the attribute is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	Value: OutboundSizeLimit REG_DWORD and Value: InboundSizeLimit REG_DWORD.
	
	These values are set in bytes, which is not the same way the "Message Size" is
	set in the Exchange Server Administrator program. The Exchange Server
	Administrator program "Message Size" is set in (K).
	
	Please note that the new feature should not be used in coordination with the
	previous limit settings found on the General tab of the Internet Mail Service
	Property page of the Administrator program. Before you implement this feature,
	set the Message Size option to No Limit. The registry settings should take
	precedence, but in some cases, the size limitation may not be applied as
	expected. If only one limit is being used for either Outbound or Inbound, it is
	recommended that you create both registry values with a value. A setting of 0
	indicates no limit. The maximum registry value allowed is 4,294,967,295.
	
	Additional query words: attachment inbound outbound large
	
	======================================================================
	Keywords          : kbFEA exc55sp1 exc55sp2 EXC55SP3Fea 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
