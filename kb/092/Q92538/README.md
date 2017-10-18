---
layout: page
title: "Q92538: Corrections to the Windows 3.1 SDK Sample FONTEST"
permalink: kb/092/Q92538/
---

## Q92538: Corrections to the Windows 3.1 SDK Sample FONTEST

	Article: Q92538
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 kbSDKWin16 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FONTEST sample program in the Microsoft Download Center contains some
	corrections to problems that are in the version of the sample that shipped with
	the Windows 3.1 SDK.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Fontest.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	In the original version of the sample, some of the values entered in the Set
	LogFont dialog box are mapped incorrectly to the underlying LOGFONT structure.
	The value entered for Italic is mapped into the LOGFONT's lfUnderline field and
	the value entered for Underline is mapped into the LOGFONT's lfItalic field.
	This causes an italic font to be created when an underline font is specified and
	an underline font to be created when an italic font is specified. The version of
	FONTEST in the Software Library corrects this problem.
	
	When printing in the original version, if you choose a font from the Choose Font
	common dialog box, the output will be in a smaller size font than the output of
	the same font from another Windows-based application such as Microsoft Write.
	
	The common dialog box function ChooseFont() always returns the height of the font
	in the lfHeight field of the LOGFONT structure based on the vertical dpi (dots
	per inch) of the screen. When creating a font to send to the printer, it is
	necessary to adjust the lfHeight field of the LOGFONT structure using the
	vertical dpi of the printer. To adjust the height, use the following formula:
	
	  Height = -(dpiY*point_size/72); //dpiY is dots per inch in Y direction
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 kbSDKWin16 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
