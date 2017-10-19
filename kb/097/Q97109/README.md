---
layout: page
title: "Q97109: Defrag Sees Several Megabytes of Unmovable Blocks"
permalink: /kb/097/Q97109/
---

## Q97109: Defrag Sees Several Megabytes of Unmovable Blocks

	Article: Q97109
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Symantec's Norton Utilities Erase Protect (EP.EXE) or Norton
	Desktop for Windows (NDW) SmartErase, Microsoft Defragmenter (Defrag) sees many
	files as unmovable. (Clusters of these files are graphically represented by the
	letter X).
	
	CAUSE
	=====
	
	Erase Protect and Smart Erase are delete-tracking programs that temporarily
	store deleted files in a hidden directory called SMARTCAN. Defrag sees the files
	in the hidden directory as unmovable.
	
	WORKAROUND
	==========
	
	To work around this problem, empty the SMARTCAN directory before you run Defrag.
	
	MORE INFORMATION
	================
	
	For more information on Erase Protect, SmartErase, and emptying the SMARTCAN
	directory, refer to your Norton Utilities or Norton Desktop for Windows
	documentation.
	
	Norton Utilities Erase Protect and Norton Desktop for Windows SmartErase are
	manufactured by Symantec, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 6.22 6.00 third party third-party 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
