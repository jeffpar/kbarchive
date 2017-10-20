---
layout: page
title: "Q97637: Using Memory Variable Files (.MEM) in FoxPro"
permalink: /kb/097/Q97637/
---

## Q97637: Using Memory Variable Files (.MEM) in FoxPro

{% raw %}

	Article: Q97637
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50x 2.60 2.60a | 2.50x 2.
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Memory variable files are a way to store the status of memory variables that are
	currently stored in memory and use them later in the same program or in another
	session of FoxPro.
	
	The commands used when creating and using .MEM files are as follows:
	
	     SAVE TO <file>|TO MEMO <memo field> [ALL LIKE|ALL EXCEPT <skel>]
	
	  and
	
	     RESTORE FROM <file>|FROM MEMO <memo field> [ADDITIVE]
	
	MORE INFORMATION
	================
	
	A few things that are important to remember when using memory variable files:
	
	1. All memory variables that are stored in the .MEM file, regardless of being
	  declared PUBLIC or PRIVATE, are treated as PRIVATE variables if they are
	  restored in a program unless the ADDITIVE clause is added to the RESTORE FROM
	  command. They are treated as PUBLIC variables if they are restored from the
	  Command window.
	
	  Following is an example of using the RESTORE FROM....ADDITIVE clause to
	  declare a restored memory variable as PUBLIC in a program:
	
	        PROG1.PRG
	
	        val1 = 12
	        val2 = "test"
	        SAVE TO temp
	
	        PROG2.PRG
	
	        PUBLIC val2
	        RESTORE FROM temp
	        DISPLAY MEMORY LIKE val?
	        CLEAR ALL
	        PUBLIC val2
	        RESTORE FROM temp ADDITIVE
	        DISPLAY MEMORY LIKE val?
	
	2. All variables currently in memory will be placed in the .MEM file unless the
	  ALL EXCEPT or ALL LIKE options are included with the SAVE TO command. The
	  wildcard characters ? and * can be used with these options.
	
	  To exclude variables, use the ALL EXCEPT <skel> option of the SAVE TO
	  command. For example:
	
	        SAVE TO test ALL EXCEPT v*
	
	  To include variables, use the ALL LIKE <skel> option of the SAVE TO
	  command. For example:
	
	        SAVE TO test ALL LIKE var?
	
	3. System memory variables are not affected by RESTORE FROM or SAVE TO commands.
	
	4. Any memory variables or arrays currently in memory are erased unless the
	  ADDITIVE clause is included with the RESTORE FROM command. If a variable
	  brought in has the same name as an existing variable, the value of the
	  variable in the memory file will replace the current value.
	
	5. If the number of variables that will be brought in by the RESTORE FROM
	  ADDITIVE command exceeds the MVCOUNT limit when added to the variables
	  currently in memory, the maximum number possible will be restored. The
	  MVCOUNT setting is stored in the CONFIG.FP file with the default setting of
	  256 variables.
	
	Additional query words: VFoxWin FoxUnix FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c x- platform cross-platform
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.00 2.50x 2.60 2.60a | 2.50x 2.
	
	=============================================================================
	

{% endraw %}
