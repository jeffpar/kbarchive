---
layout: page
title: "Q142253: Unable to Read from Floppy Disk Drive on Laptop Computer"
permalink: /kb/142/Q142253/
---

## Q142253: Unable to Read from Floppy Disk Drive on Laptop Computer

{% raw %}

	Article: Q142253
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw diskmem win95 kbHardware kbDiskMemorykbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may not be able to read data from floppy disk drives on some Toshiba
	laptop computers that are running the upgrade version of Windows 95. This
	behavior typically occurs only if you try to read from a drive that does not
	contain a disk and then later attempt to read from that drive again.
	
	CAUSE
	=====
	
	This behavior is due to a timing problem with the Hsflop.pdr driver included
	with the upgrade version of Windows 95. This problem does not occur with the
	Toshiba (OEM) version of Windows 95.
	
	This behavior has been observed with Toshiba Tecra 700-series laptop computers,
	and may also occur with Toshiba Satellite Pro 400-series, 2150- series, and
	2100-series laptop computers.
	
	It is possible that this behavior may also occur with laptop computers from other
	manufacturers.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem does not affect all floppy drives in a particular model of
	computer. Failure to reproduce this symptom generally indicates that the
	particular floppy drive tested is not susceptible to this problem. It is not
	possible to determine, without testing, whether a particular laptop computer
	will encounter this problem. Further, it is possible that laptop computers other
	than those mentioned above may contain floppy drives that are susceptible to
	this problem.
	
	The updated version of the Hsflop.pdr file is included with the Toshiba OEM
	version of Windows 95. This update should be required only by Toshiba customers
	who install the upgrade version of Windows 95 on one of the affected computers.
	
	An update is also available from Toshiba Technical Support and via Toshiba's BBS
	and other electronic support services (such as Toshiba's Web site) as
	HSFLOP.EXE, a self-extracting compressed file. For example, you can download the
	HSFLOP.EXE file from the following Toshiba Web site:
	
	  http://www.toshiba.com/tais/csd/support/files/win9drv.htm
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw diskmem win95 kbHardware kbDiskMemory kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
