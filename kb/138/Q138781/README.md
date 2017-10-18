---
layout: page
title: "Q138781: How to Call a Windows Help Search Macro by Using Code"
permalink: kb/138/Q138781/
---

## Q138781: How to Call a Windows Help Search Macro by Using Code

	Article: Q138781
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use program code to invoke Windows Help and
	open the Search macro.
	
	MORE INFORMATION
	================
	
	Developers who write a custom Windows Help file for their application may also
	want to include program code that invokes their help session and goes
	immediately to the Search macro. This can be done with one of the following
	examples.
	
	NOTE: For backward compatibility, Visual FoxPro still supports FOXTOOLS.FLL
	(included in earlier FoxPro versions), the Visual FoxPro API library that allows
	calls to 16-bit .DLL functions. However, in Visual FoxPro, the DECLARE command
	is the preferred method for calling .DLL functions.
	
	The following code shows how to call Visual FoxPro Help and open the Search macro
	by using Foxtools.fll.
	
	     SET LIBRARY TO HOME()+"FOXTOOLS.FLL"             && Locates Foxtools
	     hhand=REGFN("WinHelp","ICIC","I")
	     LPZFILENAME=alltrim(HOME())+"FOXHELP.HLP"
	     WCOMMAND=258
	     DWDATA="SEARCH()"
	     declare Integer FindWindow in Win32Api String,String
	     hwnd=FindWindow("","")
	     HELP
	     =CALLFN(hhand,hwnd,LPZFILENAME,WCOMMAND,DWDATA)
	     RELEASE HHAND
	     SET LIBRARY TO                                   && Releases Foxtools
	
	The following code shows how to call Visual FoxPro Help using Declare:
	
	     LPZFILENAME=HOME()+"FOXHELP.HLP"+CHR(0)
	     HELP
	     help_command=258
	     Declare Integer WinHelp in Win32Api Integer, String, Integer, String
	     =WinHelp(0,LPZFILENAME,help_command,"SEARCH()")
	
	The following code shows how to call a specific Help topic within Visual FoxPro
	Help:
	
	     LPZFILENAME=HOME()+"FOXHELP.HLP"+CHR(0)
	     HELP
	     help_partialkey=261
	     Declare Integer WinHelp in Win32Api Integer, String, Integer, String
	     =WinHelp(0,LPZFILENAME,help_partialkey,"form properties")
	
	This example specifically calls the "Form Properties" Help topic. Experimentation
	with this will demonstrate various degrees of functionality. For example,
	altering the last line of code such that "form properties" is replaced with
	"form" will bring up the Search macro with the search index moved to "form."
	
	For more information on creating Windows Help and the Help Compiler, please see
	the "Professional Features Guide" packaged with the Professional Edition of
	Microsoft Visual FoxPro.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
