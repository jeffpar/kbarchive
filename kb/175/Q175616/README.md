---
layout: page
title: "Q175616: FIX: Error 438: &quot;Object Doesn't Support This Property or Method&quot;"
permalink: /kb/175/Q175616/
---

## Q175616: FIX: Error 438: &quot;Object Doesn't Support This Property or Method&quot;

{% raw %}

	Article: Q175616
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kb16bitonly kbnokeyword kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Error 438 occurs when running a program in which a form is assigned to a
	variable and that variable is used to access a control on the form if the
	program is on a system running Windows 95 with Regional Settings set to a
	setting other than English (United States). The error text is:
	
	  Run-Time Error #438:
	  Object doesn't support this property or method
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this problem.
	
	- Access the form directly rather than by a variable containing the form.
	
	  -or-
	
	- Create property procedures in the form's code to provide access to the
	  properties of the controls on the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Windows 98.
	
	MORE INFORMATION
	================
	
	To reproduce this bug consistently, you will need HeapWalker, a utility that
	ships with the Windows 16-bit Software Development Kit and the 16-bit version of
	Visual C++.
	
	Steps to Reproduce
	------------------
	
	1. From Control Panel, click Regional Settings to open the Regional Settings
	  dialog box. Set the Regional Settings to English (Australian).
	
	2. Start the 16-bit edition of Visual Basic 4.0. If it is already running,
	  select New Project from the File menu,.
	
	3. Add a CommandButton to Form1.
	
	4. Copy the following code to the Code window of Form1:
	
	        Private Sub Command1_Click()
	           Dim MyForm As Form
	           Dim i As Long
	           Set MyForm = Form1
	           For i = 1 To 10000
	              MyForm.Command1.Caption = i
	              DoEvents
	           Next i
	         End Sub
	
	5. From the File menu, click Make EXE File to create an executable file.
	
	6. Run the executable file and then click the CommandButton in your program.
	  While it is running, run HeapWalker's Segmentation Test. You will receive the
	  run-time error #438.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbnokeyword kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
