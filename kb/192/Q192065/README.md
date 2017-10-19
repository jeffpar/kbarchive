---
layout: page
title: "Q192065: XADM: High CPU Usage by STORE Displaying a Folder View"
permalink: /kb/192/Q192065/
---

## Q192065: XADM: High CPU Usage by STORE Displaying a Folder View

	Article: Q192065
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store (Store.exe) process may appear
	to hang and/or consume a high percentage of the systems processor utilization.
	Using Windows NT performance monitor to view the "% Processor Time" of all the
	threads being used by the Store.exe process will reveal one thread using the
	majority of the processor time.
	
	
	CAUSE
	=====
	
	A categorized view is defined as a view set on a folder in which its contents
	are sorted or grouped by in some manner (for example, sorted by the From:
	field). This sorting or grouping can be in ascending or descending order. When a
	client sets this type of view on a folder, the information store creates a new
	table in the Exchange database that contains the data needed to display this
	view.
	
	In this case, when the information store built the Exchange database table, the
	contents were being sorted in a descending order. The Exchange database engine
	needs to detect a terminator to know it is has processed all the data, and in
	this case, the Exchange database engine was searching for the wrong terminator.
	Because this terminator did not exist, the same portion of the code was being
	executed repeatedly causing the information store process to utilize high
	percentages of the system processor and causing the appearance of a hung client
	for the user who was trying to enter this folder.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words: hang stuck
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
