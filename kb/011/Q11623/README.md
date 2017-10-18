---
layout: page
title: "Q11623: How to Transparently Intercept Procedure Calls in Windows"
permalink: kb/011/Q11623/
---

## Q11623: How to Transparently Intercept Procedure Calls in Windows

	Article: Q11623
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A technique for aliasing procedure names in Windows allows procedure calls to be
	transparently intercepted. You can use this technique to monitor activities such
	as checking arguments for validity.
	
	To intercept procedure calls transparently, first build a Windows executable code
	library that resembles the following:
	
	            HANDLE MyGlobalAlloc( flags, size )
	          WORD  flags;
	          DWORD size;
	          {
	              /* Perform any type of monitoring necessary here.
	
	                 if ( !size )
	                     return 0;
	
	              */ 
	              return RealGlobalAlloc( flags, size );
	          }
	
	          HANDLE FAR PASCAL main( argc, argv )
	          WORD argc;
	          LPSTR argv;
	          {
	              return 1;
	          }
	
	Next write the definitions file for the library above as follows:
	
	     BOO.DEF:
	     LIBRARY BOO
	     DESCRIPTION "Procedure call interception library."
	     DATA SINGLE MOVEABLE
	     CODE MOVEABLE DISCARDABLE
	     EXPORTS
	            GlobalAlloc=MyGlobalAlloc
	     IMPORTS
	             RealGlobalAlloc=KERNEL.15
	
	You can obtain the ordinal numbers for the KERNEL routines (or for any other
	routine) by using the LIB.EXE program to list the contents of SLIBW or MLIBW.
	
	Build a dynamic link library (DLL) by running IMPLIB BOO.DEF as follows:
	
	  IMPLIB BOO.DEF BOO.LIB
	
	Build the library executable by using the following table:
	
	  link boo,,,mlibw mlibc,boo.def;
	
	Next dynamically link to BOO.EXE by linking to BOO.LIB as follows:
	
	  link car,,,boo mlibw mlibc,car.def;
	
	Any calls to GlobalAlloc() are routed to MyGlobalAlloc() first because of the
	name aliasing. This technique is very powerful and can be used to implement any
	type of monitoring function. In the case of GlobalAlloc(), the monitoring is
	transparent in the sense that it is not necessary to recompile the application
	to remove error checking; simply link to MLIBW.LIB instead of to BOO.LIB
	MLIBW.LIB.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
