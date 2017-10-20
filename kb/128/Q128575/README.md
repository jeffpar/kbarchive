---
layout: page
title: "Q128575: PC MAPI: MAPI32.DLL Does Not Support Multi-Threaded Call"
permalink: /kb/128/Q128575/
---

## Q128575: PC MAPI: MAPI32.DLL Does Not Support Multi-Threaded Call

{% raw %}

	Article: Q128575
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MAPI32.DLL, the dynamic-link library for 32-bit Messaging Application Program
	Interface (MAPI) calls, is a component of Windows NT Mail that functions as a
	client for a Microsoft Mail for PC Networks postoffice. However, MAPI32.DLL does
	not support multi-threaded calls.
	
	MORE INFORMATION
	================
	
	Developers may use MAPI32.DLL, much like the 16-bit MAPI.DLL found in Microsoft
	Mail for Windows, by making 32-bit calls from the application they are
	designing. Developers may call from the 32-bit application directly, or from
	16-bit calls that subsequently get converted (thunked) to 32-bit calls via the
	MAPI.DLL thunking layer that is also provided with Windows NT Mail. However,
	when making calls directly to MAPI32.DLL a single thread must be used from the
	calling application. MAPI32.DLL does not support applications that make
	multi-threaded calls, although multiple processes are supported.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
