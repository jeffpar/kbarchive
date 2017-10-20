---
layout: page
title: "Q139277: Windows NT Does Not Recognize Wearnes CDD-120 CD-ROM Drive"
permalink: /kb/139/Q139277/
---

## Q139277: Windows NT Does Not Recognize Wearnes CDD-120 CD-ROM Drive

{% raw %}

	Article: Q139277
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the IDE CD-ROM (ATAPI 1.2) driver, Windows NT does not
	recognize a Wearnes CDD-120 CD-ROM drive even though the Windows NT Hardware
	Compatibility List (HCL) lists this drive as a supported ATAPI 1.2 compliant IDE
	CD-ROM drive.
	
	CAUSE
	=====
	
	The Wearnes CDD-120 CD-ROM drive with Firmware versions 1.0 or 2.1 is not
	supported in Windows NT.
	
	You can find the (http://support.microsoft.com/download/support/mslfiles/the)
	firmware version number on the white label of the power connector. For example,
	x.xx in the following number represents the firmware version:
	
	  7031P-x.xx
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade your CD-ROM drive to one of the following
	firmware versions:
	
	  1.1H
	  1.1J
	  2.1A
	  2.1B
	
	For more information, contact Wearnes Technical Support at (408) 432-1887.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
