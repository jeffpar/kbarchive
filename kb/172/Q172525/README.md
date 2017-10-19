---
layout: page
title: "Q172525: WD97: Incorrect Format of Phone Number in Mail Merge Result"
permalink: /kb/172/Q172525/
---

## Q172525: WD97: Incorrect Format of Phone Number in Mail Merge Result

	Article: Q172525
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97 kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you perform a mail merge with an external data source
	that contains phone numbers, the phone numbers are incorrectly formatted in the
	mail merge results. The separator characters may be missing or incorrect, or you
	may receive the following error message:
	
	  Error! Picture String contains unmatched quotes.
	
	For example, if the expected phone number is (999) 555-1212, the number may
	appear as one of the following:
	
	- 9995551212
	
	  -or-
	
	- (9995551212)
	
	  -or-
	
	- (999) 555 1212
	
	CAUSE
	=====
	
	This problem occurs when you use data from Microsoft Access or another database
	source that can store phone numbers as ordinary numbers, but can present them
	with the correct formatting in the native program.
	
	During a mail merge, the data appears in its native, stored format from the
	external data source. This occurs when the merge field for the phone number is
	missing the numeric picture field switch or has incorrect syntax.
	
	WORKAROUND
	==========
	
	To work around this problem, use the numeric picture switch "\#" in the merge
	field for the phone number. Follow these rules when using the numeric picture
	switch "\#":
	
	- Enclose the format picture in quotation marks (") if the output format you
	  want contains spaces, parentheses, or other characters.
	
	- Enclose any hyphens in apostrophes (') so that the hyphen is treated as a
	  text string. This is necessary even if the entire format picture is already
	  enclosed in quotation marks.
	
	Examples:
	
	  Format wanted     Field code to use
	  -----------------------------------------------------------
	  (999) 555-1212    {MERGEFIELD phone \# "(###) ###'-'####" }
	  999-555-1212      {MERGEFIELD phone \# "###'-'###'-'####" }
	  999 555-1212      {MERGEFIELD phone \# "### ###'-'####" }
	
	NOTE: To view the actual field codes { } instead of the merge fields <<
	>>, use ALT+F9 to turn them on and off.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142340 WD: Date, Currency Results Incorrect Merging from Access Database
	
	  Q121938 WD: Hyphens Don't Display Correctly with Numeric Picture Switch
	
	Additional query words: 8.0 8.00 ASCII ANSI dBase FoxPro Paradox SQL telephone office97 text
	
	======================================================================
	Keywords          : kbfield word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
