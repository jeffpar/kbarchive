---
layout: page
title: "Q145995: BUG: Changes to Remote Project Files Not Detected"
permalink: /kb/145/Q145995/
---

## Q145995: BUG: Changes to Remote Project Files Not Detected

	Article: Q145995
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Developer Studio does not detect changes to project files located on remote
	computers when those project files are modified by an external source on a
	remote computer. This occurs when Developer Studio is running on Windows 95,
	Windows 98, or Windows Millennium Edition (Me). It may also occur on Windows NT
	or Windows 2000 when the remote files are on network servers that are not
	running Windows.
	
	
	CAUSE
	=====
	
	The problem occurs on networked systems that do not support the file change
	notification functions defined in the Win32 API.
	
	RESOLUTION
	==========
	
	To work around problem 1, you need to reload the file manually.
	
	To work around problem 2, you need to do a Rebuild All of the project, rather
	than a Build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There are two ways this problem manifests:
	
	1. If a remote file is open in Developer Studio and is modified by an external
	  source, Developer Studio should notify the user that the file has been
	  changed outside of the source editor and prompts the user to reload the file.
	  However, there is no notification.
	
	2. If a remote file is modified by an external source on a remote computer and a
	  build is launched, Developer Studio does not detect it. It will not recompile
	  the file or do whatever build step is necessary to rebuild files that are
	  dependent on the remote file.
	
	Additional query words: modify update dependency
	
	======================================================================
	Keywords          : kbusage kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
