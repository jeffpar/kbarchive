---
layout: page
title: "Q155361: INFO: Use of Visual C++ on Networks"
permalink: /kb/155/Q155361/
---

## Q155361: INFO: Use of Visual C++ on Networks

	Article: Q155361
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ was not designed and tested as a network application.
	
	MORE INFORMATION
	================
	
	Be aware of the following when using Microsoft Visual C++ on a networked
	system:
	
	- Microsoft Visual C++ is not designed as a networked application. Thus,
	  running Visual C++ from a server is not part of Microsoft's design or test
	  specifications.
	
	- Visual C++ is designed and tested to be run "locally" or from your computer's
	  hard drive or CD-ROM drive.
	
	- Microsoft Visual C++ adheres to the requirements of Microsoft operating
	  systems. It is not tested outside of those specifications.
	
	Given the above statements, Visual C++ can successfully be used in many different
	configurations and network systems. If you encounter problems, please consider
	the following:
	
	- Does the problem also occur if Visual C++ and its projects are run locally?
	  If this is true, you may have a problem with your network drivers. Before
	  calling your vendor, you should try to verify whether the system is set up
	  correctly.
	
	- Is the problem something that falls outside of specifications of Microsoft
	  operating systems? For example, Microsoft operating systems directories are
	  not case-sensitive.
	
	- Is the networking driver shipped by Microsoft? If not, you should contact the
	  networking software vendor.
	
	Additional query words: disclaimer novell tcp ip nfs ipx pcnfs kbIde kbNetwork kbPolicy kbVC400 kbVC410 kbVC420 kbVC500
	
	======================================================================
	Keywords          : kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
