---
layout: page
title: "Q126977: Audit Policy Not Replicating Correctly to BDC"
permalink: /kb/126/Q126977/
---

## Q126977: Audit Policy Not Replicating Correctly to BDC

{% raw %}

	Article: Q126977
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make changes to the audit policy between the primary domain controller
	(PDC) and backup domain controller (BDC), some changes are not replicated to the
	BDC. For example, audit events set up on the PDC are set up on the BDC, but
	audit events cleared on the PDC are not cleared on the BDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	MORE INFORMATION
	================
	
	Through auditing you can track certain user activities. The Audit policy
	determines the amount and type of security logging Windows NT performs.
	
	Windows NT can record a range of event types, from a system-wide event such as a
	user logging on, to an attempt by a particular user to read a specific file.
	Both successful and unsuccessful attempts to perform an action can be recorded.
	
	When administering domains, the Audit policy applies to the security log of the
	PDC and the BDC in the domain because they share the same Audit policy. When you
	administer a computer running Windows NT Workstation or Server that is not a
	domain controller, this policy applies only to the security log of that
	computer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
