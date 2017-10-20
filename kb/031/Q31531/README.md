---
layout: page
title: "Q31531: MASM 5.10 EXT.DOC: FileLength - Returns Number of Lines in Fil"
permalink: /kb/031/Q31531/
---

## Q31531: MASM 5.10 EXT.DOC: FileLength - Returns Number of Lines in Fil

{% raw %}

	Article: Q31531
	Product(s): See article
	Version(s): 5.10   |
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information is from the MASM Version 5.10 EXT.DOC
	file.
	   Please note that numbering for both COL and LINE variables begins
	with 0.
	
	/*  FileLength - returns the number of lines in the file
	 *
	 *  The FileLength function is particularly useful for global
	 *  operations, in which it is necessary to know where the end of the
	 *  file is.
	 *
	 *  pFile       Handle to file
	 *
	 *  returns     Number of lines in file
	 */
	LINE pascal FileLength (pFile)
	PFILE pFile;

{% endraw %}
