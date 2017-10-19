---
layout: page
title: "Q148968: Compaq Proliant May Save Corrupted Memory.dmp When Crashing"
permalink: /kb/148/Q148968/
---

## Q148968: Compaq Proliant May Save Corrupted Memory.dmp When Crashing

	Article: Q148968
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Compaq Proliant multi-processor server does not create a valid Memory.dmp
	crash dump after a Windows NT STOP error occurs, even though it is configured to
	do so (under Control Panel, System, Recovery).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The symptom mentioned above also occurs on non-Compaq systems with less than 256
	MB of RAM. The correct this problem, apply the Service Pack mentioned above or
	re-create the system page file (not a guaranteed solution).
	
	There are two ways to delete the system page file:
	
	- Boot to MS-DOS (or another operating system) and delete PAGEFILE.SYS. After
	  you restart Windows NT, add the page file back in Control Panel System.
	  Restart Windows NT.
	
	  -or-
	
	- From the Virtual Memory dialog box in Control Panel System, note the current
	  settings for page file Initial Size and Maximum Size. Change both Initial
	  Size and Maximum Size to zero and restart Windows NT. Next, change the
	  Initial Size and Maximum Size back to the original settings. Restart Windows
	  NT.
	
	If the cpqarray.sys version you are using is from SSD version 2.01 or earlier you
	can download the softpack - sp2746.exe from Compaq or use the cpqarray.sys file
	from Windows NT 4.0 service pack 3. The Sp2746.exe fix specifically addresses
	the inability to generate a memory dump file on Compaqs with a Smart 2 array
	controller. To determine the version of Cpqarray.sys you are using, right click
	on the file in explorer, choose properties, and click on the version tab.
	
	Additional query words: prodnt sp4 stop
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
