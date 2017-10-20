---
layout: page
title: "Q119062: PRB: File &quot;C:&#92;TEMP&#92;99999999.TMP&quot; Does Not Exist"
permalink: /kb/119/Q119062/
---

## Q119062: PRB: File &quot;C:&#92;TEMP&#92;99999999.TMP&quot; Does Not Exist

{% raw %}

	Article: Q119062
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to create a new screen or report, the error message "File
	'C:\TEMP\<99999999.TMP>' does not exist" appears, where
	<99999999.TMP> is any random combination of numbers.
	
	CAUSE
	=====
	
	When you open a new screen file (*.SCX) or a report file (*.FRX), FoxPro creates
	a temporary file. The filename for this temporary file will be eight randomly
	generated numbers with an extension of .TMP. If there is a TMPFILES = statement
	in the CONFIG.FPW file and the directory pointed to by that statement does not
	exist, FoxPro generates the error mentioned above.
	
	RESOLUTION
	==========
	
	Make sure that the TMPFILES = statement in the CONFIG.FPW file specifies a valid
	directory. For example, if the TMPFILES = statement is
	
	  TMPFILES = C:\TEMP
	
	make sure TEMP is a valid directory that exists on drive C.
	
	NOTE: This problem also occurs when the TEMP directory is hidden.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. In the Command window, type the following:
	
	  " MODIFY FILE c:\<FoxPro_directory>\config.fpw" (without the quotation
	  marks)
	
	2. Either modify the existing TMPFILES statement or create a new statement that
	  directs the temporary files to a directory that does not exist. For example:
	
	  TMPFILES = C:\BADDIR
	
	3. Save the file and then quit FoxPro.
	
	4. Restart FoxPro for Windows.
	
	5. In the Command window, type either of the following commands:
	
	  " CREATE REPORT" (without the quotation marks)
	
	  -or-
	
	  " CREATE SCREEN" (without the quotation marks)
	
	You will receive the following error message (note that the 9's can be any
	numbers):
	
	  File 'C:\baddir\99999999.tmp' does not exist
	
	Additional query words: FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a 3.00 3.00b errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5x,2.6x,3.0,3.0b
	
	=============================================================================
	

{% endraw %}
