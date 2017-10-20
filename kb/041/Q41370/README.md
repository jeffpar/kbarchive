---
layout: page
title: "Q41370: The Meaning of &quot;ILINK:Fatal Error L1266: Invalid .EXE File&quot;"
permalink: /kb/041/Q41370/
---

## Q41370: The Meaning of &quot;ILINK:Fatal Error L1266: Invalid .EXE File&quot;

{% raw %}

	Article: Q41370
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 28-FEB-1989
	
	When the incremental linker option /Gi is used in compiling a file
	with the QCL command-line driver, the following message may appear
	after the program has been compiled:
	
	   ILINK:fatal error L1266: invalid .EXE file
	   ILINK: performing full link
	
	At this point, the incremental linker calls the QuickC 4.06 linker,
	and performs a full link.
	
	This behavior is to be expected whenever the incremental linker
	encounters a file that requires a full link -- typically, files for
	which there is no current .OBJ or .EXE file. There is nothing to be
	saved by performing an incremental link, so the incremental linker
	calls the 4.06 linker to do a full link.

{% endraw %}
