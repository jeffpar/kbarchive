---
layout: page
title: "Q118822: Novell NetWare Utilities That Do Not Work with Windows 95"
permalink: /kb/118/Q118822/
---

## Q118822: Novell NetWare Utilities That Do Not Work with Windows 95

{% raw %}

	Article: Q118822
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool 3rdpartynet win95 appscomp kb3rdPartyNetClient kbAppCompati
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses Novell NetWare utilities that do not run under Windows
	95.
	
	MORE INFORMATION
	================
	
	NWUSER.EXE
	----------
	
	Unlike previous versions of NETWARE.DRV, which were provided by Novell, Microsoft
	wrote the NETWARE.DRV file provided with Windows 95. This NETWARE.DRV file does
	not support NWUSER because the user interface in Windows 95 provides similar
	functionality.
	
	
	PSERVER.EXE
	-----------
	
	The Novell PSERVER utility makes connections by logging you off the network and
	then logging you back in as a PSERVER object. Because this limits the
	workstation to PSERVER functions, Windows 95 does not support this utility.
	
	NDS
	---
	
	To use a utility (such as NWADMIN or NETADMIN) that requires you to be logged in
	to the NetWare Directory Services (NDS) or that makes NDS API calls, you must
	install the Microsoft Service for NetWare Directory Services (MSNDS). For
	information about obtaining MSNDS, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	Additional query words: 3.12 4.0 4.01 client software 3rdparty w95cn
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool 3rdpartynet win95 appscomp kb3rdPartyNetClient kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
