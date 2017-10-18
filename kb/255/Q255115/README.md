---
layout: page
title: "Q255115: BUG: Printer.ForeColor Property Does Not Work Correctly"
permalink: kb/255/Q255115/
---

## Q255115: BUG: Printer.ForeColor Property Does Not Work Correctly

	Article: Q255115
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Printer.ForeColor property to print color text. However, if you
	set this property before you print anything on a new page, it may have no
	effect.
	
	CAUSE
	=====
	
	This problem stems from the way in which the Visual Basic Printer object calls
	the underlying API functions, StartPage and EndPage.
	
	- In Microsoft Windows 95, Windows 98, and Windows Me, the StartPage function
	  call resets the Printer's Device Context attributes to default values and so
	  it is required to set the fore color and re-select objects every time the
	  StartPage function is called.
	
	- In Microsoft Windows NT and Microsoft Windows 2000, the StartPage function
	  call does not reset the Device Context attributes so that Device Context
	  attributes remain constant across subsequent pages. However, it is required
	  to set the fore color and select objects the first time the StartPage
	  function is called.
	
	- The Printer object for Visual Basic does not set the fore color automatically
	  after the StartPage function call.
	
	- The Printer object calls the StartPage function only when the Printer.Print
	  method is called to eliminate unnecessary blank pages. The Printer.NewPage
	  method only calls the EndPage function.
	
	RESOLUTION
	==========
	
	To work around the problem, you need to force a call to the StartPage function
	with the Printer.Print method and then set the Printer.ForeColor property
	yourself.
	
	You need to do this for the first page only if your application only targets on
	Windows NT and Windows 2000.
	
	You need to do this for each page if your application is to be delivered to
	Windows 9x and Windows Me platforms.
	
	NOTE: This workaround requires that you issue the Printer.NewPage function call
	explicitly by calculating when a new page should be started. If Visual Basic
	automatically starts a new page for you, you do not have a chance to apply the
	workaround for Windows 9x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a color printer to your computer and set it as the default printer.
	
	2. Create a new Standard EXE project with Visual Basic 6.0. Form1 is created
	  automatically.
	
	3. Add the following code to the code window of Form1:
	
	  Private Sub Form_Load()
	      Printer.ColorMode = 2
	      Printer.ForeColor = vbRed
	      Printer.Print "page 1"
	      Printer.NewPage
	      Printer.Print "Page 2"
	      Printer.EndDoc
	  End Sub
	
	4. Press the F5 key to run the project and note that both page 1 and page 2 are
	  printed in black.
	
	5. Return to design mode and change the code for Form1 to be:
	
	  Private Sub Form_Load()
	      Printer.ColorMode = 2
	      Printer.Print " ";  ' force a call to StartPage
	      Printer.CurrentX = 0  ' restore the position
	      Printer.ForeColor = vbRed
	      Printer.Print "Page 1"
	      Printer.NewPage  ' VB only calls EndPage here
	      ' The following three lines are not necessary for NT/Windows 2000
	      ' But you need them if you want to make the code work under Windows 9x or Windows Me
	      Printer.Print " ";  ' force a call to StartPage
	      Printer.CurrentX = 0  ' restore the position
	      Printer.ForeColor = vbRed
	      Printer.Print "Page 2"
	      Printer.EndDoc
	  End Sub
	
	6. Press F5 to run it again and note that it works as expected.
	
	REFERENCES
	==========
	
	MSDN Platform SDK: StartPage
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
