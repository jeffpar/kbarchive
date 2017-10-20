---
layout: page
title: "Q68989: FIX: HELPMAKE Decodes Help Database Incorrectly"
permalink: /kb/068/Q68989/
---

## Q68989: FIX: HELPMAKE Decodes Help Database Incorrectly

{% raw %}

	Article: Q68989
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.03,1.05,1.06,1.07
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft HELPMAKE Utility for MS-DOS and OS/2, versions 1.03, 1.05, 1.06, 1.07 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a concatenated help database is decoded with either "Decode" (/D) or "Decode
	Unformatted" (/DU), HELPMAKE may be caught in an infinite loop that will
	eventually fill the hard disk.
	
	RESOLUTION
	==========
	
	When using HELPMAKE.EXE to decode concatenated help databases, you must use the
	"Decode Split" option (/DS).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with HELPMAKE for MS-DOS and OS/2.
	This problem was corrected in HELPMAKE version 1.08.
	
	MORE INFORMATION
	================
	
	If OS2.HLP is decoded with
	
	  helpmake /D /Ooutfile OS2.HLP
	
	HELPMAKE will decompress the first database in OS2.HLP over and over until either
	the disk fills up or you stop the program (with a CTRL+BREAK, for example).
	
	If OS2.HLP is decoded with
	
	  helpmake /DS OS2.HLP
	
	it is broken into STRUCT.HLP, MACROS.HLP, and TABLES.HLP. These help files can
	then be decoded properly with the /D or /DU option.
	
	If you don't know how a help file is assembled, the following are the steps to
	take to decompress it:
	
	1. Save a backup copy of the help file in case of problems.
	
	2. Rename the help file to "TEMP.HLP".
	
	3. Split the file as follows:
	
	  HELPMAKE /DS TEMP.HLP
	
	  If the file is not a concatenated database, you will get a single file with
	  the name of the help database as it was originally built (the internal
	  database name).
	
	  If the file is a concatenated database, you will get individual help files
	  with the internal database names. For OS2.HLP, these are STRUCT.HLP,
	  MACROS.HLP, and TABLES.HLP.
	
	4. Decode the resulting files as follows:
	
	  HELPMAKE /D TEMP1.HLP /OTEMP1.SRC
	  HELPMAKE /D TEMP2.HLP /OTEMP2.SRC
	
	Additional query words: 1.03 1.05 1.06 1.07
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword2 kbHELPMAKE kbZNotKeyword3 kbHELPMAKE106DOS
	Version           : MS-DOS:1.03,1.05,1.06,1.07
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
