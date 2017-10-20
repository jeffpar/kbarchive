---
layout: page
title: "Q260525: &quot;License Violation&quot; Error When You Enable Registry Auditing"
permalink: /kb/260/Q260525/
---

## Q260525: &quot;License Violation&quot; Error When You Enable Registry Auditing

{% raw %}

	Article: Q260525
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enable auditing on certain subkeys of the HKEY_LOCAL_MACHINE registry
	key, the following error message may be displayed:
	
	  System Process - License Violation:
	  The system has detected tampering with your registered product type. This is a
	  violation of your software license. Tampering with product type is not
	  permitted.
	
	This error message may appear multiple times if the "Audit permissions on
	existing subkeys" check box is selected.
	
	STATUS
	======
	
	This issue is resolved in Windows 2000.
	
	MORE INFORMATION
	================
	
	The error message does not interfere with the auditing functions. Auditing still
	occurs as expected.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
