---
layout: page
title: "Q151034: PRB: MFC Control Panel Applet Shows ODBC Icon in Control Panel"
permalink: /kb/151/Q151034/
---

## Q151034: PRB: MFC Control Panel Applet Shows ODBC Icon in Control Panel

{% raw %}

	Article: Q151034
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbDatabase kbMFC kbODBC kbVC400
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MFC Control Panel applet displays the ODBC icon on the Control Panel with
	the functionality of the ODBC data source setup Control Panel applet. The
	NTCPLAPP MSDN sample exhibits this behavior.
	
	CAUSE
	=====
	
	The applet entry-point function, CPlApplet(), exported by the MFC control
	applet, is resolved to the function exported from ODBCCP32.LIB rather than the
	function exported from the project.
	
	RESOLUTION
	==========
	
	If you are not using any of the functions exported by ODBCCP32.LIB, then select
	the Input category in the Project Settings for the linker, and specify
	"odbccp32.lib" in the "ignore libraries" field. This is equivalent to adding
	/nodefaultlib:"odbccp32.lib" in the linker command line.
	
	However, if you have to link in the ODBCCP32.LIB file, then close the workspace,
	open the .mak file for the project as text, and add "odbccp32.lib" to the linker
	dependency line as shown in the example below. In the case of the NTCPLAPP
	sample, you should see lines similar to the following:
	
	     "$(OUTDIR)\MyCplApp.cpl" : "$(OUTDIR)" $(DEF_FILE)$(LINK32_OBJS)
	         $(LINK32) @<<
	       $(LINK32_FLAGS) $(LINK32_OBJS)
	
	These lines are the linker dependency and command line. Each target has these
	lines. Modify the last line as follows:
	
	     $(LINK32_FLAGS) $(LINK32_OBJS)odbccp32.lib
	
	This ensures that functions exported by the ODBCCP32.LIB file are searched last
	while linking. The CPlApplet is resolved to the one in your code because the
	.OBJ files are searched prior to the import libraries. If there are multiple
	targets, the modification needs to be made for all the targets.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Every Control Panel application must export the standard entry-point function
	CPlApplet that is called by Control Panel in various situations. When you
	include AFXDB.H in your project, MFC pulls in the ODBCCP32.LIB file through a
	#pragma comment(). This is the import library for the ODBC installation DLL that
	also exports CPlApplet. The linker resolves the CPlApplet function from the
	ODBCCP32.LIB rather than from your object files. Since CPlApplet resolves to the
	one in ODBCCP32.LIB, your Control Panel applet acts as another ODBC Control
	Panel applet.
	
	This behavior occurs in an Control Panel applet based on an appwizard- generated
	regular DLL project that includes AFXDB.H in STDAFX.H by default.
	
	REFERENCES
	==========
	
	Visual C++ Books Online and the Windows SDK documentation.
	
	Additional query words: 4.00 4.10 ODBCCP32 NTSERVCTRL
	
	======================================================================
	Keywords          : kbnokeyword kbDatabase kbMFC kbODBC kbVC400 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
