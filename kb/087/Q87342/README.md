---
layout: page
title: "Q87342: PRB: Small Caps Text Unchanged in Windows Help"
permalink: /kb/087/Q87342/
---

## Q87342: PRB: Small Caps Text Unchanged in Windows Help

	Article: Q87342
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a help file developed for version 3.1 of Microsoft Windows Help contains
	non-alphabetic characters formatted with the Small Caps character formatting,
	the Microsoft Windows Help application displays these characters at normal size.
	
	RESOLUTION
	==========
	
	To work around this limitation, change the case of the characters. The following
	macro for version 2.0 of Microsoft Word for Windows performs this conversion:
	
	     Sub MAIN
	     StartOfDocument
	     EditFindChar .Font = "", .Points = "", .Bold = - 1, \ 
	     .Italic = - 1, .Strikeout = - 1, .Hidden = - 1, .SmallCaps = 1, \ 
	     .AllCaps = 0, .Underline = - 1, .Color = - 1, .Position = "", \ 
	     .Spacing = ""
	     EditFind .Find = "", .WholeWord = 0, .MatchCase = 0, \ 
	     .Direction = 1, .Format = 1
	     While EditFindFound()
	          Size = FontSize()
	          Size = Size - 2
	          FontSize Size
	          SmallCaps 0
	          ChangeCase 1
	          EditFind .Find = "", .WholeWord = 0, .MatchCase = 0, \ 
	          .Direction = 1, .Format = 1
	     Wend
	     End Sub
	
	Additional query words: 3.10 HC31 HC31.EXE RTF no32bit /scaps
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
