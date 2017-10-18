---
layout: page
title: "Q121316: PC Forms: Err Msg: &quot;Invalid Message&quot; When Reading an E-Form"
permalink: kb/121/Q121316/
---

## Q121316: PC Forms: Err Msg: &quot;Invalid Message&quot; When Reading an E-Form

	Article: Q121316
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to read an e-form
	message created with Microsoft Mail Electronic Forms Designer:
	
	  Invalid Message
	
	CAUSE
	=====
	
	This error can occur if the e-form message class declaration is incorrectly
	defined in the [Custom Messages] section of the MSMAIL.INI file.
	
	RESOLUTION
	==========
	
	For e-form messages to perform correctly, there must be a space between the
	<COMMAND> and <MESSAGEID> commands in the message class declaration.
	If the space is missing, the above error will occur when the e-form is read. The
	following is a correct example:
	
	     IPM.Microsoft.MEFPhone=3.0;;Telephone
	     Note;;C:\WINDOWS\SYSTEM\MEFLIB.DLL;<MC:IPM.Microsoft.MEFPhone>C:\VB\EF
	     MS\PROJECTS\PHONE\MEFPHONE.EXE -MSG <COMMAND> <MESSAGEID>;
	     1111111000000000;Microsoft Sample Telephone Note;;;
	
	
	Additional query words: 1.00 eforms
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
