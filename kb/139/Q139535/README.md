---
layout: page
title: "Q139535: Some TrueType Fonts Do Not Produce Glyphs on Windows NT 3.51"
permalink: /kb/139/Q139535/
---

## Q139535: Some TrueType Fonts Do Not Produce Glyphs on Windows NT 3.51

	Article: Q139535
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some TrueType fonts from other versions of Windows or third party font vendors
	do not produce glyphs on Windows NT 3.51.
	
	For example, if you install the Traditional Arabic font (Trad.ttf) from Arabic
	Windows 3.11 in Windows NT 3.51, it does not produce glyphs. The font installs,
	but it displays the default character when you attempt to display it, indicating
	the character codes do not have a glyph.
	
	The TrueType fonts most likely to encounter this problem are those which have
	been constructed for foreign language versions of windows like Arabic Windows
	3.11 or 3.1.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, WINSRV.DLL, to correct this problem. Upgrade to
	the latest Windows NT 3.51 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: default character far east
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
