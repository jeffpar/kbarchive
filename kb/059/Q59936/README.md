---
layout: page
title: "Q59936: PRB: L4047 Warning Benign When C 6 Run-time Libraries Used"
permalink: /kb/059/Q59936/
---

## Q59936: PRB: L4047 Warning Benign When C 6 Run-time Libraries Used

{% raw %}

	Article: Q59936
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.1,5.11,5.13,5.15,5.2; OS/2:5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.1, 5.11, 5.13, 5.15, 5.2 
	- Microsoft LINK for OS/2, versions 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft LINK generates the following message when it links an application:
	
	  L4047 - Multiple code segments in module of overlaid program incompatible
	  with /CO
	
	CAUSE
	=====
	
	The application includes the start-up code from the Microsoft C version 6.0
	run-time libraries. This code includes a second segment to hold floating-point
	math routines. Because this segment (EMULATOR_TEXT) does not contain any
	CodeView information, it may be an error, as LINK indicates.
	
	RESOLUTION
	==========
	
	This warning is expected in this situation and can be ignored. Microsoft LINK
	versions 5.3 and later do not generate this message.
	
	Additional query words: 5.10 5.11 5.13 5.15 5.20
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK510DOS kbLINK511DOS kbLINK513DOS kbLINK515DOS kbLINK520DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:5.1,5.11,5.13,5.15,5.2; OS/2:5.1,5.11,5.13,5.15
	
	=============================================================================
	

{% endraw %}
