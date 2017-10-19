---
layout: page
title: "Q153057: DOCFIX: Error in Code Sample for RowContaining Method"
permalink: /kb/153/Q153057/
---

## Q153057: DOCFIX: Error in Code Sample for RowContaining Method

	Article: Q153057
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The code sample for the RowContaining Method shown in the Language Reference and
	Online Help is not correct and does not work. The line is highlighted with the
	following message:
	
	  Expected End of Statement.
	
	CAUSE
	=====
	
	The argument for the RowContaining method should be enclosed in parentheses.
	
	WORKAROUND
	==========
	
	Enclose the argument in parentheses. The argument should be as follows:
	
	     RowValue = DBGrid1.RowContaining(Y)
	
	STATUS
	======
	
	This error was corrected in Visual Basic 5.0.
	
	Additional query words: kbVBp400 kbVBp500 kbdocerr kbdocfix kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
