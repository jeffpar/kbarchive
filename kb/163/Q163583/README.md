---
layout: page
title: "Q163583: FP97: Troubleshooting Conversion Errors With ConverterDebug"
permalink: kb/163/Q163583/
---

## Q163583: FP97: Troubleshooting Conversion Errors With ConverterDebug

	Article: Q163583
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FrontPage 97 allows you to convert files from several formats into
	HyperText Markup Language (HTML) format. FrontPage will also convert your files
	in the following cases:
	
	- When you paste content into FrontPage Editor.
	
	- When you use a drag and drop operation to move content into FrontPage Editor.
	
	- When you import a file into FrontPage Editor.
	
	This article provides information about how to troubleshoot problems that occur
	when you convert documents to or from FrontPage 97.
	
	MORE INFORMATION
	================
	
	To troubleshsoot problems that occur when you convert documents, add the
	following statement to the [FrontPage 2.0] section of the Frontpg.ini file:
	
	  "ConverterDebug=rtf,htm,dbg" (without the quotation marks)
	
	NOTE: You must type the variables in lower-case or they will not work. For
	example, type "rtf" (without the quotation marks) instead of "RTF" (without the
	quotation marks).
	
	In this command, RTF instructs FrontPage to save the RTF temporary file that is
	created when you import your FrontPage file into a word processing program (such
	as Microsoft Word), using an import converter (such as the Mswrd832.cnv file).
	HTM instructs FrontPage to save the HTML temporary file that is created when you
	use the Html32.cnv file. DBG instructs FrontPage to display a message box which
	identifies the converter that you used and a return code. The message box
	appears when the conversion is completed.
	
	You can use these three parameters (RTF, HTM, and DBG) in any combination or any
	order, but they must be comma-delimited and lower-case.
	
	Temporary files are saved in the \temp folder of the folder in which you
	installed FrontPage. By default, FrontPage installs in the C:\Program
	Files\Microsoft FrontPage\ folder.
	
	Additional query words: 97 rtf rich text format conversion
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	
	=============================================================================
	
