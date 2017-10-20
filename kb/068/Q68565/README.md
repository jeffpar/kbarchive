---
layout: page
title: "Q68565: Creating Dynamic-Linked Libraries Without Data Segments"
permalink: /kb/068/Q68565/
---

## Q68565: Creating Dynamic-Linked Libraries Without Data Segments

{% raw %}

	Article: Q68565
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using dynamic-link libraries (DLLs) is a very flexible way to centralize a body
	of program code. Many applications may use functions from a DLL, while only one
	copy of the DLL code is in memory. This contrasts with code that is statically
	linked into applications, which requires each application to have its own copy
	of the shared code.
	
	By default, each DLL has its own data segment, separate from that of the calling
	applications. This default behavior precludes using some of the standard
	Windows-application programming practices and C run-time functions in a DLL.
	This article discusses techniques to ensure that no data segment is created for
	a DLL.
	
	MORE INFORMATION
	================
	
	The most common reason to use a DLL that does not have its own data segment is
	to ensure that the data segment (DS) register and stack segment (SS) register
	are the same (DS == SS). A large majority of the functions provided with the C
	run-time libraries expect that DS == SS. Functions with this requirement have
	been removed from the DLL-specific libraries included with the Windows Software
	Development Kit (SDK).
	
	DLLs that have their own data segment will use the stack segment of the
	application that calls the DLL. This means that the data segment and stack
	segment differ (DS != SS). This fact precludes using many C run-time functions
	and any others that require DS and SS to be the same. A DLL without a data
	segment will use both the data segment and the stack segment of the calling
	application; therefore, DS == SS.
	
	The clarity of the previous discussion is complicated by the fact that some items
	within a DLL will declare their own data segment. The DATA statement in the
	module definition (.DEF) file is the mechanism that Windows uses to determine if
	the DLL has a data segment. If the .DEF file declares DATA NONE, then Windows
	will assume that no data segment exists for this DLL. Throughout this
	discussion, DLLs with a DATA NONE statement in the appropriate .DEF file will be
	called DATA NONE DLLs.
	
	Since Windows assumes that a DATA NONE DLL does not have a data segment, a data
	segment that is created implicitly by the DLL code itself is not loaded into
	memory and will not be visible by HEAPWALK or other heap management utilities.
	
	When a DATA NONE DLL does have a data segment, the DLL will use the application's
	DS as it should; however, the offset into the data segment is then calculated as
	being relative to the DLL's data segment. Assigning any value to a variable
	declared in the DLL will then overwrite any data in the application's data
	segment.
	
	This type of anomaly may be difficult to track down. When the data segment is
	built for the DLL, items are placed in the data segment from bottom to top. For
	example, one integer variable requires two bytes on the bottom of the DLL's data
	segment. Writing to this variable will overwrite 2 bytes on the bottom of the
	calling application's data segment. Since the size of an application's data
	segment is often many thousands of bytes, this type of error may go unnoticed
	and will most likely not cause a general-protection (GP) fault.
	
	These offending data segments are created by the C Compiler to store global and
	static variables and static text. One symptom of an unexpected data segment is
	that the Resource Compiler provides a warning message similar to the following:
	
	  RC: Warning RW4002: Non-discardable Segment 2 set to PRELOAD
	
	This warning is generated when a data segment has been created by the C Compiler;
	however, flags have not been defined for that segment (such as MULTIPLE or
	DISCARDABLE). The default setting for these segments is PRELOAD SINGLE.
	
	A DLL that uses the C run-time code references a global internal variable
	__acrtused, which is declared as follows in LIBENTRY.ASM:
	
	     extern __acrtused:abs
	
	Referencing this variable informs the linker that the DLL will use the C run-time
	code. If the C run-time code is not required by the DLL, this line should be
	removed to allow a truly DATA NONE DLL to be created.
	
	If the C run-time code is actually used by the DLL, __acrtused must be declared.
	This will cause a data segment to be created; however, the warnings concerning
	that data segment may be ignored.
	
	However, if C run-time code is not being used in the DLL, __acrtused can be
	removed, and the C run-time code can also be removed from the DLL. The C
	run-time code is present in the standard import libraries xDLLCyW (where "x" is
	a memory model, and "y" is "E" for emulator math or "A" for alternate math). If
	the xNOCRTD libraries are used instead, no C run-time code is linked into the
	DLL. In addition to changing the library specification on the LINK command line,
	the /NOE option must be specified.
	
	To use the application's DS on a function-by-function basis, the NODATA option
	can be used on exports. When the linker fixes up a DLL entry point, it can be
	told to omit the code that changes DS on DLL entry. This can be done on a
	per-export basis, allowing much greater flexibility because a data segment can
	still exist, although it is only only set for certain calls. An example of this
	type of EXPORT statement is listed below (fragment of a .DEF file):
	
	     EXPORTS
	             MyExportName @145 NODATA
	
	When "MyExportName" is called, it will not have the DS set to the DLL's DS,
	instead it will retain the application's DS.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
