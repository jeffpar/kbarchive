---
layout: page
title: "Q251236: HOWTO: Programmatically Set the Number of Copies for a Report"
permalink: /kb/251/Q251236/
---

## Q251236: HOWTO: Programmatically Set the Number of Copies for a Report

	Article: Q251236
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Visual FoxPro, there is no direct way to set the number of copies
	to be printed. However, there are several ways to print multiple copies. One is
	to print the report in a loop, but this is the slowest way to do it. Another is
	to use the PROMPT keyword in the REPORT FORM command, but this requires an extra
	user action, even if it is only hitting the ENTER key. The most efficient way is
	to modify the .frx file directly to include the proper number of copies.
	
	MORE INFORMATION
	================
	
	The following code modifies a report to print the correct number of copies. To
	use it, save the code to a new program (named "MULTIREPO.PRG" (without the
	quotation marks), for instance) and call it from the Command window using this
	syntax:
	
	  DO MULTIREPO WITH [full path to report table],[number of copies wanted]
	
	Example: DO MULTIREPO WITH "C:\MYREPORT.FRX", 2
	
	The next time that report is printed, it prints out the number of copies you
	specified.
	
	  LPARAMETER lcFRX, lnCopies
	  LOCAL lcNewExpr, lnStartCopiesLine, lcStartAtCopiesLine, lnEndCopiesLine ;
	  	lnLenCopiesLine, lcTop, lcBottom
	  #DEFINE vfCRLF CHR(13) + CHR(10)
	
	  IF !(UPPER(RIGHT(lcFRX, 4)) = ".FRX")
	  	lcFRX = lcFRX + ".FRX"
	  ENDIF
	  USE (lcFRX)
	  LOCATE FOR objType = 1 AND objCode = 53
	
	  IF EMPTY(EXPR)
	
	          lcNewExpr = "COPIES=" + ALLT(STR(lnCopies)) + vfCRLF
	  ELSE
	
	          lnStartCopiesLine = ATC("COPIES", EXPR)
	          lcStartAtCopiesLine = SUBSTR(EXPR, lnStartCopiesLine)
	          lnEndCopiesLine = ATC(vfCRLF, lcStartAtCopiesLine)
	          lnLenCopiesLine = LEN(SUBSTR(lcStartAtCopiesLine, 1, lnEndCopiesLine))
	          lcTop = SUBSTR(EXPR, 1, lnStartCopiesLine - 1)
	          lcBottom = SUBSTR(EXPR, (LEN(lcTop) + lnLenCopiesLine))
	          lcNewExpr  = lcTop + "COPIES=" + ALLT(STR(lnCopies)) + lcBottom
	
	  ENDIF
	
	  REPLACE EXPR WITH lcNewExpr
	  USE IN (lcFRX)
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words: REPORTS
	
	======================================================================
	Keywords          : kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
