---
layout: page
title: "Q187654: HOWTO: Create a MAPI-Aware UserControl"
permalink: /kb/187/Q187654/
---

## Q187654: HOWTO: Create a MAPI-Aware UserControl

	Article: Q187654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a simple MAPI Control in Visual Basic
	using the MAPI controls that are shipped with Visual Basic.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new instance of Visual Basic. Form1 is created by default.
	
	2. Select a UserControl Project.
	
	3. Add the Microsoft MAPI Controls to the project.
	
	4. Add the MAPI Controls to the UserControl Form.
	
	5. Add four Labels, five CommandButtons, and four Text box controls to the
	  USerControl Form:
	
	6. Caption them as follows:
	
	     Label1.Caption = TO:
	     Label2.Caption = SUBJECT:
	     Label3.Caption = FROM:
	     Label4.Caption = MESSAGE:
	     Text1.Text = ""
	     Text2.Text = ""
	     Text3.Text = ""
	     Text4.Text = ""
	     Command1.Caption = "Connect"
	     Command2.Caption = "Send"
	     Command3.Caption = "<<"
	     Command4.Caption = ">>"
	     Command5.Caption = "Close"
	
	  Two CommandButtons are used to move through the index of messages. These are
	  Command3 and Command4. You can use arrows, letters, or words to show what
	  these buttons are for. Command1 is used to initialize the MAPI mail session.
	  Command2 is used to send mail. Command5 closes the session.
	
	7. Cut and paste the code below into the code page window of the control:
	
	        Option Explicit
	        Dim X As Long
	
	        Private Sub Command3_Click()
	          If X - 1 < 0 Then
	          Else
	            X = X - 1
	            MAPIMessages1.MsgIndex = X
	            Text1.Text = MAPIMessages1.RecipDisplayName
	            Text2.Text = MAPIMessages1.MsgSubject
	            Text3.Text = MAPIMessages1.MsgOrigDisplayName
	            Text4.Text = MAPIMessages1.MsgNoteText
	          End If
	        End Sub
	
	        Private Sub Command4_Click()
	          If X + 1 > MAPIMessages1.MsgCount Then
	            X = MAPIMessages1.MsgCount
	          Else
	            X = X + 1
	            MAPIMessages1.MsgIndex = X
	            Text1.Text = MAPIMessages1.RecipDisplayName
	            Text2.Text = MAPIMessages1.MsgSubject
	            Text3.Text = MAPIMessages1.MsgOrigDisplayName
	            Text4.Text = MAPIMessages1.MsgNoteText
	          End If
	        End Sub
	
	        Private Sub Command1_Click()
	          MAPISession1.SignOn
	          MAPIMessages1.SessionID = MAPISession1.SessionID
	          MAPIMessages1.Fetch
	          If MAPIMessages1.MsgCount > 0 Then
	            Text1.Text = MAPIMessages1.RecipDisplayName
	            Text2.Text = MAPIMessages1.MsgSubject
	            Text3.Text = MAPIMessages1.MsgOrigDisplayName
	            Text4.Text = MAPIMessages1.MsgNoteText
	            Command4.Enabled = True
	          Else
	            MsgBox "No messages to fetch"
	            MAPISession1.SignOff
	            Command4.Enabled = False
	          End If
	        End Sub
	
	        Private Sub Command2_Click()
	          MAPIMessages1.Compose
	          MAPIMessages1.RecipDisplayName = Text1.Text
	          MAPIMessages1.MsgSubject = Text2.Text
	          MAPIMessages1.MsgNoteText = Text3.Text
	          MAPIMessages1.ResolveName
	          MAPIMessages1.Send
	        End Sub
	
	        Private Sub Command5_Click()
	          MAPISession1.Close
	        End Sub
	
	REFERENCES
	==========
	
	For additional information regarding the use of MAPI programming, use Visual
	Basic Help and query on MAPI Controls.
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Richard T. Edwards, Microsoft Corporation
	
	
	Additional query words: kbMAPI kbCtrl kbMsg kbvbp SMapiCMC kbVBp500 kbdse kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
