---
layout: page
title: "Q131841: Glyph Problems With Automatic Type 1 To TrueType Font Converte"
permalink: kb/131/Q131841/
---

## Q131841: Glyph Problems With Automatic Type 1 To TrueType Font Converte

	Article: Q131841
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 3.5 automatic Type 1 to TrueType font converter exhibits the
	following problems:
	
	- It is unable to handle repeated encoding.
	
	  If a glyph appears in more than one place in the encoding vector, then one
	  occurrence of the glyph is lost.
	
	- It is unable to handle character code zero.
	
	- It overwrites glyph character code 173 with glyph character code 45.
	
	  The Windows character codes 45 and 173 are hyphens "-". The converter copies
	  character code 45 to character code 173.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.5 or upgrade to Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was also corrected in Windows NT version 3.51.
	
	MORE INFORMATION
	================
	
	TrueType and Adobe Type 1 fonts are outline fonts, containing glyph shapes that
	are described by their outlines. A glyph outline consists of a series of
	contours that define the boundaries of the glyph. Some glyphs are simple, such
	as most letters and punctuation marks, but some can be quite complex. For
	example, a company logo with graphics and text might be encoded in a font as a
	single glyph.
	
	Additional query words: prodnt ttf ansi
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
