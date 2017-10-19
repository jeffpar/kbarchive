---
layout: page
title: "Q157635: PRB: COPY FILE &lt;filename&gt; TO LPT1 Causes Invalid Seek Offset"
permalink: /kb/157/Q157635/
---

## Q157635: PRB: COPY FILE &lt;filename&gt; TO LPT1 Causes Invalid Seek Offset

	Article: Q157635
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600kbbuglist
	Last Modified: 01-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, using the COPY FILE command to copy a file to LPT1 causes the
	"Invalid Seek Offset" error in Visual FoxPro 5.0 and 3.0b if the port is not
	captured. If the port is captured, the error "Invalid Path or File Name"
	appears. However, in Windows NT 3.51 and Windows NT 4.0, using the COPY FILE
	command to copy a file to LPT1 first returns a warning message that the file
	will be overwritten unless SAFETY is set to OFF, then the message "Error Writing
	to File" appears.
	
	RESOLUTION
	==========
	
	To work around this problem, do the following:
	
	"COPY FILE <filename> TO LPT1.DOS " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple text file in Visual FoxPro as Test.txt.
	
	2. In the Command window, type in the following code:
	
	  "COPY FILE Test.txt TO LPT1:" (without the quotation marks)
	
	Under Windows 95, you get an "Invalid Seek Offset" error message dialog box when
	the port is not captured. If it is captured, the error "Invalid Path or File
	Name" appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
