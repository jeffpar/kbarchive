---
layout: page
title: "Q118533: FFAPI: Understanding FFAPI Error Message Format"
permalink: /kb/118/Q118533/
---

## Q118533: FFAPI: Understanding FFAPI Error Message Format

{% raw %}

	Article: Q118533
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains Microsoft Mail File Format API (FFAPI) error message
	formatting. Formats indicate the message and line number that caused problems
	with a FFAPI operation.
	
	Errors appear in this format:
	
	xxx-yyy-zzz Text describing the error
	
	Where:
	
	xxx = The error number, which is explained in the FFAPI SDK manual.
	
	yyy = The position number of the message in the MMF file that FFAPI was operating
	on at the time.
	
	zzz = The message line-number that produced the problem.
	
	For example, here is a common error:
	
	141-1-2 Cannot match token TO (has tail net/po/mailbox)
	
	141 = cannot match token < > (has tail < >)
	1 = the first message in the MMF file
	2 = the second line of the message
	
	The most common reason for this error is unsuccessful FFAPI parsing due to the
	presence of an incorrect "end of line" marker. See -f parameter for more
	information on this particular error.
	
	REFERENCES
	==========
	
	"Microsoft Mail for PC Networks, Software Development Kit Gateway File Format
	API"
	
	Additional query words: 3.00 ffapi error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
