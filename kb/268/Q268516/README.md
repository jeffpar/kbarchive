---
layout: page
title: "Q268516: STOP C000026C Error Messages Appear When Trying to Remove Extra"
permalink: /kb/268/Q268516/
---

## Q268516: STOP C000026C Error Messages Appear When Trying to Remove Extra

{% raw %}

	Article: Q268516
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remove an IDE hard disk drive, you may receive the following
	error message:
	
	  STOP c000026c unknown hard error %systemroot%\system32\drivers\atapi.sys
	  c0000221
	
	If you remove the power from the drive and then restart the computer, you may
	receive the following error message:
	
	  STOP c000026c unknown hard error %systemroot%\system32\drivers\diskdump.sys
	  c0000221
	
	CAUSE
	=====
	
	This behavior can occur if the drive you are attempting to remove contains a
	paging file.
	
	RESOLUTION
	==========
	
	To resolve this behavior, move the paging file from the drive that you are
	trying to remove to another drive, and then restart the computer.
	
	MORE INFORMATION
	================
	
	1. In Control Panel, double-click System, and then click Performance.
	
	2. Click Change and then, in the Drives list box, click the logical drive where
	  you will move the paging file.
	
	3. In the Initial Size (MB) box, type the initial size of the paging file.
	  The recommended minimum size of the paging file is shown in the Total Paging
	  File Size for All Drives area. Set the minimum size of the paging file to be
	  greater than or equal to the recommended minimum size. The minimum allowable
	  size of the paging file is 2 MB.
	
	4. In the Maximum Size (MB) box, type the maximum size of the paging file, and
	  then click Set.
	  The size of the new paging file appears next to the selected drive in the
	  Drives list box, and the size of the paging file in the Total Paging File
	  Size for All Drives area is adjusted to reflect the addition of the new
	  paging file.
	
	5. In the Drives list box, select the logical drive that contains the original
	  paging file.
	
	6. In the Initial Size (MB) box, type 0 and then in the Maximum Size (MB) box,
	  type 0.
	
	7. Click Set.
	  The old paging file is cleared from the Drives list box, and the size of the
	  paging file in the Total Paging File Size for All Drives area is adjusted to
	  reflect the removal of the old paging file.
	
	8. Click OK.
	  The System Settings Change dialog box appears, prompting you to restart your
	  computer to enable the new settings.
	
	9. Disconnect the extra drive or drives, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
