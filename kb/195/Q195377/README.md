---
layout: page
title: "Q195377: FIX: LNK1104 When Linking VXD with /MAP"
permalink: kb/195/Q195377/
---

## Q195377: FIX: LNK1104 When Linking VXD with /MAP

	Article: Q195377
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbLinker kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Linking a VXD (/VXD switch) with the /MAP switch to generate a map file may
	result in the following error:
	
	  LINK : fatal error LNK1104: cannot open file "<filename>.map"
	
	RESOLUTION
	==========
	
	There is no workaround for this problem. You must either not generate a map file
	for the VXD, or build the VXD using the linker supplied with the DDK.
	
	The Visual C++ linker as shipped in the retail product does not support the
	generation of VxDs.
	
	To generate VxDs, a developer must use the Windows 9x or Windows NT DDK build
	environment, which includes a linker that will generate VxDs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbLinker kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
