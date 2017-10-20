---
layout: page
title: "Q138557: PRB: Golf 2.0 Overwrites WIN32s Files"
permalink: /kb/138/Q138557/
---

## Q138557: PRB: Golf 2.0 Overwrites WIN32s Files

{% raw %}

	Article: Q138557
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Golf version 2.0 on a computer that is running the
	Windows 3.X opertaing system with Visual FoxPro already installed, running
	Visual FoxPro causes the following Win32s error:
	
	  Missing Numeric co-processor virtual device driver (VMCPD)
	
	After you click OK, Visual FoxPro returns an Application Execution error:
	
	  One of the library files needed to run this application is damaged. Please
	  reinstall this application
	
	CAUSE
	=====
	
	Microsoft Golf 2.0 overwrites portions of the Win32s subsystem with older
	versions. The correct versions of these files are necessary to run Visual FoxPro
	3.0 on Windows 3.1 or the Windows for WorkGroups operating system.
	
	RESOLUTION
	==========
	
	Reinstall Visual FoxPro 3.0. Visual FoxPro will reinstall the correct versions
	of all necessary system files. Both Visual FoxPro 3.0 and Microsoft Golf 2.0
	will run successfully after reinstalling Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft Golf 2.0 will exhibit similar behavior (Win32s errors) on startup
	after it is installed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 3.0 on a 16-bit Windows operating system.
	
	2. Install Microsoft Golf 2.0.
	
	3. After both installations are complete, attempt to run Visual FoxPro.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbHomeProdSearch kbGamesSearch kbGolfSearch kbVFP300 kbGolf200
	Version           : WINDOWS:2.0,3.0
	
	=============================================================================
	

{% endraw %}
