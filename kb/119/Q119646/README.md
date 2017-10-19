---
layout: page
title: "Q119646: PC Win: Undocumented Extension to Custom Command Syntax"
permalink: /kb/119/Q119646/
---

## Q119646: PC Win: Undocumented Extension to Custom Command Syntax

	Article: Q119646
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, you can create
	custom commands. There is an undocumented extension to the syntax for defining
	custom commands in the MSMAIL.INI file.
	
	The custom command can specify that a particular ordinal in a dynamic-link
	library (DLL) should be called by placing a comma and a number after the DLL
	name in the custom command entry.
	
	For example, the following entry specifies that ordinal 24 in the MSRMTUI.DLL
	file should be used:
	
	  MSMRT:ConnectNow=3.0;view;Connect &Now...; -1; msrmtui.dll,24; ;
	  *0000000000000000;Connect to Postoffice;MSRMT.HLP;6506
	
	MORE INFORMATION
	================
	
	Chapter 1 of the Microsoft Mail "Technical Reference" describes how to create
	custom commands. According to the "Technical Reference," a custom command DLL
	must have the following function defined:
	
	  long FAR PASCAL Command (PARAMBLK FAR * lpParamblk
	
	For more information about the PARAMBLK type, see the "Technical Reference."
	
	The "Technical Reference" specifies that this function must be exported with the
	ordinal number 1. Using the undocumented extension to the MSMAIL.INI syntax, the
	function can be exported with another ordinal number. In this case, the entry in
	the MSMAIL.INI file should refer to this new ordinal number.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
