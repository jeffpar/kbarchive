---
layout: page
title: "Q134306: How to Simulate a Tabbed Dialog Box with Vertical Tabs"
permalink: /kb/134/Q134306/
---

## Q134306: How to Simulate a Tabbed Dialog Box with Vertical Tabs

{% raw %}

	Article: Q134306
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Currently, there is no built-in means in the Form Designer to provide vertical
	tabs on PageFrame Pages. This article shows by example how to simulate PageFrame
	vertical tabs.
	
	MORE INFORMATION
	================
	
	The following code sample shows how to create a form with multiple pages and
	vertical tabs. Clicking the appropriate tab displays a WAIT WINDOW that
	identifies the current page selected.
	
	Code Sample
	-----------
	
	  ************************ Start of Example ***********************
	
	  frmForm=CREATEOBJECT("verticaltab")
	  frmForm.SHOW
	  READ EVENTS
	
	  DEFINE CLASS verticaltab AS form
	
	     Top = 0
	     Left = 0
	     DoCreate = .T.
	     Caption = "Form1"
	     LockScreen = .F.
	     Name = "Form1"
	
	     ADD OBJECT pageframe1 AS pageframe WITH ;
	        ErasePage = .T., ;
	        PageCount = 2, ;
	        Top = 24, ;
	        Left = 96, ;
	        Width = 253, ;
	        Height = 192, ;
	        Tabs = .F., ;
	        Name = "Pageframe1", ;
	        Page1.Caption = "Page1", ;
	        Page1.Name = "Page1", ;
	        Page2.Caption = "Page2", ;
	        Page2.Name = "Page2"
	
	     ADD OBJECT commandgroup1 AS commandgroup WITH ;
	        AutoSize = .F., ;
	        ButtonCount = 2, ;
	        BackColor = RGB(192,192,192), ;
	        Value = 1, ;
	        Height = 193, ;
	        Left = 0, ;
	        Top = 24, ;
	        Width = 97, ;
	        Name = "Commandgroup1", ;
	        Command1.AutoSize = .F., ;
	        Command1.Top = 1, ;
	        Command1.Left = -1, ;
	        Command1.Height = 85, ;
	        Command1.Width = 98, ;
	        Command1.Picture = "..\", ;
	        Command1.Caption = "page1", ;
	        Command1.Name = "Command1", ;
	        Command2.AutoSize = .F., ;
	        Command2.Top = 85, ;
	        Command2.Left = 0, ;
	        Command2.Height = 108, ;
	        Command2.Width = 97, ;
	        Command2.Caption = "page2", ;
	        Command2.Name = "Command2"
	
	     ADD OBJECT line1 AS line WITH ;
	        BorderWidth = 2, ;
	        Height = 85, ;
	        Left = 96, ;
	        Top = 26, ;
	        Width = 0, ;
	        Name = "Line1"
	
	     ADD OBJECT line2 AS line WITH ;
	        BorderStyle = 1, ;
	        BorderWidth = 2, ;
	        Height = 105, ;
	        Left = 96, ;
	        Top = 110, ;
	        Width = 0, ;
	        Name = "Line2"
	
	     PROCEDURE commandgroup1.Command1.Click
	        thisform.line1.bordercolor=rgb(192,192,192)
	        thisform.line2.bordercolor=rgb(0,0,0)
	        thisform.pageframe1.activepage=1
	        WAIT WINDOW "Page 1"
	     ENDPROC
	
	     PROCEDURE commandgroup1.Command2.Click
	        thisform.line1.bordercolor=rgb(0,0,0)
	        thisform.line2.bordercolor=rgb(192,192,192)
	        thisform.pageframe1.activepage=2
	        WAIT WINDOW "Page 2"
	     ENDPROC
	
	  ENDDEFINE
	
	  ************************ End of Example *************************
	
	Step-by-Step Example
	--------------------
	
	Use the following steps to create the vertical tabs through the interface:
	
	1. Open the appropriate form.
	
	2. In the Form Controls toolbar, select the page frame button, and drag it to
	  size on the form. (Visual FoxPro creates a page frame with two pages and a
	  tab on each page by default.)
	
	  NOTE: If you want more than two pages, set the PageCount property of the
	  PageFrame to the appropriate number.
	
	3. Set the Tabs property of the page frame to False (.F.), so you don't create
	  horizontal tabs.
	
	4. In the Form Controls toolbar, select the Builder Lock button, if it's not
	  already selected.
	
	5. In the Form Controls toolbar, select the Command Group button, and drag it to
	  create a vertical button group on either side of the page frame. The buttons
	  in this group will simulate the PageFrame tabs.
	
	6. In the Command Group builder:
	
	  a. Set the number of buttons (tabs) equal to the number of pages, or set the
	     ButtonCount property of the command button group when you exit the
	     builder.
	
	  b. Label the buttons with captions or graphics, or set the Caption or Picture
	     property of each button when you exit the builder.
	
	     NOTE: Adjust the Command Buttons, as appropriate, to obtain the desired
	     size and shape.
	
	  c. Click OK when you're finished with the builder.
	
	7. On the Form, double-click the Command Group to display the Code window.
	
	8. In the Code window, select each button from the Object list, and enter code
	  that specifies the page corresponding to that button. For example, to assign
	  the first page of a page frame named pgfMyframe to a button, enter this
	  code:
	
	     THISFORM.pgfMyframe.ActivePage = 1
	
	9. Save and Run the Form.
	
	NOTE: The command buttons can be placed on the Form individually and stretched
	vertically in order to better simulate vertical tabs.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
