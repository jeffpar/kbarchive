---
layout: page
title: "Q123660: Maintenance Release for FORTRAN PowerStation"
permalink: /kb/123/Q123660/
---

## Q123660: Maintenance Release for FORTRAN PowerStation

	Article: Q123660
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There has been a maintenance release of FORTRAN PowerStation that fixed several
	bugs in the first release. To get a list of Microsoft Knowledge Base (KB)
	articles describing bugs that were fixed, use this query:
	
	  PowerStation kbfixlist 1.0a
	
	The following are some of the components that were updated:
	
	- The subcomponents of the compiler
	
	- The linker
	
	- The MS-DOS-extenders
	
	- The debugger
	
	- Many library functions
	
	MORE INFORMATION
	================
	
	How to Find Out If You Have the Latest Version
	----------------------------------------------
	
	The new version was released in March of 1994. The manuals and other
	documentation, as well as the version displayed by the compiler, continue to
	show the version as 1.0. There are a number of ways to identify if you are using
	the latest version:
	
	- Approximately half of the components of FORTRAN PowerStation were updated in
	  the new release. They all have dates after March 1993.
	
	- The new linker is based on the ones that shipped with FORTRAN PowerStation 32
	  for Windows NT and Visual C++, 32-bit edition. The old linker version was
	  2.8, and the new version is 1.0F. To check the version of the linker, type
	  the following at an MS-DOS prompt:
	
	  " link | more" (without the quotation marks)
	
	- The version of CVPACK also changed. The old version was 4.21, and the new
	  version is 4.25. To check the version, type the following at an MS-DOS
	  prompt:
	
	  " cvpack" (without the quotation marks)
	
	How to Get and Install the Update
	---------------------------------
	
	To get the update, call your local Microsoft subsidiary. The update contains a
	full set of replacement disks (not including Numerical Recipes which did not get
	updated) that you should install in exactly the same way as the original. We
	recommend that you delete all components of the original version before
	installing the new version. Be sure to search the entire disk and delete all of
	the old components -- particularly every copy of the old MS-DOS-extenders.
	
	Problems Using Components of Both Releases Together
	---------------------------------------------------
	
	There are two problems that can occur when components of both the first release
	and the maintenance release are used together:
	
	- You may get error DX1410, which is caused by the existence of older versions
	  of the MS-DOS-extenders.
	
	- You may get a variety of LINK or CVPACK errors, which are caused by using
	  libraries created with the new version when building programs with the old
	  version.
	
	REFERENCES
	==========
	
	  Q123665 PRB: DOSXNT: Fatal Error DX1410: Cannot Load Program
	
	  Q120395 PRB: Link or CVPack May Fail with PS 1.0a Objects
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
