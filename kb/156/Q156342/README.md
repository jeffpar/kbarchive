---
layout: page
title: "Q156342: PRB: DO &lt;Program Name&gt; Runs Cached Version of Program"
permalink: /kb/156/Q156342/
---

## Q156342: PRB: DO &lt;Program Name&gt; Runs Cached Version of Program

{% raw %}

	Article: Q156342
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a program file, change the default directory, and then attempt to run
	a different program of the same name from that directory, the first program runs
	again.
	
	CAUSE
	=====
	
	For performance purposes, program or procedure code is cached in memory. The
	version in memory is used when the same procedure or program name is executed
	again.
	
	WORKAROUND
	==========
	
	Use the CLEAR PROGRAM command before running the second program of the same
	name.
	
	-or-
	
	Reference the program explicitly by path, for example:
	
	     DO .\<progname>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from a program (.prg) file:
	
	     * Start of code example
	     *
	     LOCAL lcCurDir, lnI
	     lcCurDir=SET('default')+CURDIR()   && Save the current directory
	     CLEAR
	     MD c:\testxx            && Make the new directory
	     FOR lnI = 1 TO 2
	        MD 'c:\testxx\t'+ALLTRIM(STR(lnI))   && Make one of the subdirs
	        CD 'c:\testxx\t'+ALLTRIM(STR(lnI))   && Change to it
	        * Put the program code into the clipboard
	        _CLIPTEXT = '? " This is in My_Prog from T'+ALLTRIM(STR(lnI))+'"'
	        KEYBOARD '{ctrl + v}'      && This will paste it into the program
	        KEYBOARD '{ctrl + w}'      && This will close the editor
	        MODIFY COMMAND My_Prog && Open the editor - then the above 2
	                               &&     keystrokes will be processed
	        DO My_Prog             && Run the program
	     ENDFOR
	     FOR lnI = 1 TO 2
	        CD 'c:\testxx\t'+ALLTRIM(STR(lnI))   && Change to one of the subirs
	        DELETE FILE My_Prog.FXP              && Delete the .PRG/.FXP file
	        DELETE FILE My_Prog.PRG
	        CD ..
	        RD 'c:\testxx\t'+ALLTRIM(STR(lnI))   && Remove the subdir
	     ENDFOR
	
	     CD (lcCurDir)            && Switch to the original default
	     RD c:\testxx             && Remove the directory
	     *
	     * End of code example
	
	Both messages printed to the FoxPro desktop refer to the T1 directory.
	
	Demonstration of Workaround 1:
	
	1. Add a CLEAR PROGRAM command immediately before the DO My_Prog command in the
	  above example:
	
	        CLEAR PROGRAM
	        DO My_Prog
	
	2. Rerun the program, and note that the first message printed to the FoxPro
	  desktop refers to the T1 directory, and the second refers to T2.
	
	Demonstration of Workaround 2:
	
	1. Remove the CLEAR PROGRAM command if added above, and change the DO My_Prog
	  command in the above example to read as follows:
	
	        DO .\My_Prog
	
	2. Rerun the program, and note that the first message printed to the FoxPro
	  desktop refers to the T1 directory, and the second again refers to T2.
	
	You can hard code the path name, but the .\<filename> works for any current
	directory.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
