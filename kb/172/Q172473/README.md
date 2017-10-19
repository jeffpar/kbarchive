---
layout: page
title: "Q172473: Disk Defragmenter or ScanDisk Loops Continuously"
permalink: /kb/172/Q172473/
---

## Q172473: Disk Defragmenter or ScanDisk Loops Continuously

	Article: Q172473
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ScanDisk or Disk Defragmenter, the operation may restart when only
	a small percentage of the operation is finished and then continue to restart
	repeatedly, or the operation may take a very long time.
	
	CAUSE
	=====
	
	This behavior can occur if Hewlett-Packard ScanJet Button Manager is running in
	the background.
	
	
	RESOLUTION
	==========
	
	To work around this issue, quit ScanJet Button Manager before you run ScanDisk
	or Disk Defragmenter. To quit ScanJet Button Manager, press CTRL+ALT+DELETE to
	open the Close Program dialog box, click Hpsjbmgr in the list of running
	programs, and then click End Task.
	
	
	MORE INFORMATION
	================
	
	Disabling ScanJet Button Manager does not disable scanning, but it does disable
	one-touch scanning. For more information about ScanJet Button Manager, please
	contact Hewlett-Packard.
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: slow hang finish
	
	======================================================================
	Keywords          : kb3rdparty kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
