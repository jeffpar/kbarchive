---
layout: page
title: "Q154591: FIX: Wrong Version of MSVCRT40.DLL(Forwarder DLL) in Windows 95"
permalink: /kb/154/Q154591/
---

## Q154591: FIX: Wrong Version of MSVCRT40.DLL(Forwarder DLL) in Windows 95

{% raw %}

	Article: Q154591
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbVC420bug kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong version of MSVCRT40.DLL, known as the Forwarder DLL, may be copied to
	the Windows 95 System directory while installing Visual C++ version 4.2. The
	size, date, and version number of this DLL are:
	
	  MSVCRT40.DLL 65,024 Bytes 6/14/96 Version 4.2000.6164
	
	This behavior may cause some applications built with Visual C++ Version 4.0 and
	4.1 to break.
	
	CAUSE
	=====
	
	If Visual C++ is installed on Windows 95 with a CD-ROM install, then the
	MSVCRT40.DLL is copied to the Windows 95 System directory. This DLL may also be
	present if a beta version of Visual C++ 4.2 was previously installed.
	
	
	RESOLUTION
	==========
	
	Copy the correct version of the DLL provided in the Visual C++ 4.2 CD-ROM
	MSDEV\REDIST\ANSI directory. The size, date, and version number of this DLL
	are:
	
	  MSVCRT40.DLL 326,656 Bytes 2/19/96 Version 4.10.6038
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The REDISTRB.WRI file in the MSDEV\REDIST directory of the Visual C++ 4.2 CD-ROM
	mentions that the C Run-Time Forwarder DLL MSVCRT40.DLL should not be
	redistributed. The redistributable DLLs are the Shared DLL version of the Visual
	C++ 4.1 C Run-Time DLL MSVCRT40.DLL available in the MSDEV\REDIST\ANSI
	directory, MSVCRT.DLL the Shared DLL version of C Run- Time, and MSVCIRT.DLL the
	Shared DLL version of the iostream functions.
	
	The Forwarder DLL, MSVCRT40.DLL, is supplied with the Windows NT 4.0 Operating
	System. This DLL will be necessary for upward compatibility of applications
	built with Visual C++ version 4.0 and 4.1 to run in Windows NT 4.0 and later
	versions of Windows Operating Systems.
	
	Note that applications built in Visual C++ 4.2 and 5.0 with the /MD compiler
	switch only use the MSVCRT.DLL or MSVCRT.DLL and MSVCIRT.DLL depending on the
	header files included.
	
	The Visual C++ 5.0 CD-ROM, contains only the MSVCRT40.DLL, Version 4.10.6038, in
	both the ...\VC\REDIST\ and the ...\VC\REDIST\ANSI\ directories.
	
	The Visual C++ 6.0 CD-ROM contains the non-Forwarder version of the MSVCRT40.DLL
	in the ...\OS\System directory. The new version number is 4.21.0000, the size is
	the same at 326,656 bytes.
	
	The Visual C++ 6.0 Service Pack 3 and 4 contains the non-Forwarder version of the
	MSVCRT40.DLL in the ...\OS\System directory. The version number is 4.22.0.0, the
	size is the same at 326,656 bytes.
	
	The Windows NT 4.0 operating system Forwarder version of the MSVCRT40.DLL is
	version number 4.2000.0.6172. This DLL comes with the operating system and it
	cannot be redistributed. Do not replace this DLL with any other version. To view
	the version of the MSVCRT40.DLL, click Properties in Microsoft Windows Explorer.
	Verify that "4.20 - OS use only. DO NOT DISTRIBUTE" is the version.
	
	Windows 2000 operating system Forwarder version of the MSVCRT40.DLL is version
	number 4.2000.0.6201. This DLL comes with the operating system and it cannot be
	redistributed. Do not replace this DLL with any other version.
	
	REFERENCES
	==========
	
	The following article in the Microsoft Knowledge Base describes what happens
	when you replace the proper version of the MSVCRT40.DLL provided in Windows NT
	4.0:
	
	  Q168006 TN3270 Fails with Access Violation in ntdll!RtlFreeHeap
	
	Additional query words: MSVCIRT.DLL MSVCRT.DLl
	
	======================================================================
	Keywords          : kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
