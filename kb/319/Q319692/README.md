---
layout: page
title: "Q319692: Winsock Control May Fire DataArrival Event After the Close Event"
permalink: /kb/319/Q319692/
---

## Q319692: Winsock Control May Fire DataArrival Event After the Close Event

	Article: Q319692
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600bug kbWinsock
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Winsock control may fire a DataArrival event with valid data length (a number
	that is greater than 0) after the Close event. If you try to call the GetData
	method for that event, you receive the following error message:
	
	  Run-time error: 40006
	
	  Wrong protocol or connection state for the requested transaction or request.
	
	CAUSE
	=====
	
	This problem occurs because of a bug in the Winsock control. Although the
	occurrence of this problem depends on data flow between two entities, the
	problem may occur more consistently when the client (receiver) application is
	much slower than the server (transmitter) application, and when no
	application-level flow control is implemented.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version      Size      File name
	  -----------------------------------------------------
	  11-Mar-2002  16:07   6.0.95.24    104,208   Mswinsck.ocx
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: sckBadState error 40006
	
	======================================================================
	Keywords          : kbCtrl kbVBp600bug kbWinsock 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
