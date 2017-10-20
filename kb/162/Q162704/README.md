---
layout: page
title: "Q162704: STOP 0X0000001E in Nwrdr.sys When Copying Files to NetWare"
permalink: /kb/162/Q162704/
---

## Q162704: STOP 0X0000001E in Nwrdr.sys When Copying Files to NetWare

{% raw %}

	Article: Q162704
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT computer running Client Services for NetWare (CSNW) or Gateway
	Services for NetWare (GSNW) may give the following stop error message while
	copying files to a Novell NetWare server:
	
	  Stop 0X0000001E (0xC0000005, 0xfa2b5281, 0x00000000, 0x00000000)
	  KMODE_EXCEPTION_NOT_HANDLED*** Address fa2b5281 has base at fa280000 -
	  NWRDR.SYS
	
	NOTE: The parameters in parenthesis will depend upon your system configuration,
	and may be different from the ones listed above.
	
	CAUSE
	=====
	
	Read-ahead data has been copied to the buffer, and the data size is more than
	the buffer size.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available. This problem was corrected in Windows NT
	4.0.
	
	Additional query words: prodnt blue screen
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
