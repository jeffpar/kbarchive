---
layout: page
title: "Q42072: Incorrect Usage of /o Switch in &quot;Peter Norton's Inside OS/2&quot;"
permalink: /kb/042/Q42072/
---

## Q42072: Incorrect Usage of /o Switch in &quot;Peter Norton's Inside OS/2&quot;

	Article: Q42072
	Product(s): See article
	Version(s): 5.10
	Operating System(s): OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 16-MAY-1989
	
	"Peter Norton's Inside OS/2" book written by Peter Norton and Robert
	Lafore, published by Brady, contains examples of OS/2 programming that
	were written and compiled using the Microsoft C Optimizing compiler
	Version 5.10. Page 536 of the book states the following:
	
	   The -o option prevents the compiler from thinking that the global
	   variables have been defined more than once.
	
	This is incorrect. The /o option is an undocumented compiler switch
	that allows you to name the executable file. It is the same as the /Fe
	compiler switch.
