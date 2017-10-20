---
layout: page
title: "Q93004: BUG: QuickHelp Paste Topic Command Pastes Two Extra Lines"
permalink: /kb/093/Q93004/
---

## Q93004: BUG: QuickHelp Paste Topic Command Pastes Two Extra Lines

{% raw %}

	Article: Q93004
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.7,1.83
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.7, 1.83 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After pasting an example program from the Microsoft QuickHelp utility, compiling
	the program generates the following errors, possibly among others:
	
	  settime.c(1) : error C2143: syntax error : missing '{'
	  before ':'
	  settime.c(1) : error C2143: syntax error : missing ';'
	  before ':'
	  settime.c(81) : error C2143: syntax error : missing ';'
	  before '-'
	
	SETTIME.C is the example program to demonstrate the _dos_getdate() function.
	
	CAUSE
	=====
	
	These errors are caused by the following two lines which are pasted into the
	file with the QuickHelp utility:
	
	  Topic: SETTIME.C
	
	  -and-
	
	  -<>-
	
	The "<>" symbol in the second line is the character 0x04 that indicates the
	end of the topic.
	
	RESOLUTION
	==========
	
	Modify the file to comment out or delete the two lines indicated above before
	compiling the example program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in QuickHelp versions 1.7 and 1.83.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.70 1.83 ENDUSER | buglist1.70 buglist1.83
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbQBASICSearch kbQuickHelpSearch kbQuickHelp170DOS kbQuickHelp183DOS
	Version           : MS-DOS:1.7,1.83
	
	=============================================================================
	

{% endraw %}
