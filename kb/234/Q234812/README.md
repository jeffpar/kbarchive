---
layout: page
title: "Q234812: XCLN: Outlook Does Not Recognize English (UK) Dictionary"
permalink: kb/234/Q234812/
---

## Q234812: XCLN: Outlook Does Not Recognize English (UK) Dictionary

	Article: Q234812
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Outlook does not recognize the English (UK) dictionary when you use the spell
	checking feature of Outlook.
	
	CAUSE
	=====
	
	The registry key for this option,
	HKEY_CURRENT_USER/software/microsoft/office/8.0/outlook/options/spelling/, is
	incorrectly set for English (US): Speller: "1033\Normal".
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Change the "1033\Normal" entry for the Speller option to "2057\Normal".
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
