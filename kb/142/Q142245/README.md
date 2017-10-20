---
layout: page
title: "Q142245: PRB: Setup DDE Error When Installing Visual Basic 4.0"
permalink: /kb/142/Q142245/
---

## Q142245: PRB: Setup DDE Error When Installing Visual Basic 4.0

{% raw %}

	Article: Q142245
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp400 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program of Visual Basic from a network or CD-ROM drive,
	you might get the following error message:
	
	  Unable to Start DDE Communication with Program Manager.
	
	This behavior occurs when the Setup program is creating the Start menu items.
	This error message may appear if Visual Basic is installed from a network CD-ROM
	drive.
	
	RESOLUTION
	==========
	
	Start the DDE service before starting the Setup program of Visual Basic. To
	accomplish this behavior:
	
	1. Close all applications and folders.
	
	2. From the Start menu, click Run. Enter "c:\windows\netdde.exe" in the Open
	  combo box and click OK.
	
	3. Verify that netdde.exe is running in the background. Press CTRL-ALT-DELETE to
	  display the task manager. Netdde should be one of the entries in the list.
	
	4. Run the Setup program of Visual Basic.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp400 kbOSWin98 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
