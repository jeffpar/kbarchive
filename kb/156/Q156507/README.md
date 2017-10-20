---
layout: page
title: "Q156507: HOWTO: Bypass Registry Settings on Visual FoxPro Startup"
permalink: /kb/156/Q156507/
---

## Q156507: HOWTO: Bypass Registry Settings on Visual FoxPro Startup

{% raw %}

	Article: Q156507
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 5.0 and 6.0, a new command line switch, -A, is available for
	starting a Visual FoxPro session while ignoring all the settings in the Windows
	registry.
	
	MORE INFORMATION
	================
	
	If an invalid or corrupt registry is suspected, you can start Visual FoxPro
	without invoking the Windows registry settings.
	
	For example, use the following steps in Windows 95 or Windows NT 4.0:
	
	1. On the Start menu, click Run.
	
	2. Enter the path to a Visual FoxPro program: C:\VFP50\VFP.EXE -A
	
	3. Click OK.
	
	Use the following steps in Windows NT 3.51 using Visual FoxPro 5.0:
	
	1. On the File menu, click Run.
	
	2. Enter the path to a Visual FoxPro program: C:\VFP50\VFP.EXE -A
	
	3. Click OK.
	
	NOTE: In the preceding example, your registry settings are not invoked upon
	Visual FoxPro startup.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
