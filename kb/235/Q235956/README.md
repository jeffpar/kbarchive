---
layout: page
title: "Q235956: DOC: /OPT:NOWIN98 Linker Option Missing in Linker Reference"
permalink: kb/235/Q235956/
---

## Q235956: DOC: /OPT:NOWIN98 Linker Option Missing in Linker Reference

	Article: Q235956
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbLinker kbVC kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual C++ 6.0 introduces two new linker optimization options --
	/OPT:WIN98, which is set by default, and /OPT:NOWIN98. The default sets the file
	alignment at 4K instead of the previous 512 bytes. This results in a larger
	module size, but one which loads faster on Windows 98 with reduced file
	swapping. A release build of an AppWizard-generated MDI application is
	approximately 14K larger than when the /OPT:NOWIN98 option is used, and a
	ReleaseMinSize build of a standard ATL DLL with no objects added is
	approximately 17K larger.
	
	MORE INFORMATION
	================
	
	The default WIN98 optimization for file alignment places the base of sections in
	the portable executable image on Windows 98's page boundary, resulting in
	decreased load times and reduced need for file swapping. The percentage increase
	in module size is less for larger applications, and the benefits normally
	justify the increase in size. However, if module size is a critical factor,
	/OPT:NOWIN98 can be used to revert to the original 512-byte alignment.
	
	NOTE: The /ALIGN:512 option also has this effect, but will produce linker warning
	4108, as this option is normally reserved for drivers.
	
	The Visual C++ ReadMe file (READMEVC.htm) has further information on these linker
	options.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbLinker kbVC kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	
	=============================================================================
	
