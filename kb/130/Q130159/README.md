---
layout: page
title: "Q130159: INFO: When Visual FoxPro Uses 16-bit &amp; 32-bit ODBC Drivers"
permalink: /kb/130/Q130159/
---

## Q130159: INFO: When Visual FoxPro Uses 16-bit &amp; 32-bit ODBC Drivers

{% raw %}

	Article: Q130159
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes when Visual FoxPro version 3.0 for Windows uses 16-bit
	and 32-bit ODBC drivers.
	
	MORE INFORMATION
	================
	
	For information about when Visual FoxPro for Macintosh, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q150790 How To Know if VFP for Mac Uses PPC or 68K ODBC Driver
	
	Visual FoxPro installs and uses the 16-bit ODBC drivers when running on a 16-bit
	platform such as Windows version 3.x and Windows For Workgroups version 3.x
	running the Win32s subsystem.
	
	The Win32s subsystem provides the necessary ability for 32-bit applications to
	communicate with 16-bit Data Link Libraries (DLLs). This process is called
	"thunking." Through thunking, Visual FoxPro, which is a true 32-bit application,
	can use the 16-bit ODBC drivers.
	
	Visual FoxPro uses the 32-bit drivers when running on a 32-bit platform such as
	Windows NT and Windows 95. Because Windows NT and Windows 95 are 32- bit
	operating systems, there is no need to install the Win32s subsystem, and there
	is no need for thunking between Visual FoxPro and the ODBC Drivers.
	
	During installation, the available versions of the appropriate ODBC drivers are
	installed based on the current platform and the Win32s subsystem is installed,
	if necessary.
	
	NOTE: This is also true if you are distributing an application that makes use of
	the ODBC drivers.
	
	NOTE: There are no 32-bit ODBC drivers for Oracle or Btrieve shipped with Visual
	FoxPro.
	
	Additional query words: VFoxWin connectivity
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
