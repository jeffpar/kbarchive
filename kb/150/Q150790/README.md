---
layout: page
title: "Q150790: How To Know if VFP for Mac Uses PPC or 68K ODBC Driver"
permalink: /kb/150/Q150790/
---

## Q150790: How To Know if VFP for Mac Uses PPC or 68K ODBC Driver

	Article: Q150790
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro for the Macintosh development environment is designed to
	run on a Macintosh PowerPC. However, the professional edition of Visual FoxPro
	for Macintosh allows development of applications that run on a Macintosh with a
	68k processor. When developing applications that access remote data via ODBC, it
	is important to understand which versions of the ODBC drivers are required by
	both the development environment and distributed applications.
	
	MORE INFORMATION
	================
	
	Because the Visual FoxPro development environment only runs on a Macintosh
	PowerPC, the appropriate PowerPC ODBC driver must be installed to access remote
	data.
	
	When distributing a PowerPC version of an application, the same ODBC driver used
	during development is used with the distributed application. However, when
	distributing a 68k version of an application, a separate 68k ODBC driver must be
	used.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
