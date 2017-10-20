---
layout: page
title: "Q159480: PPT7: Can't Unpack File To Folder With Extended Characters"
permalink: /kb/159/Q159480/
---

## Q159480: PPT7: Can't Unpack File To Folder With Extended Characters

{% raw %}

	Article: Q159480
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbpng
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to unpack a presentation that was packed with the Pack And Go Wizard
	to a folder whose name contains extended or international characters, you
	receive an error message similar to this:
	
	  Pack and Go Setup was unable to install the presentation. This disk may be
	  full, you may not have write permission for '<directory name>', or it
	  may already contain a presentation with the same name.
	
	This message occurs if the folder does not exist. If the folder already exists,
	you receive this error:
	
	  The directory '<directory name>' does not exist. Would you like to
	  create it?
	
	If you click OK, the presentation may install to the correct folder; however.
	Pngsetup.exe may also create a corrupt folder on the same drive.
	
	CAUSE
	=====
	
	Pngsetup.exe (the file that unpacks a Pack and Go presentation) is a 16-bit
	program that can run under Windows 3.1, Windows 95, or Windows NT. Pngsetup.exe
	does not support folder names with extended characters.
	
	RESOLUTION
	==========
	
	When you run Pngsetup.exe, choose a folder whose name does not contain extended
	or international characters in which to unpack the presentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: png circumflex umlaut cedilla accent accented grave acute aring vinculum double-dot foreign ansi ascii letters glyphs words
	
	======================================================================
	Keywords          : kbpng 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
