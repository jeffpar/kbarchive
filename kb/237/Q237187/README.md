---
layout: page
title: "Q237187: XCON: Excessive Context Switching During Heavy Message Traffic"
permalink: /kb/237/Q237187/
---

## Q237187: XCON: Excessive Context Switching During Heavy Message Traffic

{% raw %}

	Article: Q237187
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During heavy X.400 message traffic, the message transfer agent (MTA) may perform
	excessive context switching, which causes X.400 messages to be delivered more
	slowly through the Exchange Server computer. Context switching can be monitored
	using the following Performance Monitor counter:
	
	  Object: System
	  Counter: Context Switches/sec.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3. When you apply the fix, the following registry key is created:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Messaging
	  Subsystem\Applications\EMSMTA
	
	The following registry value is created under the above key:
	
	  Value Name: UseMHEAPMgr
	  Data Type: REG_DWORD
	  Value: 1
	
	Additional query words: throughput slow performance exchmem
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
