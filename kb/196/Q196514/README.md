---
layout: page
title: "Q196514: WD97: Merge Results Blank Using Header File with ODBC"
permalink: /kb/196/Q196514/
---

## Q196514: WD97: Merge Results Blank Using Header File with ODBC

	Article: Q196514
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive blank results during a mail merge when the mail merge document
	uses a header file and you have attached a database source file using ODBC.
	
	For each record merged, you may receive the following message, where "x" is the
	record number:
	
	  One or more data fields in record x were truncated.
	
	CAUSE
	=====
	
	ODBC architecture does not require a header file to perform a mail merge. The
	elimination of header files ensures backward compatibility with Word version 2.0
	for Windows mail merge files.
	
	RESOLUTION
	==========
	
	Do not attach a header file when you perform a mail merge using an ODBC driver;
	remove any currently attached header file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
