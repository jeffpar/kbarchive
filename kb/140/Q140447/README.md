---
layout: page
title: "Q140447: PC MAPI: Sample VB Code to Send a Message"
permalink: /kb/140/Q140447/
---

## Q140447: PC MAPI: Sample VB Code to Send a Message

{% raw %}

	Article: Q140447
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Simple Messaging Application Programming Interface (MAPI) includes functions
	that allow developers to logon, send, and logoff of Microsoft Mail
	programmatically. The following Microsoft Visual Basic code illustrates
	successful calls to these functions.
	
	MORE INFORMATION
	================
	
	The following Microsoft Visual Basic code uses:
	
	- MAPILogOn function to initiate a mail session or run with an existing session
	  if one exists.
	
	- MAPIRecip structure to set up the recipients of the mail message.
	
	- MAPIMessage structure to set up the content of the mail message.
	
	- MAPISendMail function to send the message.
	
	- MAPILogOff function to end the mail session.
	
	IMPORTANT NOTE: Make sure a MAPI declaration module, such as MAPILIB.BAS, is
	included in the project.
	
	  'Example VB code of sending mail via Simple MAPI using MAPI.DLL:
	
	  '*********** Important ******************************
	  'make sure MAPILIB.BAS or a module that contains
	  'MAPI functions declaration is already included in the project
	
	  ' *************************************************
	  '        Simple MAPI Declarations
	  ' *************************************************
	  ' Set up the message structure and recipient structures
	  Dim M As MAPIMessage      ' dimension new message structure
	  Dim Mo As MapiRecip      ' dimension originator structure
	  M.RecipCount = 1&      ' set RecipCount property of new message to
	   be 1
	  M.FileCount = 0&      ' set FileCount property of new message to be
	   0
	  MsgId$ = ""         ' set MsgID string to ""
	  MsgType$ = "IPM.Microsoft Mail.Note"   'set MsgType string to default MS
	   Mail type
	  M.Reserved = 0&      ' set Reserved property of new message to be 0&
	  M.MessageType = MsgType$   ' set MessageType property of new message to
	   be MsgType$
	  M.DateReceived = ""      ' set DateReceived property of new message to
	   be ""
	  M.Flags = 0&         ' set Flags property of new message to be 0&
	  ReDim mr(0 To 0) As MapiRecip   ' dimension recipient array structure for 1
	   recipient only
	  ReDim MF(0 To 0) As MapiFile   ' dimension file attachment array structure
	  MF(0).Reserved = 0&      ' set Reserved property of file structure to
	   be 0&
	  MF(0).Flags = 0&      ' set Flags property of file structure to be
	   0&
	  MF(0).Position = -1      ' set Position property of file structure to
	   be -1
	  MF(0).FileType = ""      ' set FileType property of file structure to
	   be ""
	  'You may not need this if a session already is established
	  'i.e. Mail or S+ is running.
	  ' **************************************************
	  ' Login and start the MAPI Session
	  ' **************************************************
	  rc& = MAPILogon(Form1.hWnd, "", "", MAPI_LOGON_UI, 0&, lhSession&)
	  If rc& <> SUCCESS_SUCCESS Then
	       MsgBox "Error logging in"
	       End
	  End If
	  ' you can replace InputBoxes with strings of text to eliminate the need of
	   user-interface
	  M.Subject = InputBox("Enter a subject line:")
	  M.NoteText = InputBox("Enter some body text:")
	  aPathName$ = InputBox("Enter a file to attach:")
	  If Trim(aPathName$) <> "" Then
	      MF(0).PathName = aPathName$
	      MF(0).FileName = InputBox("Enter the file name to include as:")
	      M.FileCount = 1
	  Else
	      MF(0).PathName = ""
	      MF(0).FileName = ""
	      M.FileCount = 0
	  End If
	
	  'You can replace the InputBox with a full name
	  who = InputBox("Enter a recipient's alias: ")
	  If Not IsEmpty(who) Then
	      mr(0).Name = who
	      mr(0).RecipClass = MAPI_TO
	      X = MAPIResolveName(lhSession&, 0, mr(0).Name, MAPI_DIALOG, 0, mr(0))
	      X = SUCCESS_SUCCESS
	      If X <> SUCCESS_SUCCESS Then
	          MsgBox ("The address for this message is not valid.")
	          Screen.MousePointer = 0
	          rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	          If rc& <> SUCCESS_SUCCESS Then MsgBox "Error logging off """
	      Else
	          rc& = MAPISendmail(lhSession&, Form1.hWnd, M, mr(0), MF(0),
	   MAPI_DIALOG, 0&)
	          If rc& <> SUCCESS_SUCCESS Then MsgBox "Error sending message"
	          rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	          If rc& <> SUCCESS_SUCCESS Then MsgBox "Error logging off """
	      End If
	  Else
	          rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	          If rc& <> SUCCESS_SUCCESS Then MsgBox "Error logging off """
	  End If
	  End
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
