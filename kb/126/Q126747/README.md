---
layout: page
title: "Q126747: Print Manager Does Not Start Automatically with Shared Printer"
permalink: /kb/126/Q126747/
---

## Q126747: Print Manager Does Not Start Automatically with Shared Printer

{% raw %}

	Article: Q126747
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print Manager does not start automatically when you start Microsoft Windows for
	Workgroups version 3.11, even though you have shared a printer.
	
	CAUSE
	=====
	
	File sharing is not enabled.
	
	RESOLUTION
	==========
	
	If Print Manager does not start automatically for print sharing, you may need to
	enable file sharing along with print sharing. To enable file sharing, follow
	these steps:
	
	1. Double-click the Network Setup icon in the Network program group.
	
	2. Choose the Sharing button.
	
	3. Select the "I want to be able to give others access to my files" check box.
	
	4. Choose the OK button.
	
	5. Choose OK.
	
	6. Choose OK to confirm the modifications to the SYSTEM.INI file.
	
	7. Choose the Restart Windows button. NOTE: Make sure to save and close any open
	  work on your computer before you choose this button.
	
	You should also make sure that Print Manager is not loaded in the Startup program
	group and that PRINTMAN.EXE is not specified in the "Load=" or the "Run=" line
	in the WIN.INI file.
	
	Additional query words: 3.11 printman share
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
