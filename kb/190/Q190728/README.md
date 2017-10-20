---
layout: page
title: "Q190728: XADM: FDoMaintenance Halted Due to Error 0xfffffc15"
permalink: /kb/190/Q190728/
---

## Q190728: XADM: FDoMaintenance Halted Due to Error 0xfffffc15

{% raw %}

	Article: Q190728
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply an information store hotfix, you may see the following error
	message in the application event log of a computer running Exchange Server
	version 5.5:
	
	  Event ID: 7200
	  Source: MSExchangeIS Public
	  Type: Error
	  Category: General
	  Description:
	  Background thread FDoMaintenance halted due to error code 0xfffffc15.
	
	CAUSE
	=====
	
	This error message appears after you apply a hotfix for Store.exe (build numbers
	between 2191 and 2217).
	
	This message only appears during the scheduled information store maintenance (by
	default between 1:00A.M. and 6:00A.M.)
	
	WORKAROUND
	==========
	
	To work around this problem, apply the latest U.S. service pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the service pack,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	Note this issue is only relevant to customers reporting the exact error message
	above. If the error code is other than 0xfffffc15, it may be a different issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
