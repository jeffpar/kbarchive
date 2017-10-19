---
layout: page
title: "Q88191: Using the Microsoft Windows Help Compiler"
permalink: /kb/088/Q88191/
---

## Q88191: Using the Microsoft Windows Help Compiler

	Article: Q88191
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Section 2.1.11 of the Microsoft Windows Software Development Kit (SDK)
	"Getting Started" manual for version 3.1 briefly mentions the Microsoft Windows
	Help Compiler, it gives no information about how to use it.
	
	The Windows SDK "Programming Tools" manual for version 3.1 documents how to
	create a Windows Help file in Chapter 3. However, it does not detail how to
	invoke the Help Compiler. The text below explains how to use the Help Compiler
	and some of the differences between the two versions of the Help Compiler
	provided with version 3.1 of the Windows SDK.
	
	MORE INFORMATION
	================
	
	The Windows SDK documentation details how to create the source files required to
	build a Windows Help file. The Help Compiler creates an .HLP file from the
	source files. Version 3.1 of the Windows SDK includes two versions of the Help
	Compiler: one (HC30.EXE) builds .HLP files compatible with the version 3.0 of
	the Windows Help application, and the other (HC31.EXE) builds files compatible
	only with Windows Help version 3.1. A batch file (HC.BAT) provides compatibility
	with the HC.EXE program in version 3.0 of the Windows SDK. The batch file can
	invoke either version of the Help Compiler.
	
	The source files used to create a Windows Help file include the Help project
	(.HPJ) file, rich text (.RTF) files, bitmap (.BMP) files, and segmented-graphic
	bitmap (.SHG) files. One of the parameters of the Help Compiler command line is
	the name of the .HPJ file; the .HPJ file lists the other source files.
	
	Both compilers are MS-DOS-based (non-Windows) programs run from an MS-DOS prompt
	or in an MS-DOS window under Windows. The Help Compiler file (and its associated
	.ERR file) must be in a directory listed in the MS-DOS PATH environment variable
	(in the AUTOEXEC.BAT file) or in the current directory. The Windows SDK
	installation program places both compilers and the batch file in the Windows SDK
	BIN directory (by default, either C:\WINDEV\BIN or C:\C700\BIN).
	
	The HC.BAT batch file invokes the Help Compiler application. By default, HC.BAT
	invokes HC30.EXE to build a Help file compatible with version 3.0 of the Windows
	Help application. HC30 does not support some features of Windows Help version
	3.1 (such as segmented-graphic bitmaps). To create a Help file for Windows Help
	version 3.1, either invoke HC.BAT with the -n option switch (for example, hc -n
	myhelp.hpj) or invoke HC31.EXE directly (for example, hc31 myhelp.hpj).
	
	Section 2.1.11 of the "Getting Started" manual (page 10) lists some of the new
	features provided by Windows Help version 3.1.
	
	NOTE: You can still use this help compiler with Windows NT 3.51 and Windows 95,
	but there is a new help compiler 4.0 (HCW.EXE) which should be used for these
	platforms instead of the old help compiler.
	
	Additional query words: 3.00 3.10 HC HC.BAT HC30 HC31 hypergraphic
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
