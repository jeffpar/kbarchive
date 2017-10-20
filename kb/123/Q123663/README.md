---
layout: page
title: "Q123663: BUG: The Command &quot;ml /?&quot; Causes Unexpected Errors"
permalink: /kb/123/Q123663/
---

## Q123663: BUG: The Command &quot;ml /?&quot; Causes Unexpected Errors

{% raw %}

	Article: Q123663
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With MASM version 6.1, if a one-character subdirectory name exists in the root
	directory, the command "ml /?" results in this error:
	
	  fatal error A1006 invalid command line option /A
	
	Here A is the one-character subdirectory name.
	
	With MASM version 6.11, the same situation results in this error message:
	
	  warning A4007: option untranslated, directive required : /A
	  fatal error A1017: missing source filename
	
	CAUSE
	=====
	
	ML.EXE interprets the slash (/) as if it were a backslash (\) and interprets the
	question mark (?) as a wildcard. The one-character subdirectory off the root
	directory is a match for \?. This confuses the assembler/compiler, causing it to
	interpret the result as the switch /A.
	
	RESOLUTION
	==========
	
	To work around the problem, use this command:
	
	  " ml -? " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.10 6.11 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	

{% endraw %}
