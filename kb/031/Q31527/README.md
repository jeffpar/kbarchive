---
layout: page
title: "Q31527: MASM 5.10 EXT.DOC: FileRead - Reads File Contents into Buffer"
permalink: /kb/031/Q31527/
---

## Q31527: MASM 5.10 EXT.DOC: FileRead - Reads File Contents into Buffer

{% raw %}

	Article: Q31527
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information is from the MASM Version 5.10 EXT.DOC
	file.
	   Please note that numbering for both COL and LINE variables begins
	with 0.
	
	/*  FileRead - reads the contents of a file into the file buffer
	 *
	 *  The FileRead function reads the contents of the specified disk
	 *  file and stores them in the internal file buffer specified by pFile.
	 *  The old contents of the file buffer are lost.
	 *
	 *  name        Pointer to name of file to be read
	 *  pFile       Handle to internal file to receive contents
	 *
	 *  returns     TRUE (-1) if successful; FALSE (0) if file could not
	 *  be read
	 */
	flagType pascal FileRead (name, pFile)
	char far *name;
	PFILE pFile;

{% endraw %}
