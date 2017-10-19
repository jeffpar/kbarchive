---
layout: page
title: "Q61200: C 6.00 README: How to Get Fastest/Smallest Code"
permalink: /kb/061/Q61200/
---

## Q61200: C 6.00 README: How to Get Fastest/Smallest Code

	Article: Q61200
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-AUG-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	How to Get Fastest/Smallest Code
	--------------------------------
	
	To get the fastest possible code, use the following optimization
	settings:
	
	   /Oxaz /Grs
	
	The /Oz option causes the compiler to perform the most aggressive type
	of loop optimization.
	
	To get the smallest possible code, use the following settings:
	
	   /Osleazr
	
	For small code with a greater margin of safety, use
	
	   /Osler
