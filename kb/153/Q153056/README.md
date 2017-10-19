---
layout: page
title: "Q153056: DOCFIX: Error in Code Sample for ColContaining Method"
permalink: /kb/153/Q153056/
---

## Q153056: DOCFIX: Error in Code Sample for ColContaining Method

	Article: Q153056
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
	
	The code sample for the ColContaining Method shown in the Visual Basic Language
	Reference and Online Help is not correct and does not work. The line is
	highlighted with the following message:
	
	  Expected End of Statement.
	
	CAUSE
	=====
	
	The argument for the ColContaining method should be enclosed in parentheses.
	
	RESOLUTION
	==========
	
	Enclose the argument in parentheses. The argument should be the following:
	
	     ColValue = DBGrid1.ColContaining (X)
	
	STATUS
	======
	
	This documentation error was fixed in Visual Basic 5.0.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp kbdsd kbDSupport kbdocerr kbdocfix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
