---
layout: page
title: "Q236996: ICA NetBEUI Workstation May Not Connect"
permalink: /kb/236/Q236996/
---

## Q236996: ICA NetBEUI Workstation May Not Connect

{% raw %}

	Article: Q236996
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an initial connection is made to an Independent Computing Architecture
	(ICA) NetBEUI workstation, the connection may not succeed. This may only occur
	in international versions of Terminal Server with Citrix Metaframe installed.
	
	CAUSE
	=====
	
	Because of a timing problem, the NetBIOS session is not initialized in time and
	the connection is dropped.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0,
	Terminal Server Edition. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: winstation
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
