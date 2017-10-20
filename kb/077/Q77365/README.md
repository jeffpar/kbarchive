---
layout: page
title: "Q77365: Considerations for Programming DATA NONE DLLs"
permalink: /kb/077/Q77365/
---

## Q77365: Considerations for Programming DATA NONE DLLs

{% raw %}

	Article: Q77365
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
	
	The Windows Software Development Kit (SDK) documentation regarding dynamic-link
	libraries (DLLs) is not very detailed with regard to some facets of developing
	DLLs. In this article, some of the lesser known considerations for developing
	DLLs are discussed.
	
	MORE INFORMATION
	================
	
	The primary reason for using a DATA NONE DLL is to ensure that the data segment
	(DS) is equal to the stack segment (SS). Many of the functions provided with the
	Microsoft C run-time libraries expect that DS == SS. Functions with this
	property have been removed from the Windows SDK DLL libraries. In DATA SINGLE
	DLLs, the DLL will use the application's SS, but the DLL will have its own DS.
	DS is then not equal to SS and the C run-time functions (or other functions
	expecting DS == SS) may not be used. In DATA NONE DLLs, however, the DLL uses
	the application's DS and SS. In applications, DS == SS; therefore, for a DATA
	NONE DLL, DS == SS.
	
	While this may sound like a straightforward process, there are some items
	declared within a DLL that can create a data segment. Windows looks at a flag to
	determine if the DLL has a data segment. If DATA NONE has been declared, Windows
	will treat that DLL as a DATA NONE DLL whether a data segment exists or not.
	However, the Windows loader uses information from the linker to determine what
	segments to load, not how the flags are set. Therefore, data segments that do
	exist are loaded into memory.
	
	When additional data segments are created, because the compiler works under the
	assumption that DS == SS, the data segments that are loaded are not used and
	waste memory.
	
	When a DATA NONE DLL does have a data segment, Windows will use the application's
	DS as it should, but the offset into the data segment is the offset into the
	DLL's data segment. Writing to any variable declared in the DLL will overwrite
	data in the application's data segment.
	
	This type of bug is often difficult to track down. When the data segment is built
	for the DLL, items are placed in the data segment from bottom to top. So an
	integer variable will take up 2 bytes on the bottom of the DLL's data segment.
	Writing to this variable will overwrite 2 bytes at the bottom of the calling
	application's data segment. An application's data segment normally contains
	thousands of bytes; therefore, this type of error may go unnoticed and will not
	cause a GP-fault.
	
	Global variables, static variables, and static text (string literals such as
	"Hello") declared in the DLL will create new data segments for the DATA NONE
	DLL.
	
	The warning message "RC: Warning RW4002: Non-discardable Segment 2 set to
	PRELOAD" is quite common when DLLs are processed by the Resource Compiler.
	However, it is not immediately obvious from the text of the message why this is
	a problem. This warning is generated when a data segment has been created but
	flags have not been defined for that segment (such as NONE, PRELOAD, or SINGLE).
	The default setting for these segments is PRELOAD SINGLE.
	
	After ruling out all the obvious ways that a new data segment can be created, it
	is time to look deeper into the heart of the code.
	
	If the DLL uses the Microsoft C run-time code, a global internal variable is used
	by the library. This variable is referenced in LIBENTRY.ASM by the following
	code:
	
	     extern __acrtused:abs
	
	The __acrtused variable informs the linker that the C run-time code will be used
	in the DLL. If the C run-time code is not used in the DLL, this variable may be
	removed to create a true DATA NONE DLL. This is done by replacing the C run-time
	libraries (SDLLCEW, MDLLCEW, and LDLLCEW) with the appropriate libraries without
	the C run-time code (SNOCRTD, MNOCRTD, and LNOCRTD, respectively). Along with
	these libraries, the /NOE option must also be used. For more information on
	eliminating the C Run-time startup code, refer to Section 14.5.10.1 in the
	"Guide to Programming" manual of the Windows Software Development Kit version
	3.1.
	
	If the C run-time is used by the DLL, this variable must be declared and using
	the DATA SINGLE declaration is encouraged. Declaring __acrtused creates a data
	segment. However, the warning that occurs when this is done in a DATA NONE DLL
	may often be ignored.
	
	DATA SINGLE is also encouraged when the DLL contains literal strings.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
