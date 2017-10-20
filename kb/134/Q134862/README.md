---
layout: page
title: "Q134862: Compressed Drive Not Mounted When Windows 95 Restarts"
permalink: /kb/134/Q134862/
---

## Q134862: Compressed Drive Not Mounted When Windows 95 Restarts

{% raw %}

	Article: Q134862
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a new compressed drive, or mount an existing compressed drive, on
	a non-removable media drive, and you then perform an operation that causes
	Windows 95 to restart, the compressed drive is not mounted after Windows 95
	restarts. If you restart the computer, the compressed drive is mounted.
	
	CAUSE
	=====
	
	The protected-mode DriveSpace driver automatically mounts only compressed drives
	located on the following media:
	
	- Removable media drives.
	
	- Drives that cannot be accessed in real mode (for example, PCMCIA hard disks
	  for which protected-mode drivers are loaded).
	
	- Drives that were originally mounted by the real-mode DriveSpace driver as the
	  computer booted.
	
	The new or existing compressed drive was not mounted by the real-mode DriveSpace
	driver when the computer started, so it is not automatically mounted by the
	protected-mode DriveSpace driver as Windows 95 restarts.
	
	RESOLUTION
	==========
	
	To mount the compressed drive, restart the computer.
	
	MORE INFORMATION
	================
	
	A compressed drive that is located on a non-removable media drive is typically
	first mounted by the real-mode DriveSpace driver as the computer starts. As
	Windows 95 starts, the protected-mode DriveSpace driver inherits the currently
	mounted compressed drives, and automatically mounts any removable media or
	protected-mode-only drives currently in the system.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
