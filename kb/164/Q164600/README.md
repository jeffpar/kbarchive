---
layout: page
title: "Q164600: 4 mm DAT Driver Reports DEC TZ9L Supports Setmarks"
permalink: /kb/164/Q164600/
---

## Q164600: 4 mm DAT Driver Reports DEC TZ9L Supports Setmarks

{% raw %}

	Article: Q164600
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardwarekbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 4 mm DAT Driver reports that the DEC TZ9L supports setmarks in
	GetDriveParameters, but the device does not actually support setmarks. This may
	cause certain applications to attempt to use setmarks on the device.
	
	CAUSE
	=====
	
	After support for this device was added in Windows NT 4.0 Service Pack 2, it was
	determined the device does not support setmarks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt SCSIPORT 4mmDAT
	
	======================================================================
	Keywords          : kbhw kbHardware kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
