---
layout: page
title: "Q37666: Additional Causes of Error C2152"
permalink: /kb/037/Q37666/
---

## Q37666: Additional Causes of Error C2152

{% raw %}

	Article: Q37666
	Product(s): See article
	Version(s): 5.00 5.10 | 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QUICKC docerr | mspl13_c
	Last Modified: 14-NOV-1988
	
	Page 267 of the "Microsoft C 5.1 Optimizing Compiler User's Guide"
	(Page 337 of the "Microsoft QuickC Programmer's Guide") states that
	error C2152 (pointers to functions with different attributes) is
	caused when the following occurs:
	
	   An attempt was made to assign a pointer to a function
	   declared with one calling convention (cdecl, fortran, or
	   pascal) to a pointer to a function declared with a
	   different calling convention.
	
	This is correct, but incomplete. Additional causes are mixing near
	and far function pointers and mixing interrupt and non-interrupt
	function pointers.

{% endraw %}
