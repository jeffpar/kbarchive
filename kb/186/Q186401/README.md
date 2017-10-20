---
layout: page
title: "Q186401: Leak in Services.exe"
permalink: /kb/186/Q186401/
---

## Q186401: Leak in Services.exe

{% raw %}

	Article: Q186401
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor analysis reveals a steady increase in private bytes for
	Services.exe.
	
	Even more noticeable is the working set for Services.exe - from 10 MB to 400 MB,
	depending on up time.
	
	
	CAUSE
	=====
	
	When the server receives a downlevel remoted API, an internal buffer is
	allocated related to the session user. For the code path where the API is a
	remote user logon, the internal buffer is not freed properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	  05/26/98  10:07p                88,336 Xactsrv.dll (Intel)
	  05/26/98  10:08p               170,768 Xactsrv.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
