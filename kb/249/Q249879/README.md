---
layout: page
title: "Q249879: PRB: IPF in Module VB6.exe When Exiting VB6"
permalink: /kb/249/Q249879/
---

## Q249879: PRB: IPF in Module VB6.exe When Exiting VB6

{% raw %}

	Article: Q249879
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbDSupport
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Visual Basic 6.0, the following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click details in the dialog box that displays this error message, the
	following message appears:
	
	  Invalid page fault in module VB6.exe at <address>.
	
	CAUSE
	=====
	
	Visual Basic is configured to load the Source Code Control Add-in when the
	program is started, but Ssscc.dll is not correctly registered in the system
	registry.
	
	RESOLUTION
	==========
	
	You can use one of the following two methods to resolve this issue:
	
	- If Microsoft Visual SourceSafe is integrated with Visual Basic:
	
	  Click Start, and then click Run. Type the following commands in the text box:
	
	  regsvr32 "<x>:\<path>\ssscc.dll"
	
	  where <x>:\<path> is the location of the Ssscc.dll file
	
	- If Microsoft Visual SourceSafe is not integrated with Visual Basic:
	
	  1. Start Visual Basic.
	
	  2. From the Add-Ins menu, click Add-In-Manager.
	
	  3. Under Available Add-Ins, select Source Code Control.
	
	  4. In the Loaded Behavior option box, clear the Loaded/Unloaded and Load on
	     Startup check boxes.
	
	  5. Exit Visual Basic.
	
	MORE INFORMATION
	================
	
	The Source Code Control integrates Visual SourceSafe with Visual Basic.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install Visual Basic and Visual SourceSafe.
	
	2. Unregister Ssscc.dll.
	
	3. Launch Visual Basic, and then quit the program.
	
	Additional query words: kbVS600
	
	======================================================================
	Keywords          : kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
