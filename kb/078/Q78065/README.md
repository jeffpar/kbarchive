---
layout: page
title: "Q78065: Proper Installation of the Redistributable DLLs"
permalink: /kb/078/Q78065/
---

## Q78065: Proper Installation of the Redistributable DLLs

{% raw %}

	Article: Q78065
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of the Microsoft Windows Software Development Kit (SDK) contains
	several redistributable dynamic-link libraries (DLLs). These DLLs may be
	included with an application that runs under Windows version 3.0 to provide some
	of the new Windows functionality.
	
	The VER.DLL version-checking DLL is designed to install the distributable DLLs to
	a Windows 3.1 or 3.0 application. VER will check to see whether the
	redistributable DLLs are already present on the system, and will ensure that an
	older copy of a given DLL is not copied over a newer copy.
	
	The installation program for an application that includes one or more of the
	version 3.1 Windows SDK DLLs should install them into the Windows system
	directory (by default, C:\WINDOWS\SYSTEM). The name of this directory can be
	determined using the GetSystemDirectory function.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
