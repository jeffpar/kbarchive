---
layout: page
title: "Q134654: Macintosh Client Error Attempting to Log On to Windows NT"
permalink: /kb/134/Q134654/
---

## Q134654: Macintosh Client Error Attempting to Log On to Windows NT

{% raw %}

	Article: Q134654
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to Windows NT server from a Macintosh client
	computer, the following error message appears:
	
	  This file server does not use a recognizable log on sequence.
	
	CAUSE
	=====
	
	This problem occurs under the following conditions:
	
	- "Require Microsoft Authentication" is enabled and "Allow Guests to Logon" is
	  disabled for MacFile Attributes in the Control Panel MacFile Properties
	  dialog box.
	
	  -and-
	
	- The Macintosh does not have the Microsoft user authentication module (UAM)
	  installed, or the UAM is corrupted.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. On the Windows NT server, run Control Panel, choose MacFile Properties, and
	  select "Allow Guests to Logon." From the Macintosh client computer, connect
	  to the Microsoft UAM Volume on the Windows NT server using the guest account.
	
	2. Copy the entire AppleShare folder into your system folder. If the folder
	  already exists, copy the Microsoft UAM. For more information, read Chapter 4
	  "Setting Up Services for Macintosh Client Software" in the Windows NT
	  Services for Macintosh Guide.
	
	3. You can now disable "Allow Guests to Logon" if you want.
	
	Additional query words: prodnt sfm mac file
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
