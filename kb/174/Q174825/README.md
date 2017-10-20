---
layout: page
title: "Q174825: FIX: Accessing Image Property of PictureBox Diminishes Resources"
permalink: /kb/174/Q174825/
---

## Q174825: FIX: Accessing Image Property of PictureBox Diminishes Resources

{% raw %}

	Article: Q174825
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport kbControl
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Image property of a PictureBox control repeatedly diminishes GDI and
	System resources on Windows 95, Windows 98, or Windows Me.
	
	RESOLUTION
	==========
	
	Use the BitBlt API function to provide the same functionality as the Image
	property. The following article in the Microsoft Knowledge Base provides
	information about using the BitBlt API function:
	
	  Q147810 : HOWTO: Use Windows BitBlt Function in Visual Basic Application
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The following shows you how to create a sample project that demonstrates this
	bug. The instructions assume that you have the System Resource Meter running so
	you can see the effect of accessing the Image property. The System Resource
	Meter is a system tool usually installed in the Accessories program group if you
	select the System Resource Meter option when you install Windows 95 or Windows
	98.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a PictureBox, Command Button, and Label control to Form1.
	
	3. Set the Picture property of the PictureBox control to an appropriate bitmap
	  file.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Dim I as Integer
	           For I = 1 to 100
	              Picture1.Picture = Picture1.Image
	              Label1.Caption = Trim(Str(I))
	              DoEvents
	           Next I
	        End Sub
	
	5. Press the F5 key to run the program. Minimize the Visual Basic IDE so you can
	  see both Form1 and the System Resource meter running. Click Command1 and note
	  that the GDI and System Resources diminish by about 20 percent with the click
	  of the CommandButton.
	
	Additional query words: memory leak resource
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
