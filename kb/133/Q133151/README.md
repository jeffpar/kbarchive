---
layout: page
title: "Q133151: Unable to Stop Success Logon Audits on Backup Domain Controller"
permalink: /kb/133/Q133151/
---

## Q133151: Unable to Stop Success Logon Audits on Backup Domain Controller

{% raw %}

	Article: Q133151
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Audit policy for a domain is set to log failed logons only, the backup
	domain controllers in the domain incorrectly logs the successful and failed
	logons that it validates. The primary domain controller logs only failed logon
	attempts as expected.
	
	WORKAROUND
	==========
	
	1. On the backup domain controller (BDC) go into User Manager.
	
	2. From the Policies menu choose auditing and check the box Auditing For
	  Successful Logons.
	
	3. Then uncheck the box Auditing For Successful Logons.
	
	This then fixes the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
