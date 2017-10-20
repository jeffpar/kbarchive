---
layout: page
title: "Q193036: BUG: &quot;On Error Resume Next&quot; Enters Infinite Loop in Native Code"
permalink: /kb/193/Q193036/
---

## Q193036: BUG: &quot;On Error Resume Next&quot; Enters Infinite Loop in Native Code

{% raw %}

	Article: Q193036
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSW
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After compiling to native code, a Visual Basic application using "On Error
	Resume Next" together with a For loop may sometimes enter an infinite loop when
	running as a standalone executable.
	
	RESOLUTION
	==========
	
	To work around this behavior, the code can be restructured. The code provided
	below resolves the problem for the code that reproduces this bug in the "Steps
	To Reproduce Behavior" section of this article:
	
	     Public Sub Form_Load()
	        On Error Resume Next
	        Dim x As Integer
	        Dim z as integer
	        Dim mArray as Variant
	        z = UBound(mArray)
	           For x = 0 To z
	              MsgBox "clear"
	           Next x
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Paste the following code into Form1:
	
	        Public Sub Form_Load()
	           On Error Resume Next
	           Dim x As Integer
	           Dim mArray as Variant
	           For x = 0 To UBound(mArray)
	              MsgBox "Test"
	           Next x
	        End Sub
	
	3. Select Properties from the Project menu. Under the Compile tab, select
	  Compile to Native Code
	
	4. Run the project by pressing the F5 key. Note that the message box displays
	  only once.
	
	5. Select Make Project1.exe to compile the project.
	
	6. Run the compiled executable.
	
	  Instead of displaying one message box, an endless number message boxes are
	  displayed.
	
	  On Windows NT or Windows 2000, you can end this application through the Task
	  Manager using the End Task button.
	
	  On Win95/98/Me, press the CTRL+ALT+DEL key combination and select the program.
	  Press the End Task button to close the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
