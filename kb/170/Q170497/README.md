---
layout: page
title: "Q170497: FP: Cannot Delete Templates in FrontPage"
permalink: /kb/170/Q170497/
---

## Q170497: FP: Cannot Delete Templates in FrontPage

{% raw %}

	Article: Q170497
	Product(s): Word Front Page
	Version(s): windows:1.1,97,macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194280.
	
	SYMPTOMS
	========
	
	In FrontPage Editor, you cannot delete a template or wizard that appears in the
	New Page dialog box.
	
	NOTE: To locate the New Page dialog box, click New on the File menu.
	
	RESOLUTION
	==========
	
	FrontPage for Windows
	---------------------
	
	Delete the template files using Windows Explorer. The FrontPage template files
	are located in the \Program Files\Microsoft\FrontPage\pages\
	<template>.tem folder, where <template>.tem is the name of the
	template folder. Delete the entire folder and its contents. Each template folder
	contains an .htm file (the template) and an .inf file. The .inf file contains
	the title and description you see in the New Page dialog box.
	
	FrontPage for the Power Macintosh
	---------------------------------
	
	Move (delete) the template files from the <Hard Drive Name>:Pages:
	FrontPage:<template>.tem folder to the Trash Can.
	
	NOTE: If you delete the templates that ship with FrontPage you will need to
	reinstall them if you want to use them.
	
	Additional query words: 97 remove
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97,macintosh:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
