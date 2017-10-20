---
layout: page
title: "Q108161: Deleting TrueType Font Weights (Bold, Italic, Bold/Italic)"
permalink: /kb/108/Q108161/
---

## Q108161: Deleting TrueType Font Weights (Bold, Italic, Bold/Italic)

{% raw %}

	Article: Q108161
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For each TrueType font, there are associated files (weights) for the different
	formatting options (bold, italic, and bold/italic). These are listed in the
	Fonts dialog box of Control Panel and in the WIN.INI file. For example, the
	options for Arial appear as follows:
	
	[Fonts]
	Arial (TrueType)=ARIAL.FOT
	Arial Bold (TrueType)=ARIALBD.FOT
	Arial Bold Italic (TrueType)=ARIALBI.FOT
	Arial Italic (TrueType)=ARIALI.FOT
	
	If you remove the Arial bold weight, the bold option is still available in
	applications because the Arial font can still generate the various weights, even
	though the file associated with the bold option no longer exists.
	
	MORE INFORMATION
	================
	
	To maintain the high quality type produced by TrueType fonts, you should keep
	the different weights (and their associated files) available on your system. If
	you do not, the type is not the usual high quality associated with TrueType
	fonts.
	
	Microsoft recommends that these various weights remain available to Windows-
	based applications to maintain the high quality of TrueType fonts. However, if
	the quality of the font is not a concern, then disk space used and the number of
	WIN.INI font entries can be reduced by removing these files. For example, with
	Arial you can remove Arial Bold, Arial Bold Italic, and Arial Italic from the
	Fonts dialog box in Control Panel.
	
	Additional query words: 3.10 3.11 true type tt ttf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
