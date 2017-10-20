---
layout: page
title: "Q172594: Cannot Connect to Server with 15 Characters and Period in Name"
permalink: /kb/172/Q172594/
---

## Q172594: Cannot Connect to Server with 15 Characters and Period in Name

{% raw %}

	Article: Q172594
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 OEM Service Release 2 or 2.1 (OSR2) and you
	attempt to connect to an SMB server with a 15-character name that contains a
	period as one of the characters, you may receive the following error message:
	
	  The network name cannot be found.
	
	If the server name contains only 14 characters with a period, or 15 characters
	with no period, the operation proceeds normally.
	
	CAUSE
	=====
	
	There is a problem with the Microsoft Client for Microsoft Networks (VRedir)
	that is included with OSR2. The problem occurs when the client parses server
	names that contain a period; server names that contain a period are treated as
	too long if they exceed 14 characters in length.
	
	
	RESOLUTION
	==========
	
	
	To work around this problem, rename the server so that the name does not contain
	a period, or is shorter than 15 characters.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
