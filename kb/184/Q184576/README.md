---
layout: page
title: "Q184576: SNAPRINT: 3270 Order, Program Tab Randomly Prints Two Spaces"
permalink: /kb/184/Q184576/
---

## Q184576: SNAPRINT: 3270 Order, Program Tab Randomly Prints Two Spaces

{% raw %}

	Article: Q184576
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 (all SP),3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbsna
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When the 3270 Datastream Order, Program Tab (0x05) is received by the print
	service, it is interpreted as a horizontal tab, and three space characters are
	placed in the print output. However, sometimes the Program Tab will resolve to
	only two spaces. This problem appears to occur at random.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	To resolve this problem, obtain the hotfix or service pack mentioned in this
	article. With the updated SNA Print Server fix applied, you can map tabs to a
	fixed number of spaces based on the size of the first tab in the Set Horizontal
	Format SCS control code. To do this, perform the steps below after applying the
	hotfix. WARNING: If you use Registry Editor incorrectly, you may cause serious
	problems that may require you to reinstall your operating system. Microsoft
	cannot guarantee that you can solve problems that result from using Registry
	Editor incorrectly. Use Registry Editor at your own risk.
	NOTE: The registry entry below needs to be created even if a Service Pack is
	applied. The registry entry is not created by the Service Pack.
	
	1. Start RegEdt32.exe.
	
	2. Navigate to the following key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \SnaPrint\Parameters
	
	3. Add SetFixedTabs = 'TRUE' (the type is REG_SZ).
	
	4. Stop and Start SNA Print Service for registry change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1, 3.0 Service Pack 2 and 4.0. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	A Program Tab is an SNA Order that advances as many spaces as are required to
	take the current column position to the next tab stop (that is, one, two, or
	three spaces, depending on how many characters you already have on the line).
	
	
	Additional query words: prodsna prt prn prnt prnts prints data stream sp2 sp3 sp
	
	======================================================================
	Keywords          : kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 (all SP),3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
