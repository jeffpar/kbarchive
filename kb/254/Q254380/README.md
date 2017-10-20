---
layout: page
title: "Q254380: XFOR: Exchange.Box Compaction w. Notes Maintenance Disabled"
permalink: /kb/254/Q254380/
---

## Q254380: XFOR: Exchange.Box Compaction w. Notes Maintenance Disabled

{% raw %}

	Article: Q254380
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On the Advanced tab in the Microsoft Exchange Connector for Lotus Notes
	properties, there is an option to run Notes database maintenance. By default,
	Notes database maintenance runs at 1:00 A.M. If you select this option, you can
	change the time at which maintenance is run.
	
	If you disable this option, the compaction of the Exchange.box database on the
	Lotus Notes server occurs at the default time: 1:00 A.M. No indication that
	Notes maintenance has started is logged in either the Browser logs or the
	Microsoft Windows NT Event Viewer application event log.
	
	CAUSE
	=====
	
	This issue can occur because the Exchange Notes Connector that is included with
	Exchange Server 5.5 is based on the Lotus Notes connector that LinkAge produces.
	The LinkAge version of the connector is hard-coded to run the Exchange.box
	database compaction at 1:00 A.M. Microsoft added a user interface (UI) to modify
	the time at which Notes database maintenance is run, which includes database
	compaction. However, this modification did not add the capability to disable
	database compaction.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
