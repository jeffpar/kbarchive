---
layout: page
title: "Q61978: FIX: U1001 w/ Corrupted MAKEDIR Macro in Real Mode NMAKE 1.11"
permalink: /kb/061/Q61978/
---

## Q61978: FIX: U1001 w/ Corrupted MAKEDIR Macro in Real Mode NMAKE 1.11

{% raw %}

	Article: Q61978
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, version 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NMAKE version 1.11 may produce a U1001 "syntax error: illegal character
	<character> in macro" while building a project because of a problem with
	the MAKEDIR macro. The problem occurs only with the DOS version of NMAKE 1.11
	and not the protected mode version.
	
	CAUSE
	=====
	
	NMAKE has an internal macro, MAKEDIR, which contains the full drive and path to
	the directory from where NMAKE was invoked. This macro is corrupted in NMAKE
	version 1.11 under DOS. Rather than the correct pathname, the macro contains
	"garbage" or graphics characters. This macro can cause the U1001 "illegal
	character" error message.
	
	To display the contents of MAKEDIR, invoke NMAKE with the /P switch. This switch
	causes all macros to be displayed to the screen.
	
	RESOLUTION
	==========
	
	To work around this problem, manually set MAKEDIR in the .MAK file for the
	project. Set it to the drive and path where the project is being built. If
	MAKEDIR is manually set in the .MAK file, it will override the default setting
	and correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMAKE version 1.11. This problem
	was corrected in NMAKE version 1.12.
	
	Additional query words: 1.11 buglist1.11 fixlist1.12
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS
	Version           : MS-DOS:1.11
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
