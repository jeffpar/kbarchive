---
layout: page
title: "Q112774: ERR: VSERVER File Server Encountered Critical Error"
permalink: /kb/112/Q112774/
---

## Q112774: ERR: VSERVER File Server Encountered Critical Error

{% raw %}

	Article: Q112774
	Product(s): Microsoft FoxPro
	Version(s): 2.5 2.5a 2.5b 3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtshoot kbvfp
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are performing an operation using FoxPro for Windows, the error message
	"VSERVER File Server Encountered Critical Error" appears.
	
	CAUSE
	=====
	
	There is no single, identifiable cause for this error message. The common causes
	are:
	
	- A third-party shell or program that loads from the SYSTEM.INI file
	
	- A terminate-and-stay-resident (TSR) program
	
	- An IRQ conflict
	
	- An I/O base address conflict
	
	- A third-party video driver
	
	MORE INFORMATION
	================
	
	VSERVER.386 is the network server VxD (virtual device driver) that implements
	the Windows for Workgroups server.
	
	
	
	Additional query words: err msg errmsg wfw wfwg
	
	======================================================================
	Keywords          : kberrmsg kbtshoot kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.5 2.5a 2.5b 3.0
	
	=============================================================================
	

{% endraw %}
