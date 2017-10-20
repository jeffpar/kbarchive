---
layout: page
title: "Q163423: SET: Allied Telesyn 1700+ Network Adapter Posts Event Message"
permalink: /kb/163/Q163423/
---

## Q163423: SET: Allied Telesyn 1700+ Network Adapter Posts Event Message

{% raw %}

	Article: Q163423
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following event log entry:
	
	  Err: A Required Parameter is Missing from the Registry
	
	may appear in the System event log when an Allied Telesyn AT1700+ network adapter
	has been installed but no network connectivity is provided.
	
	MORE INFORMATION
	================
	
	The driver shipped with Windows NT does not function correctly and should be
	replaced with version 2.1a or higher of the CardAssist Setup and Diagnostics
	disk from Allied Telesyn. After installing the updated driver, the message will
	no longer appear, and networking should function normally.
	
	Steps to Install the New Driver
	-------------------------------
	
	1. In Control Panel, Networks, Adapters, highlight the Allied Telesyn 1700 entry
	  and click the Remove (NOT Update) button.
	
	2. Click OK and reboot the system.
	
	3. After reboot, enter Control Panel, Networks, Adapters and click the Add
	  button.
	
	4. Rather than choosing from the list box, click Have Disk.
	
	5. Insert the disk which contains the driver from Allied Telesyn, select the
	  appropriate drive letter, and click OK.
	
	6. Make any desired changes to the network protocols and choose OK.
	
	7. Allow Windows NT to reboot.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
