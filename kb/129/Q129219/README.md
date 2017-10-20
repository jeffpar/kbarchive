---
layout: page
title: "Q129219: PC-NFSpro 1.1 Not Supported in Windows 95"
permalink: /kb/129/Q129219/
---

## Q129219: PC-NFSpro 1.1 Not Supported in Windows 95

{% raw %}

	Article: Q129219
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot install PC-NFSpro 1.1 from Sun Microsystems in Windows 95. If you
	were running PC-NFSpro before you installed Windows 95, you can no longer run
	PC-NFSpro after installing Windows 95.
	
	CAUSE
	=====
	
	The .INF file included with PC-NFSpro 1.1 (OEM_NFSW.INF) is not in the correct
	format for a Windows 95 OEMSETUP.INF file. Therefore, Windows 95 cannot install
	PC-NFSpro as an additional network client.
	
	In addition, PC-NFSpro is not a supported network in Windows 95. Windows 95 does
	not have the ability to detect the presence of this network during Setup. When
	you install Windows 95 over an installation of Windows for Workgroups 3.x with
	PC-NFSpro 1.1 installed as a primary or secondary network, Windows 95 does not
	recognize PC-NFSpro as an installed network, essentially disabling PC-NFSpro.
	
	RESOLUTION
	==========
	
	Call Sun Microsystems and obtain part number #102467-01. This is an updated
	PC-NFSpro .INF file.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, please contact Sun Microsystems.
	
	MORE INFORMATION
	================
	
	PC-NFSpro is manufactured by Sun Microsystems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: sunsoft sunselect
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
