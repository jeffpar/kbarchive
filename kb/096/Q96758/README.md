---
layout: page
title: "Q96758: Using MS-DOS 6 with DNA Lanmarc Network Software"
permalink: /kb/096/Q96758/
---

## Q96758: Using MS-DOS 6 with DNA Lanmarc Network Software

{% raw %}

	Article: Q96758
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to DNA Lanmarc, DNA Lanmarc Network software can be used with MS-DOS
	6.0 subject to the conditions described in this article.
	
	MORE INFORMATION
	================
	
	- You must use DNA Lanmarc Network version 6.0 or later. If you use a version
	  earlier than 6.0, you receive the following error message:
	
	  Error #839 Incompatible Version
	
	- You must disable the network drivers in the CONFIG.SYS file before you run
	  MS-DOS 6 Upgrade Setup. To do this, remark out the following lines.
	
	     rem device=\lanmarc\master.sys
	     rem device=\lanmarc\print.sys
	     rem device=\lanmarc\spool.sys
	
	  After you remark out these device drivers, restart the computer and run Setup.
	  If you plan to install DoubleSpace, do so before you remove the REM
	  statements and restart the computer to regain your network functionality.
	
	- When you run DoubleSpace, CHKDSK, or Defragmenter, you must start your
	  computer without loading the previously mentioned DNA Lanmarc network
	  drivers. To do this, restart your computer and press the F8 function key when
	  "Starting MS-DOS..." is displayed. You can then step through your CONFIG.SYS
	  file, bypassing the network device drivers.
	
	  Some DoubleSpace features (such as LIST, CHKDSK, MOUNT, and UNMOUNT) do not
	  work correctly unless the network is disabled.
	
	  NOTE: DoubleSpace does not compress some of the DNA Lanmarc Network files.
	  These files remain on the uncompressed host drive.
	
	The DNA Lanmarc product included in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
