---
layout: page
title: "Q104420: PC Forms: Data Segment Error When Routing File"
permalink: /kb/104/Q104420/
---

## Q104420: PC Forms: Data Segment Error When Routing File

	Article: Q104420
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a Microsoft Visual Basic .MAK file as an attachment to the routing
	form included with version 1.0 of Microsoft Electronic Forms Designer, you may
	receive the following error message when you attempt to open the file:
	
	  The associated application for the attached file FILENAME.MAK encountered a
	  data segment error. (reason: 16)
	
	CAUSE
	=====
	
	This error is generated when another instance of the same .MAK file is already
	open in Microsoft Visual Basic.
	
	WORKAROUND
	==========
	
	Close any existing instances of the .MAK file before opening it from within the
	custom form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00 VB
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
