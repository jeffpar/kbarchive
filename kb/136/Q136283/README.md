---
layout: page
title: "Q136283: PRB: Installing Visual FoxPro Disables LAN Manager"
permalink: /kb/136/Q136283/
---

## Q136283: PRB: Installing Visual FoxPro Disables LAN Manager

{% raw %}

	Article: Q136283
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Visual FoxPro under Windows or Windows for Workgroups version
	3.1x on a LAN Manager network, you can't gain access to the network.
	
	CAUSE
	=====
	
	Visual FoxPro installs Win32s, and LAN Manager APIs are not supported in Win32s.
	
	RESOLUTION
	==========
	
	Use Universal Thunks.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information about Win32s and LAN Manager, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q109204 Win32s and LAN Manager APIs
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
