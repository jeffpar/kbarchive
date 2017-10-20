---
layout: page
title: "Q283217: Registry Hive Fragmentation Fix May Cause Excessive SAM Size"
permalink: /kb/283/Q283217/
---

## Q283217: Registry Hive Fragmentation Fix May Cause Excessive SAM Size

{% raw %}

	Article: Q283217
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbRegistry kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SAM registry hive size in Windows NT 4.0 may increase rapidly after you
	update your computer with Service Pack 5 (SP5), Service Pack 6 (SP6), or Service
	Pack 6a (SP6a).
	
	CAUSE
	=====
	
	This problem can occur because the Windows NT 4.0 registry cell allocation
	behavior reduces SAM fragmentation. This behavior is described in the following
	Microsoft Knowledge Base article:
	
	  Q197632 Registry Hive Fragmentation Leads to Excessive Size
	
	Although this fix does help to resolve this problem, the fix can increase the SAM
	size in some situations where there is an excessive number of global groups with
	many members that rarely change. In this environment, the updated behavior of
	over-allocating to create larger cells that can be reused for future growth does
	not work and actually orphans larger fragments, which leads to excessive SAM
	sizes.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size      File name     Platform
	  ----------------------------------------------------
	  01/03/2001  05:18p  936,640   Ntoskrnl.exe  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP5.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: The fix referenced in this article configures SAM cellsize allocation to
	the original algorithm, but does not enable the user to configure
	RegistryAdjustCellSize. The fix to allow the registry change described below is
	included in the following hotfix and should be applied if you need to alter the
	algorithm behavior. For additional information, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q294345 Registry Hive Fragmentation Behavior Is Not Configurable
	
	A registry setting is added to Ntoskrnl.exe to make the Q197632 allocation
	granularity change optional. To disable the Q197632 allocation granularity
	setting:
	
	1. Click Start, click Run, type "regedit32" (without the quotation marks) in the
	  Open box, and then press ENTER.
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: RegistryAdjustCellSize
	  Data type: REG_DWORD
	  Radix: Hexadecimal
	  Value: 0x0 revert to original hive cell allocation granularity, 0x1 use
	  Q197632 hive cell allocation granularity.
	  Default: 0x1
	
	4. Quit Registry Editor.
	
	5. Restart your computer.
	
	Additional query words: ntoskrnl 283217
	
	======================================================================
	Keywords          : kbRegistry kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
