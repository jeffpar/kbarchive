---
layout: page
title: "Q153092: SAMPLE: How to Add New Menu Items to the System Menu"
permalink: /kb/153/Q153092/
---

## Q153092: SAMPLE: How to Add New Menu Items to the System Menu

{% raw %}

	Article: Q153092
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbVBp400 kbDSupport
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is desirable to add a new menu item to a window's System menu. This
	can be accomplished by using the AppendMenu API call and a Windows sub-classing
	control such as Message Blaster(tm). This article explains how to implement this
	action and provides a code sample.
	
	In order to use the Message Blaster control, you can download the sample, free of
	charge, from the Microsoft Download Center. The following file is available for
	download from the Microsoft Download Center:
	
	  Msgblast.exe
	  (http://download.microsoft.com/download/vb30/Sample8/1/W9XNT4/EN-US/Msgblast.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Download the Message Blaster Control.
	
	2. Start Visual Basic, or choose New Project from the File menu if Visual Basic
	  is already running. Form1 is created by default.
	
	3. From the Tools menu, go to the Custom Controls option and add the
	  MSGBLAST.VBX control to the project.
	
	4. Place a Message Blaster Control on the form.
	
	5. Place a Command button on Form1. Change the Caption to "&ADD."
	
	6. Add the following code to the general declarations section of Form1:
	
	     Option Explicit
	
	     Private Declare Function RemoveMenu% Lib "User" (ByVal hMenu%, ByVal _
	        nPosition%, ByVal wFlags%)
	     Private Declare Function GetSystemMenu Lib "User" (ByVal hWnd%, ByVal _
	        revert%) As Integer
	     Private Declare Function GetWindowLong Lib "User" (ByVal hWnd As _
	        Integer,ByVal nIndex As Integer) As Long
	     Private Declare Function SetWindowLong Lib "User" (ByVal hWnd As _
	        Integer, ByVal nIndex As Integer, ByVal dwNewLong As Long) As Long
	     Private Declare Function AppendMenu Lib "User" (ByVal hMenu As _
	        Integer, ByVal wFlags As Integer, ByVal wIDNewItem As Integer, _
	        ByVal lpNewItem As Any) As Integer
	
	     Private Const MF_STRING = &H0
	     Private Const MF_BYCOMMAND = &H0
	     Private Const WM_SYSCOMMAND = &H112
	
	     'Enter the line below as one line of code
	     Private Sub RemoveControlMenuItemByPosition(frm As Form, iPosition As
	     Integer)
	       Dim iHSysMenu As Integer
	       Dim iReturn As Integer
	       Dim lDW As Long
	       Dim lRR As Long
	       iHSysMenu = GetSystemMenu(frm.hWnd, 0)
	       iReturn = RemoveMenu(iHSysMenu, iPosition, MF_BYPOSITION)
	       lDW = GetWindowLong(frm.hWnd, -16)   'Window style
	       lDW = lDW And &HFFFEFFFF    'Turn off bits for Maximize arrow button
	       lRR = SetWindowLong(frm.hWnd, -16, lDW)
	     End Sub
	
	     Private Sub RemoveControlMenuItemByCommand(frm As Form, lCommand As _
	       Long)
	       Dim iHSysMenu As Integer
	       Dim iReturn As Integer
	       Dim lDW As Long
	       Dim lRR As Long
	       iHSysMenu = GetSystemMenu(frm.hWnd, 0)
	       iReturn = RemoveMenu(iHSysMenu, lCommand, MF_BYCOMMAND)
	       lDW = GetWindowLong(frm.hWnd, -16)   'Window style
	       lDW = lDW And &HFFFEFFFF    'Turn off bits for Maximize arrow button
	       lRR = SetWindowLong(frm.hWnd, -16, lDW)
	     End Sub
	
	     Private Sub cmdRemoveMenuItems_Click()
	       Call RemoveControlMenuItemByPosition(Me, 0)
	     End Sub
	
	7. Place the following code in the Form Load Event:
	
	     Private Sub Form_Load()
	       MsgBlaster1.hWndTarget = Me.hWnd
	       MsgBlaster1.MsgList(0) = WM_SYSCOMMAND
	     End Sub
	
	8. Place the following code in the Message event of the Message Blaster Control:
	
	     'Enter the line below as one line of code
	
	     Private Sub MsgBlaster1_Message(MsgVal As Integer, wParam As Integer,
	     lParam As Long, ReturnVal As Long)
	       Select Case wParam
	         Case 1
	           MsgBox "You clicked to About"
	         Case 2
	           MsgBox "You clicked on Help"
	         Case 3
	         'This option removes the custom added menu items and the separator.
	         Dim iHSysMenu As Integer
	         Dim iReturn As Integer
	         iHSysMenu = GetSystemMenu(Me.hWnd, 0)
	         Call RemoveControlMenuItemByCommand(Me, 1)
	         Call RemoveControlMenuItemByCommand(Me, 2)
	         Call RemoveControlMenuItemByCommand(Me, 3)
	       End Select
	     End Sub
	
	9. Place the following code in the Command1 Click event:
	
	     Private Sub Command1_Click()
	       Dim iReturn As Integer
	       Dim iHSysMenu As Integer
	       iHSysMenu = GetSystemMenu(Me.hWnd, 0)
	       iReturn = AppendMenu(iHSysMenu, MF_STRING, 1, "About...")
	       iReturn = AppendMenu(iHSysMenu, MF_STRING, 2, "Help...")
	       iReturn = AppendMenu(iHSysMenu, MF_STRING, 3, "Remove items...")
	     End Sub
	
	10. Press the F5 key or choose Start from the Run menu to run the project. Click
	  the Add button. View the System menu and note that the new items have been
	  added.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q110498 How to Add Items into Control Menu Box of Visual Basic Form
	
	  Q110104 Using MSGBLAST.VBX Control to Process Windows Messages from VB
	
	Additional query words: msgblast 4.00
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbVBp400 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
