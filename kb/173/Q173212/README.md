---
layout: page
title: "Q173212: FIX: &quot;Default&quot; Property Ignored for CommandButton on Win NT"
permalink: /kb/173/Q173212/
---

## Q173212: FIX: &quot;Default&quot; Property Ignored for CommandButton on Win NT

{% raw %}

	Article: Q173212
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport kbControl
	Last Modified: 29-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use either the Slider control or the ListView control provided by the
	COMCTL32.OCX (version 5.00.3717, 5.00.3828, or 6.00.8022), the "Default"
	property of a command button is ignored. No error occurs, but the button's Click
	event is not executed.
	
	This behavior only occurs under the Windows NT, Windows 98, Windows Me, and
	Windows 2000 operation systems. This does not occur under Windows 95.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a reference to the "Windows Common Controls" (COMCTL32.OCX).
	
	3. Add a CommandButton on to the default form.
	
	4. Set the Default property of the CommandButton to True.
	
	5. Paste the following code in the code window of the form:
	
	        Private Sub Command1_Click()
	           MsgBox "Click Event Has Been Fired"
	        End Sub
	
	6. Place a TextBox, ListView, and a Slider control on the form.
	
	7. Save and run the application.
	
	8. Set the focus on the TextBox and press the ENTER key.
	
	  RESULT: The CommandButton's Click event fires and the message box appears as
	  expected.
	
	9. Set the focus on either the Slider or the ListView controls.
	
	10. Press Enter.
	
	  RESULT: The CommandButton's Click event does not fire and the message box
	  does not appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbVBA500Search
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
