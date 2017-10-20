---
layout: page
title: "Q197491: XADM: Large NNTP Header Causes Store to Consume 100% of CPU Time"
permalink: /kb/197/Q197491/
---

## Q197491: XADM: Large NNTP Header Causes Store to Consume 100% of CPU Time

{% raw %}

	Article: Q197491
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange information store process (Store.exe) may consume 100
	percent of the server's processor time. This is viewed by using the Windows NT
	Performance Monitor utility, clicking the Object:Process and the Counter:% CPU
	Utilization. Also, viewing the "% CPU Utilization" of all of the threads being
	used by the store process (in Performance Monitor, click Object:Thread and
	Instance:STORE; add all of the instance STORE to the chart) one thread will
	appear to be consuming 100 percent of the CPU time.
	
	
	CAUSE
	=====
	
	An NNTP client was downloading a NNTP message from a folder in the Public Store,
	this message had a subject line greater than 20 KB. The buffer being used to
	hold the subject line was hardcoded at 20 KB. Therefore the code was continually
	looping trying to read in the contents of the subject line that were past this
	20 KB limit. This process resulted in high CPU usage by the information store
	process.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	File Name    Version
	  ---------------------
	  Gapi32.dll   5.5.2502
	  Mdbmsg.dll   5.5.2502
	  Store.exe    5.5.2502
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: crash hang
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
