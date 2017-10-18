---
layout: page
title: "Q104816: PC MAPI: DocErr: MAPISaveMail FLAGS Parameter Description"
permalink: kb/104/Q104816/
---

## Q104816: PC MAPI: DocErr: MAPISaveMail FLAGS Parameter Description

	Article: Q104816
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 4 of the "Technical Reference" for versions 3.0 and 3.2 of Microsoft
	Mail for PC Networks does not include the FLAGS parameter for the Microsoft
	Visual Basic MAPISaveMail function call.
	
	The function declaration in GLOBAL.BAS included on the Technical Reference disk
	does include the parameter.
	
	Valid FLAG parameters can be found in the MAPI C functions descriptions in
	Chapter 3 of the "Technical Reference." The correct function call is:
	
	     MAPISaveMail(
	        ByVal Session&,
	        ByVal UIParam&,
	        Message As MAPIMessage,
	        Recipient As MapiRecip,
	        File As MapiFile,
	        ByVal Flags&,
	        ByVal Reserved&,
	        MsgId$) As Long
	
	Additional query words: 3.00 3.20 doc error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
