---
layout: page
title: "Q93252: No Network Services if Real Mode Redirector Started"
permalink: /kb/093/Q93252/
---

## Q93252: No Network Services if Real Mode Redirector Started

{% raw %}

	Article: Q93252
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can start the real mode redirector before Windows for Workgroups by typing
	any of the following at the MS-DOS command prompt:
	
	  net start workstation
	  net start full
	  net start basic
	
	After starting Windows for Workgroups, you cannot connect to or enable your own
	shared resources. If you then disable the real mode redirector by typing "net
	stop" (without the quotation marks) at an MS-DOS command prompt, you can enable
	resource sharing. However, you still cannot connect to other computers on your
	Windows for Workgroups network. If you try, the following error message is
	displayed:
	
	  The Windows for Workgroups network cannot be started. Run the Setup program
	  again to correctly configure Windows for Workgroups.
	
	CAUSE
	=====
	
	If you load the real mode redirector before starting Windows for Workgroups, the
	protect mode redirector, VREDIR.386, does not start. However, VSERVER.386, the
	resource sharing driver, does load. This is why, after stopping the real mode
	redirector, some network services are available.
	
	WORKAROUND
	==========
	
	To enable all network services, you must exit Windows for Workgroups, make sure
	the real mode redirector is stopped, and then restart Windowsfor Workgroups.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
