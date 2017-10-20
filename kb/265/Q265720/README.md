---
layout: page
title: "Q265720: EnhancedSecurityLevel of 1 Causes &quot;Stop 0x1E&quot; at Password Change"
permalink: /kb/265/Q265720/
---

## Q265720: EnhancedSecurityLevel of 1 Causes &quot;Stop 0x1E&quot; at Password Change

{% raw %}

	Article: Q265720
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a "Stop 0x1E" error message when you change the domain
	password with the C2 security registry entry enabled. The problem occurs if you
	have Service Pack 6a (SP6a) installed and the following registry entry is set:
	
	  Key: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager
	  Value: EnhancedSecurityLevel (REG_DWORD)
	  Data: 1
	
	This key ensures that Object Manager can change the attributes of a kernel object
	in the Object table for the current process if (and only if) the previous mode
	of the caller is kernel mode.
	
	When you attempt to change the password after setting this registry value, you
	receive the following error message:
	
	  Stop 0x0000001e (0xc0000005, 0x8019bb12, 0x00000000, 0x0000022c)
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  06/23/2000  07:26p             955,136 Ntkrnlmp.exe  Intel
	  06/23/2000  07:26p             934,656 Ntoskrnl.exe  Intel
	  06/23/2000  07:24p           1,401,920 Ntkrnlmp.exe  Alpha
	  06/23/2000  07:24p           1,373,888 Ntoskrnl.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
