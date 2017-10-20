---
layout: page
title: "Q177421: FIX: Remote Debug in Windows NT Requires Psapi.dll"
permalink: /kb/177/Q177421/
---

## Q177421: FIX: Remote Debug in Windows NT Requires Psapi.dll

{% raw %}

	Article: Q177421
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500bug kbVC600fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual C++ version 5.0, if the target machine is a Microsoft
	Windows NT version 4.0 system, you need to install the file Psapi.dll for remote
	debug to work. Please refer to the MORE INFORMATION section below for a complete
	list of requirements when starting the remote debug monitor on the target
	machine.
	
	This is a requirement for Microsoft Windows NT remote target machines only.
	
	RESOLUTION
	==========
	
	Copy the \DevStudio\VC\bin\Psapi.dll file from the Microsoft Visual C++ product
	CD-ROM to the \Windows\SYSTEM32 folder of the target machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	A Microsoft Windows NT version 4.0 installation is supposed to install the
	Psapi.dll file in the \SYSTEM32 folder. This DLL is required by the remote debug
	monitor. The online document found at the location mentioned in the REFERENCES
	section below lists only the following files as required by the remote debug
	monitor:
	
	  MSVCMON.EXE, MSVCRT.DLL, TLN0T.DLL, DM.DLL, MSVCP5O.DLL, MSDIS100.DLL
	
	If the Psapi.dll file is missing from the Windows\SYSTEM32 folder, copy this DLL
	from the DevStudio\VC\bin folder of the Microsoft Visual C++ product CD-ROM to
	this folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
