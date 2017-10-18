---
layout: page
title: "Q234212: HOWTO: Insert Line into Text File Using Low-level File Functions"
permalink: kb/234/Q234212/
---

## Q234212: HOWTO: Insert Line into Text File Using Low-level File Functions

	Article: Q234212
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can add lines of a text into a text file by creating a function using the
	code in the MORE INFORMATION section of this article.
	
	MORE INFORMATION
	================
	
	Save the following code to a program (PRG) file. The calling convention is :
	
	Syntax:      InsertText(expC1, expN, expC2)
	
	Parameters:  expC1  The file into which text is inserted
	            expN   The line number after which text is inserted
	            expC2  The text to be inserted
	Returns:     Numeric
	
	  *-- Function InsertLine
	  *-- Description: Inserts text into a file at a specified line
	  *--
	  *-- Parameters:
	  *-- lsFileName - The file into which text is inserted
	  *-- liLineNum  - The line number after which text is inserted
	  *-- lsText     - The text to be inserted
	  *-- Returns:
	  *-- -1 = File could not be opened
	  *-- -2 = Text insertion failed
	  *-- -3 = File could not be closed
	
	  Function InsertLine
	  Parameter lsFileName, liLineNum, lsText
	  liFile = Fopen(lsFileName, 12)
	  If liFile = -1
	      Return -1
	  Endif
	
	  *-- Loop until we get to the desired line
	  For i = 1 To liLineNum
	      =Fgets(liFile)
	  Endfor
	
	  *-- Insert the text
	  liRc = Fputs(liFile, lsText)
	  If liRc = 0
	      Return -2
	  Endif
	
	  *-- Clean up
	  llRc = Fclose(liFile)
	  If !llRc 
	      Return -3
	  Else
	      Return 1
	  Endif
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: Add data low-level low level
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
