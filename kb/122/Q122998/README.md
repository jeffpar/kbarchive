---
layout: page
title: "Q122998: PC MAPI: Visual Basic Example for C Code in Tech Reference"
permalink: /kb/122/Q122998/
---

## Q122998: PC MAPI: Visual Basic Example for C Code in Tech Reference

{% raw %}

	Article: Q122998
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for PC Networks "Technical Reference" includes a Microsoft C
	programming language source code example for sending a mail message and
	attachment using MAPI. However, no such code is provided for Visual Basic.
	
	MORE INFORMATION
	================
	
	The following code is the Visual Basic equivalent of the C code example found in
	the Technical Reference guide.
	
	  ' ***************************************************
	  ' Visual Basic equivalent of the C programming language
	  ' sample found in the Microsoft Mail Technical Reference
	  ' ***************************************************
	  Dim M As MapiMessage
	  Dim Mo As MapiRecip
	  ReDim R(0 To 1) As MapiRecip
	  ReDim F(0 To 0) As MapiFile
	  NL = Chr(10)
	
	  F(0).Reserved = 0&
	  F(0).Flags = 0&
	  F(0).Position = -1
	  F(0).PathName = "C:\budget17.wk3"
	  F(0).FileName = "budget17.wk3"
	  F(0).FileType = ""
	
	  Msg1$ = "Attached is the budget proposal. "
	  Msg2$ = "See you Monday."
	
	  M.Subject = Msg1$ + Msg2$
	  M.MessageType = ""
	  M.RecipCount = 2
	  M.FileCount = 1
	
	  R(0).Reserved = 0&
	  R(0).RecipClass = MAPI_To
	  R(0).Name = "Sally Jones"
	  R(0).EIDSize = 0&
	  R(0).EntryID = ""
	
	  R(1).Reserved = 0&
	  R(1).RecipClass = MAPI_To
	  R(1).Name = "Marketing"
	  R(1).EIDSize = 0&
	  R(1).EntryID = ""
	
	  rc& = MAPILogon(0&, "admin", "password", 0&, 0&, lhSession&)
	
	  rc& = MAPISendMail(0&, 0&, M, R(0), F(0), 0&, 0&)
	  If rc& <> SUCCESS_SUCCESS Then MsgBox "Unable to send the message."
	
	  rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	  End
	  ' ****************************
	  ' End of source code
	  ' ****************************
	
	To get the code to work, MAPILogon and MAPILogoff function calls have been
	included in the source code.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
