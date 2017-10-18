---
layout: page
title: "Q190250: BUG: DHTML Page Designer: Cannot Find the Mshtml.Hlp File"
permalink: kb/190/Q190250/
---

## Q190250: BUG: DHTML Page Designer: Cannot Find the Mshtml.Hlp File

	Article: Q190250
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbPageDesigner kbVBp600bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the DHTML Page Designer, when you press F1 while the cursor is on an Internet
	Explorer document object model property, you get the following error message:
	
	  Cannot find the c:\...\mshtml.hlp file. Do you want to try to find this file
	  yourself?
	
	CAUSE
	=====
	
	Mshtml.hlp does not exist.
	
	RESOLUTION
	==========
	
	There is not a specific help file for the Internet Explorer document object
	model. Go to the MSDN Online at the following address for more detailed
	information on the Internet Explorer document object model:
	
	  http://www.msdn.microsoft.com/workshop/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft has confirmed this to be a bug in the
	Microsoft products listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new DHTML application.
	
	2. Add an HTML button and go to the properties window.
	
	3. Click on a property and press the F1 key. The result is the error message:
	
	  "Cannot find the c:\...\mshtml.hlp file. Do you want to try to find this file
	  yourself?"
	
	REFERENCES
	==========
	
	For more information on the Internet Explorer document object model, see the
	MSDN Online Web Workshop:
	
	  http://www.msdn.microsoft.com/workshop/
	
	Please see the following Microsoft Knowledge Base article for more information on
	the DHTML Page Designer:
	
	  Q190249 : INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbPageDesigner kbVBp600bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
