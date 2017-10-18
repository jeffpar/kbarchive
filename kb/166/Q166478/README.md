---
layout: page
title: "Q166478: Logon Rights Are Not Audited"
permalink: kb/166/Q166478/
---

## Q166478: Logon Rights Are Not Audited

	Article: Q166478
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT can audit when a user or group is added to or removed from a User
	Right. To audit these types of actions, in User Manager, on the Policies menu,
	click Audit. In Audit Policy, click Audit These Events and select Security
	Policy Changes. This is the only audit category needed to audit these specific
	actions. However, the following rights do not show up in the Security log when
	Security Policy Changes are being audited. Changes to other rights were
	successfully audited.
	
	The following rights are not audited:
	
	- Access this computer from network
	
	- Log on as a service
	
	- Log on as a batch job
	
	- Log on locally
	
	CAUSE
	=====
	
	There was no associated code to log these events.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
