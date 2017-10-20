---
layout: page
title: "Q41675: QuickC 2.00 README.DOC: Searching for OS/2 Include Files"
permalink: /kb/041/Q41675/
---

## Q41675: QuickC 2.00 README.DOC: Searching for OS/2 Include Files

{% raw %}

	Article: Q41675
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 28-FEB-1989
	
	The following information is taken from the QuickC Version 2.00
	README.DOC file, part 4, "Notes for Windows and OS/2 Programmers."
	
	Searching for Include Files
	
	The following command line is valid even if you do not have the OS/2
	software, as described previously:
	
	   QCL /Lp /c myfile.c
	
	If myfile.c includes an OS/2 include file, however, QCL returns the
	following error:
	
	   C1068  Cannot open file 'name.h'
	
	where 'name.h' is the name of the OS/2 include file.

{% endraw %}
