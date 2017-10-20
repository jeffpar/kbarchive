---
layout: page
title: "Q138786: PRB: Just-In-Time Debugging Launches Wrong Debugger"
permalink: /kb/138/Q138786/
---

## Q138786: PRB: Just-In-Time Debugging Launches Wrong Debugger

{% raw %}

	Article: Q138786
	Product(s): Microsoft C Compiler
	Version(s): 4.0 5.0 6.0
	Operating System(s): 
	Keyword(s): kbtshoot kbDebug kbide kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although Just-In-Time (JIT) debugging is enabled in the Developer Studio, a
	debugging utility other than the Developer Studio is invoked when an illegal
	operation occurs in Windows 95.
	
	
	CAUSE
	=====
	
	In Windows 95, the Developer Studio uses the Win.ini file to maintain the
	just-in-time debugging settings. If the following registry key exists in your
	Windows 95 registry, its settings will preempt the settings in the Win.ini
	file:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Current Version\AeDebug
	
	RESOLUTION
	==========
	
	Delete the following registry entry to allow Visual C++ just-in-time debugging
	to be invoked:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Current Version\AeDebug
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Windows NT, this information is kept only in the registry.
	
	In Windows 95, it is necessary for this information to be placed in the Win.ini
	file only. Installing the Win32 SDK on a computer that is running Windows 95
	will create a registry key and cause the problem described. Use Regedit.exe to
	delete the key from the registry.
	
	The following entries should exist in the Win.ini file:
	
	  [AeDebug]
	  Auto=0
	  Debugger=c:\msdev\bin\msdev.exe -p %ld -e %ld
	
	The path to Msdev.exe may be different on your computer. The Win.ini file is
	located in your Windows directory.
	
	REFERENCES
	==========
	
	The Readme for Microsoft Visual C++ Version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbDebug kbide kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
