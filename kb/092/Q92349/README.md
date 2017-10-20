---
layout: page
title: "Q92349: PRB: Resolving &quot;Structural CDX File Not Found&quot; Error"
permalink: /kb/092/Q92349/
---

## Q92349: PRB: Resolving &quot;Structural CDX File Not Found&quot; Error

{% raw %}

	Article: Q92349
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a USE <file> command causes a "Structural CDX file not found"
	error to occur.
	
	CAUSE
	=====
	
	The associated structural .CDX file is not present in the current directory and
	SAFETY is on.
	
	RESOLUTION
	==========
	
	Use one of the following three methods to remove the reference from the CDX file
	and allow FoxPro to open the DBF file:
	
	1. Choose the Ignore button instead of the Cancel button. FoxPro removes the
	  reference to the structural .CDX file from the .DBF file header and displays
	  a message to indicate that the reference was removed. FoxPro opens the
	  database file after removing the reference.
	
	2. Use SET SAFETY OFF to suppress the error message. However, because this
	  method disables the file-protection facility, no warning is displayed when a
	  file may be overwritten.
	
	3. Use an ON ERROR statement to trap the structural .CDX file error. With the
	  code below, FoxPro can automatically remove the reference without displaying
	  an error message.
	
	        SET SAFETY ON                    && Enable file protection.
	        USE customer                     && Open a DBF file.
	        INDEX ON city TAG city ADDITIVE  && Create structural CDX file.
	        CLOSE ALL                        && Close all files.
	        DELETE FILE customer.cdx         && Remove CDX file.
	
	        ON ERROR WAIT WINDOW "REMOVING REFERENCE AUTOMATICALLY" NOWAIT
	        *** Trap the error and print a message
	
	        USE customer
	        *** Invoke the ON ERROR routine to automatically remove the
	        *** reference.
	
	        WAIT WINDOW "OK to issue USE <file> now !" NOWAIT
	
	        ON ERROR
	        *** release the ON ERROR statement
	
	  NOTE: FoxPro does not open any files after the ON ERROR statement removes the
	  reference. The user must issue the USE <file> command again to access
	  the information in the .DBF file.
	
	Additional query words: VFoxWin FoxDos FoxWin suppress missing
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	

{% endraw %}
