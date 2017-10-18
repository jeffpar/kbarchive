---
layout: page
title: "Q156939: PRB: WordBasic's CHR&#36; Function Produces Error in Visual FoxPro"
permalink: kb/156/Q156939/
---

## Q156939: PRB: WordBasic's CHR&#36; Function Produces Error in Visual FoxPro

	Article: Q156939
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro produces one of the following three errors when using the CHR$(11)
	function to place a newline character in a Microsoft Word 7.0a for Windows 95
	document:
	
	  OLE IDispatch exception code 5004 from Microsoft Word. Too many or too few
	  arguments.
	
	  -or-
	
	  OLE error code 0x80002006 Unknown name.
	
	  -or-
	
	  Syntax Error.
	
	The error varies depending upon the version of Visual FoxPro being run. However,
	these commands function properly in Visual Basic 4.0.
	
	CAUSE
	=====
	
	The dollar sign ($) character is an operator in Visual FoxPro. Therefore, FoxPro
	expects the dollar sign character to carry out Xbase functionality and not a
	WordBasic function.
	
	WORKAROUND
	==========
	
	Use FoxPro's CHR() function to insert the value into WordBasic. For example,
	replace one of the following lines:
	
	     X.Insert(X.CHR$(11))
	
	  -or-
	
	     X.Insert(X.Object.CHR$(11))
	
	with the following line:
	
	     X.Insert(CHR(11))
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The WordBasic function Chr$(11) should place a newline character in a Word 95
	document. However, when FoxPro sees the dollar sign character, it looks for the
	two arguments normally required for this function. Usually, Visual FoxPro
	interprets a dollar sign character to mean search for a value within a string or
	field. Visual FoxPro does not recognize the Word 95 usage of this character.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program containing the following code:
	
	        PUBLIC x
	        X=CreateObject("Word.Basic")
	        X.FileNew
	        X.AppShow
	        X.Insert("This is line 1")
	        X.Insert(X.CHR$(11))   && <---Or X.Insert(X.Object.CHR$(11))
	        X.Insert("This is line 2")
	
	2. Run the program. The error appears.
	
	3. Replace the X.Insert(X.CHR$(11)) or X.Insert(X.Object.CHR$(11)) line with
	  X.Insert(CHR(11)). The code now creates a Word document containing two lines
	  of text.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
