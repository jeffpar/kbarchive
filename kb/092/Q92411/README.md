---
layout: page
title: "Q92411: BUG: Cannot Map TT Font to Same Name PostScript Device Font"
permalink: /kb/092/Q92411/
---

## Q92411: BUG: Cannot Map TT Font to Same Name PostScript Device Font

{% raw %}

	Article: Q92411
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a TrueType (TT) font and a PostScript (PS) printer font have the same name,
	the TT font cannot be mapped to a different printer font. The mapping works
	correctly for TT fonts whose names are different than the fonts on the printer.
	
	For example, the TrueType Symbol font can be mapped only to the Symbol font
	resident on the PostScript printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, perform the following steps:
	
	1. Install a PostScript driver [for example, the Hewlett-Packard (HP)LaserJet
	  IIIsi PostScript] from retail Windows 3.1.
	
	2. In Control Panel, select that driver, and choose Setup, Options, Advanced,
	  Edit Substitution Table.
	
	3. Select Symbol as the TT font and Helvetica (or anything other than Symbol) as
	  the Printer font to use.
	
	4. Start Write (or Word for Windows, and so forth) and type some text in
	  Helvetica. On the next line, type the same text using the Symbol font.
	
	5. Print the document; the first line is in Helvetica and the second line is
	  still in Symbol rather than Helvetica as expected.
	
	Additional query words: buglist3.10 True Type 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
