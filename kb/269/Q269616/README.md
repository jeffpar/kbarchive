---
layout: page
title: "Q269616: How to Disable the DHCP Lease Message Completely"
permalink: kb/269/Q269616/
---

## Q269616: How to Disable the DHCP Lease Message Completely

	Article: Q269616
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	On multihomed computers that have only one network adapter connected to the
	network, the following Dynamic Host Configuration Protocol (DHCP) message may
	appear every time you start the computer:
	
	  The DHCP Client could not obtain an address. If you want to see these
	  messages in the future choose yes, otherwise choose no.
	
	CAUSE
	=====
	
	The DHCP service on the client computer tries to obtain and renew a lease; the
	DHCP message is the expected behavior if this does not succeed. Typically, this
	is better handled by configuring the computer to have different hardware
	profiles and booting into the right profile.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date        Time    Size    File name     Platform
	  --------------------------------------------------
	  07/24/2000  03:29p  38,672  Dhcpcsvc.dll  Intel
	  07/24/2000  03:28p  64,784  Dhcpcsvc.dll  Alpha
	
	
	
	This fix introduces a new registry entry that you can use to prevent the DHCP
	message from being displayed even once.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you install the hotfix by using the hotfix installer, the installer adds the
	new registry entry.
	
	If you apply the fix manually, you must add the registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Dhcp\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: PopupFlag
	  Data Type: REG_DWORD
	  Radix: Hexadecimal
	  Value: 0
	
	4. Quit Registry Editor.
	
	NOTE: To restore the original behavior, set the PopupFlag value to a data value
	of 1. If the PopupFlag registry value does not exist, the default is 1, and the
	message is displayed.
	
	Additional query words: popup
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
