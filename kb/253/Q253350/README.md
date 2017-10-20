---
layout: page
title: "Q253350: XCON: Connector for Lotus Notes Performance Monitor Doesn't Work"
permalink: /kb/253/Q253350/
---

## Q253350: XCON: Connector for Lotus Notes Performance Monitor Doesn't Work

{% raw %}

	Article: Q253350
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Connector for Lotus Notes on a computer
	that is running Microsoft Windows 2000 Server, the performance monitor may not
	return any data for the Exchange Connector for Lotus Notes and you may receive
	the following error message:
	
	  Evt error: Perflib The Collect Procedure for the "LME-NOTES" service in DLL
	  "\exchsrvr\Connect\exchconn\ntsperf.dll" generated an exception or returned
	  an invalid status. Performance data returned by counter DLL is not returned
	  in Perf Data Block. Exception or status code returned is data DWORD 0.
	
	CAUSE
	=====
	
	This problem can occur if an entry in the registry indicates that there are
	other performance monitors running, which causes the performance monitor for the
	Exchange Connector for Lotus Notes to stop responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	To resolve this issue, apply the fix and make sure that the computer is running
	Windows 2000 Server build 2195 or later.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
