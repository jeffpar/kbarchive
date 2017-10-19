---
layout: page
title: "Q101636: &quot;Access Denied&quot; Message Accessing File Open Elsewhere"
permalink: /kb/101/Q101636/
---

## Q101636: &quot;Access Denied&quot; Message Accessing File Open Elsewhere

	Article: Q101636
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	A Windows NT Advanced Server that runs Windows NT Services for
	Macintosh (SFM) enables Macintosh and PC-compatible computers to share
	the same files, such as Microsoft Word and Microsoft Excel documents.
	
	In the PC-based environment, more than one person can open the same
	Microsoft Excel document; the first user receives read-write access
	and subsequent users automatically receive read-only access. However,
	when a PC-compatible computer opens a Microsoft Excel document, an
	attempt to open the document from a Macintosh fails and the Macintosh
	user receives an "access denied" message.
	
	This occurs because Microsoft Excel for the Macintosh does not have
	the same defaults that Microsoft Excel for Windows does. The Microsoft
	Excel for the Macintosh Open File dialog box contains a Read-Only
	check box in its lower left corner. Select this option to open a
	spreadsheet that another user already has open. By default, this
	option is not selected.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1,4.0
	
	=============================================================================
	
