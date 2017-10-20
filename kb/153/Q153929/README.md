---
layout: page
title: "Q153929: HOWTO: Use Color Dialog from COMDLG32.DLL in VB and Access"
permalink: /kb/153/Q153929/
---

## Q153929: HOWTO: Use Color Dialog from COMDLG32.DLL in VB and Access

{% raw %}

	Article: Q153929
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Making use of the COMDLG32.DLL is a good reuse of resources under Windows
	because Windows always has COMDLG32.DLL loaded. If you use the COMDLG32.OCX
	control instead, your program must load the OCX into memory and you must also
	distribute an additional 90K file to your customers. The OCX control provides an
	easy-to-use interface to predefined dialog boxes, but is a more expensive hit on
	performance and resources. To optimize performance and reduce resource usage,
	you should minimize the use of controls in your applications and use the Win32
	API calls directly. Below is a code sample of how to use the Choose Color dialog
	box in the COMDLG32.DLL.
	
	MORE INFORMATION
	================
	
	1a. Visual Basic: Start a new project. Form1 is created by default.
	
	1b. Access: Open a database and create a new form.
	
	1. Add a CommandButton (Command1) to the form.
	
	2. Add the following code to the General Declarations section of the form:
	
	     Option Explicit
	
	     Private Type CHOOSECOLOR
	       lStructSize As Long
	       hwndOwner As Long
	       hInstance As Long
	       rgbResult As Long
	       lpCustColors As String
	       flags As Long
	       lCustData As Long
	       lpfnHook As Long
	       lpTemplateName As String
	     End Type
	
	     Private Declare Function ChooseColorAPI Lib "comdlg32.dll" Alias _
	       "ChooseColorA" (pChoosecolor As CHOOSECOLOR) As Long
	
	     Dim CustomColors() As Byte
	
	     Private Sub Command1_Click()
	         Dim cc As CHOOSECOLOR
	         Dim Custcolor(16) As Long
	         Dim lReturn As Long
	         cc.lStructSize = Len(cc)
	         cc.hwndOwner = Me.hWnd
	         cc.hInstance = 0
	         cc.lpCustColors = StrConv(CustomColors, vbUnicode)
	         cc.flags = 0
	         lReturn = ChooseColorAPI(cc)
	         If lReturn <> 0 Then
	             Me.Caption = "RGB Value User Chose: " & Str$(cc.rgbResult)
	             Me.BackColor = cc.rgbResult            ' Visual Basic only ****
	             Me.Section(0).BackColor = cc.rgbResult ' Access only **********
	             CustomColors = StrConv(cc.lpCustColors, vbFromUnicode)
	         Else
	             MsgBox "User chose the Cancel Button"
	         End If
	     End Sub
	
	     Private Sub Form_Load()
	         ReDim CustomColors(0 To 16 * 4 - 1) As Byte
	         Dim i As Integer
	
	         For i = LBound(CustomColors) To UBound(CustomColors)
	             CustomColors(i) = 0
	         Next i
	     End Sub
	
	4a. Visual Basic: Press the F5 key to run the project.
	
	4b. Access: Use the View|Form menu to open the form and run it.
	
	1. Click the CommandButton and the Color dialog box will be displayed. When you
	  choose a color and press OK, the background color of the form will change to
	  your selected color.
	
	The constant CC_PREVENTFULLOPEN, with a decimal value of 4, can be used in the
	flags element of the CHOOSECOLOR structure if you wish to prevent the Custom
	Colors part of the Dialog from being displayed.
	
	NOTE: In the Command1_Click routine above, the code to set the background color
	of an Access form and a Visual Basic form is slightly different. Both commands
	are included and commented. Only type the command that is appropriate for the
	product you are using.
	
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Programmer's Guide, Chapter 11, P.325-332.
	
	Win32 SDK.
	
	Additional query words: Common kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport knintluk kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
