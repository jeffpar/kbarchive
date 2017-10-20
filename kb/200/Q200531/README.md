---
layout: page
title: "Q200531: RasDial() Does Not Connect Dual Channels with Some ISDN Adapters"
permalink: /kb/200/Q200531/
---

## Q200531: RasDial() Does Not Connect Dual Channels with Some ISDN Adapters

{% raw %}

	Article: Q200531
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the RasDial function to initiate a Remote Access Services (RAS)
	connection over an Integrated Services Digital Network (ISDN) adapter, a
	connection to only one channel may be created (instead of a connection to two or
	more channels).
	
	CAUSE
	=====
	
	Even if the phonebook entry is configured for multiple channels and works
	correctly when you invoke it manually, RasDial establishes only a single-channel
	connection with some ISDN adapters.
	
	
	RESOLUTION
	==========
	
	Use the Rasphone.exe command-line tool to call the Dial-Up Networking phonebook.
	For additional information about using Rasphone.exe, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q125393 Rasphone and RasDial: Tips and Differences
	
	For additional information about using devices that are not on the latest
	Hardware Compatibility List, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q150424 Using an Unsupported Modem with Windows NT RAS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
