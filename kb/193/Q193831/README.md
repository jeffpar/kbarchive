---
layout: page
title: "Q193831: Compiling Large ASP Pages Can Take 100% of CPU Time"
permalink: /kb/193/Q193831/
---

## Q193831: Compiling Large ASP Pages Can Take 100% of CPU Time

	Article: Q193831
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
	
	When an ASP file is requested for the first time, it must be compiled. Normally,
	this will only last a short time. However, if the ASP and associated include
	files are large, Internet Information Server (IIS) can stay at 100 percent CPU
	usage, which prevents the server from servicing client requests.
	
	CAUSE
	=====
	
	ASP is a run-time interpreted environment designed for small files. Each script
	block in the ASP file is parsed separately. Processing these blocks is CPU
	intensive, especially when there are hundreds of disparate script blocks.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, design the ASP to use a single script block instead
	of individual blocks. For example:
	
	  <html tag> some text </html tag> <% = variableName %>
	  <html tag> some text </html tag> <% = CallToFunction(param1,
	  param2) %>
	
	takes longer to compile than:
	
	  <%
	  Response.Write ("<html tag> some text </html tag> " &
	  variableName)
	  Response.Write ("<html tag> some text </html tag> " &
	  CallToFunction(param1, param2))
	  %>
	
	Multiple records can be displayed using ADO and a query loop. This reduces the
	amount of redundant script blocks and make the compile much faster.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: IIS hotfix hot fix qfe quick fix engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
