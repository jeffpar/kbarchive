---
layout: page
title: "Q171488: FIX: Val Function Recognizes System Decimal Symbol"
permalink: /kb/171/Q171488/
---

## Q171488: FIX: Val Function Recognizes System Decimal Symbol

	Article: Q171488
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 5.0, the Val function recognizes the system Decimal Symbol when
	converting numbers contained in a string as a numeric value. This behavior is
	contrary to earlier versions of Visual Basic and to the Visual Basic 5.0
	Documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The Help topic for the Val function states the following:
	
	  The Val function recognizes only the period (.) as a valid decimal separator.
	  When different decimal separators can be used, for example, in international
	  applications, use CDbl instead to convert a string to a number.
	
	When the system Decimal separator is a period (.), the Val function returns the
	expected results:
	
	                       Returns...
	                       ----------
	  Val("1.2")             1.2
	  Val("1,2")             1
	
	However, with Microsoft Visual Basic version 5.0, when the system Decimal
	separator is a symbol other than a period (.), the Val function will recognize
	the system Decimal separator instead of the period (.) as documented. The
	following table illustrates the results of the Val function when the Decimal
	separator is set to a comma (,):
	
	                       Returns...     But Should Return...
	                       ----------     --------------------
	  Val("1.2")             1            1,2
	  Val("1,2")             1,2          1
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Regional Settings section of the Windows Control Panel, set the
	  Decimal Symbol to a comma (,).
	
	2. Start a new "Standard EXE" project in Visual Basic.
	
	3. Add the following code to the Load event of Form1.
	
	         Debug.Print Val("1.2")
	         Debug.Print Val("1,2")
	
	4. Press the F5 key to run the project.
	
	5. The Immediate Window shows the following.
	
	     1
	     1,2
	
	The expected results are:
	
	     1,2
	     1
	
	Additional query words: intl
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
