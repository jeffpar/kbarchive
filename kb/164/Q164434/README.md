---
layout: page
title: "Q164434: Sony Spressa SCSI CD-ROM Drive May Not Be Detected"
permalink: /kb/164/Q164434/
---

## Q164434: Sony Spressa SCSI CD-ROM Drive May Not Be Detected

{% raw %}

	Article: Q164434
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Setup may not detect the Sony Spressa CDU-920S SCSI CD-ROM drive.
	
	CAUSE
	=====
	
	The Sony Spressa CDU-920S is shipped with the Parity, ID1, ID2, and
	Prevent/Allow settings preset to On. Note that the Parity jumper is also known
	as the Device Type jumper.
	
	RESOLUTION
	==========
	
	Remove the Parity/Device Type jumper. Note also that the firmware version must
	be 2.0B.
	
	For information about removing jumpers or determining the firmware version,
	contact Sony Corporation.
	
	
	Additional query words: spresa
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
