---
layout: page
title: "Q31529: MASM 5.10 EXT.DOC: DoMessage - Outputs String on Dialog Line"
permalink: /kb/031/Q31529/
---

## Q31529: MASM 5.10 EXT.DOC: DoMessage - Outputs String on Dialog Line

	Article: Q31529
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information is from the MASM Version 5.10 EXT.DOC
	file.
	   Please note that numbering for both COL and LINE variables begins
	with 0.
	
	/*  DoMessage - outputs a string on the dialog line
	 *
	 *  The DoMessage function prints the specified string on the dialog
	 *  line.
	 *
	 *  pStr        Pointer to character string to print
	 *
	 *  returns     Number of characters written
	 *
	 */
	int pascal DoMessage (pStr)
	char far * pStr;
