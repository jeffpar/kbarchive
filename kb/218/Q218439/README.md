---
layout: page
title: "Q218439: XADM: PerfMon Counters for Monitoring Exchange DB Sessions"
permalink: /kb/218/Q218439/
---

## Q218439: XADM: PerfMon Counters for Monitoring Exchange DB Sessions

{% raw %}

	Article: Q218439
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55 EXC55SP3Fea
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes possible on a very active Exchange Server computer that the
	information store or directory process will surpass the allocated amount of
	database sessions configured in the registry. When this happens an event log
	message is recorded in the Windows NT Event Viewer application log similar to
	the following:
	
	  Event ID: 9037
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: None
	  Description: No database session was available to satisfy a request. The
	  registry value
	  "SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate\Sessions"
	  may be set too low for the level of activity on this server.
	
	and/or
	
	  Event ID: 1164
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: None
	  Description: No database session was available to satisfy a request. The
	  registry value
	  "SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate\Sessions"
	  may be set too low for the level of activity on this server. The current
	  value for this parameter is %1.
	
	In accordance with the information in Microsoft Knowledge Base article Q148961,
	there is a way by using the registry to increase the amount of Exchange Server
	database sessions, however, there is no way to determine the exact or optimal
	number of sessions to set this value to.
	
	MORE INFORMATION
	================
	
	In an effort to provide a method of monitoring the number of sessions being used
	either by the information store or directory service, two new Performance
	Monitor counters have been added under the database object. The counters are:
	
	- "Session % Used"
	- "Sessions In Use"
	
	The counters can be used to to effectively monitor Sessions and alert
	administrators when the configured value may be too low.
	
	
	This feature is available in the latest service pack for Exchange Server version
	5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: Exchange Database Engine
	
	+------------------------+
	| File name   | Version  | 
	+------------------------+
	| Ese.dll     | 5.5.2560 | 
	+------------------------+
	| Eseperf.dll | 5.5.2560 | 
	+------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2esei.exe
	(x86) and Psp2esea.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/ESE-fix/
	
	This feature was first included in Exchange Server 5.5 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA exc55 EXC55SP3Fea 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
