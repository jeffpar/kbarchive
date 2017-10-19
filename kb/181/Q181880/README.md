---
layout: page
title: "Q181880: PRB: &quot;Access to an Unnamed File Was Denied&quot; Error"
permalink: /kb/181/Q181880/
---

## Q181880: PRB: &quot;Access to an Unnamed File Was Denied&quot; Error

	Article: Q181880
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCodeGen
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You get the following error when calling CFile::Read():
	
	  Access to an unnamed file was denied.
	
	If run under the Microsoft Visual C++ debugger, you will see the following
	error:
	
	  CFile exception: accessDenied, File Unknown, OS error information = 5
	
	CAUSE
	=====
	
	You are actually opening the file without read access. The following intuitively
	correct code causes the error:
	
	  CFile cf;
	     int data;
	   
	     cf.Open("myfile.dat", CFile::modeRead | CFile::modeWrite);
	   
	     cf.Write(&data, sizeof(int));
	   
	     cf.Read(&data, sizeof(int));
	
	RESOLUTION
	==========
	
	Specify CFile::modeReadWrite instead of the logical OR of CFile::modeRead and
	CFile::modeWrite.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about CFile, or other MFC classes, consult the Microsoft
	Visual C++ online help.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Joe
	Crump, Microsoft Corporation
	
	
	Additional query words: kbvc400 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kberrmsg kbCodeGen 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
