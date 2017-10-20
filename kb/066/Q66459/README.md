---
layout: page
title: "Q66459: FIX: Bad Macro Substitution, In-line File in Inference Rule"
permalink: /kb/066/Q66459/
---

## Q66459: FIX: Bad Macro Substitution, In-line File in Inference Rule

{% raw %}

	Article: Q66459
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS 
	- Microsoft NMAKE Utility for OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an in-line file inside of an inference rule with NMAKE version 1.11, 1.12,
	or 1.13 can cause improper results in macro substitutions following the in-line
	file.
	
	STATUS
	======
	
	This problem has been fixed in NMAKE versions 1.2 and later.
	
	MORE INFORMATION
	================
	
	The following NMAKE description file produces the following output:
	
	  cl -c test.c
	  link @lrf
	  cd test.exe   <---- This is wrong.   It should be "cd \test"
	
	NMAKE: fatal error U1077: 'cd' return code 1
	Stop.
	
	The third line of the output is incorrect. The macro $(SAMPLEDIR) is incorrectly
	replaced with the value of $(EXENAME).
	
	Sample Makefile
	---------------
	
	  EXENAME=test.exe
	  SAMPLEDIR=\test
	
	  .obj.exe:
	    link @<<lrf     <--- In-line file with $(EXENAME) macro
	  $<                     causes the problem.
	  $(EXENAME);
	  <<KEEP
	    cd $(SAMPLEDIR)
	
	  test.exe:test.obj
	
	  test.obj:test.c
	
	Additional query words: 1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
