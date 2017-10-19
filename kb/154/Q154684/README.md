---
layout: page
title: "Q154684: Token Ring Server-Based Setup May Not Work Properly"
permalink: /kb/154/Q154684/
---

## Q154684: Token Ring Server-Based Setup May Not Work Properly

	Article: Q154684
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbsetup 3rdpartynet win95 kbHardware kb3rdPartyNetClientkbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to run a server-based setup of Windows 95 from a Novell
	NetWare 3.1x or 4.x server if you are using locally administered addresses (LAA)
	on your Token Ring network adapter.
	
	CAUSE
	=====
	
	Net.exe contains the real-mode Microsoft NetWare redirector (Nwredir.exe).
	Nwredir.exe attempts to use the burned-in Token Ring address instead of the LAA,
	causing the server not to recognize the workstation's attempt to connect.
	
	RESOLUTION
	==========
	
	A supported fix for Windows 95 and OEM Service Release 2 that corrects this
	problem is now available from Microsoft, but has not been fully regression
	tested and should be applied only to computers experiencing this specific
	problem. To resolve this problem immediately, contact Microsoft Technical upport
	to obtain the fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix for Windows 95 and OEM Service Release 2 should have the following file
	attributes (or later):
	
	  File name     Version    Date      Time     Size
	  ---------------------------------------------------------
	  Net.exe       n/a        6/3/96    2:38pm   375,930 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and
	Microsoft Windows 95 OEM Service Release 2 (OSR2).
	
	This issue is not resolved in Microsoft Windows 98. Microsoft does not support
	running Windows 98 from a network server.
	
	MORE INFORMATION
	================
	
	For workstations that have already been set up to run Windows 95 from a NetWare
	3.1x or 4.x server, replace the existing Net.exe file in the Windows folder with
	this updated file.
	
	For workstations that have not already been set up, replace all copies of the
	Net.exe file on the server-based setup server so that Windows 95 Setup uses the
	updated Net.exe file during Setup.
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q132807 Enhanced Encryption for Windows 95 Password Cache
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork kbsetup 3rdpartynet win95 kbHardware kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
