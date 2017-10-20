---
layout: page
title: "Q162607: If 1st Thunked LUA App Is Closed, Other LUA Calls Not Processed"
permalink: /kb/162/Q162607/
---

## Q162607: If 1st Thunked LUA App Is Closed, Other LUA Calls Not Processed

{% raw %}

	Article: Q162607
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a case where two or more 16-bit LUA applications are using the thunked LUA
	library, the library no longer processes any LUA verbs once the first
	application to start is closed (where WinSliCleanup() or WinRuiCleanup() was
	issued).
	
	CAUSE
	=====
	
	This is because the thunked library creates a window for processing asynchronous
	messages in the first API call, and when the first application is closed, that
	window is closed. However, all asynchronous notification messages are still sent
	to that (now non-existent) window handle.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11 Service Pack 1 (SP1).
	
	
	A supported fix is now available for SNA Server 2.11 SP1, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
