---
layout: page
title: "Q114670: HOWTO: Passing Variables to SELECT-SQL w/o Using Macro Substitut"
permalink: /kb/114/Q114670/
---

## Q114670: HOWTO: Passing Variables to SELECT-SQL w/o Using Macro Substitut

	Article: Q114670
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.5b,2.6; WINDOWS:2.5b,2.6,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are passing variables to a SELECT - SQL command, you may have to call
	the command and programmatically pass criteria to it rather than coding such
	criteria directly. In many such instances, you may not want to use macro
	substitution.
	
	The programs below show how to pass variables to a SELECT - SQL command without
	using macro substitution.
	
	MORE INFORMATION
	================
	
	The programs below are provided as an example of calling a FoxPro SELECT - SQL
	command with the selection criteria contained in variables. They employ name
	expressions and the EVALUATE function instead of macro substitution.
	
	FoxPro 2.x Example
	------------------
	
	  *This program uses the Customer table from the Tutorial.
	  SET TALK OFF     && stop echo to screen
	  x="State"
	  y="FL"
	  SELECT * ;
	     FROM customer;
	     HAVING EVALUATE(x) = (y) ;
	     INTO CURSOR crsrFlorida
	  BROWSE
	
	Visual FoxPro Example
	---------------------
	
	  *!* This sample uses the Customer table in:
	  *!* VFP 3/5 -- HOME() + "Samples\Data"
	  *!* VFP 6 -- HOME(2) + "Data"
	
	  SET TALK OFF     && stop echo to screen
	  x="Country"
	  y="UK"
	
	  SELECT * ;
	     FROM CUSTOMER;
	     HAVING EVALUATE(x)=(y);
	     INTO CURSOR crsrUK
	  BROWSE
	
	The output will contain records where the contents of the field whose name is
	contained in variable x are equal to the contents of variable y.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5b; MS-DOS:2.5b,2.6; WINDOWS:2.5b,2.6,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
