---
layout: page
title: "Q101749: PC Adm: Compression of External Postoffice &amp; Gateway Mailbags"
permalink: kb/101/Q101749/
---

## Q101749: PC Adm: Compression of External Postoffice &amp; Gateway Mailbags

	Article: Q101749
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	The Administrator program for versions 2.1, 3.0, and 3.2 of Microsoft Mail
	for PC Networks compresses the mailbags (.MBG files) that belong to
	external postoffices and gateways. The Compress Mailbag utility is selected
	by selecting Local-Admin, Storage, Compress.
	
	This utility compresses all mailbags on the postoffice. The function does
	not distinguish between a user's mailbag on the postoffice, an external
	postoffice mailbag, or a gateway mailbag. This could cause problems if an
	external postoffice or a gateway is active.
	
	The purpose of the Compress utility is to recover space from the system
	mailbags. The mailbags contain the headers for the mail items for the owner
	of the mailbag. Even though the user deletes the mail item, the header
	remains in the mailbag and is marked deleted. As a result, the mailbag
	still takes up the same amount of space. The Compress utility recovers this
	space.
	
	The Compress utility of Administrator program opens the .KEY and .MBG files
	with READ, WRITE and DENY_WRITE file permissions. If there is an External
	or Gateway active, the file can still be read and this causes the External
	or Gateway to get data that is out of date.
	
	For more information on the Compress utility, please see the "Managing the
	Mail System Disk Storage Space" section of the "Administrator's Guide."
	
	Additional query words: 2.10 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
