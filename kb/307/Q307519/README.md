---
layout: page
title: "Q307519: Computer Hangs When You Use VPN Ports"
permalink: /kb/307/Q307519/
---

## Q307519: Computer Hangs When You Use VPN Ports

{% raw %}

	Article: Q307519
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetupkbbuglist kbfixlist
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 may stop responding (hang) and generate various stop code error
	messages in Netbt.sys when you connect to multiple networks with Virtual Private
	Networking (VPN) ports.
	
	
	To confirm that you are experiencing this problem, enable the Special Pool
	feature on tag Nbt0 (0x3074624e) with overrun detection set to 0x1. With the
	Special Pool feature enabled, your computer should stop responding and generate
	a stop 0xA that points to an address in Netbt.sys (0xed1e5xxx last 3 digits may
	vary).
	
	  Bugcheck code 0000000A
	  Arguments 0xf82bd008 0x00000002 0x00000001 0xed1e5898
	
	For additional information about how to use the Special Pool feature, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size       File name     
	  -------------------------------------------------------
	  Sep-9-2001  04:47p  4.0.1381.7097  124,752    Netbt.sys   
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: srp
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbbuglist kbfixlist
	Component         : Drivers,Net Drivers,WAN
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
