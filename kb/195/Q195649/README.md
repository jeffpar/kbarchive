---
layout: page
title: "Q195649: Service Making Connection to NetWare Server May Fail"
permalink: /kb/195/Q195649/
---

## Q195649: Service Making Connection to NetWare Server May Fail

	Article: Q195649
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A failure may occur on systems that have Service Pack 3, the LSA2 fix installed,
	and have one or more services configured to run under a user account other than
	the local system account. The failure occurs when the service or services
	connect to a NetWare server. The type of failure and the effect of the failure
	is dependent upon the service.
	
	The cc:Mail Connector service supplied with Microsoft Exchange Server is normally
	configured to run under an account other than local system and, when the import
	or export function connects to a NetWare server, the connection fails with a
	return code status of 3. This status is logged in the event log as either event
	61 or 70.
	
	NOTE: This problem does not occur on systems without the LSA2 fix installed. This
	hotfix should not be installed unless the LSA2 fix is installed. For information
	regarding the LSA2 fix for Windows NT, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q184017 Administrators Can Display Contents of Service Account Passwords
	
	  Q182918 Account Lockout Event also Stored in Security Event Log on DC
	
	NOTE: This fix should not be applied to systems running Microsoft Site Server. If
	Site Server is currently installed, Microsoft recommends that you install
	Service Pack 4 for Windows NT.
	
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
	
	Additional query words: 4.00 LSA2FIX
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
