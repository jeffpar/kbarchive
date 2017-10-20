---
layout: page
title: "Q172343: FIX: Controls Cannot Be Added to Toolbar Programmatically"
permalink: /kb/172/Q172343/
---

## Q172343: FIX: Controls Cannot Be Added to Toolbar Programmatically

{% raw %}

	Article: Q172343
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport kbControl
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual InterDev, version 1.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Visual Basic, you may add controls to a Toolbar control by creating a
	placeholder button on the toolbar and then setting the control to the same
	position. If you use the Comctl32.ocx that ships with Visual Studio 97 and
	Visual Basic 5.0, or MSCOMCTL.OCX that ships with Visual Studio 6.0 and Visual
	Basic 6.0, the control may unexpectedly appear behind the toolbar.
	
	RESOLUTION
	==========
	
	To work around this problem, create a pause with DoEvents after you set all the
	controls in place and then set the Toolbar control to the bottom of the ZOrder.
	
	NOTE: This workaround does not apply to non-windowed controls, such as a Label or
	a Shape. To use this workaround with non-windows controls, the controls must be
	contained in a PictureBox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. For Visual Studio 6.0 and Visual Basic 6.0 using
	MSCOMCTL.OCX, this behavior has been resolved with Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic project.
	
	2. Click Components on the Project menu and check "Microsoft Windows Common
	  Controls 5.0."
	
	3. Add a Toolbar control and a ComboBox control to Form1.
	
	4. Add the following code to Form1:
	
	        Private Sub Form_load()
	
	        Dim btn As Variant
	
	           Me.Show
	
	           'Add a separator to the toolbar
	           Toolbar1.Buttons.Add Style:=tbrSeparator
	
	           'Add a Placeholder to the toolbar.
	           Set btn = Toolbar1.Buttons.Add(Key:="ComboBox", _
	              Style:=tbrPlaceholder)
	           btn.Width = 2000
	
	  'Place the combo box on top of the Placeholder
	
	           With Combo1
	              .Width = btn.Width
	              .Top = btn.Top
	              .Left = btn.Left
	              .ZOrder 0
	           End With
	        End Sub
	
	5. Press F5 to run the application. Notice that Combo1 does not appear over the
	  Placeholder on Toolbar1.
	
	6. To correct this problem, add the following code just before End Sub of the
	  Form_Load event procedure:
	
	        DoEvents
	        Toolbar1.ZOrder 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:1.0,4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
