---
layout: page
title: "Q190310: PRB: IMPORT/EXPORT Commands Do Not Support CSV File Type"
permalink: kb/190/Q190310/
---

## Q190310: PRB: IMPORT/EXPORT Commands Do Not Support CSV File Type

	Article: Q190310
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro 6.0 adds support for a new file format called Comma Separated
	Value (CSV). The IMPORT and EXPORT commands do not support this new file format.
	You also notice that this file type is missing from the Import and Export
	Wizards.
	
	RESOLUTION
	==========
	
	Use the APPEND FROM and COPY TO commands in place of the IMPORT and EXPORT
	commands.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the File menu, choose Import.
	
	2. Examine the list of available Types.
	
	There is no option available for the CSV file type.
	
	Additional query words: kbvfp600 KBXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
