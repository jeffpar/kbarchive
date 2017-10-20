---
layout: page
title: "Q172778: Cannot Connect to a Dell Dial-Up Networking Server"
permalink: /kb/172/Q172778/
---

## Q172778: Cannot Connect to a Dell Dial-Up Networking Server

{% raw %}

	Article: Q172778
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Dell computer that is running Dial-Up
	Networking Server and is equipped with a US Robotics Sportster 33.6 Plug and
	Play modem, the Dell computer may close the dial-up connection before your user
	name and password can be verified. The Dell computer models affected are:
	
	- Dimension Pxxxa/Mxxxa
	
	- Dimension XPS Hxxx
	
	- Dimension XPS Mxxxs
	
	- Dimension XPS Proxxxn
	
	- Dimension XPS Pxxxs
	
	
	CAUSE
	=====
	
	This problem is caused by a configuration file for the US Robotics modem that is
	included with the Dell computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the Mdmusrvi.exe file from Dell Technical Support
	or from the Dell Web site. This file is a self-extracting compressed file
	containing a replacement Mdmusrvi.inf file for the modem.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: USR
	
	======================================================================
	Keywords          : kbtool dun win95 kbDialUp 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
