---
layout: page
title: "Q221745: FIX: C0000005 Fatal Error Using GETPEM() in Loop with Debugger"
permalink: kb/221/Q221745/
---

## Q221745: FIX: C0000005 Fatal Error Using GETPEM() in Loop with Debugger

	Article: Q221745
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing the GetPem() function in a loop while tracing the code more than once in
	the Debugger causes the following error in Visual FoxPro 6.0:
	
	  Fatal error: Exception code: C0000005
	
	Note that the error message also contains information regarding the line number
	of the program running when the error occurred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Ztest.prg that contains the following code:
	
	  DO doit
	  CLEAR ALL
	  DO doit
	
	  PROC doit
	  	SET EXACT ON
	  	oForm = CREATEOBJECT( "Form" )
	  	oForm.ADDOBJECT("lbl1", "label")
	  	FOR EACH loObject IN oForm.OBJECTS
	  		m = AMEMBERS( laMembers, loObject )
	  		lcClass = loObject.CLASS
	  		FOR j = 1 TO m
	  		IF ( ! pemstatus( loObject, laMembers[j], 1 ) )
	  		luClassValue = getpem( lcClass, laMembers[j] )
	  			ENDIF
	  		ENDFOR
	  	ENDFOR
	  ENDPROC
	
	2. Close and save the program.
	
	3. Open the Debugger and open the Ztest.prg file.
	
	4. In the Debugger, click the Resume toolbar button.
	
	The C0000005 error appears.
	You can also get this error by simply running the code in the example above. In
	Visual FoxPro 6.0, if you run the program using either the DO command or by
	pressing the Run button (!) on the standard toolbar with the program open, the
	C0000005 error appears. In Visual FoxPro 6.0 Service Pack 3, only the DO command
	causes the error.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
