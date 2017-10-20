---
layout: page
title: "Q180114: Netlogon Event ID 5770 and 5722 on Primary Domain Controller"
permalink: /kb/180/Q180114/
---

## Q180114: Netlogon Event ID 5770 and 5722 on Primary Domain Controller

{% raw %}

	Article: Q180114
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors may occur in Windows NT when connecting to a Windows NT
	Workstation or a member Windows NT Server computer with User Manager or Server
	Manager:
	
	  The trust relationship between this workstation and the domain failed.
	
	Additionally, the following 5770 and 5722 errors may occur in the event log on a
	primary domain controller:
	
	Netlogon Event ID 5722:
	
	  The session setup from the computer CSWINS failed to authenticate. The
	  name of the account referenced in the security database is CSWINS$. The
	  following error occurred:
	
	  Access is denied.
	
	Netlogon Event ID 5770:
	
	  The session setup to the Windows NT Domain Controller <\\server> from
	  computer CSWINS using account CSWINS$ failed. CSWINS2 is declared to be
	  a BDC in domain <domain_name>. However, CSWINS2 tried to connect as
	  either a DC in a trusted domain, a member workstation in domain
	  <domain_name>, or as a server in domain <domain_name>. Use the
	  Server
	  Manager to remove the BDC account for CSWINS.
	
	And the following errors will occur on the target workstation or member server:
	
	Netlogon Event ID 5719:
	
	  No Windows NT Domain Controller is available for domain <domain_name>.
	  The following error occurred:
	
	  There are currently no logon servers available to service the logon
	  request.
	
	NOTE: This event is expected and can be ignored when booting with the No Net
	Hardware Profile.
	
	Netlogon Event ID 3210:
	
	  Failed to authenticate with <\\server>, a Windows NT domain controller
	  for domain <domain_name>.
	
	CAUSE
	=====
	
	Workstation and stand-alone server computer accounts are mistakenly treated as
	LanMan backup domain controllers (BDC) by the primary domain controller (PDC).
	LanMan BDCs are declared as such in a Windows NT domain by creating a special
	Windows NT global group called servers, creating user accounts that correspond
	to the computer names of the LanMan BDCs, and placing those user accounts in the
	servers group.
	
	Authentication with the PDC fails when the accounts in the servers group are
	actually Windows NT workstations and servers. This is because Windows NT will
	use the secure channel account password against to authenticate with the PDC.
	The PDC finds a matching user account in the servers group for the Windows NT
	system and treats it as a LanMan BDC. During challenge/response authentication,
	the PDC uses the user account password instead of the secure channel password to
	authenticate the Windows NT system. This causes the errors noted in the summary.
	
	RESOLUTION
	==========
	
	If no LanMan BDCs exist, then remove the servers group and restart the Netlogon
	service on the PDC.
	
	If LanMan BDCs exist, then remove the user accounts for the Windows NT systems
	experiencing this problem from the servers group. Restart the Netlogon service
	on the PDC.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
