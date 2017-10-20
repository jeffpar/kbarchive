---
layout: page
title: "Q216547: BUG: Err.Raise 40040 Stores the Err.Number as 440"
permalink: /kb/216/Q216547/
---

## Q216547: BUG: Err.Raise 40040 Stores the Err.Number as 440

{% raw %}

	Article: Q216547
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the statement Err.Raise 40040 is executed, the value of Err.Number is set
	to 440.
	
	RESOLUTION
	==========
	
	Do not use the user defined error 40040.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you raise the error code 40040 (=&H9C68) using the Err.Raise method,
	Visual Basic sets the value of Err.Number to 440. The Err.Description and other
	properties of the Err object are set correctly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Paste the following code in the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     On Error Resume Next
	     Err.Raise 40040
	     MsgBox Err.Number & ": " & Err.Description ' will display 440
	     Err.Clear ' Clear the error for the next Raise method
	     Err.Raise 440
	     MsgBox Err.Number & ": " & Err.Description
	  End Sub
	
	3. Run the program. A message box with the error number and description raised
	  for 40040 will be displayed.
	
	4. Click OK and a message box with the error number and description raised for
	  440 will be displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
