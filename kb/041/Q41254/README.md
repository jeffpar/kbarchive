---
layout: page
title: "Q41254: Error in &quot;C For Yourself,&quot; Page 294"
permalink: /kb/041/Q41254/
---

## Q41254: Error in &quot;C For Yourself,&quot; Page 294

	Article: Q41254
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# G890208-11455 docerr | mspl13_c
	Last Modified: 28-FEB-1989
	
	In the manual "C for Yourself," provided with QuickC Version 2.00,
	there are two errors on Page 294.
	
	Both the example for the break statement, and the example for the
	continue statement contain the same error. In both examples, the
	following line is incorrect:
	
	   while ( c != "Q" )
	
	The line should appear as follows:
	
	   while ( c != 'Q' )
