---
layout: page
title: "Q130323: PC MAPI: Sample VB Code to Determine Mail Session User"
permalink: /kb/130/Q130323/
---

## Q130323: PC MAPI: Sample VB Code to Determine Mail Session User

	Article: Q130323
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The simple Message Application Program Interface (MAPI) for Microsoft Mail for
	PC Networks does not include a function that allows developers to directly
	determine the current user who is logged into a mail session. However, that
	information can be obtained by using a workaround which basically involves
	saving a dummy message, finding that message, reading the message, and finally
	deleting it.
	
	MORE INFORMATION
	================
	
	One possible example is outlined in the Microsoft Visual Basic version 3.0 code
	below:
	
	IMPORTANT NOTE: Make sure the MAPI declaration module (MAPILIB.BAS) is included
	in the project.
	
	  ' ****************** WHOAMI ************************
	  ' **************************************************
	  '        Simple MAPI Declarations
	  ' **************************************************
	  Dim M As MAPIMessage
	  Dim Mo As MapiRecip
	
	  ' ***************************************************
	  '         Set up the dummy message
	  ' ***************************************************
	  M.RecipCount = 0&
	  M.FileCount = 0&
	
	  MsgId$ = ""
	  MsgType$ = "IPC.SIMPLEMAPI.WHOAMI" ' "Hidden" message
	  M.Reserved = 0&
	  M.Subject = "MAPIWhoAmI message"
	  M.NoteText = ""
	  M.MessageType = MsgType$
	  M.DateReceived = ""
	  M.Flags = 0&
	  msg1$ = "Current logged in user: "
	  msg2$ = "At address: "
	  NL = Chr(10)
	
	  ' **************************************************
	  ' Login and start the MAPI Session
	  ' **************************************************
	  rc& = MAPILogon(Form1.hWnd, "", "", MAPI_LOGON_UI, 0&, lhSession&)
	  If rc& <> SUCCESS_SUCCESS Then
	    MsgBox "Error logging in"
	    End
	  End If
	  ' ***************************************************
	  ' Place the dummy message in the inbox
	  ' ***************************************************
	  '*********************************
	  ReDim Mr(0 To 0) As MapiRecip
	  ReDim Mf(0 To 0) As MapiFile
	  '*********************************
	
	  rc& = MAPISaveMail(lhSession&, Form1.hWnd, M, Mr(0), Mf(0), 0&, 0&, MsgId$)
	    If rc& <> SUCCESS_SUCCESS Then
	      MsgBox "Error saving message"
	      rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	      End
	    End If
	  ' ***************************************************
	  ' Find then read the dummy message
	  '****************************************************
	  rc& = MAPIFindNext(lhSession&, 0&, MsgType$, "", 0&, 0&, MsgId$)
	    If rc& <> SUCCESS_SUCCESS Then
	      MsgBox "Error during message find or no messages in Inbox."
	      rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	      End
	    End If
	  Do While (rc& = SUCCESS_SUCCESS)
	    rc& = MAPIReadMail(lhSession&, 0&, MsgId$, 0&, 0&, M, Mo, Mr(), Mf())
	    If rc& <> SUCCESS_SUCCESS Then
	       MsgBox "Error during MAPIReadMail"
	       Exit Do
	    End If
	    If M.MessageType = MsgType$ Then
	     ' Return our user
	          MsgBox msg1$ + Mo.Name + NL + NL + msg2$ + Mo.Address
	  ' **************************************************
	  ' Delete the dummy message when found
	  ' **************************************************
	     ' Delete dummy message
	       rc& = MAPIDeleteMail(lhSession&, 0&, MsgId$, 0&, 0&)
	          If rc& <> SUCCESS_SUCCESS Then MsgBox "Error deleting message"
	              Exit Do
	
	          End If
	      rc& = MAPIFindNext(lhSession&, 0&, MsgType$, MsgId$, 0&, 0&, MsgId$)
	      Loop
	
	  ' **************************************************
	  ' Logoff
	  ' **************************************************
	      rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	      If rc& <> SUCCESS_SUCCESS Then MsgBox "Error logging off """
	  End
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
