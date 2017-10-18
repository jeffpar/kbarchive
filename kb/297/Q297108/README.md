---
layout: page
title: "Q297108: BUG: VB SendKeys Causes Incorrect Keyboard Status or Freeze"
permalink: kb/297/Q297108/
---

## Q297108: BUG: VB SendKeys Causes Incorrect Keyboard Status or Freeze

	Article: Q297108
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVS kbVS600 kbVS600bug kbDSupport
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Microsoft Visual Basic program that uses the SendKeys function. The
	program works fine on Windows 95, Windows 98, or Windows NT-based computers.
	However, when you run the application on Windows 2000, either from the Desktop
	or through Terminal Services, the keyboard may freeze or go into an incorrect
	status.
	
	CAUSE
	=====
	
	On Windows NT and Windows 2000, the Visual Basic SendKeys function toggles NUM
	LOCK, CAPS LOCK, and SCROLL LOCK when they are on. The Windows 2000 keyboard
	driver may not handle this behavior correctly, which causes the keyboard status
	to be incorrect or the keyboard to freeze.
	
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
	
	  Date              Version      Size      File name     
	  -----------------------------------------------------
	  04/23/2001        6.0.91.15    1.33 MB   MSVBVM60.dll  
	  04/23/2001        6.0.0.8965   1.62 MB   VBA6.dll
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q276346 FIX: SendKeys Function Locks Keyboard on Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS kbVS600 kbVS600bug kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
