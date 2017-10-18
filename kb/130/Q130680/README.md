---
layout: page
title: "Q130680: Service, Protocol, and Adapter Lists Can Appear Blank in NCPA"
permalink: kb/130/Q130680/
---

## Q130680: Service, Protocol, and Adapter Lists Can Appear Blank in NCPA

	Article: Q130680
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Network Control Panel tool (Ncpa.cpl), the lists of Services,
	Protocols, and Adapters installed can all appear blank.
	
	The ODBC tool is also affected in a similar way for the same reason.
	
	CAUSE
	=====
	
	A new registry key has been added under HKEY_LOCAL_MACHINE\SOFTWARE, and the
	user currently logged on does not have read rights to this key.
	
	When the Network Control Panel tool starts up, it scans
	HKEY_LOCAL_MACHINE\SOFTWARE for "Manufacturer" keys (for example, Microsoft). It
	then looks at registry keys under each Manufacturer key for "Product" keys (for
	example, Tcpip). Once it has found a product key it looks for a version key (for
	example, CurrentVersion) and then a key called NetRules. If it finds a key
	called NetRules it assumes that this subkey is defining a network component that
	it needs to be able to configure.
	
	However, NCPA assumes that it has read rights to all Manufacturer and Product
	keys. If it gets an access denied error at any time while scanning these keys it
	terminates the scanning process and just uses the information it has already
	procured. This means that if a third party adds a key under SOFTWARE that is
	alphabetically before 'Microsoft,' and it has restricted rights applied to it,
	then NCPA is never able to retrieve the list of Network components from the
	registry and presents a blank list.
	
	RESOLUTION
	==========
	
	Ensure that if it is necessary to restrict access to any data in a key under
	HKEY_LOCAL_MACHINE\SOFTWARE, the key is placed at least three levels down the
	tree from this point.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt applet smallbiz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
