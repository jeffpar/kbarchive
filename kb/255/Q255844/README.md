---
layout: page
title: "Q255844: Default Document Is Not Compressed When Compression Is Enabled"
permalink: /kb/255/Q255844/
---

## Q255844: Default Document Is Not Compressed When Compression Is Enabled

	Article: Q255844
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Microsoft Internet Information Services (IIS) computer that has the HTTP
	compression enabled, a compressed copy of the default document file is not
	stored in the temporary folder, even though a client that supports HTTP
	compression has requested that default document.
	
	For example, when you request the URL http://localhost , the Default.htm file
	should return by default.
	
	WORKAROUND
	==========
	
	To work around this issue, send a request to the Web site (including the file
	name of the default document) to force the IIS computer to build the compressed
	copy and place it in the temporary folder.
	
	For example, request http://localhost/default.htm to force the compressed copy of
	the Default.htm file to be created and stored in the temporary folder.
	
	MORE INFORMATION
	================
	
	When a file is requested, the compressed copy is stored in a temporary folder,
	and then sent when further requests are received. Files are not compressed prior
	to receiving a request for them.
	
	Note: By default, the temporary folder is "C:\WINNT\IIS Temporary Compressed
	Files". This is specified on the Service tab in the "WWW Service Master
	Properties for <ComputerName>" dialog box in the IIS snap-in.
	
	Additional query words: iis 5 cache directory akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
