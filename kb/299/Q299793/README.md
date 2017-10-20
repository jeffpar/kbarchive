---
layout: page
title: "Q299793: FIX: More than 255 Chars in Coverage Dialog Causes Crash"
permalink: /kb/299/Q299793/
---

## Q299793: FIX: More than 255 Chars in Coverage Dialog Causes Crash

{% raw %}

	Article: Q299793
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGr
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 2000, when you use a path and filename that is longer than 255
	characters in the Coverage dialog box in Visual FoxPro (VFP), the program may
	exit and you may receive the following memory protection error message:
	
	  VFP6.Exe has generated errors and will be closed by Windows. You will need to
	  restart the program. An error log is being generated.
	
	On other operating systems, the error message varies. You may receive an error
	message that states that the folder or file was moved or removed.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In VFP, save the following code as a program:
	
	  *!* Q299793 Using More Than 255 Characters in Coverage Dialog Causes Fatal Exception
	  DEBUG
	  _CLIPTEXT = SUBSTR(REPLICATE('xxxx ',100),1,260)
	  * Bring up coverage file dialog, tab to ellipse button, press space to bring up open dialog
	  KEYBOARD '{alt+t}v{tab} '
	  RETURN
	
	2. Run the program that you created in step 1.
	
	3. Press CTRL+V to paste the contents of the clipboard in the log file name.
	
	4. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
