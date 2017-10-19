---
layout: page
title: "Q39638: /Ss Fails under Environment Variable Setting"
permalink: /kb/039/Q39638/
---

## Q39638: /Ss Fails under Environment Variable Setting

	Article: Q39638
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.10 | mspl13_c
	Last Modified: 29-DEC-1988
	
	If you set CL= in your environment with the /Ss switch and a string
	with embedded spaces within quotation marks, the listing file will not
	contain the expected results.
	
	For example if your AUTOEXEC file contains the following line
	
	   SET CL=/Fs /Ss"Line with spaces"
	
	and you invoke the compiler with the following command, the compiler
	produces the .LST file as expected:
	
	   CL filename.C
	
	However, the header would read as follows
	
	   "Line
	
	instead of the following:
	
	   "Line with spaces"
	
	Microsoft has confirmed this to be a problem in Version 5.10. We are
	researching this problem and will post new information as it becomes
	available.
	
	The workaround is to remove the /Ss"Line with spaces" from the
	environment CL setting, and either type it on the command line, or put
	it into a batch file, or make file.
