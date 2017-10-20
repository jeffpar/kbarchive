---
layout: page
title: "Q194743: Scripting Appears as Part of the Abstract in Search Results"
permalink: /kb/194/Q194743/
---

## Q194743: Scripting Appears as Part of the Abstract in Search Results

{% raw %}

	Article: Q194743
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the results of a search, you may notice that the abstract returned
	for the document contains client-side JavaScript or VBScript.
	
	CAUSE
	=====
	
	This is caused by a bug in the HTML filter that shipped with Index Server 2.0.
	
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
	
	MORE INFORMATION
	================
	
	Service Pack 4 updates the HTML filter used by Index Server so that it no longer
	treats client-side scripting as part of the document abstract.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
