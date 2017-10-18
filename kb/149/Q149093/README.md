---
layout: page
title: "Q149093: BUG: Property Page of Remote Data Control Causes an Error"
permalink: kb/149/Q149093/
---

## Q149093: BUG: Property Page of Remote Data Control Causes an Error

	Article: Q149093
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,95,98
	Operating System(s): 
	Keyword(s): kbVBp400 kbOSWin95 kbOSWin98 kbGrpDSVBDB
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Pressing the ESC key while the cursor is in the SQL text box of the General Tab
	in the property page of the Remote Data Control causes a blank General tab. When
	you click the Colors tab and then click the General tab again, an application
	error occurs and Visual Basic ends. The SQL text box can be empty or contain
	characters. Clicking the Cancel button on the window correctly closes the
	window. This behavior only occurs under the Windows 95 operating system. To work
	around this behavior, programmatically set the properties of remote data control
	or use the Properties window of the Remote Data Object to set the properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0. If it is already running, on
	  the File menu, click New Project.
	
	2. Add a remote data control to the Form1 form. Right-click the remote data
	  control and click properties. The Remote Data Controls dialog box appears.
	
	3. Place the cursor in the SQL text box of the General tab and press the Esc
	  key. The contents of the General tab disappears.
	
	4. Click the Colors tab and then click the General tab. An application error
	  occurs. The message "VB32 caused an invalid page fault in module USER.EXE at
	  0008:0000419b" appears and Visual Basic ends. The message can also contain
	  this memory address: 0008:000042a6.
	
	Additional query words: kbVBp400bug kbWinOS98 kbVBp kbDSupport kbdse
	
	======================================================================
	Keywords          : kbVBp400 kbOSWin95 kbOSWin98 kbGrpDSVBDB 
	Technology        : kbOSWin98 kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinSearch kbVB400Search kbVB400
	Version           : WINDOWS:4.0,95,98
	Issue type        : kbbug
	
	=============================================================================
	
