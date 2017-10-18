---
layout: page
title: "Q97397: FONTUTIL.RTF - Technical Article"
permalink: kb/097/Q97397/
---

## Q97397: FONTUTIL.RTF - Technical Article

	Article: Q97397
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbSDKWin16
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Handling fonts in Microsoft Windows-based applications can involve a lot of
	grunt work. For example, essential tasks such as creating fonts, retrieving
	point sizes, and calculating text metrics can take up a lot of the developer's
	time and effort. This article describes some useful font-handling functions that
	take care of most of this tedious work, thus making it easier to create and
	manipulate fonts in Windows.
	
	The FONTUTIL sample application demonstrates most of the font-handling functions
	discussed in this technical article. FONTUTIL contains useful font-handling
	routines that make it easier for an application to create and manipulate fonts
	in Microsoft Windows by taking care of most of the tedious work.
	
	The font utilities are primarily for applications that need the relatively
	simplistic font model presented in the ChooseFont common dialog box.
	ChooseFont() deals with fonts using four primary variables: typeface name,
	typeface style, point size, and effects. ChooseFont also allows for color
	selection, but the font-handling functions do not currently support this
	feature.
	
	The font-handling functions allow an application to create and interrogate fonts
	in a manner that is consistent with the ChooseFont model. For example, you can
	create a font by using the ReallyCreateFont() function and specifying the
	typeface name, typeface style, and point size; you can retrieve the typeface
	style of a font by using the GetTextStyle() function; and so on.
	
	The font utility functions support Microsoft Windows versions 3.0 and 3.1, and
	Windows NT version 3.1. You can include the functions either in an application
	or in a Dynamic-Link Library (DLL).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Fontutil.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: softlib
	
	======================================================================
	Keywords          : kbfile kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
