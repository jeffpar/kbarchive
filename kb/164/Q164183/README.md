---
layout: page
title: "Q164183: .HTM Files Are Indexed by Text Filter Instead of HTML Filter"
permalink: /kb/164/Q164183/
---

## Q164183: .HTM Files Are Indexed by Text Filter Instead of HTML Filter

{% raw %}

	Article: Q164183
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Netscape Navigator, and you make it your default browser,
	Index Server uses Text filter instead of HTML filter to filter HTML files.
	
	CAUSE
	=====
	
	Netscape overwrites the class data in the registry.
	
	WORKAROUND
	==========
	
	For Index Server 1.x:
	
	Reinstall Index Server to re-enter registry keys.
	
	For Index Server 2.0 and Indexing Service:
	
	Stop and restart the Index Server or Service to register the filters on startup.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : WINNT: 1.1,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
