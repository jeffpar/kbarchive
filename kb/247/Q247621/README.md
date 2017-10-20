---
layout: page
title: "Q247621: Blue Screen with Garbled Text During Windows NT Installation"
permalink: /kb/247/Q247621/
---

## Q247621: Blue Screen with Garbled Text During Windows NT Installation

{% raw %}

	Article: Q247621
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0, the first time the computer restarts, which is
	between the Text mode and the Graphical User Interface (GUI) mode of Setup,
	garbled text may be displayed in the middle of a blue screen.
	
	CAUSE
	=====
	
	This issue can occur because the Hal.dll file does not correctly identify the
	Intel 810E chipset.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Hal.dll file in the Windows NT 4.0
	installation folder with the Hal.dll file included with the Windows NT 4.0
	Service Pack 4 CD-ROM.
	
	1. Copy and replace the Hal.dl_ file from Windows NT 4.0 Service Pack 4 to the
	  Windows NT 4.0 installation folder. If the Hal.dll file included with Windows
	  NT 4.0 Service Pack 4 is already extracted, rename the file, and then copy it
	  to the Windows NT 4.0 installation folder.
	
	2. Install Windows NT 4.0.
	
	3. Install Windows NT 4.0 Service Pack 4 or later.
	
	MORE INFORMATION
	================
	
	The suggested work around in this article is a cosmetic fix only.
	
	The appearance of this erroneous text does not affect Windows NT 4.0 in any way.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
