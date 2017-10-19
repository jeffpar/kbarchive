---
layout: page
title: "Q259264: Unsuccessful Logons and Problems Gaining Access to NDS Resources"
permalink: /kb/259/Q259264/
---

## Q259264: Unsuccessful Logons and Problems Gaining Access to NDS Resources

	Article: Q259264
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Client Service for NetWare (CSNW) and Microsoft Gateway Service for
	NetWare (GSNW) are installed on your Windows NT or Windows 2000 network, newly
	created or existing users may not be able to connect to resources within the
	NetWare Directory Services (NDS) tree, logon scripts may not be correctly
	processed, or printer resources may not be accessible.
	
	The Microsoft Client for NetWare Networks reports an inability to log on or to
	locate the specified NetWare server or NDS tree. CSNW and GSNW do not work and
	the following error message is displayed:
	
	  Error: You cannot be authenticated on <tree>(<context>) due to
	  the following reason: The network path was not found."
	
	Attempts to log on directly to a NetWare server are also unsuccessful. In
	addition, attempts to change passwords may not work and the following error
	message may be displayed:
	
	  Your password could not be changed on <treename> due to the following
	  reason: A device attached to the system is not functioning.
	
	Bindery logon attempts may work fine.
	
	CAUSE
	=====
	
	This issue can occur if you use either of the following Novell clients:
	
	- Novell Client 4.7 for Windows NT and Windows 2000
	
	- Novell Client 3.2 for Microsoft Windows 95/98
	
	This problem can occur if you use either of these clients during the creation or
	administration of a print server object or a user object (for example, changing
	a user's password). Therefore, this issue may appear to affect users that are
	already created, as well as newly created users.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Contact Novell for a client update that resolves this issue. Novell's support
	  site is located at the following Web site:
	
	  http://support.novell.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	2. Download the appropriate file to update the client you are using:
	
	   - 9532pt2.exe for version 3.2 (Windows 95/98)
	
	   - Nt47pt2.exe for version 4.7 (Windows NT\Windows 2000)
	
	3. Modify and save the properties of the user or printer object that is not
	  working. If this does not resolve the problem, you may have to delete and
	  re-create the affected user or printer objects using the listed Novell
	  clients.
	
	MORE INFORMATION
	================
	
	This issue may also affect Macintosh clients, which experience unsuccessful
	logon attempts.
	
	This issue may affect JetDirect cards, which report logon problems and possibly
	"2B" error messages.
	
	Contextless logons are not used, as specified in the following Microsoft
	Knowledge Base article:
	
	  Q216821 NetWare 5 'Contextless Login' Not Supported with GSNW or CSNW in
	  Windows 2000
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: netware
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
