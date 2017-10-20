---
layout: page
title: "Q174529: Installing Updated NetFlex 3 Drivers During Unattended Install"
permalink: /kb/174/Q174529/
---

## Q174529: Installing Updated NetFlex 3 Drivers During Unattended Install

{% raw %}

	Article: Q174529
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The newest NetFlex 3 cards that ship with some Compaq computers are not detected
	during Windows NT setup. The drivers for these cards have the same name as the
	drivers for the old NetFlex 3 cards, and also work with the old NetFlex 3 cards.
	Replacing the old NetFlex 3 drivers with the new NetFlex 3 drivers in the
	I386\Drvlib.nic folder does not allow the new drivers to be loaded for the old
	cards.
	
	
	CAUSE
	=====
	
	The Netoemdh.inf that ships with Windows NT does not support these new cards or
	drivers.
	
	RESOLUTION
	==========
	
	Compaq has supplied a new Netoemdh.inf that allows Windows NT to detect and load
	the drivers for these new cards, and allows the new drivers to be loaded for the
	older NetFlex 3 cards as well. Follow the steps below:
	
	1. Delete the existing Netoemdh.in_ file from the I386 folder on the
	  distribution share.
	
	2. Download the new driver files from:
	
	  http://www.compaq.com/support/files/desktops/us/software/791.html
	
	3. Replace the files in the I386\Drvlib.nic\Netflex3 folder with the updated
	  driver files from Compaq.
	
	The products discussed here are manufactured by Compaq Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	the product's performance or reliability.
	
	Additional query words: unattend.txt network installation oem deployment Install
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
