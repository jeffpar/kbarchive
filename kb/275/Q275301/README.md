---
layout: page
title: "Q275301: BUG: Kodak Image Edit Controls Causes Error in VB IDE on Win Me"
permalink: /kb/275/Q275301/
---

## Q275301: BUG: Kodak Image Edit Controls Causes Error in VB IDE on Win Me

{% raw %}

	Article: Q275301
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbVBp kbVBp600 kbIDEProject kbDSupport kbOSWinME kbOSWinMEbug
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add the Kodak Image Edit Controls from the Components dialog
	box in the Visual Basic integrated development environment (IDE) on Windows
	Millennium Edition (Me), you may receive the following error message:
	
	  " could not be loaded
	
	CAUSE
	=====
	
	The registry contains an invalid TypeLib version key.
	
	The Windows Me TypeLib version registry key for the Imgedit.ocx file is for
	TypeLib version 2.2, but the Imgedit.ocx file contains TypeLib version 2.1. When
	Visual Basic attempts to load the control, it finds that the TypeLib versions do
	not match.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Click Start, click Run, and type "regsvr32 /u imgedit.ocx" (without the
	  quotation marks). This unregisters the control.
	
	2. Click Start, click Run, and type "regsvr32 imgedit.ocx" (without the
	  quotation marks). This re-registers the control.
	
	3. In Visual Basic, create a new Standard EXE project.
	
	4. On the Project menu, click Components.
	
	5. Click to select the Kodak Image Edit Control check box.
	
	6. Click Apply.
	
	You can now use the control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new Standard EXE project.
	
	2. On the Project menu, click Components.
	
	3. Click to select the Kodak Image Edit Control check box.
	
	4. Click Apply.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbVBp kbVBp600 kbIDEProject kbDSupport kbOSWinME kbOSWinMEbug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
