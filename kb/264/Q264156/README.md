---
layout: page
title: "Q264156: INFO: Including RC File in Another RC File w/ Different CodePage"
permalink: /kb/264/Q264156/
---

## Q264156: INFO: Including RC File in Another RC File w/ Different CodePage

{% raw %}

	Article: Q264156
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbNLS kbOSWinNT400 kbOSWin2000 kbResource kbVC kbOSWin95 kbOSWin98 kbLocalization kbGrp
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Including a .rc file within another .rc file may cause problems when the
	codepages in the two .rc files do not match. For example, if you include a
	Chinese resource file, Chsres.rc, in an English resource file, the combined
	resource file may not compile correctly (unless the resource file is on a
	Chinese platform). In the .rc file, if you do not provide a language and a
	#pragma statement, the system default is always used.
	
	MORE INFORMATION
	================
	
	To avoid the problem, you must set the language and #pragma statement correctly
	before you include another .rc file. For example, in the English .rc file, add
	the following lines before you include the Chinese resource file:
	
	  LANGUAGE 04, 02
	  #pragma code_page(936)
	  #include "chsres.rc"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbNLS kbOSWinNT400 kbOSWin2000 kbResource kbVC kbOSWin95 kbOSWin98 kbLocalization kbGrpDSIntl kbDSupport 
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
