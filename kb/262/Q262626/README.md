---
layout: page
title: "Q262626: ASP Request Executing Counter and ProcessorThreadMax"
permalink: /kb/262/Q262626/
---

## Q262626: ASP Request Executing Counter and ProcessorThreadMax

{% raw %}

	Article: Q262626
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 29-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, IIS 4.0 has one ASP thread queue for all applications marked to run
	in the Inetinfo memory space and one ASP thread queue per isolated application.
	An isolated application is one defined as having the Run in separate Memory
	Space check box selected. This is to say that Inetinfo.exe has a set of ASP
	threads equal to the number that is set for Processorthreadmax (default 10)
	multiplied by the number of processors recognized by Windows NT 4.0.
	
	IIS 5.0 has an ASP thread queue for those sites running in Low(IIS Process), one
	for Medium(Pooled), and one for each site (or virtual directory) set to run in
	High(Isolated). In IIS 5.0, the tunable value that controls this is
	AspProcessorThreadMax, which is set in the metabase, and by default is 25.
	
	This value applies independently for each process that is using the ASP.dll
	file.
	
	If all applications on the server are configured to run in process, then Requests
	Executing should never exceed ProcessorThreadMax*#ofProcessors (IIS 4.0) or
	AspProcessorThreadMax*#ofProcessors (IIS 5.0).
	
	Based on the configuration of the Web server, any number of ASP threads can be
	running on the Web server.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q238583 How to Tune the ASPProcessorThreadMax
	
	  Q235461 Enhancing Performance in Internet Information Server 4.0
	
	  Q222487 INFO: What's New in ASP with IIS 5.0
	
	Additional References:
	
	IIS 4.0 Tuning Parameters for High-Volume Sites
	
	The Art and Science of Web Server Tuning with Internet Information Services 5.0
	
	Maximizing the Performance of Your Active Server Pages
	
	25+ ASP Tips to Improve Performance and Style
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
