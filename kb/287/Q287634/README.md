---
layout: page
title: "Q287634: EnhancedSecurityLevel of &quot;1&quot; Causes &quot;Stop 0x1E&quot; Error"
permalink: /kb/287/Q287634/
---

## Q287634: EnhancedSecurityLevel of &quot;1&quot; Causes &quot;Stop 0x1E&quot; Error

{% raw %}

	Article: Q287634
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the domain password with a C2-security registry entry enabled,
	you may receive a "Stop 0x1E" error message. This problem can occur if you have
	Service Pack 6 (SP6) installed and the following registry entry is set:
	
	  Key: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager
	  Value: EnhancedSecurityLevel (REG_DWORD)
	  Data value: 1
	
	This key ensures that Object Manager can change the attributes of a kernel object
	in the Object table for the current process if (and only if) the previous mode
	of the caller is Kernel mode.
	
	If you attempt to change the password after you set this registry value, you
	receive the following error message:
	
	  Stop 0x0000001e (0xc0000005, 0x8019bb12, 0x00000000, 0x0000022c)
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition, service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Size        File name      Platform
	  --------------------------------------------------------
	  26/01/2001   02:44   1,003,392   Ntkrnlmp.exe   Intel
	  26/01/2001   02:44     982,144   Ntoskrnl.exe   Intel
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
