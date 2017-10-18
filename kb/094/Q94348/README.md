---
layout: page
title: "Q94348: PRB: Resolving FoxPro &quot;Memo File Is Missing/Invalid&quot; Error"
permalink: kb/094/Q94348/
---

## Q94348: PRB: Resolving FoxPro &quot;Memo File Is Missing/Invalid&quot; Error

	Article: Q94348
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open a table, the error message
	
	  "Memo File is Missing/Invalid"
	
	appears.
	
	RESOLUTION
	==========
	
	Copy a valid memo file over the corrupt memo file to access the database again.
	
	NOTE: The original memo field information will be lost unless the valid memo file
	was an exact backup of the corrupt file. All memo field backup files have an
	extension of .TBK.
	
	The corrupt memo file will have an .FPT extension, such as OLD.FPT. In the
	following example, assume NEW.FPT is a valid memo file. To bypass the error
	message and access the database again, type the following command at the MS- DOS
	command prompt:
	
	  
	
	     copy new.fpt old.fpt
	
	The new memo file being used can be from any database that has a valid memo field
	associated with it. This allows the database to be opened in FoxPro again.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxDos FoxWin repair fix damaged errmsg err msg kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	
