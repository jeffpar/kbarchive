---
layout: page
title: "Q193688: HTMLA: Object Already Exists When Creating New Web Sites"
permalink: kb/193/Q193688/
---

## Q193688: HTMLA: Object Already Exists When Creating New Web Sites

	Article: Q193688
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The HTML version of the Internet Information Server Management Console does not
	allow an administrator to create a new Web site. The following error message
	appears:
	
	  A site with that name already exists. Please choose a unique name and try
	  again.
	
	When an administrator retries the operation with a completely unique name,
	Internet Information Server returns the same error stating that a site with that
	name already exists.
	
	CAUSE
	=====
	
	The HTML administration utility is capturing the wrong information. When a new
	Web site is created, a unique identifier is assigned along with your user
	comment. The unique identifier is not being refreshed when a new Web site is
	created.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
