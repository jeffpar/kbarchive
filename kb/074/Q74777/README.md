---
layout: page
title: "Q74777: Top Producer Hangs in MS-DOS"
permalink: /kb/074/Q74777/
---

## Q74777: Top Producer Hangs in MS-DOS

{% raw %}

	Article: Q74777
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Top Producer, a real estate package written by Top Producer Systems using
	Revelation Technologies, may stop responding (hang) under MS-DOS 6, 6.2, or
	6.22.
	
	CAUSE
	=====
	
	According to Top Producer Technical Support, Top Producer has problems when the
	authorization transfer signature is placed on a DoubleSpace- or
	DriveSpace-compressed drive.
	
	RESOLUTION
	==========
	
	Top Producer recommends that the authorization signature be moved from the
	compressed drive to the installation floppy disk and then to the uncompressed
	host drive. Top Producer supplies free of charge a utility called EZ-Move that
	performs this transfer for you. This limitation also applies to Top Producer
	version 1.0 for Windows.
	
	MORE INFORMATION
	================
	
	The MS-DOS-based version of Top Producer version 4.2 relies on BACKUP.COM from
	MS-DOS versions 5.0 and earlier. Top Producer provides a workaround utility to
	supply BACKUP functionality.
	
	Top Producer is manufactured by Top Producer Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: drvspace 5.00 5.00a 6.00 6.20 3rdparty double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
