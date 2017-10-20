---
layout: page
title: "Q149393: CrashOnAuditFail Activates on Shutdown with ProcessTracking"
permalink: /kb/149/Q149393/
---

## Q149393: CrashOnAuditFail Activates on Shutdown with ProcessTracking

{% raw %}

	Article: Q149393
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,3.51 (all service packs)
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 (all service packs) 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\CrashOnAuditFail is
	enabled in the registry, and Auditing of ProcessTracking is turned on, then
	during shutdown the system will always fail with a Stop error message reading:
	
	  c0000244 (STATUS_AUDIT_FAILED)
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q140058
	  TITLE : How To Prevent Auditable Activities When Security Log Is Full
	
	CAUSE
	=====
	
	The failure occurs because an attempt is made to log the termination of a
	process after the event-logging service has already been shut down. Therefore,
	audit logging fails, and the blue screen is generated.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0 or install the fix mentioned below.
	
	To work around this problem, turn off the ProcessTracking auditing if
	CrashOnAuditFail is enabled or install Server Pack 5 or later for NT 3.51
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.5 and 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: usermgr security
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,3.51 (all service packs)
	
	=============================================================================
	

{% endraw %}
