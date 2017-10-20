---
layout: page
title: "Q179445: Random Access Violations in Mprouter.exe"
permalink: /kb/179/Q179445/
---

## Q179445: Random Access Violations in Mprouter.exe

{% raw %}

	Article: Q179445
	Product(s): Microsoft Windows NT
	Version(s): Win4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Mprouter.exe on a computer running Windows NT Server 4.0 it may
	randomly crash and display the following error message:
	
	  Application exception occurred:
	  App: exe\MPROUTER.dbg (pid=254)
	  When: 1/11/1998 @ 9:57:35.375
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This happens when using MPRouter with class C subnetted subnet masks and the
	server receives an incoming call.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : Win4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
