---
layout: page
title: "Q237003: Sessionless Event Creates Session When Running Application"
permalink: /kb/237/Q237003/
---

## Q237003: Sessionless Event Creates Session When Running Application

{% raw %}

	Article: Q237003
	Product(s): Internet Information Server
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbOSWinNT400sp4bug kbiis400bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Internet Information Server (IIS) to run a default Web
	site application in a separate memory space, a session may be established even
	though you specified a sessionless event in the Session_OnStart code of the
	application file. However, the session is only established the first time an
	Active Server Pages (ASP) page is loaded; after that, a sessionless event is set
	as specified.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To start a sessionless default Web site in Internet Information Server, follow
	these steps:
	
	1. Right-click the application under Default Web Site.
	
	2. Click Properties.
	
	3. Click the Directory tab.
	
	4. Click to select Run in separate memory.
	
	  The ASP pages and application files are loaded and administered by the Web
	  Application Manager (WAM), which can be accessed at a command prompt by
	  typing
	
	  "IWAM NetBIOS computername" (without the quotation marks)
	
	  and then pressing ENTER.
	
	REFERENCES
	==========
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: web scripting
	
	======================================================================
	Keywords          : kbOSWinNT400sp4bug kbiis400bug 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbiisSearch kbiis400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
