---
layout: page
title: "Q130871: Lucida Math Type 1 Fonts Do Not Print Correctly"
permalink: /kb/130/Q130871/
---

## Q130871: Lucida Math Type 1 Fonts Do Not Print Correctly

	Article: Q130871
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
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
	
	When you print a document that uses the Lucida New Math Symbol Type 1 or the
	Lucida New Math Extensions Type 1 font under Windows NT, the glyphs in the 80-9f
	range are not converted correctly to TrueType fonts because the printed symbols
	are different from the original Type 1 font symbols.
	
	CAUSE
	=====
	
	The Windows NT font converter does not map characters correctly when a fonts
	contain special symbols not usually found in regular fonts. The glyphs that
	should have printed exist in the converted TrueType font, but the character map
	table fails to point to them. Therefore, they are not printed correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
