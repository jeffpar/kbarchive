---
layout: page
title: "Q141551: How to Hide the &quot;FoxPro Run Command&quot; Window in Visual FoxPro"
permalink: /kb/141/Q141551/
---

## Q141551: How to Hide the &quot;FoxPro Run Command&quot; Window in Visual FoxPro

{% raw %}

	Article: Q141551
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode kbsample kbvfp kbvfp300 kbvfp300b kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the Windows API function WinExec, you can execute an MS-DOS command or
	program without the user seeing the "FoxPro Run Command" window or another
	MS-DOS session.
	
	MORE INFORMATION
	================
	
	The following program creates a sample function that executes an MS-DOS command
	or program and keeps the MS-DOS window hidden. The program takes one parameter,
	the command to be executed.
	
	To maintain control over the MS-DOS window, the program sends the command through
	a PIF file. To keep this window hidden, use the Windows PIF Editor to make the
	following changes to the PIF file you use (this example uses Foxrun.pif in the
	Visual FoxPro directory):
	
	1. Select the Close Window on Exit check box.
	
	2. Set Display Usage to Windowed.
	
	Code Sample
	-----------
	
	  *---------------- Run.prg -----------------------------
	  * Sample program to Execute an MS-DOS command and keep
	  * the MS-DOS window hidden.
	  *
	  * To use this function in FoxPro to create a new directory,
	  * use one of the following commands that illustrate two
	  * ways to call the function and achieve the same result:
	  *
	  *    = run("MD C:\VFP\TESTDIR")
	  *
	  *    DO run WITH "MD C:\VFP\TESTDIR"
	  *
	
	  FUNCTION run
	  PARAMETER doscmd
	
	  DECLARE INTEGER WinExec IN win32api AS run ;
	     STRING command, INTEGER param
	
	  * To have control over the visibility of the
	  * MS-DOS command, call it through a .pif file.
	  *
	  * IMPORTANT: (1) Be sure the "Close Window on Exit" check box in
	  * the PIF file is selected. (2) Be sure "Windowed" is the
	  * selected "Display Usage."
	
	  cmdstart = SYS(2004) + "FOXRUN.PIF /C "
	
	  * Now concatenate the two pieces of the command:
	
	  fullcmd = cmdstart + doscmd
	
	  retval = run(fullcmd, 0)
	
	  RETURN retval
	  *------- End of program ----------------------
	
	NOTE: For more information about hiding the FoxPro Run Command window in FoxPro
	for Windows, versions 2.x, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131621 How to Hide the "FoxPro Run Command" Window
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbsample kbvfp kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
