---
layout: page
title: "Q196666: Users Can See Administrator Auto-Created Client Printers in Apps"
permalink: /kb/196/Q196666/
---

## Q196666: Users Can See Administrator Auto-Created Client Printers in Apps

{% raw %}

	Article: Q196666
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use common applications such as Microsoft Word or Excel, a user's list
	of available printers includes all of the following when only printers from the
	first two categories should be shown:
	
	- The user's auto-created client printers
	
	- Printers designated for the user by the administrator
	
	- The administrator's auto-created printers
	
	CAUSE
	=====
	
	This problem occurs because of a problem in the SetPrinter() WIN32 API, which
	causes the security descriptor on the printers created by the administrator to
	be set incorrectly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNTSsearch kbNTTermServSearch
	Version           : winnt:
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
