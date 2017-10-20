---
layout: page
title: "Q259730: XFOR: Use Imsext.dll If Internet Mail Service Used as Relay Host"
permalink: /kb/259/Q259730/
---

## Q259730: XFOR: Use Imsext.dll If Internet Mail Service Used as Relay Host

{% raw %}

	Article: Q259730
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Imsext.dll file that is included in the Microsoft BackOffice Resource Kit
	enables you to prepend or append text to an Internet message.
	
	MORE INFORMATION
	================
	
	If you use the Exchange Server Internet Mail Service as a relay host, you can
	use this capability. You can append relayed messages if you enable the
	RerouteViaStore registry value. For additional information about how to enable
	this value, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q238471 XIMS: How to Force SMTP Messages Through the Information Store
	
	Additionally, you can enable relaying with the custom routing dynamic-link
	library (DLL) by clicking to clear the "Instead of the table, use this custom
	routing program" check box. The path to the Imsext.dll file should still be
	displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : IMC ResourceKit
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
