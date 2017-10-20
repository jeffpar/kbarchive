---
layout: page
title: "Q162616: Extra Form Feed with Passthrough Functions to Text Only Driver"
permalink: /kb/162/Q162616/
---

## Q162616: Extra Form Feed with Passthrough Functions to Text Only Driver

{% raw %}

	Article: Q162616
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbWin2000SP2Fixkbbuglist kbfixlist
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send printer escape information in a print stream to a Windows NT
	Generic Text Only driver, additional form feed may occur after the job has been
	completed.
	
	MORE INFORMATION
	================
	
	The raster unidriver, RASDD, automatically appends a form feed to all jobs to
	ensure that the data gets sent to the printer. If an application developer uses
	the Escape or ExtEscape function, and includes all of the necessary sequences to
	print the page, an additional FormFeed or EjectPage will force another page to
	be printed. For additional information on the functions mentioned, please
	consult the Win32 SDK documentation.
	
	NOTE: This fix only pertains to the Generic/Text Only driver
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt formfeed form feed
	
	======================================================================
	Keywords          : kbprint kbWin2000SP2Fix kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
