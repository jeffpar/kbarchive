---
layout: page
title: "Q174327: DLL Initialization Failure May Occur When Loading Crypt32.dll"
permalink: /kb/174/Q174327/
---

## Q174327: DLL Initialization Failure May Occur When Loading Crypt32.dll

{% raw %}

	Article: Q174327
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT version 4.0 with Service Pack 3 installed may
	display the following pop-up dialog box from certain applications after the
	applications have been running for some time:
	
	  DLL Initialization Failed
	  Initialization of the dynamic link library crypt32.dll failed.
	  The process is terminating abnormally.
	
	CAUSE
	=====
	
	This problem will occur if an application stays resident, such as a service, and
	repeatedly loads and unloads Crypt32.dll, Security.dll, or Schannel.dll.
	
	RESOLUTION
	==========
	
	Apply the updated version of Crypt32.dll to correct the problem. If the problem
	occurs as soon as an application is started or after the update has been
	applied, verify that all DLLs required by the application are in the system
	path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0, Service
	Pack 3. A supported fix is now available, but is not fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : :4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
