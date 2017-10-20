---
layout: page
title: "Q85055: FFAPI: What to Watch for When Building an FFAPI File"
permalink: /kb/085/Q85055/
---

## Q85055: FFAPI: What to Watch for When Building an FFAPI File

{% raw %}

	Article: Q85055
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The most common problem encountered when building a File Format Application
	Programming Interface (FFAPI) file is specifying the wrong line termination
	character. This is usually identified by error 144, "Unable to partition line
	%s".
	
	FFAPI looks for a carriage return (<CR>) by default. If the line
	termination character used in the file is <CR><LF> or just
	<LF>, FFAPI will have problems parsing the line.
	
	To ensure that FFAPI will parse the file correctly, make sure FFAPI knows what
	line termination character is being used. To specify this, use the -F parameter
	on the command line, according to the following format:
	
	  Character  Parameter
	  ---------  ---------
	
	  <CR>       -F0
	  <LF>       -F1
	  <CR><LF>   -F2
	
	REFERENCES
	==========
	
	"Microsoft Mail for PC Networks Software Development Kit Application File Format
	API"
	
	"Microsoft Mail for PC Networks Software Development Kit Gateway File Format
	API"
	
	
	Additional query words: 3.00 2.1a pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
