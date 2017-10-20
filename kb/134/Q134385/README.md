---
layout: page
title: "Q134385: Unable to Open or Copy Files from a NetWare Server on FDDI Ring"
permalink: /kb/134/Q134385/
---

## Q134385: Unable to Open or Copy Files from a NetWare Server on FDDI Ring

{% raw %}

	Article: Q134385
	Product(s): Microsoft Windows NT
	Version(s): 3.5 SP2,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5 SP2, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5 SP2, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows NT, you can view files on a Novell NetWare
	server from File Manager, but you cannot open these files or copy them to a
	local drive.
	
	The Event Viewer shows the following error:
	
	  Event Id 8007: The Microsoft client service for Netware redirector has timed
	  out a request to <NetWare_server_name>.
	
	These symptoms occur when you use Windows NT on an Ethernet network segment with
	Client Services for NetWare (CSNW) or Gateway Services for NetWare (GSNW)
	installed, and attach to a Novell NetWare server connected to an FDDI ring.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Decrease the packet size from 4202 to 1514 on the NetWare server.
	
	  NOTE: This solution negatively impacts the performance of the NetWare server
	  on the FDDI ring.
	
	
	  -or-
	
	- Set DefaultMaxPacketSize to 1012. To do this:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CURRENTCONTROLSET\SERVICES\NWRDR\PARAMETERS
	
	  3. Add the following value:
	
	     DefaultMaxPacketSize:REG_DWORD: 1012 (decimal)
	
	For more information please see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q150426 TITLE: Ethernet Packet Size Incorrectly Determined w/
	  Packet Burst Off
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWinNTS350search kbWinNTW350SP2 kbWinNTS350SP2
	Version           : :3.5 SP2,3.51,4.0
	
	=============================================================================
	

{% endraw %}
