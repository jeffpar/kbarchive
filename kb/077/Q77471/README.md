---
layout: page
title: "Q77471: Knowledge Dynamics INSTALL.EXE and MS-DOS 5.0"
permalink: /kb/077/Q77471/
---

## Q77471: Knowledge Dynamics INSTALL.EXE and MS-DOS 5.0

	Article: Q77471
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Knowledge Dynamics provides the INSTALL.EXE program for other software vendors
	to use for the installation of their software. This includes approximately 7,000
	software companies, including Borland, Lotus, Harvard Graphics, and Autodesk.
	
	Problems may occur with MS-DOS 5.0 and the installation of programs that are
	using certain versions of INSTALL.EXE. Knowledge Dynamics is aware of these
	problems and is researching them.
	
	MORE INFORMATION
	================
	
	The most important issue deals with MS-DOS 5.0 loading into the high memory area
	(HMA). Symptoms include a "packed file corrupt" error message, or the failure to
	successfully install certain software packages.
	
	The most common solutions include using LOADFIX on INSTALL.EXE, or loading MS-DOS
	low while installing the specific software product. Once the product installs
	successfully, MS-DOS 5.0 can be loaded high without any other problems, provided
	the software installed can operate with MS-DOS in the HMA.
	
	Knowledge Dynamics recommends that the software vendor use INSTALL.EXE version
	3.1 when MS-DOS 5.0 is present. There appears to be compatibility problems with
	INSTALL.EXE versions 3.05c and earlier. The version number of INSTALL.EXE is not
	typically displayed during installation.
	
	In any case, you should NOT contact Knowledge Dynamics for an upgrade of
	INSTALL.EXE. Questions should be referred to the software company that provides
	the product in question.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 5.00 5.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
