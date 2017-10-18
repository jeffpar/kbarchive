---
layout: page
title: "Q176543: Windows 95 Client Is Unable to Receive Roaming Profiles"
permalink: kb/176/Q176543/
---

## Q176543: Windows 95 Client Is Unable to Receive Roaming Profiles

	Article: Q176543
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1,2,2.1,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui osr2 win95
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT domain from a Windows 95-based computer, your
	roaming profiles may not be available.
	
	CAUSE
	=====
	
	During logon, the Windows NT server may return more data than the Windows 95
	network client expects when the client calls the NetuserGetinfo() Application
	Programming Interface (API) call.
	
	This problem is known to occur when the Windows NT server has the File and Print
	Services for NetWare (FPNW) service installed.
	
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and Windows
	95 OEM Service Release 2 (OSR2), and later versions of this file:
	
	   MSNP32.DLL  version 4.00.952  dated 05/07/97  67,584 bytes
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available,
	but is not fully regression tested and should be applied only to computers
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft does not recommend implementing this update at this
	time. Contact Microsoft Technical Support for additional information about the
	availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q175051 Windows 95 Roaming Profiles Do Not Work with Citrix WinFrame
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbui osr2 win95 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
