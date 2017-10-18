---
layout: page
title: "Q137868: Changing Modem for DUN Connectoid Restores Default Settings"
permalink: kb/137/Q137868/
---

## Q137868: Changing Modem for DUN Connectoid Restores Default Settings

	Article: Q137868
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the modem that a Dial-Up Networking connectoid is configured to
	use, the settings for that connectoid return to their default values. These
	settings include modem-specific settings such as speaker volume and maximum
	speed, and also include settings such as the type of Dial-Up server you are
	connecting to and the TCP/IP settings to use (if you use TCP/IP). If you change
	back to the modem the connectoid was originally configured to use, the settings
	are not restored.
	
	CAUSE
	=====
	
	In a Dial-Up Networking connectoid, all settings except the phone number are
	associated with a specific modem. If you change the modem a connectoid is
	configured to use, the settings are returned to their default values.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- If you need to use two different modems with a Dial-Up Networking connectoid,
	  create two connectoids, each of which is configured to use one of the modems.
	
	- Install the Dial-Up Networking 1.3 Upgrade. For information about the Dial-Up
	  Networking 1.3 Upgrade, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q191494 Dial-Up Networking 1.3 Upgrade Available
	
	
	Additional query words: dun
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
