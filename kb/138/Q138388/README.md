---
layout: page
title: "Q138388: Dynamically Loading/Unloading WINRUI32.DLL Causes System Hang"
permalink: /kb/138/Q138388/
---

## Q138388: Dynamically Loading/Unloading WINRUI32.DLL Causes System Hang

{% raw %}

	Article: Q138388
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you dynamically load and unload the WINRUI32.DLL, your computer hangs. This
	symptom occurs sporadically.
	
	CAUSE
	=====
	
	This problem occurs during a call to FreeLibrary (hLibModule) where hLibModule
	was previously set to the result of a call to LoadLibrary (WINRUI32.DLL).
	
	The hang occurs when the WINRUI32.DLL is unloaded by the FreeLibrary()call. The
	hang is caused by WINRUI32.DLL trying to remove its DMOD routing procedure
	during DLL detach processing. There are certain procedures that cannot be
	reliable performed inside detach processing, for example, waiting for something
	like the DMOD routing proc table to become available.
	
	Existing applications that do not call WinRUIStartup/WinRUICleanup continue to
	function as before.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file LIBS\WIN32WINRUI32.DLL to correct this problem.
	
	
	The fix to the WINRUI32.DLL removes the RUI routing procedure during the
	processing of the WinRUICleanup() call and ensures that the DLL detach
	processing does not attempt to do it again. To properly load and unload the DLL
	you need to always call WinRUIStartup before your first RUI verb and
	WinRUICleanup before freeing the WINRUI32.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
