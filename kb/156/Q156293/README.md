---
layout: page
title: "Q156293: XCLN: Macintosh Spelling Checker Could Not Be Started Error"
permalink: /kb/156/Q156293/
---

## Q156293: XCLN: Macintosh Spelling Checker Could Not Be Started Error

{% raw %}

	Article: Q156293
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the spelling checker in the Microsoft Exchange Macintosh client,
	the following error message appears:
	
	  The spelling operation could not be completed. The spelling checker could not
	  be started. Some components are either missing or incorrectly configured in
	  your Win.ini file. See your administrator.
	
	CAUSE
	=====
	
	The Setup program for the Microsoft Exchange Macintosh client does not correctly
	install the English and Custom dictionaries when more than one hard disk is
	present.
	
	RESOLUTION
	==========
	
	Copy both the English and Custom Dictionary files from the Microsoft folder to
	the Microsoft Exchange folder.
	
	MORE INFORMATION
	================
	
	If the Macintosh has more than one hard disk drive and it also has a Microsoft
	application (such as Office) with a spelling checker feature that is not
	installed on the startup drive, the Exchange client installs OK but the problem
	occurs during spelling check operations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0, of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
