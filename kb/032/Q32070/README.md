---
layout: page
title: "Q32070: D1001 &quot;Could Not Execute C2.EXE&quot; with DOS Version 2.10"
permalink: /kb/032/Q32070/
---

## Q32070: D1001 &quot;Could Not Execute C2.EXE&quot; with DOS Version 2.10

{% raw %}

	Article: Q32070
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 23-SEP-1988
	
	The compiler can generate the error D1001, "could not execute C2.EXE,"
	under the following conditions:
	
	1. The .EXE file cannot be found. A terminate-and-stay-resident
	   (TSR) program could alter the setting of the PATH environment
	   variable, causing the .EXE to not be found.
	
	2. There is not enough memory.
	
	3. The .EXE file is corrupt, or has an illegal .EXE file format.
	
	4. DOS and COMMAND.COM are incompatible. If their version numbers
	   are different, the compiler might not be able to open the
	   intermediate file in the TMP directory.

{% endraw %}
