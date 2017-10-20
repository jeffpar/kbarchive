---
layout: page
title: "Q108627: Writer 1: Macintosh Setup Error Says to Use CHKDSK"
permalink: /kb/108/Q108627/
---

## Q108627: Writer 1: Macintosh Setup Error Says to Use CHKDSK

{% raw %}

	Article: Q108627
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an error occurs while you are installing Creative Writer on the Macintosh,
	you may receive the following incorrect error message:
	
	  File copy operation failed. Incorrect number of bytes written to disk. Source
	  file or destination disk may be corrupted.
	  Use CHKDSK.
	
	There is no CHKDSK utility on the Macintosh. This is an MS-DOS utility.
	
	Microsoft has confirmed this to be a problem in Creative Writer version 1.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	This problem usually occurs because your floppy disk is damaged or corrupted. To
	obtain new Creative Writer floppy disks, call the Microsoft Sales Information
	Center at (800) 426-9400.
	
	MORE INFORMATION
	================
	
	After copying a file, Setup checks to see if the uncompressed size of the file
	on the destination disk is the same as the size specified in the .INF file. If
	the file is not the same size, the Setup program generates this error message.
	
	Additional query words: 1.00 kids install installation checkdisk check disk bad media mac mczee mskids
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter100Mac
	Version           : MACINTOSH:1.0
	
	=============================================================================
	

{% endraw %}
