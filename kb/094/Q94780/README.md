---
layout: page
title: "Q94780: ISAMCVT Problems Converting BTRIEVE Files"
permalink: /kb/094/Q94780/
---

## Q94780: ISAMCVT Problems Converting BTRIEVE Files

	Article: Q94780
	Product(s): Microsoft Visual Basic for Windows
	Version(s): MS-DOS:1.0; :7.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	- Microsoft BASIC Professional Development System (PDS) for MS-DOS, version 7.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ISAMCVT may have problems converting BTRIEVE data files to the Basic ISAM
	format. Some specific instances are:
	
	- Converting files with multiple string fields greater than 255 characters
	  loses the data after the first 256-byte column.
	
	- Using ISAMCVT to convert a BTRIEVE file requires the use of a SPECFILE which
	  is simply a description of the columns and their length. An incorrect
	  SPECFILE can lead to memory corruption and cause errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: VBmsdos buglist1.00 buglist7.10 1.00 7.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbBASICSearch kbZNotKeyword3 kbBASICPDS710DOS kbVB100DOS
	Version           : MS-DOS:1.0; :7.1
	
	=============================================================================
	
