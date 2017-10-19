---
layout: page
title: "Q61243: C 6.00 README: HIMEM Documentation"
permalink: /kb/061/Q61243/
---

## Q61243: C 6.00 README: HIMEM Documentation

	Article: Q61243
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 25-APR-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	HIMEM DOCUMENTATION
	-------------------
	
	Description
	-----------
	
	HIMEM.SYS is an extended memory manager provided so that CodeView can
	take advantage of all your computer's available memory when running
	under DOS on an 80286 or 80386 machine with expanded memory.
	
	Usage
	-----
	
	   DEVICE=[d:][path]HIMEM.SYS [options]
	
	The most common way to use HIMEM.SYS is to include the following line
	in your CONFIG.SYS file:
	
	   DEVICE=HIMEM.SYS
	
	The following options are also available:
	
	   /HMAMIN=h
	   /NUMHANDLES=n
	
	The /HMAMIN option allows controlled access to high memory by
	specifying (in <h>) the minimum amount of memory a terminate-and-
	stay-resident (TSR) program can use in high memory.
	
	The /NUMHANDLES option sets (in <n>) the maximum number of extended
	memory block handles that can be used at any given time.
