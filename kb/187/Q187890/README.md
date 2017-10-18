---
layout: page
title: "Q187890: WD97: Confirm Data Source Dialog Box Not Accessible in VBA"
permalink: kb/187/Q187890/
---

## Q187890: WD97: Confirm Data Source Dialog Box Not Accessible in VBA

	Article: Q187890
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Confirm Data Source dialog box is not displayed when you do either of the
	following in Microsoft Visual Basic for Applications for Microsoft Word:
	
	- You set the ConfirmConversions argument to True in the OpenDataSource method.
	
	-or-
	
	- You use the InsertDatabase method.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word. The Confirm Data Source dialog box
	is not exposed (accessible) to the Word Visual Basic object model or Wordbasic.
	
	MORE INFORMATION
	================
	
	The ConfirmConversions argument in the OpenDataSource method has no relationship
	to the Select method check box in the Open Data Source dialog box.
	
	When you record a mail merge in Word, and then run the macro, it will run without
	displaying any of the dialog boxes you saw during the recording of the macro.
	You cannot select a different method for opening the data source without
	rewriting or re-recording the macro.
	
	
	Additional query words: access convert dbase foxpro interop odbc office97 paradox sql VBA
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
