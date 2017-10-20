---
layout: page
title: "Q102644: WEP and Link Error L2023 Export Imported"
permalink: /kb/102/Q102644/
---

## Q102644: WEP and Link Error L2023 Export Imported

{% raw %}

	Article: Q102644
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LINK error L2023 is caused by an incorrect library link order. The linker
	resolves external references in order of appearance of the libraries, choosing
	the first occurrence of a label. This error occurs when a dynamic- link library
	(DLL) exports the routine Windows exit procedure (WEP) that will be brought in
	from the C Run-time library static .OBJs, but the linker finds another DLL's WEP
	in its .LIB file because it appears BEFORE the C Run-time library.
	
	It would be best if DLL import libraries didn't include the WEP. This is possible
	by using the PRIVATE keyword in you .DEF file when exporting your WEP. Or, edit
	the .LIB via the LIB.EXE utility to remove the WEP reference.
	
	MORE INFORMATION
	================
	
	If the MFC libraries are used, they should be included before any other
	libraries. As for the other libraries, the Windows libraries should be included
	first (that is, LIBW, COMMDLG, SHELL, and so forth), the C Run- time second
	(that is, xLIBCyW.LIB for applications or xDLLCyW.LIB for DLLs), and any
	additional third-party libraries last (that is, your own or other's .LIBs). For
	example, when linking a small model DLL that uses another DLL's routines via an
	import library, the library order would be "LIBW.LIB SDLLCEW.LIB OTHERDLL.LIB".
	The order should be changed only if a DLL routine was to replace one of the
	routines in the Windows libraries or CRT.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
