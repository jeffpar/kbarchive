---
layout: page
title: "Q121422: How the UseMRCI1= Switch in DRVSPACE.INI Works in MS-DOS 6.22"
permalink: /kb/121/Q121422/
---

## Q121422: How the UseMRCI1= Switch in DRVSPACE.INI Works in MS-DOS 6.22

{% raw %}

	Article: Q121422
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS version 6.22 DRVSPACE.INI file supports all of the switches supported
	by the MS-DOS versions 6.0 and 6.2 DBLSPACE.INI file, plus the following
	additional switch:
	
	  UseMRCI1=
	
	MORE INFORMATION
	================
	
	This switch can be used as follows:
	
	- UseMRCI1=0
	
	  If UseMRCI1=0, DRVSPACE.BIN does not look for DBLSPACE.BIN to load MRCI 1d
	  (DRVSPACE.MR1) for reading DoubleSpace drives.
	
	-or-
	
	- UseMRCI1=1
	
	  If UseMRCI1=1, DRVSPACE.BIN tries to load the MRCI 1d.
	
	The default value is 1. However, when this setting is 1, the MRCI 1d still does
	not load unless the valid key file (DRVSPACE.MR1) is found.
	
	To change MRCI 1d support:
	
	- Manually set UseMRCI1= to either 1 or 0 in the DRVSPACE.INI file.
	
	-or-
	
	- From the Tools menu in the DriveSpace interface, choose Options, and select
	  the Read DoubleSpace Drives check box.
	
	-or-
	
	- Delete the DRVSPACE.MR1 key file on the boot drive (or copy to the boot
	  drive).
	
	Additional query words: 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
