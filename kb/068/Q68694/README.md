---
layout: page
title: "Q68694: DOCERR: RTF Codes &#92;fi&lt;n&gt; and &#92;li&lt;n&gt; Use Twips Instead of Spaces"
permalink: /kb/068/Q68694/
---

## Q68694: DOCERR: RTF Codes &#92;fi&lt;n&gt; and &#92;li&lt;n&gt; Use Twips Instead of Spaces

	Article: Q68694
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.06
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft HELPMAKE Utility for MS-DOS and OS/2, version 1.06 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Rich Text Format codes \fi<n> and \li<n> used for creating help
	files are incorrectly described in the online help. The online help states that
	the code \fi<n> indents the first line of the paragraph <n> spaces,
	and the code \li<n> indents the entire paragraph <n> spaces from the
	left margin.
	
	However, the value of <n> is the number of twips and not the number of
	spaces. A twip is 1/20 of a point or 1/1440 of an inch; 180 twips approximates
	one space (that is, \li720 will indent the entire paragraph four spaces).
	
	MORE INFORMATION
	================
	
	Page 4 of the "Professional Advisor Library Reference" describes the RTF codes
	\fi and \li but does not mention the <n> parameter to indent the
	paragraphs.
	
	Page 155 of the "Microsoft C Advanced Programming Techniques" manual describes
	the correct syntax for the RTF codes but does not mention the format for
	<n>.
	
	Additional query words: 1.06
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword2 kbHELPMAKE kbZNotKeyword3 kbHELPMAKE106DOS
	Version           : MS-DOS:1.06
	
	=============================================================================
	
