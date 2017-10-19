---
layout: page
title: "Q117779: INFO: Coordinated Universal Time on MS-DOS vs. Windows NT"
permalink: /kb/117/Q117779/
---

## Q117779: INFO: Coordinated Universal Time on MS-DOS vs. Windows NT

	Article: Q117779
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a data file containing MFC CTime objects is moved from MS-DOS (including
	Windows) to Windows NT, or vice-versa, differences in the system time under
	MS-DOS and Windows NT can cause unexpected results.
	
	MORE INFORMATION
	================
	
	Under MS-DOS, Pacific Standard Time is the default time zone. The default time
	zone for Windows NT is Greenwich Mean Time. MFC CTime objects use Coordinated
	Universal Time (UTC) to store the current time. This can cause problems if CTime
	objects are shared between applications on default installations of MS-DOS
	(Windows) and Windows NT. Specifically, the time will be 8 hours off.
	
	This is expected behavior for any object that uses UTC. To share data files, make
	sure that both systems use the same time zone. If you want to use an absolute
	time (one that remains the same regardless of time zone), you must implement
	your own object.
	
	Additional query words: kbinf 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
