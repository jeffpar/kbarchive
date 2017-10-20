---
layout: page
title: "Q191688: intraNetWare Client Does Not Synchronize Windows 95 Password"
permalink: /kb/191/Q191688/
---

## Q191688: intraNetWare Client Does Not Synchronize Windows 95 Password

{% raw %}

	Article: Q191688
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Windows 95-based computer using the Novell intraNetWare client to
	log on to a Novell NetWare server on a Windows NT domain with an expired NetWare
	password, you may not be able to synchronize all passwords when you change your
	NetWare password. If you try to synchronize all passwords when you change your
	password, the NetWare and Windows passwords may be changed, but not the Windows
	NT domain password.
	
	CAUSE
	=====
	
	This problem occurs when the intraNetWare logon is the primary logon for the
	Windows 95 client, and the intraNetWare client attempts to change (and
	synchronize) the passwords at logon.
	
	RESOLUTION
	==========
	
	To resolve this issue, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q198035 User Profiles Not Copied to Server with Updated Mprserv.dll File
	
	  Q188206 "Access Denied" Connecting to Windows NT Server with Many Shares
	
	In addition to the files listed above, you need the following updated files from
	Novell:
	
	  Lgnw9532.dll
	  Nwpasswd.dll
	
	Refer to "95250p1.exe; Password Sync Fix for 95 Client" from Novell.
	
	
	Refer to Novell Knowledge Base article 2944003, "Unable to Change Password on
	Using 95/98 GUI."
	
	Note that this resolution works only if the IntraNetWare client is set as your
	primary network logon.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
