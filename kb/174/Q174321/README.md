---
layout: page
title: "Q174321: FIX: BackColor of MaskEdBox Control Changes When Enabled=False"
permalink: /kb/174/Q174321/
---

## Q174321: FIX: BackColor of MaskEdBox Control Changes When Enabled=False

{% raw %}

	Article: Q174321
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Enabled property of the Masked EditBox control to False, the
	Backcolor of the control changes and cannot be changed to another color.
	
	CAUSE
	=====
	
	When you set the Enabled property of the Masked EditBox control to False, the
	Backcolor of the control changes to the Windows Control Panel setting for "3D
	Objects." This problem occurs under the following circumstances:
	
	- You are using Visual Basic version 4.0.
	
	- or -
	
	- You are using Visual Basic version 5.0 on Windows 95, Windows 98, or Windows
	  Me.
	
	RESOLUTION
	==========
	
	To work around this problem, place the Masked Edit control inside a PictureBox
	control. Then, to disable the Masked Edit control, set the Enabled property of
	the PictureBox to False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Add a reference to the "Microsoft Masked Edit Control" (MSMASK32.OCX).
	
	3. Add a MaskEdBox, TextBox and CommandButton to Form1.
	
	4. Add the following code to the Click event of Command1:
	
	        Text1.Enabled = False
	        MaskEdBox1.Enabled = False
	
	5. Press the F5 key to run the project. Click Command1.
	
	  RESULTS: The BackColor of the MaskEdBox changes to the "3D Objects" color
	  setting while the BackColor of the TextBox remains unchanged.
	
	Additional query words: masked edit box editbox msmask32.ocx kbComp
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
