---
layout: page
title: "Q75737: PRB: One Cause of Fatal Exit 0x001A"
permalink: /kb/075/Q75737/
---

## Q75737: PRB: One Cause of Fatal Exit 0x001A

{% raw %}

	Article: Q75737
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	SYMPTOMS
	========
	
	Closing an application or dynamic-link library (DLL) causes Windows to issue the
	undocumented fatal exit 0x001A.
	
	CAUSE
	=====
	
	The application or DLL has registered a window class with the CS_GLOBALCLASS
	style. The fatal exit is issued when Windows terminates the application or DLL
	that registered the class, when a window of that class is still open.
	
	RESOLUTION
	==========
	
	Ensure that all windows of any classes registered by an application or DLL are
	closed before the application or DLL is terminated.
	
	MORE INFORMATION
	================
	
	Applications and DLLs can register window classes that are visible to all
	applications by using the class style CS_GLOBALCLASS. This style is most
	commonly used in custom-control DLLs that are meant to be shared by multiple
	applications.
	
	When a task (that is, an application) terminates, all classes registered by that
	application are unregistered. In addition, DLLs that were implicitly loaded by
	the terminating application are freed if only the terminating application is
	using the DLL. In a similar fashion, during the unload sequence of a DLL, any
	classes that it registered are also unregistered.
	
	Windows keeps an internal count of windows created with a specific class. If this
	count is not zero when a class is unregistered, Windows reports fatal exit
	0x001A.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
