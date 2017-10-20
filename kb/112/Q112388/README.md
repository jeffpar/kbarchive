---
layout: page
title: "Q112388: GETBASEIRQ EscapeCommFunction()"
permalink: /kb/112/Q112388/
---

## Q112388: GETBASEIRQ EscapeCommFunction()

{% raw %}

	Article: Q112388
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By calling EscapeCommFunction() with GETBASEIRQ as the nFunction parameter, an
	application can determine the base I/O port address and IRQ used for a specific
	communications port.
	
	MORE INFORMATION
	================
	
	Although GETBASEIRQ is not documented in the Windows 3.1 SDK manuals, it is
	listed in the WINDOWS.H header file, and will continue to be supported in future
	versions of 16-bit Windows.
	
	When calling EscapeCommFunction() with GETBASEIRQ, the value returned is a LONG.
	The HIWORD of the return value is the IRQ and the LOWORD is the base I/O address
	of the communications port.
	
	Please note that this function call does not indicate whether a UART exists at
	the port; it only returns the I/O base and IRQ that COMM.DRV would use for that
	port.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
