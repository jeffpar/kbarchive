---
layout: page
title: "Q169822: DSMN RAS Dial-in Properties Deletes NetWare Compatibility"
permalink: /kb/169/Q169822/
---

## Q169822: DSMN RAS Dial-in Properties Deletes NetWare Compatibility

{% raw %}

	Article: Q169822
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use User Manager for Domains to add, change, or view the dial-in
	properties of a Novell NetWare-compatible user, click OK to close the dial-in
	dialog box, and then click OK to close the user's Properties window, a dialog
	box appears requesting a password for the NetWare- compatible user. If you click
	Cancel in this dialog box, the NetWare Compatibility box is cleared for that
	user. In the case of Directory Services Manager for NetWare (DSMN), the user is
	deleted from all NetWare servers that are being managed. In the case of File and
	Print Services for NetWare (FPNW), the user cannot log on using a NetWare
	client.
	
	NOTE: This hotfix should also be applied to the following:
	
	- Any computer running Windows NT Server Primary Domain Controller (PDC) or
	  Backup Domain Controller (BDC) that is using User Manager for Domains to
	  modify user accounts.
	
	- Any computer running Windows NT Workstation on which the DSMN Administration
	  Tools are installed.
	
	CAUSE
	=====
	
	Rassapi.dll incorrectly updates the user information.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
