---
layout: page
title: "Q94952: Linking Windows-Based Applications and DLLs with /NOI"
permalink: /kb/094/Q94952/
---

## Q94952: Linking Windows-Based Applications and DLLs with /NOI

{% raw %}

	Article: Q94952
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The address of a function exported by an application or DLL must be resolved by
	the Windows loader or a call to GetProcAddress() before the function can be
	called by another application or DLL. If the function is exported by ordinal
	number (or by name and ordinal number), its address can be resolved by the
	ordinal number. If no ordinal number is given for an exported function, it is
	said to be exported by name only and its address must be resolved by its name.
	
	When resolving a reference by name in one application or DLL to a function
	exported by another application or DLL, the Windows loader or GetProcAddress()
	will convert the function name to uppercase and perform a case-sensitive search.
	If a match is not found, the Windows loader displays a dialog box with the "Call
	to Undefined Dynalink" message and a button to close the offending application.
	If a match is not found, GetProcAddress() returns NULL to signal failure. One
	possible cause of these errors is using the /NOIGNORECASE (/NOI) linker option.
	
	MORE INFORMATION
	================
	
	The information in this article depends on the development tools that you are
	using. If you are not using Microsoft tools, please refer to the documentation
	for your development tools.
	
	C 6.0 and C/C++ 7.0
	-------------------
	
	If an application or DLL exports __cdecl functions by name only and is linked
	with /NOI (to preseve case), the Windows loader and GetProcAddress() won't be
	able to resolve the function names when performing the dynamic link, because
	Windows expects the names of the exported functions to use all uppercase
	letters, and __cdecl functions use mixed case. With the /NOI switch, only
	__pascal functions will be resolved, because the compiler has already converted
	the names to all uppercase.
	
	Without the /NOI switch, the linker will uppercase all function names, regardless
	of calling convention (you can verify this in the new executable header).
	Therefore the Windows loader and GetProcAddress() are able to resolve the
	names.
	
	Visual C++
	----------
	
	The linker in Visual C++ always capitalizes the names of exported functions in
	the DLL executable header, regardless of whether or not you link with /NOI, and
	whether they functions are declared __cdecl or not. This was done to avoid the
	problems described above. One thing that can cause a problem is if you run
	implib on the DLL with /NOI and link your .EXE (or another DLL) to this implib
	with /NOI, you'll get unresolved externals because the import library has the
	names in all uppercase letters but the .EXE is calling them mixed-case.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
