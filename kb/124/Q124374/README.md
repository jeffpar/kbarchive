---
layout: page
title: "Q124374: Windows NT 3.1 Computer Cannot Log On to Windows NT 3.5 Domain"
permalink: /kb/124/Q124374/
---

## Q124374: Windows NT 3.1 Computer Cannot Log On to Windows NT 3.5 Domain

{% raw %}

	Article: Q124374
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
	
	When you attempt to log on to a domain managed by a Windows NT Server 3.5
	primary domain controller (PDC) from a Windows NT version 3.1 workstation, the
	following error message appears:
	
	  The system cannot log you on (C0000224). Please try again or consult your
	  system administrator.
	
	CAUSE
	=====
	
	This problem occurs when "User Must Change Password at Next Logon" is selected
	on the PDC.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run User Manager for Domains on the Windows NT Server PDC.
	
	2. Edit the User account for the person receiving the error message noted above.
	
	3. Clear the "User Must Change Password at Next Logon" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt usrmgr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
