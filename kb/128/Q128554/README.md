---
layout: page
title: "Q128554: PRB: Profiler Fatal Errors PRF1012 and PRF1306"
permalink: /kb/128/Q128554/
---

## Q128554: PRB: Profiler Fatal Errors PRF1012 and PRF1306

{% raw %}

	Article: Q128554
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Source Profiler, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	When trying to profile an application using the development environment in
	Visual C++, you get the following fatal error messages:
	
	  
	
	  PROFILE.DLL : fatal error PRF1012 : cannot read expected number of
	  bytes from file <path>\xxxx.pbi
	
	  
	
	  PREP : fatal error PRF1306: PBT or PBO file <path>\xxxx.pbo is not
	  derived from same PBI file
	
	It is also possible to get the following error if you are using the incorrect
	PROFILE.DLL:
	
	  
	
	  PROFILE.DLL: fatal error PRF1005: operating system ran out of memory.
	
	CAUSE
	=====
	
	The wrong version of PROFILE.DLL is being loaded in memory and used by the
	profiler. Most likely a copy of PROFILE.DLL from Visual C++, 32-bit Edition,
	version 1.0 has been loaded by Windows NT.
	
	It is also likely that you have more than one copy of the PROFILE.EXE because
	this file is also shipped with Windows DDK and NT Resource Kit. The PROFILE.EXE
	shipped with Visual C++ 32-bit Edition should be used.
	
	RESOLUTION
	==========
	
	Make sure the PROFILE.DLL from Visual C++ version 2.0 or 2.1 is used by the
	profiler. Do a file search on your system to determine where the older
	PROFILE.DLL is located, and rename or delete the file. Make sure that the only
	PROFILE.DLL on your system is located in Visual C++'s BIN directory.
	
	If for some reason there is no PROFILE.DLL in the BIN directory, you can restore
	the file by running Visual C++'s setup program and doing a custom installation.
	To do this, unselect all options except for 'Profiler' in the 'Tools Options'
	dialog. You also need to make sure the installation directory you specify is the
	same as your current Visual C++ installation.
	
	Make sure that you have only one copy of the PROFILE.EXE. This copy should be in
	the Visual C++ installation's \Bin directory. If you are using Visual C++
	version 6.0, then this file will be in the ...\VC98\Bin directory. The version,
	file size and the date of the file is shown below:
	
	Visual C++ 6.0:  06/16/98  11:00p   41,022   2.00.8167.0   PROFILE.EXE
	Visual C++ 5.0:  01/22/97   7:48p   34,816   1.30.7022     PROFILE.EXE
	Visual C++ 4.2:  02/07/96  10:49p   82,944   1.30.5074     PROFILE.EXE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The incorrect PROFILE.DLL will probably be found in the <winnt>\SYSTEM32
	directory where <winnt> refers to the directory that Windows NT is
	installed. Or the DLL may be in another directory found on the PATH. The correct
	file should be located in the Visual C++ 2.x BIN directory.
	
	The date and size of the PROFILE.DLL files from all Visual C++ 32-bit Edition
	versions are listed here:
	
	  Visual C++ 6.0 :  07/02/98  09:47a   94,270  PROFILE.DLL
	  Visual C++ 5.0 :  10/01/97  10:47p  107,520  PROFILE.DLL
	  Visual C++ 4.2 :  02/07/96  10:48p   93,184  PROFILE.DLL
	  Visual C++ 4.1 :  02/07/96  10:48p   93,184  PROFILE.DLL
	  Visual C++ 4.0 :  09/29/95  09:49p   78,848  PROFILE.DLL
	  Visual C++ 2.2 :  09/16/94  02:00p   19,456  PROFILE.DLL
	  Visual C++ 2.1 :  09/16/94  02:00p   19,456  PROFILE.DLL
	  Visual C++ 2.0 :  09/16/94  02:00p   19,456  PROFILE.DLL
	  Visual C++ 1.0 :  06/28/93  04:48p   42,496  PROFILE.DLL
	
	NOTE: The Source Profiler is not provided with Visual C++ 4.0, Standard Edition.
	
	Additional query words: VWBIss
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbVC32bitSearch kbSProfiler100
	Version           : :2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
