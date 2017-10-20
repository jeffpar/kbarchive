---
layout: page
title: "Q121025: Print Screen Hangs Machine After Exiting Windows or WFWG"
permalink: /kb/121/Q121025/
---

## Q121025: Print Screen Hangs Machine After Exiting Windows or WFWG

{% raw %}

	Article: Q121025
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Novell IPXODI protocol stack and you quit Windows or
	Windows for Workgroups, your machine stops responding (hangs) when you press the
	Print Screen key.
	
	Other problems can also occur when you press the Print Screen key with this
	configuration. These include the system rebooting, receiving an EMM exception
	error message, or receiving a
	
	  Divide by zero
	
	error message.
	
	CAUSE
	=====
	
	Microsoft has confirmed this to be an incompatibility between the IPXODI stack
	and Windows/Windows for Workgroups. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	WORKAROUND
	==========
	
	To work around these problems, use IPX.COM instead of IPXODI.COM.
	
	Running WIN /N prevents these problems in Windows for Workgroups 3.11; however,
	it also results in the loss of all Windows for Workgroups and NetWare networking
	features.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.10 3.11 hangs crash hung unexpected vlm netx printscreen prtscr print-screen printscr printscrn prntscrn prtscrn
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
