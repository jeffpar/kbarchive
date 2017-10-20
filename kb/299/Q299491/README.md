---
layout: page
title: "Q299491: FIX: Program Stops With Outstanding Class Reference"
permalink: /kb/299/Q299491/
---

## Q299491: FIX: Program Stops With Outstanding Class Reference

{% raw %}

	Article: Q299491
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fixkbfixlis
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program A runs program B. Program B instantiates a programmatically defined
	class, then exits. If program A attempts to COMPILE program B, the COMPILE
	command fails and program execution stops, but no error is given in Visual
	FoxPro (VFP) 5.0 or 6.0 when this occurs.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	In VFP 7.0, the following error message (error 1184) is given:
	
	  File cannot be closed because outstanding references exist.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In VFP 5.0 or 6.0, paste the following code in a new program:
	
	  CLEAR
	  LOCAL lcOldConsole, lcOldSafety
	  lcOldConsole = SET("CONSOLE")
	  lcOldSafety = SET("SAFETY")
	  SET CONSOLE OFF
	  SET SAFETY OFF
	
	  SET TEXTMERGE TO "MyTestProg.prg"
	  TEXT
	  	LOCAL loMyClass, lnRetVal
	  	loMyClass = CREATEOBJECT("MyClass")
	  	lnRetVal = loMyClass.TstProc()
	  	RELEASE loMyClass
	  	RETURN lnRetVal
	
	  	DEFINE CLASS MyClass as Custom
	  		PROCEDURE TstProc
	  			RETURN 33
	  		ENDPROC
	  	ENDDEFINE
	  ENDTEXT
	  SET TEXTMERGE TO
	  SET CONSOLE &lcOldConsole
	  SET SAFETY &lcOldSafety
	
	  COMPILE MyTestProg.prg
	
	  SET PROCEDURE TO MyTestProg.prg
	  ? SET("PROCEDURE")
	  ? "Result: ", MyTestProg()
	
	  *!* Program ends here if MyClass class is not cleared. There is no error given in VFP6.
	  *!*	CLEAR CLASS MyClass  && Uncomment for VFP5/6 workaround.
	  RELEASE PROCEDURE MyTestProg.prg
	  COMPILE MyTestProg.prg
	
	  ?  "This is the last line of code. It ran!"
	
	2. Save and run this code (the program name is unimportant).
	
	When the code runs in VFP 5.0 and 6.0, the output to the screen includes the
	current PROCEDURE setting and "Result: 33" (that is, the return value from
	MyTestProg.prg). The final line of code ("This is the last line...") is not
	printed to _SCREEN. This is because an outstanding reference to MyClass exists,
	so that the COMPILE MyTestProg.prg line does not run successfully. The program
	exits without error and you may notice the message "Do Canceled" displayed on
	the status bar.
	
	In VFP7, when this code is run as-is, a new error message (error 1184) is given
	on the "COMPILE..." line.
	
	Uncomment the line that reads "Clear Class MyClass" to work around this in VFP
	5.0, 6.0, and 7.0 and allow the COMPILE command to complete.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
