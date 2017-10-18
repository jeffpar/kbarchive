---
layout: page
title: "Q170517: Cannot Log on Using IPX After Installing SP3 on Windows NT 4.0"
permalink: kb/170/Q170517/
---

## Q170517: Cannot Log on Using IPX After Installing SP3 on Windows NT 4.0

	Article: Q170517
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.11,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you install Service Pack 3 for Windows NT 4.0 Server, clients who try to
	log on using the IPX protocol may experience problems.
	
	Microsoft Network Clients version 3.0 for MS-DOS may display the following
	error:
	
	  Error 5: Access has been denied.
	
	Windows for Workgroups and Windows 95 clients may report password problems. They
	may display the following error message:
	
	  The Domain password supplied is incorrect, or access to your logon server has
	  been denied.
	
	MS-DOS clients and Windows for Workgroups clients may fail every time. Windows 95
	clients may only fail sporadically. NT clients will not experience a problem
	because they do not use Direct Hosting to establish a session.
	
	The Microsoft network clients 3.0 for MS-DOS may also exhibit problems
	Establishing a session to a member server in the logon domain. In this case, you
	may receive the following error:
	
	  Error 58: The network has responded incorrectly
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	click the following article number to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To work around this problem, follow the steps below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Use the Regedt32.exe tool, and navigate to the following location:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add the following value:
	
	     Value Name: MinClientBufferSize
	     Data Type: REG_DWORD
	     Radix: Hex
	     Data: 1F4
	
	3. Rebooted the computer to have this change take effect.
	
	To resolve domain validation errors, either the hotfix or the registry change
	should be applied to all domain controllers running the IPX protocol.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: failed sp3 ipxspx spx novell netware nw ipx/spx ipx/xns WFW Win95 smb ntfaqmax ntfaqdom
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWin95search kbZNotKeyword kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW311 kbNetworkClient300DOS
	Version           : :3.0,3.11,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
