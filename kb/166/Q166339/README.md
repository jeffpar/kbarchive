---
layout: page
title: "Q166339: WD97: Opening a JPEG File in Photo Editor Causes an Error"
permalink: kb/166/Q166339/
---

## Q166339: WD97: Opening a JPEG File in Photo Editor Causes an Error

	Article: Q166339
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a JPEG file in Microsoft Photo Editor, one of the following error
	messages may appear:
	
	  Unknown File Format
	
	  -or-
	
	  Cannot open or find this file path\filename
	
	NOTE: Microsoft Photo Editor 3.0 may not open JPEG images with the .jpeg
	extension from the Windows desktop. You may need to open this file by clicking
	Open on the File menu within Microsoft Photo Editor.
	
	CAUSE
	=====
	
	Microsoft Office 97 installs a JPEG filter that is incompatible with Microsoft
	Windows 95 Plus Pack Desktop Themes. This incompatibility does not occur with
	Microsoft Office 97 on computers that do not have the Desktop Themes installed.
	
	
	RESOLUTION
	==========
	
	Install the new version of the Themes.exe file included on the Microsoft Office
	97 CD-ROM in the following location:
	
	  drive:\Valupack\Patch
	
	where drive is the drive letter of your CD-ROM drive.
	
	For additional information about Themes.exe and how to obtain it, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q160846 "Illegal Operation" Error Message Changing Desktop Themes
	
	
	
	MORE INFORMATION
	================
	
	The Microsoft Photo Editor is a standalone product that is installed by a
	complete installation of Microsoft Office 97 for Windows or Microsoft Word 97
	for Windows. It allows you to customize graphic images you create, scan, or
	open.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q165812 OFF97: Photo Editor Is Not Installed by the ValuPack
	
	
	  Q169938 PE97: General Information About Microsoft Photo Editor
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
