---
layout: page
title: "Q148488: XCLN: British Dictionary Not Enabled by Default"
permalink: kb/148/Q148488/
---

## Q148488: XCLN: British Dictionary Not Enabled by Default

	Article: Q148488
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default dictionary for the International version of the Microsoft Exchange
	client is the American English dictionary, not the British dictionary.
	
	MORE INFORMATION
	================
	
	You can change the spelling dictionary language by modifying the following
	registry entry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange\Client\Options
	  \DictionaryLangID
	
	The setting for US English is 1033, and the setting for UK English is 2057.
	
	A registry setting can be changed in the Exchange.stf file before the user
	installs the Microsoft Exchange client or afterwards by manually editing the
	registry.
	
	If this registry entry is set, Microsoft Exchange will use the Language ID in the
	registry entry. If the registry entry is not set, spelling will function with
	the American English dictionary. Setup will not create this registry entry.
	
	This information is also available in the release notes.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
