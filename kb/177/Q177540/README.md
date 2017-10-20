---
layout: page
title: "Q177540: BUG: ODBC Trace Fails with Traditional Chinese version of VFP5"
permalink: /kb/177/Q177540/
---

## Q177540: BUG: ODBC Trace Fails with Traditional Chinese version of VFP5

{% raw %}

	Article: Q177540
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ODBC Trace may fail after you install the Traditional Chinese (TC) version of
	Visual FoxPro version 5.0x under the Traditional Chinese version of Windows 95
	if a 32-bit ODBC driver is not previously installed.
	
	CAUSE
	=====
	
	The Visual FoxPro 5.0x localized version does not copy Odbctrac.dll to the
	Window's system directory during the setup process.
	
	RESOLUTION
	==========
	
	From the \Distrib.src\system folder, under the folder where Visual FoxPro 5.0x
	is installed, copy the Odbctrac.dll file to the Windows system folder
	C:\Windows\System.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Traditional Chinese version of Visual FoxPro 5.0a under a clean
	  install of the Traditional Chinese version of Windows 95.
	
	2. Run the 32-bit ODBC Manager from Control Panel.
	
	3. From the Tracing tab, select "Start Tracing" to start ODBC tracing.
	
	  NOTE: The error message "ODBCTRAC.DLL not found" is displayed (in Chinese).
	
	Additional query words: odbc
	
	======================================================================
	Keywords          : kbvfp kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
