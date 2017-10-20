---
layout: page
title: "Q182026: XFOR: Chat Channel Created w/Double-byte Lead Character Fails"
permalink: /kb/182/Q182026/
---

## Q182026: XFOR: Chat Channel Created w/Double-byte Lead Character Fails

{% raw %}

	Article: Q182026
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In any version of the Microsoft Exchange Chat Service that supports a
	double-byte character set, for example, the Japanese version, you may receive
	the following error message:
	
	  An IRC-compatible channel name must begin with the number sign (#) or
	  the ampersand (&).
	  Do you want to make this an MIC-only channel?
	
	NOTE: The above message will appear in the localized language.
	
	CAUSE
	=====
	
	Microsoft Exchange Chat Service does not support double-byte #, &, or % as
	valid leading characters as IRC channel names.
	
	RESOLUTION
	==========
	
	Use a single-byte #, &, or % as the leading character for all IRC/IRCX
	compatible channel names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Exchange Server version
	5.5. Microsoft is researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: MCISCHAT
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
