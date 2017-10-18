---
layout: page
title: "Q174777: Searching for One Character Words in Index Server"
permalink: kb/174/Q174777/
---

## Q174777: Searching for One Character Words in Index Server

	Article: Q174777
	Product(s): Internet Information Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you search for a string, for example, "C++" (without the quotes), Index
	Server will return the following error message:
	
	  The query contained only ignored words. (0x80041605) encountered
	  while processing the query "c++".
	
	CAUSE
	=====
	
	Both the neutral and English wordbreakers strip the trailing "++" characters,
	because they are not part of a linguistic word.
	
	An escape feature exists for special characters such as "&" and "|", because
	they have special meaning in the query syntax. However, the "+" character has no
	such special meaning.
	
	Also, even with escapes, the query "c(" will be converted to "c", which is a
	noise-word-only query.
	
	RESOLUTION
	==========
	
	This problem is corrected in Windows 2000 Indexing Service. Any words ending
	with ++, +, - and ! are passed to the engine and not considered noise words. To
	resolve this problem, upgrade to Windows 2000 Indexing Service.
	
	WORKAROUND
	==========
	
	Remove the letter "c" from the noise files: Noise.enu and Noise.dat. In that
	case searching for "c++" will be the same as searching for the letter "c".
	
	NOTE: After you edit the noise files, you will need to reindex all of the virtual
	roots.
	
	STATUS
	======
	
	This problem is corrected in Windows 2000 Indexing Service.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : 1.1
	Hardware          : ALPHA x86
	
	=============================================================================
	
