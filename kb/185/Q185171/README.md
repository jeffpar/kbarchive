---
layout: page
title: "Q185171: HOWTO: How to Send/Receive E-Mail Messages with Visual Basic"
permalink: /kb/185/Q185171/
---

## Q185171: HOWTO: How to Send/Receive E-Mail Messages with Visual Basic

{% raw %}

	Article: Q185171
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to create a simple MAPI client program. The article also
	demonstrates how to display existing messages and how to create and send new
	messages.
	
	MORE INFORMATION
	================
	
	Through the use of MAPI controls in Visual Basic, it is relatively easy to
	create a MAPI Client. The following instructions and code show you how:
	
	1. Start up Visual Basic and select a Standard EXE project. On the Project menu,
	  click Components, and select Microsoft MAPI Controls. There are two new icons
	  displayed on the toolbar. Both icons have envelopes; one with a key, the
	  other with a paperclip. These are your MAPI controls.
	
	2. Add these MAPI controls to your form.
	
	3. Add the following items to the form:
	
	     Four Labels
	     Four CommandButtons
	     Four TextBoxes
	
	  The label captions are as follows:
	
	     Label1.Caption = "To:"
	     Label2.Caption = "SUBJECT:"
	     Label3.Caption = "FROM:"
	     Label4.Caption = "MESSAGE:"
	
	4. Place the TextBoxes in numerical sequence with these labels (side-by- side
	  for labels 1 thru 3, and below for label 4).
	
	5. Label the CommandButtons as follows:
	
	   
	     Command1.Caption = "<<"
	     Command2.Caption = ">>"
	     Command3.Caption = "Connect"
	     Command4.Caption = "Send"
	     Command5.Caption = "Close Session"
	
	
	6. Add the following code to your form:
	
	        Option Explicit
	        Dim X As Long
	
	        Private Sub Command1_Click()
	
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
	
	        Private Sub Command2_Click()
	
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
	
	        Private Sub Command3_Click()
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
	
	        Private Sub Command4_Click()
	
	          MAPIMessages1.Compose
	          MAPIMessages1.RecipDisplayName = Text1.Text
	          MAPIMessages1.MsgSubject = Text2.Text
	          MAPIMessages1.MsgNoteText = Text4.Text
	          MAPIMessages1.ResolveName
	          MAPIMessages1.Send
	
	        End Sub
	
	        Private Sub Command5_Click()
	
	          MAPISession1.SignOff
	          Unload Me
	
	        End Sub
	
	Additional query words: kbDSupport kbdse kbvbp500 kbVBp600 kbMAPI kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
