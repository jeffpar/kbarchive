---
layout: page
title: "Q164012: WD97: ErrMsg: &quot;The RTF File .&#92;&lt;Filename&gt; Is Corrupted at Offset&quot;"
permalink: kb/164/Q164012/
---

## Q164012: WD97: ErrMsg: &quot;The RTF File .&#92;&lt;Filename&gt; Is Corrupted at Offset&quot;

	Article: Q164012
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop word97kbfaq
	Last Modified: 20-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you attempt to compile a Word 97 Rich Text Format (RTF) file in the Help
	Compiler that ships with Microsoft Visual C++ 4.0 or the Microsoft Visual C++
	4.2 Help Workshop, you may receive the following error messages:
	
	  HC4002: Warning:
	
	  The RTF file .\<filename> is corrupted at offset <###>
	
	  HC4005: Warning: The .\<filename> help file has not been created.
	
	CAUSE
	=====
	
	Word 97 writes a few new RTF flags. The older Help Compilers do not correctly
	discard the new RTF flags and instead attempt to process them. Since the flags
	are new, the Help Compiler fails during the compilation process.
	
	RESOLUTION
	==========
	
	This problem is corrected in Help Workshop version 4.03.
	The following file is available for download from the Microsoft Download Center:
	
	  Hcwsetup.exe
	  (http://download.microsoft.com/download/word97win/Utility/4.03/WIN98/EN-US/Hcwsetup.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Help Workshop version 4.02 is available through the following sources:
	
	  Microsoft Office 97, Developer Edition
	
	  Microsoft Developer Network - Library - Jan 97
	  Updated Microsoft Help Workshop 4.02\HELPSHOP\SETUP.EXE
	
	  Microsoft Visual C++ for Windows Version 5
	  Enterprise and Professional Editions
	  \DevStudio\Vc\Unsupported Tools\Hcw
	
	NOTE: Visual Studio 97 ships the older 4.01 compiler.
	
	
	
	MORE INFORMATION
	================
	
	Help Workshop is a program that you use to create Help (.hlp) files, edit
	project and contents files, and test and report on help files. Help Workshop
	takes the information in the project (.hpj) file to combine the topic (.rtf)
	files, bitmaps, and other sources into one Help file that can be viewed using
	the Microsoft Windows Help program.
	
	Help WorkShop 4.02 compiles help files from RTF written both by the 16-bit
	versions of Word, such as Word 6.0, and also the 32-bit versions such as Word
	7.0 and Word 97.
	
	Help Workshop 4.02 does not compile projects created in the MS-DOS version of the
	Help Compiler.
	
	A help file created in Help Workshop 4.02 does not run under Windows 3.x because
	the Help Workshop 4.02 creates 32-bit help files and Windows 3.x is a 16-bit
	operating environment.
	
	REFERENCES
	==========
	
	For additional information about the Microsoft Office 97 Developer Edition,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q162962 New Features in MS Office 97 Developer Edition Tools
	
	Additional query words: help compiler rtf
	
	======================================================================
	Keywords          : kb3rdparty kbinterop word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
