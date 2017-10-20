---
layout: page
title: "Q148929: Security Event ID 642 Logged Incorrectly for Audits"
permalink: /kb/148/Q148929/
---

## Q148929: Security Event ID 642 Logged Incorrectly for Audits

{% raw %}

	Article: Q148929
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you set up for User and Group Management Audit policy on a Windows NT primary
	domain controller (PDC), Event ID 642 appears. The security event indicates that
	a user account has changed even though no changes have occurred. This event is
	logged when a client computer logs on or logs off the Windows NT domain.
	
	
	
	CAUSE
	=====
	
	When a client computer attempts a logon, the PDC normally updates the client
	account to record statistics. One primary statistic is Last Logon Time. This
	information is sometimes displayed by network clients during a logon sequence.
	The code in SAMSRV.DLL that handles audits does not supress auditing of record
	changes due to statistics updates.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below:.
	
	For Windows NT 3.5, call Microsoft Product Support for an updated file. For
	Windows NT 3.51, install Windows NT 3.51 Service Pack 5 or later.
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation or Server version
	4.0. This problem was also corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50 3.51 user manager usrmgr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
