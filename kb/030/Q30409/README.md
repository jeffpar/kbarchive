---
layout: page
title: "Q30409: Warning A4001: Extra Characters on Line"
permalink: /kb/030/Q30409/
---

## Q30409: Warning A4001: Extra Characters on Line

	Article: Q30409
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 23-MAY-1988
	
	The following code generates the assembler warning, "A4001: Extra
	Characters on Line":
	
	   .MODEL small
	   .CODE
	   mul ah,10
	   end
	
	   Microsoft is researching this problem and will post new information
	as it becomes available.
