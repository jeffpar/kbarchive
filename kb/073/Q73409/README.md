---
layout: page
title: "Q73409: FIX: MASM 6.0 Fails with /Ta if Filename Has No Period"
permalink: /kb/073/Q73409/
---

## Q73409: FIX: MASM 6.0 Fails with /Ta if Filename Has No Period

{% raw %}

	Article: Q73409
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 may overwrite a source file or
	generate a file access error if the /Ta option is used to specify a filename
	without an extension and no period is specified at the end.
	
	To illustrate this problem, assume an assembly source file called TEST (with no
	extension) exists in the current directory and the following command line is
	used to invoke the assembler:
	
	  ML /c /Ta TEST
	
	Under DOS, this results in the loss of the source file TEST, regardless of
	whether the source file assembles successfully. Without the trailing period, the
	assembler fails to add the .OBJ extension to the object module that it tries to
	produce. If the file assembles cleanly, then the new object file (named TEST)
	overwrites the original source. If there is an error in the original TEST source
	file, then the file is simply deleted because the assembler deletes the
	incomplete .OBJ (now named TEST) during cleanup after the error.
	
	Under OS/2, the command line above may cause the assembler to generate the
	following error:
	
	  fatal error A1000: cannot open file : test
	
	The same problem occurs with a long filename under HPFS. For example, an A1000
	error will be generated under OS/2 with this command line:
	
	  ML /c /Ta "This is a long file name test"
	
	RESOLUTION
	==========
	
	The workaround for all cases is to simply add a period to the end of the
	filename. For example:
	
	  ML /c /Ta TEST.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
