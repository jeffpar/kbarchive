---
layout: page
title: "Q180822: FP98: How to Use Microsoft Forms 2.0 ActiveX Controls"
permalink: kb/180/Q180822/
---

## Q180822: FP98: How to Use Microsoft Forms 2.0 ActiveX Controls

	Article: Q180822
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 97 version of this article, see Q171673.
	
	WARNING:
	--------
	
	The Microsoft Forms 2.0 package was not designed to work outside of the Visual Basic for Applications environment. While individual developers might be successful in deploying it to containers such as Microsoft Internet Explorer, using Forms in this manner is neither recommended nor supported. For more information, see the following Microsoft Knowledge Base article:
	
	  
	
	  Q236458 Using Microsoft Forms 2.0 in Internet Explorer
	
	SUMMARY
	=======
	
	This article describes how to insert Microsoft Forms 2.0 ActiveX controls in
	Microsoft FrontPage Editor. In addition, the examples use Microsoft Visual Basic
	Scripting Edition (VBScript) code to set properties and respond to control
	events.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The Microsoft Forms 2.0 ActiveX Controls described in this article are included
	with Microsoft FrontPage.
	
	Message Box Example
	-------------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 CommandButton."
	
	  b. In the Name box, type "CommandButton1" (without the quotation marks)
	
	  c. Click OK.
	
	3. On the Insert menu, point to Advanced, and click Script.
	
	4. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub CommandButton1_Click()
	               ' Displays a message box with the date when the command
	               ' button is clicked.
	               msgbox "Today's date is " &DATE,64,"My MsgBox"
	            End sub
	
	5. Click OK.
	
	Label Example
	-------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0
	     CommandButton."
	
	  b. In the Name box, type "CommandButton2" (without the quotation marks).
	
	  c. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label1" (without the quotation marks).
	
	  c. In the Width box, enter 200.
	
	  d. Click OK.
	
	5. On the Insert menu, point to Advanced, and click Script.
	
	6. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. Click to the right of the Label to cancel the selection.
	
	  c. In the Script box, enter the following code:
	
	            Sub CommandButton2_Click()
	               ' The following example fills a Label control with text
	               ' when you click the command button.
	               Label1.Caption="Today's date is " & DATE
	            End sub
	
	  d. Click OK.
	
	Text Box Example
	----------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 TextBox."
	
	  b. In the Name box, type "TextBox1" (without the quotation marks).
	
	  c. In the Width box, enter 140.
	
	  d. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 CommandButton."
	
	  b. In the Name box, type "CommandButton3" (without the quotation marks).
	
	  c. Click OK.
	
	5. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	6. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 TextBox."
	
	  b. In the Name box, type "TextBox2" (without the quotation marks).
	
	  c. In the Width box, enter 300.
	
	  d. Click OK.
	
	7. On the Insert menu, point to Advanced, and click Script.
	
	8. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub CommandButton3_Click()
	               ' Text box will be filled in when you click the command
	               ' button.
	               TextBox2.Text="You have entered: "& UCASE(TextBox1.Text)
	            End sub
	
	  c. Click OK.
	
	Check Box Example
	-----------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 CheckBox."
	
	  b. In the Name box, type "CheckBox1" (without the quotation marks).
	
	  c. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 CommandButton."
	
	  b. In the Name box, type "CommandButton4" (without the quotation marks).
	
	  c. In the Width box, enter 140.
	
	  d. Click OK.
	
	5. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	6. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label2" (without the quotation marks).
	
	  c. In the Width box, enter 300.
	
	  d. Click OK.
	
	7. On the Insert menu, point to Advanced, and click Script.
	
	8. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	           sub CommandButton4_Click()
	              ' Evaluates the value of the check box and inserts text
	              ' in the label when you click the command button.
	             if CheckBox1.Value=TRUE then Label2.Caption="The checkbox _
	               is checked"
	             if CheckBox1.Value=FALSE then Label2.Caption="The checkbox _
	               is not checked"
	           end sub
	
	  c. Click OK.
	
	Option Button Example
	---------------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 OptionButton."
	
	  b. In the Name box, type "OptionButton1" (without the quotation marks).
	
	  c. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 CommandButton."
	
	  b. In the Name box, type "CommandButton5" (without the quotation marks).
	
	  c. Click OK.
	
	5. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	6. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label3" (without the quotation marks).
	
	  c. In the Width box, enter 300.
	
	  d. Click OK.
	
	7. Press ENTER. The pointer will move to a new line.
	
	8. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	9. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 OptionButton."
	
	  b. In the Name box, type "OptionButton2" (without the quotation marks).
	
	  c. Click OK.
	
	10. On the Insert menu, point to Advanced, and click Script.
	
	11. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub CommandButton5_Click()
	               ' Evaluates the value of the option button and inserts
	               ' text in the label when you click the command button.
	               If OptionButton1.Value=True Then
	               Label3.Caption = "This option is selected"
	               Else
	               Label3.Caption = "The other option is selected"
	               End If
	            End sub
	
	  c. Click OK.
	
	Toggle Button Example
	---------------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 ToggleButton."
	
	  b. In the Name box, type "ToggleButton1" (without the quotation marks).
	
	  c. In the Width box, enter 100.
	
	  d. In the Height box, enter 30.
	
	  e. Click OK.
	
	3. On the Insert menu, point to Advanced, and click Script.
	
	4. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            sub ToggleButton1_Click()
	              ' Evaluates the value of the toggle button and inserts text
	              ' in the label when you click the command button.
	              If ToggleButton1.Value = True Then
	              ToggleButton1.Caption = "DEPRESSED"
	              Else
	              ToggleButton1.Caption = ""
	              End If
	            End Sub
	
	  c. Click OK.
	
	Spin Button Example
	-------------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 SpinButton."
	
	  b. In the Name box, type "SpinButton1" (without the quotation marks).
	
	  c. Click Properties. In the Properties window, do the following:
	
	     1. In the Properties list, click Min.
	
	     2. In the Value box, type "-100" (without the quotation marks).
	
	     3. Click Apply.
	
	     4. Click the Close button in the top right corner of the Properties
	        window.
	
	     5. In the Edit ActiveX Control dialog box, click OK.
	
	  d. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label4" (without the quotation marks).
	
	  c. Click OK.
	
	5. On the Insert menu, point to Advanced, and click Script.
	
	6. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            sub SpinButton1_SpinDown()
	               ' Evaluates if the spin button has been clicked and
	               ' inserts text in the label when you click the
	               ' command button.
	               Label4.Caption = SpinButton1.Value
	            end sub
	
	            sub SpinButton1_SpinUp()
	               ' Evaluates if the spin button has not been clicked
	               ' and inserts text in the label when you click the
	               ' command button.
	               Label4.Caption = SpinButton1.Value
	            end sub
	
	  c. Click OK.
	
	Scroll Bar Example
	------------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 ScrollBar."
	
	  b. In the Name box, type "ScrollBar1" (without the quotation marks).
	
	  c. Click Properties. In the Properties window, do the following:
	
	     1. In the Properties list, click Min.
	
	     2. In the Value box, type "-32766" (without the quotation marks).
	
	     3. Click Apply.
	
	     4. Click the Close button in the top right corner of the Properties
	        window.
	
	     5. In the Edit ActiveX Control dialog box, click OK.
	
	  d. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label5" (without the quotation marks).
	
	  c. Click OK.
	
	5. On the Insert menu, point to Advanced, and click Script.
	
	6. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub ScrollBar1_Change()
	            ' Evaluates the position of the marker on the scroll bar and
	            ' inserts text in the label when the command button is
	            ' clicked.
	            Label5.Caption = -(ScrollBar1.Value)
	            End sub
	
	  c. Click OK.
	
	List Box Example
	----------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 ListBox."
	
	  b. In the Name box, type "ListBox1" (without the quotation marks).
	
	  c. Click Properties. In the Properties window, do the following:
	
	     1. In the Properties list, click BorderStyle.
	
	     2. In the Value list, select 1-Single.
	
	     3. Click Apply.
	
	     4. Click the Close button in the top right corner of the Properties
	        window.
	
	     5. In the Edit ActiveX Control dialog box, click OK.
	
	  d. Click OK.
	
	3. On the Insert menu, point to Advanced, and then click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label6" (without the quotation marks).
	
	  c. In the Width box, enter 400.
	
	  d. Click OK.
	
	5. On the Insert menu, point to Advanced, and click Script.
	
	6. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub ListBox1_Click()
	               ' Evaluates which option in a list box has been
	               ' selected and fills in the resulting text in the label
	               ' when the command button is clicked.
	               Label6.Caption= "You have selected " & _
	               Listbox1.List(ListBox1.ListIndex)
	            End sub
	
	     NOTE: A ListBox requires you to write script that populates the list with
	     values in an array. The script should be inserted at the top of the page
	     so that it executes when your page is opened in a Web browser.
	
	7. Press CTRL+HOME. Press ENTER. Press the UP ARROW key. The pointer should be
	  positioned at the beginning of a blank line at the top of the page.
	
	8. On the Insert menu, point to Advanced, and click Script.
	
	9. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            Sub window_onLoad()
	            ' Creates and populates the array used in the preceding
	            ' list box example.
	            '
	            ' Dimension array to populate the list box.
	            Dim ListBoxArray(2)
	            ListBoxArray(0)="RED"
	            ListBoxArray(1)="WHITE"
	            ListBoxArray(2)="BLUE"
	            ListBox1.List=ListBoxArray
	            End sub
	
	  c. Click OK.
	
	Combo Box Example
	-----------------
	
	1. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	2. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, select "Microsoft Forms 2.0 ComboBox."
	
	  b. In the Name box, type "ComboBox1" (without the quotation marks).
	
	  c. Click OK.
	
	3. On the Insert menu, point to Advanced, and click ActiveX Control.
	
	4. In the ActiveX Control Properties dialog box, do the following:
	
	  a. In the Pick A Control list, "select Microsoft Forms 2.0 Label."
	
	  b. In the Name box, type "Label7" (without the quotation marks).
	
	  c. In the Width box, enter 400.
	
	  d. Click OK.
	
	5. On the Insert menu, point to Advanced, and click Script.
	
	6. In the Script dialog box, do the following:
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code:
	
	            sub ComboBox1_Click()
	               ' Evaluates which option in a combo box has been
	               ' selected and fills in the resulting text in the label
	               ' when the command button is clicked
	               Label7.Caption= "You have selected " & _
	               ComboBox1.List(ComboBox1.ListIndex)
	            end sub
	
	  c. Click OK.
	
	     NOTE: A ListBox requires you to write script that populates the list with
	     values in an array. The script should be inserted at the top of the page
	     so that it executes when your page is opened in a Web browser.
	
	7. Double-click the Script icon at the top of the page.
	
	  NOTE: This icon was created in step 6 of the List Box example.
	
	  a. Under Language, click VBScript and click to clear the "Run Script on
	     Server" check box.
	
	  b. In the Script box, enter the following code.
	
	     NOTE: Place this code at the bottom of the Script box, after the existing
	     script, but before the last line that reads "end sub."
	
	  ' Creates and populates the array used in the
	            ' preceding list box example.
	            '
	            ' Dimension array to populate the list box.
	            Dim ComboBoxArray(2)
	            ComboBoxArray(0)="RED"
	            ComboBoxArray(1)="WHITE"
	            ComboBoxArray(2)="BLUE"
	            ComboBox1.List=ComboBoxArray
	
	  c. Click OK.
	
	REFERENCES
	==========
	
	For additional information about Microsoft Visual Basic Scripting Edition,
	please see the following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/scripting/vbscript
	
	Additional query words: 98 activex ie fpscript
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
