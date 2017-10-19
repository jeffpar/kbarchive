---
layout: page
title: "Q165390: Document Margins Not Maintained in WordPad"
permalink: /kb/165/Q165390/
---

## Q165390: Document Margins Not Maintained in WordPad

	Article: Q165390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a document in WordPad, you may notice that the margin settings for
	the document have changed, but all other document characteristics are the same.
	
	CAUSE
	=====
	
	This behavior occurs because WordPad does not read the margin settings from the
	document.
	
	RESOLUTION
	==========
	
	To work around this issue, change the margin settings for the document after you
	open the document.
	
	NOTE: The new margin settings become the default margin settings.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	WordPad stores its default margin settings in the registry. When you open a
	document, the margins are set to the values indicated in the registry rather
	than being read from the document. If you change the margin settings in WordPad,
	the new margin settings are not written to the document but to the registry
	instead. The new margin settings then become the WordPad defaults and are used
	with all subsequently opened documents.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Hardware          : x86
	
	=============================================================================
	
