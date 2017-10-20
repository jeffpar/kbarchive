---
layout: page
title: "Q131643: PRB: DashBoard Does Not Launch a Visual FoxPro Executable"
permalink: /kb/131/Q131643/
---

## Q131643: PRB: DashBoard Does Not Launch a Visual FoxPro Executable

{% raw %}

	Article: Q131643
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Launching Visual FoxPro from the DashBoard Run system yields this error:
	
	  This program cannot be run in DOS mode.
	
	CAUSE
	=====
	
	As a 32-bit application, Visual FoxPro requires a 32-bit operating environment.
	In Windows and Windows for Workgroups, Visual FoxPro installs and use the Win32S
	subsystem. Dashboard is a 16-bit application that does not provide support for
	32-bit executables such as Visual FoxPro or Free Cell.
	
	STATUS
	======
	
	DashBoard is manufactured by Borland, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
