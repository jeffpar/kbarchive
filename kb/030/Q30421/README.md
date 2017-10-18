---
layout: page
title: "Q30421: FIX: Extra Line-Feed Char Generated in Four-Digit Listing File"
permalink: kb/030/Q30421/
---

## Q30421: FIX: Extra Line-Feed Char Generated in Four-Digit Listing File

	Article: Q30421
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the current date consists of four digits (e.g. 1/2/88), Microsoft Macro
	Assembler (MASM) versions 5.10 and 5.10a will produce an assembly-listing file
	with extra blank lines in the page headings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following assembly-listing files were generated from the same source code.
	The only difference is the date on which they were created. Note the extra blank
	line between the data and the page number on the first listing.
	
	Listing 1
	---------
	Microsoft (R) Macro Assembler Version 5.10          1/2/88 19:55:07
	
	                                                   Page    1-1
	
	Listing 2
	---------
	Microsoft (R) Macro Assembler Version 5.10          1/23/88 19:55:07
	                                                   Page    1-1
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
