---
layout: page
title: "Q249255: Cannot Insert File Attachment from Local Drive to Office"
permalink: /kb/249/Q249255/
---

## Q249255: Cannot Insert File Attachment from Local Drive to Office

{% raw %}

	Article: Q249255
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbWinNT4sp6fix kbbpqfe1a
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 5 for Terminal Server and you are
	using Metaframe 1.8 or earlier, you may have trouble using the Insert File
	feature in Microsoft Office programs (such as Microsoft Outlook or Microsoft
	Word). You can insert files from the network, but if you connect to Terminal
	Server and try to insert a file from a locally mapped drive, you may receive any
	of the following error messages:
	
	  System can't find file specified.
	
	or
	
	  Access denied.
	
	CAUSE
	=====
	
	This issue can occur because a regression with Mup.sys was introduced in
	Terminal Server Service Pack 5.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	If you do not have Microsoft distributed file system (Dfs) installed, you can
	replace the Terminal Server Service Pack 5 version of the Mup.sys file with the
	Terminal Server Service Pack 4 version of the Mup.sys file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Terminal Server
	Edition. This problem was first corrected in Windows NT Server 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words: DFS
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbWinNT4sp6fix kbbpqfe1a 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
