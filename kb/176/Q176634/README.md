---
layout: page
title: "Q176634: BUG:Line/Circle Methods Don't Print as Transparent onWin95/98/Me"
permalink: /kb/176/Q176634/
---

## Q176634: BUG:Line/Circle Methods Don't Print as Transparent onWin95/98/Me

{% raw %}

	Article: Q176634
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpD
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Circle method to print circles or the Line method to print
	rectangles, the circles do not print as transparent so that overlapped portions
	of the shapes appear. The problem occurs even when the FillStyle property of the
	Printer object is set to Transparent (1).
	
	CAUSE
	=====
	
	This problem occurs when using the Line or Circle methods on Windows 95, Windows
	98, or Windows Me.
	
	RESOLUTION
	==========
	
	To work around this problem, toggle the FillStyle property of the Printer object
	prior to using the Line or Circle method to print as transparent graphical
	objects:
	
	     Printer.FillStyle = 2
	     Printer.Print ""
	     Printer.FillStyle = 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to the Click event of Command1:
	
	        'Print concentric circles
	        Dim i as Integer
	        For i=100 to 1000 Step 100
	           Printer.Circle (1000,1000), i
	        Next
	
	        'Print 10 rectangles
	        For i=100 to 1000 Step 100
	           Printer.Line (5000, 1000) - (5000 + i, 1000 + i), , B
	        Next
	
	        Printer.Enddoc
	
	4. Press the F5 key to run the project. Click Command1 to print. In the output,
	  note that only the outer circle appears instead of ten concentric circles as
	  you would expect.
	
	5. To apply the workaround, add the following code to the Form_Load event of
	  Form1:
	
	        Printer.FillStyle = 2
	        Printer.Print " "
	        Printer.FillStyle = 1
	
	Additional query words: solid fill clear
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
