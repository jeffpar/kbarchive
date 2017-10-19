---
layout: page
title: "Q140106: PC MAPI: Sample VB Code to Read a Microsoft Mail Message"
permalink: /kb/140/Q140106/
---

## Q140106: PC MAPI: Sample VB Code to Read a Microsoft Mail Message

	Article: Q140106
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The simple Messaging Application Programming Interface (MAPI) includes functions
	that allow developers to access mail programmatically. The following Visual
	Basic code illustrates successful calls to these functions.
	
	MORE INFORMATION
	================
	
	The sample code below uses MAPILogon to log in the Mail system, MAPIFindNext to
	find the first message ID, loops MAPIReadmail and MAPIFindNext to access all
	messages, and uses MAPILogOff to log out.
	
	  ' **************************************************
	  '        Simple MAPI Declarations
	  ' **************************************************
	  Dim M As MAPIMessage
	  Dim Mo As MapiRecip
	  ReDim Mr(0 To 0) As mapirecip
	  ReDim mf(0 To 0) As mapifile
	  MsgType$ = ""      ' NULL default to IPM.Microsoft Mail.Note
	  m.MessageType = MsgType$   ' message type you want to download
	  NL = Chr(10)         ' a new line constant variable
	  ' **********************************************************
	  ' Login and start the MAPI Session, using the dialog box and
	  ' download new mail if any exists
	  ' **********************************************************
	  rc& = MAPILogon(main_form.hWnd, "", "", MAPI_LOGON_UI +
	  MAPI_FORCE_DOWNLOAD,
	
	   0&, lhsession)
	  If rc& <> SUCCESS_SUCCESS Then
	    MsgBox "Error logging in with error=" + Str(rc&)
	
	  Else
	
	    MsgBox "Success logging in"
	  End If
	  rc& = MAPIFindNext(lhsession&, 0&, MsgType$, "", 0&, 0&, msgid$)
	    If rc& <> SUCCESS_SUCCESS Then
	      MsgBox "Error during message find or no messages in Inbox."
	      rc& = MAPILogoff(lhsession&, 0&, 0&, 0&)
	      End
	    End If
	    i = 0
	    Do While (rc& = SUCCESS_SUCCESS)
	          rc& = MAPIReadMail(lhsession&, 0&, msgid$, 0&, 0&, m, mo, Mr(),
	  mf())
	          If rc& <> SUCCESS_SUCCESS Then
	              MsgBox "Error during MAPIReadMail"
	              Exit Do
	          Else
	              i = i + 1
	     ' ************** accessing various fields of the message ************
	              msg$ = "Message# " & Str(i)
	              msg$ = msg$ & NL & "Subject: " & m.subject
	              msg$ = msg$ & NL & "Sent by: " & mo.name
	              msg$ = msg$ & NL & "Message type: " & m.MessageType
	              If m.filecount <> 0 Then
	                  msg$ = msg$ & NL & "Message includes attachment"
	              Else
	                  msg$ = msg$ & NL & "Message includes no attachment"
	              End If
	          End If
	          MsgBox msg$
	          rc& = MAPIFindNext(lhsession&, 0&, MsgType$, msgid$, 0&, 0&,
	  msgid$)
	
	     Loop
	
	  rc& = MAPILogoff(lhsession, 0&, 0&, 0&)
	  If rc& <> SUCCESS_SUCCESS Then
	  MsgBox "Error logging off with error=" + Str(rc&)
	  Else
	  MsgBox "Success logging off"
	  End If
	
	IMPORTANT NOTE: Make sure a MAPI declaration module, such as MAPILIB.BAS, is
	included in the project.
	
	Additional query words: 3.00 3.20 1.00 visual basic code
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
