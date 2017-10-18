---
layout: page
title: "Q186969: WD97: ConfirmConversions Doesn't Work with OpenDataSource"
permalink: kb/186/Q186969/
---

## Q186969: WD97: ConfirmConversions Doesn't Work with OpenDataSource

	Article: Q186969
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When performing a mail merge using the Visual Basic for Applications
	MailMerge.OpenDataSource command with the ConfirmConversions argument set equal
	to True, the Confirm Data Source dialog box does not appear when you open a data
	source saved in a non-Word format.
	
	WORKAROUND
	==========
	
	To work around this problem, you can record a macro while confirming the data
	source and use the resulting commands in your original macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Although setting the ConfirmConversions argument to True selects the Select
	Method check box option in the Open Data Source dialog box, the Confirm Data
	Source dialog box is bypassed when you run the macro. You cannot select a
	different method for opening the data source other than the default method of
	DDE.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137385 WD97: Error Using Text Data Source with ODBC Driver
	
	Additional query words: access convert dbase foxpro interop paradox sql
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
