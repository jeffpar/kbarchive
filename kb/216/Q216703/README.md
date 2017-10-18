---
layout: page
title: "Q216703: Windows NT LDAP Connections Remain Open After LDAP Query"
permalink: kb/216/Q216703/
---

## Q216703: Windows NT LDAP Connections Remain Open After LDAP Query

	Article: Q216703
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using either Outlook Express or Outlook in Internet Only mode, network
	connections to an LDAP server are not closed after a "Find People" search. This
	results in an excessive number of connections being opened on the server.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	With the Wldap32.dll fix applied, each search concludes with an unbind and the
	connections are closed.
	
	
	Additional query words: ack fin TCP IP Lightweight Directory Access Protocol 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
