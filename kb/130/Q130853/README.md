---
layout: page
title: "Q130853: Distributable Files in Visual FoxPro Distribution Kit"
permalink: kb/130/Q130853/
---

## Q130853: Distributable Files in Visual FoxPro Distribution Kit

	Article: Q130853
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you which files from the Visual FoxPro Distribution Kit you
	may and may not distribute with your applications.
	
	This information is also available in the Visual FoxPro Help file under
	Distributable Files.
	
	MORE INFORMATION
	================
	
	Distributable Files for Visual FoxPro
	-------------------------------------
	
	You may distribute any Visual FoxPro file that is not restricted. Pursuant to the
	Microsoft License Agreement you received with Visual FoxPro, files must be
	distributed in conjunction with a corresponding application. The following
	guidelines apply to distributable files.
	
	Setup Wizard
	------------
	
	Any files in the Visual FoxPro DISTRIB.SRC and SETUP directories that are
	required to support a corresponding application may be distributed. When you use
	the Setup Wizard to create distribution disks, it automatically places the
	required files from these directories on the distributable disks in a compressed
	format. Upon installation, these file are decompressed and are installed by name
	in the appropriate directories on the user's computer. It is not necessary to
	copy these files to your distribution tree.
	
	Samples
	-------
	
	Files in the Visual FoxPro SAMPLES and API\SAMPLE directories are provided for
	you to learn from and build on. Although you may not distribute unmodified
	Visual FoxPro sample applications, you may refer to portions of sample
	application code as examples for building your own application. If you use any
	files in the Visual FoxPro SAMPLES or API\SAMPLE directories (including all
	.BMP, .ICO, and .CUR files), these files must be included in your project and in
	the application build. They must not appear by name on the distributable disks
	and may not be distributed independent of your applications.
	
	Class Libraries
	---------------
	
	You can use any .VCX file without modification in your applications. The
	libraries must be included in your project and in your application build.
	
	ODBC Files
	----------
	
	Please refer to the Microsoft License Agreement you received with Visual FoxPro
	for specific restrictions with respect to your redistibution of ODBC files.
	
	Restricted Files
	----------------
	
	Visual FoxPro contains many files that are licensed for your use only for design,
	development, and testing purposes. See LICENSE.TXT, located in your Visual
	FoxPro directory, for a list of restricted files.
	
	If your application contains any of these files, remove them. Under the terms of
	the Microsoft License Agreement you received with Visual FoxPro, you are not
	permitted to ship these files in your application or on your disks. The Setup
	Wizard checks for these files and will exclude them from distributable disk
	sets. Do not assign these filenames to any files you distribute. The Setup
	Wizard excludes any file that has a name identical to one on this list.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
