---
layout: page
title: "Q31518: MASM 5.10 EXT.DOC: DelLine - Deletes Lines from a File"
permalink: /kb/031/Q31518/
---

## Q31518: MASM 5.10 EXT.DOC: DelLine - Deletes Lines from a File

{% raw %}

	Article: Q31518
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information is from the MASM Version 5.10 EXT.DOC
	file.
	   Please note that numbering for both COL and LINE variables begins
	with 0.
	
	/*  DelLine - deletes lines from a file
	 *
	 *  The DelLine function deletes lines yStart through yEnd, inclusive,
	 * in the file pFile.
	 *
	 *  pfile       Handle to file from which lines are to be deleted
	 *  yStart      First line to be deleted
	 *  yEnd        Last line to be deleted
	 */
	void pascal DelLine (pfile, yStart, yEnd)
	PFILE pfile;
	LINE yStart, yEnd;

{% endraw %}
