---
layout: page
title: "Q137553: IBM 4019 Defaults to Manual Paper Feed"
permalink: /kb/137/Q137553/
---

## Q137553: IBM 4019 Defaults to Manual Paper Feed

{% raw %}

	Article: Q137553
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the IBM 4019 driver is installed on Windows NT it defaults to Manual Paper
	feed. This causes the user to have to manually feed paper for each print job
	rather than having the paper feed from the paper tray.
	
	CAUSE
	=====
	
	The UNIDRIVER installs the default form Letter on the first paper source and
	manual feed is the first paper source on the 4019 driver.
	
	WORKAROUND
	==========
	
	You can workaround the problem by associating Manual Feed with no form and Upper
	Tray with the Letter form using the following steps:
	
	1. Run Print Manager.
	
	2. From the Printer menu, choose Properties.
	
	3. Choose Setup.
	
	4. In the Source box, choose Manual Feed.
	
	5. In the Form box, choose (None).
	
	6. In the Source box, choose Upper Tray.
	
	7. In the Form box, choose Letter.
	
	8. Choose OK.
	
	You can also work around this problem by setting the IBM 4019 to HP emulation
	mode by turning the printer off, and then turn the printer back on while holding
	down the Font button. Then, in Print Manager, install and use the HP LaserJet
	series II driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
