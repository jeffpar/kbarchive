---
layout: page
title: "Q156865: PRB: Programmatically Converting 3.0 Project in 5.0 Fails"
permalink: /kb/156/Q156865/
---

## Q156865: PRB: Programmatically Converting 3.0 Project in 5.0 Fails

{% raw %}

	Article: Q156865
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0 or 3.0b, a FoxPro 2.x project can be programmatically
	converted with the MODIFY PROJECT <project name> command. However, in
	Visual FoxPro 5.0, the command MODIFY PROJECT <project name> results in
	the following error:
	
	  The wrong parameters were passed to the converter. To convert files, open
	  them from the file menu.
	
	CAUSE
	=====
	
	New codes have been added to the Visual FoxPro 5.0 converter to preserve the
	Visual FoxPro 3.0 default. These changes require running the CONVERT program
	before issuing the MODIFY PROJECT command.
	
	RESOLUTION
	==========
	
	You can convert a FoxPro 2.x project programmatically in Visual FoxPro 5.0 by
	running the Convert.app first, as follows:
	
	     DO CONVERT WITH pFileName, pFileType, pVersion, pProgCall
	     MODIFY PROJECT pFileName
	
	The following applies to the above code:
	
	- pFileName. The fully qualified name of file to convert, require character
	  type.
	
	- pFileType. Type of file, require character type, for example: PROJECT.
	
	- pVersion. Version of file, require character type, for example: 2.6 or 3.0.
	
	- pProgCall. New parameter--use .T., if CONVERT.APP is being called from within
	  another program or application.
	
	Here is an example:
	
	     DO Convert WITH "c:\FPW26\OLD.PJX", "PROJECT", "2.6", .T.
	     MODIFY PROJECT c:\FPW26\OLD.PJX
	
	NOTE: In the DO CONVERT command above the word "PROJECT" must be capitalized.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a FoxPro 2.6 or Visual FoxPro 3.0 project called "Old.pjx" (without
	  the quotation marks).
	
	2. In Visual FoxPro 5.0 create a .prg file and put the following code the .prg
	  file:
	
	        SET TALK OFF
	        MODIFY PROJECT C:\FPW26\OLD.PJX
	
	3. Run the program.
	
	Additional query words: VFoxWin kbdse
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
