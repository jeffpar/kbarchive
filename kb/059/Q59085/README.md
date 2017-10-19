---
layout: page
title: "Q59085: Replacing Normal String Takes Longer Than Regular Expression"
permalink: /kb/059/Q59085/
---

## Q59085: Replacing Normal String Takes Longer Than Regular Expression

	Article: Q59085
	Product(s): See article
	Version(s): 1.00 1.02 | 1.00 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist1.00 buglist1.02 | mspl13_basic
	Last Modified: 15-MAR-1990
	
	Replacing a regular expression takes less time than replacing a normal
	string in the Microsoft M Editor, Versions 1.00 and 1.02. To
	demonstrate the time difference, perform test replacements in the
	following manner:
	
	1. Load the M Editor with a large file -- greater than 5000 lines.
	
	2. Perform and time a replacement on a regular expression, one that
	   fails to match in the file, for example:
	
	      arg arg CTRL+L     zzzz   <- search for this regular expression
	                         zzzz   <- replace with this regular expression
	
	3. Perform and time a replacement on a normal string (one that fails
	   to match in the file), for example:
	
	      arg CTRL+L     zzzz   <- search for this string
	                     zzzz   <- replace with this string
	
	The string replacement may take twice as long as the
	regular-expression replacement. To obtain the higher replace speed,
	use the regular-expression replacement (arg arg CTRL+L) even when you
	are not fully using the regular-expression syntax.
	
	Note that a psearch on a regular expression psearch is NOT quicker
	than a psearch on a normal string.
	
	Microsoft has confirmed this to be a problem in Versions 1.00 and
	1.02. We are researching this problem and will post new information
	here as it becomes available.
	
	For details on regular expression, refer to the "Microsoft Editor
	User's Guide," Chapter 5, "Regular Expressions."
