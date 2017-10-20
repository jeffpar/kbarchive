---
layout: page
title: "Q150706: PRB: Long File Names are Converted to Short by Association"
permalink: /kb/150/Q150706/
---

## Q150706: PRB: Long File Names are Converted to Short by Association

{% raw %}

	Article: Q150706
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): win95 win98 kbCtrl kbSSafe kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening a Visual Basic project with a long file name, using any method other
	than starting Visual Basic and then opening the project, results in Visual Basic
	opening the project using the short file name, causing the short file name to
	appear on the title bar of the project.
	
	If this project is under SourceSafe control, certain operations can produce the
	error:
	
	  "file or project not found"
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve the problem:
	
	1. Start Windows Explorer. From the View menu, select Options. In Windows 98,
	  select Folder Options.
	
	2. Click the File Types tab. Double-click Visual Basic Project in the Registered
	  file types list box. The Edit File Type window appears.
	
	3. Double-click Open in the Action list box. The Editing action for type: Visual
	  Basic Project dialog box appears.
	
	4. In the Application used to perform action: text box, put quotation marks ("
	  ") around the Command line for Visual Basic. The text should look like the
	  following:
	
	        "C:\ProgramFiles\Microsoft Visual Basic\vb32.exe" "%1"
	
	5. Click OK, and close all windows and dialog boxes.
	
	Now when you open a Visual Basic project with a long file name, the long file
	name appears on the title bar of the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 win98 kbCtrl kbSSafe kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
