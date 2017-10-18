---
layout: page
title: "Q77986: How to Use _export Keyword or DEF File EXPORTS Statement"
permalink: kb/077/Q77986/
---

## Q77986: How to Use _export Keyword or DEF File EXPORTS Statement

	Article: Q77986
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows 3.0 and later, the _export keyword should not be used as a general
	replacement for exporting functions in the EXPORTS section of a
	module-definition (DEF) file.
	
	MORE INFORMATION
	================
	
	The _export declarator can sometimes be used to export functions from
	Windows-based applications and dynamic-link libraries (DLLs); however, this
	method has several limitations.
	
	In the Windows environment, all callback functions must be flagged as exported to
	ensure that the prolog code is fixed up at load time. The fixed up prolog code
	works with the procedure-instance addresses returned from the MakeProcInstance()
	function to bind the proper data segment to the exported function when it is
	called.
	
	Examples of callback functions are: window procedures, dialog box procedures, and
	enumeration callback procedures (see Section 14.4, "Writing Exported Functions"
	in the "Microsoft Windows Software Development Kit Guide to Programming"). A DLL
	must also flag as exported any functions called from other modules.
	
	The second edition of "Programming Windows" by Charles Petzold (Microsoft Press)
	has a good explanation of the special Windows prolog code and the effects of
	listing functions in the EXPORTS section of the module- definition file (pages
	280-286 and 895-896).
	
	Usually, functions are flagged as exported by listing them in the EXPORTS section
	of the modules' module-definition file. In addition to enabling fixup of the
	prolog code, exporting functions from the module-definition file provides
	control of the ordinal values of the exported functions. This is especially
	important for DLLs because existing applications that call the exported
	functions will not need to be relinked when the DLL is modified if the
	interface-function prototypes and ordinal values are not changed between
	versions. Specifying ordinal values also allows the Windows dynamic-link
	mechanism to operate faster and to use less memory.
	
	When compiling Windows-based applications and DLLs using Microsoft C version 6.0
	and later, the _export keyword may be used in place of listing the function in
	the EXPORTS section of the module-definition file, with the following
	limitations:
	
	- This method provides no control over the ordinal values of the exported
	  functions (as discussed above).
	
	- The function name is not resident. RESIDENTNAME, required for WEPs (Windows
	  exit procedures) in DLLs, can be specified only in a module-definition file.
	
	- Exportname cannot be specified (no alias name).
	
	- The NODATA option cannot be specified.
	
	- The "parameter-option specification" cannot be overridden.
	
	For more information, see pages 10-4 and 10-5 in the "Microsoft Windows Software
	Development Kit Reference Volume 2."
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
