---
layout: page
title: "Q190317: INFO: Administrative Privileges Required for Visual C++"
permalink: kb/190/Q190317/
---

## Q190317: INFO: Administrative Privileges Required for Visual C++

	Article: Q190317
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC500
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrative privileges on the local machine are required both to install and
	develop applications with Microsoft Visual C++.
	
	MORE INFORMATION
	================
	
	Microsoft Visual C++ was developed to use features of Windows and to allow for
	development of programs that require administrative privileges on the local
	machine where Visual C++ is installed. So to install or to use Visual C++, a
	developer is assumed to have administrative privileges on the local machine.
	
	On Windows 95 and Windows 98, some privileges may be restricted using the Policy
	Editor. A developer using Visual C++ must use an account that is unrestricted.
	
	On Windows NT, a developer using Visual C++ must use an account that is a member
	of the Administrators group.
	
	Administrative privileges on a domain are not required for general Visual C++
	installation and development activities.
	
	Using an account that does not have administrative privileges on the local
	machine might result in diminished capabilities or undefined behavior when using
	Visual C++.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
