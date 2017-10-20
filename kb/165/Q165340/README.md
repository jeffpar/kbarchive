---
layout: page
title: "Q165340: Change Permissions Needed on Index Server System Files"
permalink: /kb/165/Q165340/
---

## Q165340: Change Permissions Needed on Index Server System Files

{% raw %}

	Article: Q165340
	Product(s): Internet Information Server
	Version(s): WINNT:1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Index Server, you may get the following error message in
	your browser after it authenticates the query page:
	
	  Error: Access is denied.
	
	CAUSE
	=====
	
	Even if you have rights to the three files needed to make the query (*.htm,
	*.idq, and *.htx), the files still may not be authenticated. Microsoft Windows
	NT NTFS file restrictions on the files used may cause a problem for the search
	engine under the %systemroot%\system32 directory.
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	- Make sure you have Change permissions to the %systemroot%\system32
	  directory.
	
	  -or-
	
	- Make sure you have Change permissions to the following files:
	
	     Idq.dll
	     Query.dll
	     Iinfoadmn.dll
	     Imagehlp.dll
	     Qperf.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : WINNT:1.1,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
