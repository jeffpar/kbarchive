---
layout: page
title: "Q152623: XCLN: The Setup Editor is Language Specific"
permalink: kb/152/Q152623/
---

## Q152623: XCLN: The Setup Editor is Language Specific

	Article: Q152623
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Setup Editor can only be used to customized a Microsoft
	Exchange client installation point that uses the same language as the Setup
	Editor itself. The Microsoft Exchange Setup Editor is available in 4 languages;
	English, French, Japanese, and German.
	
	If you run the Setup Editor for one language against a client installation point
	for another language (for example, using a French Setup Editor against a Spanish
	client installation point), you will receive the following error:
	
	  The STF in the specified directory is not a MS Exchange Client STF file.
	  Check the value of the "Frame Caption" Header entry.
	
	MORE INFORMATION
	================
	
	The English, French, German, and Japanese Setup Editors do not support localized
	STF files in other languages, hence the 'Frame Caption' error. This is by
	product design.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q147352 XCLN: Creating Default User Profiles
	
	Additional query words: french german japanese
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
