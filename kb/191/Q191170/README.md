---
layout: page
title: "Q191170: PRB: Too Many Memory Variables Error Creating Array"
permalink: kb/191/Q191170/
---

## Q191170: PRB: Too Many Memory Variables Error Creating Array

	Article: Q191170
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS- DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you run code in an application:
	
	  Too many memory variables.
	
	CAUSE
	=====
	
	Using a SELECT-SQL command or another method to create a array that is larger
	than 65000 elements.
	
	RESOLUTION
	==========
	
	Make sure that the array is less than the 65000 element limit of Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro and earlier versions of the FoxPro product have a limit of 65000
	memory variables and 65000 elements in a array. FoxPro treats each element of an
	array as an individual memory variable. Therefore, when the number of array
	elements (number of rows multiplied by the number of columns) exceeds 65000, the
	error occurs. However, if the size of the table fluctuates, then this error may
	appear intermittently and is therefore difficult to troubleshoot. Since this is
	a system limitation of FoxPro and Visual FoxPro, increasing the value of the
	MVCOUNT system variable in the Config.fpw (or Config.fpm) does not prevent the
	error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table that has 21667 records each containing three fields. Please
	  refer to the article listed in the REFERENCES section for an example of
	  creating large tables for testing purposes.
	
	2. After creating the table in step 1, type the following command in the Command
	  window:
	
	        SELECT  * FROM lartable INTO ARRAY test
	
	  This line of code assumes that the table name is Lartable. The error appears
	  immediately.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170128 HOWTO: Programmatically Create Large Tables for Testing Purposes
	
	Visual FoxPro Help; search on: "Visual FoxPro System Capacities"
	
	FoxPro Help; search on: "System Capacities"
	
	Additional query words: kbVFp300b kbVFp500 kbVFp500a kbXBase kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS- DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
