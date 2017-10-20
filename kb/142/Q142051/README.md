---
layout: page
title: "Q142051: Panasonic LF7304 Optical Juke Box Setup Failure"
permalink: /kb/142/Q142051/
---

## Q142051: Panasonic LF7304 Optical Juke Box Setup Failure

{% raw %}

	Article: Q142051
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
	
	On your computer running Windows NT with a Panasonic LF7304 Optical disk
	installed on a SCSI adapter, various error messages can appear. For example, the
	drive may not be recognized as having any partitions, may get CRC errors, or you
	may receive error messages from Disk Administrator.
	
	CAUSE
	=====
	
	This drive has a proprietary format from the manufacturer, which you need to
	remove prior to using it with Windows NT.
	
	RESOLUTION
	==========
	
	To prepare the drive for operation as a secondary drive on a system that is
	running Windows NT already on another drive:
	
	1. Boot to MS-DOS and perform a low level format on the Panasonic LF7304 Optical
	  disk drive.
	
	2. Boot Windows NT and run Disk Administrator.
	
	  The drive appears as "RAW".
	
	3. Format the drive with Disk Administrator.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
