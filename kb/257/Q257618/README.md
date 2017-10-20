---
layout: page
title: "Q257618: XCON: Exchange Server IMC, Internet Mail Service Build Numbers"
permalink: /kb/257/Q257618/
---

## Q257618: XCON: Exchange Server IMC, Internet Mail Service Build Numbers

{% raw %}

	Article: Q257618
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table contains the build numbers for the Exchange Server Internet
	Mail Connector (IMC) and the Exchange Server Internet Mail Service (IMC in
	Exchange Server 4.0, Internet Mail Service in Exchange Server 5.0 and later).
	
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server Version Number              | Internet Mail Connector or
	Internet Mail Service Build Number | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0                 | Build 837.3                                                   | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0 Service Pack 1  | Build 838.14                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0 Service Pack 2  | Build 993.5                                                   | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0a                | Build 993.5                                                   | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0a Service Pack 3 | Build 994.63                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0a Service Pack 4 | Build 995.52                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 4.0a Service Pack 5 | Build 996.62                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.0                 | Build 1457.10                                                 | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.0 Service Pack 1  | Build 1458.49                                                 | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.0 Service Pack 2  | Build 1460.8                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.5                 | Build 1960.3                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.5 Service Pack 1  | Build 2232.9                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.5 Service Pack 2  | Build 2448.0                                                  | 
	+-------------------------------------------------------------------------------------------------------------+
	| Exchange Server version 5.5 Service Pack 3  | Build 2650.21                                                 | 
	+-------------------------------------------------------------------------------------------------------------+
	
	
	MORE INFORMATION
	================
	
	You can verify the IMC or Internet Mail Service build number on an Exchange
	Server computer by opening the MSExchangeIMC informational event 1000 in the
	Microsoft Windows NT Event Viewer application event log. This event is logged
	when the IMC or Internet Mail Service starts.
	
	You can also verify the build number by looking at the Simple Mail Transfer
	Protocol (SMTP) banner when you telnet to port 25 of the Exchange Server
	computer.
	
	Additional query words: buddy drop qfe vers
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
