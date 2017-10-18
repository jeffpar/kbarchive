---
layout: page
title: "Q91025: Creating Help Files Compatible with Windows 3.0 and 3.1"
permalink: kb/091/Q91025/
---

## Q91025: Creating Help Files Compatible with Windows 3.0 and 3.1

	Article: Q91025
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
	
	Windows help files are a convenient tool for documenting applications and
	systems. Because Windows versions 3.0 and 3.1 have different help engines, files
	that are optimized for use under Windows 3.1 cannot be used under 3.0. The
	Windows 3.1 Software Development Kit (SDK) includes help compilers to build help
	files compatible with both help engines. It also includes the 3.1 version of the
	help engine (WINHELP.EXE) as a redistributable file. By shipping the new help
	engine with their applications, developers can take advantage of the new help
	features in applications built to run under Windows 3.0.
	
	MORE INFORMATION
	================
	
	Because the functionality of the Windows 3.1 Help engine (WINHELP.EXE) is so
	much greater, it is usually preferred to build help files to take advantage of
	such new features as metafiles, tables, segmented graphics, secondary help
	windows, and macros. If a help source file is designed for these features, it
	usually cannot be compiled using the 3.0 version of the help compiler
	(HC30.EXE).
	
	Because designing and maintaining two help systems is usually not desirable, many
	programmers may opt for using only the Windows 3.0 Help features. Earlier files
	built with HC30.EXE work with the Windows 3.1 Help engine, but help files
	compiled with the Windows 3.1 Help compiler (HC31.EXE) cannot be used with the
	Windows 3.0 Help engine.
	
	A better solution is to design for and use the Windows 3.1 features, compiling
	the file with HC31.EXE. The application's installation must then include the new
	Windows Help engine and instructions (or program support) to install it. Failure
	to use the correct help engine causes the Windows 3.0 version of Windows Help to
	issue an error indicating that the help file is incorrect.
	
	The Windows 3.1 SDK comes with a number of redistributable files, two of which
	are WINHELP.EXE and WINHELP.HLP. These files are in the "redist" subdirectory in
	the directory where the SDK is installed. Because the redistributable file
	installation is optional when the SDK is installed, this directory may not
	exist. The files are also in the normal Windows directory and can be copied from
	there for redistribution.
	
	WINHELP.EXE is the actual help engine for Windows. WINHELP.HLP is the help file
	for Windows Help and should be distributed with the .EXE to ensure that users
	have instructions available for using the new help engine. Both of these files
	should be installed in the Windows load directory on the target disk. They will
	replace the existing Windows 3.0 files. Within a Windows installation
	application the Windows directory path can be obtained using the
	GetWindowsDirectory() API function.
	
	Additional query words: no32bit 3.00 3.10 winhelp hc30 hc31 hc
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
