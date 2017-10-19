---
layout: page
title: "Q159594: Missing Eastern Europe FontSubstitutes in Registry"
permalink: /kb/159/Q159594/
---

## Q159594: Missing Eastern Europe FontSubstitutes in Registry

	Article: Q159594
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.00
	Operating System(s): 
	Keyword(s): kbinterop kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.00 
	- Microsoft Windows NT Workstation version 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT 4.0, the fonts for Eastern Europe (for example, Czech) are not
	shown in Office 95.
	
	CAUSE
	=====
	
	After you upgrade Windows NT Server or Workstation with Eastern Europe default
	local settings (for example, Czech) from Windows NT 3.51 to Windows NT 4.0, the
	'mixed' FontSubstitutes for Office 95 products are not available in the
	registry. The missing fonts include Arial CE,238; Arial CYR,204; Arial
	Greek,161; Arial TUR,162; and others.
	
	If you install a clean Windows NT 4.0, you get the same problems.
	
	WORKAROUND
	==========
	
	Set the regional settings as system default. Open the Regional Settings Control
	tool and select "Set as system default locale." This will add the font
	substitutes needed for your locale.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Font Substitutes
	
	======================================================================
	Keywords          : kbinterop kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : winnt:4.00
	
	=============================================================================
	
