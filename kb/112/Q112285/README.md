---
layout: page
title: "Q112285: PC Adm: IMPORT -R Versus Replace Command in Text File"
permalink: /kb/112/Q112285/
---

## Q112285: PC Adm: IMPORT -R Versus Replace Command in Text File

	Article: Q112285
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When IMPORT.EXE is invoked with the -R option, the end result is identical to
	when the import text file contains a Replace transaction line (for example, "R
	Gateway:"). The -R option is supported primarily for compatibility with version
	2.1x Mail for PC Networks postoffices.
	
	The R transaction gives you a little more flexibility because you can replace
	multiple gateway address lists or multiple PC Mail postoffices from within the
	same input file.
	
	NOTE: The only difference between the Replace transaction and the -R parameter is
	that -R will modify the postoffice address list (POL) if the -A parameter is
	also used. The Replace transaction does not.
	
	
	Additional query words: 3.00 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
