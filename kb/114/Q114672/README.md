---
layout: page
title: "Q114672: PRB: Using SELECT SQL INTO CURSOR with Same Filename"
permalink: /kb/114/Q114672/
---

## Q114672: PRB: Using SELECT SQL INTO CURSOR with Same Filename

	Article: Q114672
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "Alias Name Already in Use" or "Alias Name Is Already in
	Use"appears when a SELECT ...INTO CURSOR command is executed.
	
	CAUSE
	=====
	
	According to page L3-866 in the FoxPro version 2.5 "Language Reference" and page
	C3-704 in the FoxPro version 2.0 for MS-DOS "Commands & Functions" manual,
	if you issue an SQL SELECT INTO CURSOR command, where the cursor name is the
	same as the name of the table that records are being selected from, FoxPro will
	close the source file and create a cursor with the same name. This information
	is incorrect.
	
	In actuality, when a cursor is created with an SQL SELECT statement, the original
	table is not closed when the same name is used for the cursor. FoxPro attempts
	to create the cursor with the same name although the table/.DBF is still open,
	which causes the above error message. For example, the following SELECT
	statement recreates the error:
	
	     SELECT *;
	       FROM Customer;
	       INTO CURSOR Customer
	
	RESOLUTION
	==========
	
	Using a different name for the cursor resolves the problem. By using a different
	cursor name in the INTO clause of the SELECT command, the cursor is created
	without error, as the following code example illustrates:
	
	     SELECT *;
	       FROM Customer;
	       INTO CURSOR ABC
	
	Additional query words: VFoxWin FoxDos FoxWin Alias use error errmsg err msg docerr
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
