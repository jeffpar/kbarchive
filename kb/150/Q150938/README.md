---
layout: page
title: "Q150938: Printer Resident Fonts not Available w/ &quot;Print Text as Graphics&quot;"
permalink: /kb/150/Q150938/
---

## Q150938: Printer Resident Fonts not Available w/ &quot;Print Text as Graphics&quot;

	Article: Q150938
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print with a device resident font, for example Albertus Medium, the
	font may not appear. This happens when you use a device font in a document from
	Microsoft Excel, Microsoft Powerpoint or any third-party applications with a
	black or colored background.
	
	CAUSE
	=====
	
	Using the Print Text as Graphic option will correct rasterized and True Type
	fonts, but not device fonts. Windows NT will remove the device font from an
	applications font list when Print Text as Graphic is selected.
	
	RESOLUTION
	==========
	
	Select another font or contact the manufacturer of the printer to obtain the
	same font in a True Type version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: Disappear Ghost Casper
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	
