---
layout: page
title: "Q255882: XFOR: Migrating Double-Byte Character Set Messages from cc:Mail"
permalink: /kb/255/Q255882/
---

## Q255882: XFOR: Migrating Double-Byte Character Set Messages from cc:Mail

	Article: Q255882
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you migrate messages from Lotus cc:Mail, the language of the operating
	system that the Migration Wizard runs on determines the CODEPAGE switch of the
	Import and Export processes that the Migration Wizard starts.
	
	Therefore, if you migrate messages from cc:Mail that contain double-byte
	character set (DBCS) characters, you need to run the Migration Wizard on an
	operating system of that particular language.
	
	For example, if you migrate messages that contain Chinese characters, run the
	Migration Wizard on the Chinese version of Microsoft Windows NT Server. US-ASCII
	characters are migrated correctly because they are a subset of DBCS.
	
	MORE INFORMATION
	================
	
	If the incorrect CODEPAGE switch is used to extract messages from cc:Mail, the
	Migration Wizard does not migrate DBCS characters correctly, even when you use
	the two-step migration process and modify the CodePage header in the .pkl file.
	The DBCS characters in the migration files are already corrupted.
	
	
	Additional query words: Japanese Korean
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
