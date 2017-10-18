---
layout: page
title: "Q86984: X400: Location of Log Files and When You Can Move Them"
permalink: kb/086/Q86984/
---

## Q86984: X400: Location of Log Files and When You Can Move Them

	Article: Q86984
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	For the Microsoft Mail Gateway to X.400 version 3.0, a new log file is
	created every day. The name of the log file is taken from the date of
	the X.400 gateway workstation and is in the format X400mmdd.LOG, where
	"mm" represents the month and "dd: represents the day.
	
	The X.400 gateway log file is activated by using the command-line
	option "-LV". The log file is opened in the LOG subdirectory of the
	gateway home postoffice.
	
	In earlier software releases, the gateway composes and writes to only
	one log file: X400.LOG
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
