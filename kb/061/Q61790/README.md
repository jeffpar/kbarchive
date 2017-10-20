---
layout: page
title: "Q61790: A1022 Error If Include Environment Variable Is Not Set"
permalink: /kb/061/Q61790/
---

## Q61790: A1022 Error If Include Environment Variable Is Not Set

{% raw %}

	Article: Q61790
	Product(s): See article
	Version(s): 2.51
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.51 | mspl13_masm
	Last Modified: 11-MAY-1990
	
	In QuickC with QuickAssembler version 2.51, when using QCL.EXE to
	compile assembly language programs, if the INCLUDE environment
	variable is not set, the following error is generated:
	
	   command line fatal error A1022: source file name not specified
	
	This problem does not occur in the QuickC with QuickAssembler
	environment (QC.EXE) or with QuickC with QuickAssembler version 2.01.
	
	Microsoft has confirmed this to be a problem with QuickAssembler
	version 2.51. We are researching this problem and will post new
	information here as it becomes available.
	
	The following DOS commands reproduce the "A1022: source file name not
	specified" error:
	
	   SET INCLUDE=
	   QCL test.asm
	
	To compile programs successfully, set the INCLUDE environment variable
	to the QuickC with QuickAssembler INCLUDE directory; for example, SET
	INCLUDE=D:\QCQA\INCLUDE.

{% endraw %}
