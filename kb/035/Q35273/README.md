---
layout: page
title: "Q35273: Sample Program That Makes OS/2 Call to DosQCurDisk Function"
permalink: /kb/035/Q35273/
---

## Q35273: Sample Program That Makes OS/2 Call to DosQCurDisk Function

{% raw %}

	Article: Q35273
	Product(s): See article
	Version(s): 6.00 6.00b 7.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 31-JAN-1990
	
	Below is a sample program that makes a call to the MS OS/2 function
	DosQCurDisk. This program can be compiled in Microsoft BASIC Compiler
	Versions 6.00 and 6.00b for MS OS/2 and in Microsoft BASIC
	Professional Development System (PDS) Version 7.00 for MS OS/2.
	
	'The declarations are in BSEDOSFL.BI
	
	DECLARE FUNCTION DosQCurDisk%(_
	                 SEG P1 AS INTEGER,_
	                 SEG P2 AS LONG)
	
	DIM number AS INTEGER
	DIM LogicalDriveMap AS LONG
	
	x=DosQCurDisk%(number,LogicalDriveMap)
	if (x) then
	    print "An error occurred.  The number is : ";number
	else
	    print "Logical Drive Map; ";LogicalDriveMap
	end if
	end

{% endraw %}
