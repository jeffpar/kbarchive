---
layout: page
title: "Q139070: PRB: Stack Violation Calling 16-Bit DLL with FoxTools"
permalink: /kb/139/Q139070/
---

## Q139070: PRB: Stack Violation Calling 16-Bit DLL with FoxTools

{% raw %}

	Article: Q139070
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the FOXTOOLS CallFn()function to call a 16-bit DLL and passing a "L" as an
	argument generates the error "Stack Violation. Please check the parameters." The
	same function call works well with FoxPro for Windows versions 2.x.
	
	CAUSE
	=====
	
	The function is registered and called as follows.
	
	     Int_num=regfn("Fn_init","L","I", "<path to DLL>")
	     Int_ret=callfn(int_num,0)
	
	In this call, the "L" parameter, which represents a long argument, is passed to
	the DLL. The API function expects a short argument, and the stack allocated for
	the parameter is filled. The "S" argument, which represents a short integer,
	should be passed instead.
	
	In the version of Foxtools shipped with FoxPro versions 2.x for Windows the "S"
	argument was not valid. Additionally, the version of Foxtools.fll shipped with
	Visual FoxPro version 3.0 checks parameters more strictly than previous
	versions.
	
	RESOLUTION
	==========
	
	When registering a function from a 16-bit DLL, pass an "S" instead of an "L" as
	in this example:
	
	     Int_num=regfn("Fn_init","S","I", "<path to DLL>")
	     Int_ret=callfn(int_num,0)
	
	For more information about Foxtools.fll and the syntax you can use, please see
	the Foxtools.hlp file located in the Vfp\Tools directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example program duplicates the error. To correct it, change the "L"
	parameter to "S".
	
	     SET LIBRARY TO HOME()+"FOXTOOLS.FLL"            && Locates Foxtools
	     hhand=REGFN("WinHelp","ICIC","I")
	     LPZFILENAME=HOME()+"FOXHELP.HLP"+CHR(0)
	     WCOMMAND=258
	     DWDATA="SEARCH()"+CHR(0)
	     MYCALL=MAINHWND()
	     HELP
	     =CALLFN(hhand,MYCALL,LPZFILENAME,WCOMMAND,DWDATA)
	     RELEASE HHAND
	     SET LIBRARY TO      && Releases Foxtools
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
