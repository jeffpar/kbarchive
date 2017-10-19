---
layout: page
title: "Q30978: /2 and /O Switches Not Compatible"
permalink: /kb/030/Q30978/
---

## Q30978: /2 and /O Switches Not Compatible

	Article: Q30978
	Product(s): See article
	Version(s): 2.30
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 9-NOV-1988
	
	The UTILITY.DOC states that the /O switch is not compatible with
	the /2 switch. However, the SDK Installation Notes file uses the
	following code as the example of how to debug child processes:
	
	    cvp /2 /O <program> <program arguments>
	
	   This file recommends that the /2 switch be used when debugging PM
	applications. The UTILITY.DOC file is correct. You cannot use the /2
	and /O switches at the same time.
