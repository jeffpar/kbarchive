---
layout: page
title: "Q120356: Winstone 94 Err Msg: An Error Has Occurred in Your Program..."
permalink: /kb/120/Q120356/
---

## Q120356: Winstone 94 Err Msg: An Error Has Occurred in Your Program...

{% raw %}

	Article: Q120356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint kbtool win95 appscomp kbPrinting kbAppCompatibility
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the benchmark program Winstone 94, it reports the following error
	during the WordPerfect tests:
	
	  WPWINFIL
	
	  An error has occurred in your program. To keep working anyway, click ignore
	  and save your work in a new file. To quit this program, click Close. You will
	  lose information you entered since your last save.
	
	Clicking Close results in another error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists contact the program vendor.
	
	Choosing to shut down causes the system to stop responding (hang). You must turn
	off the computer and then restart it.
	
	CAUSE
	=====
	
	During tests, these errors occur when Winstone replaces the Windows 95 Hppcl.drv
	and Unidrv.dll files with older Windows 3.1 versions of these files.
	
	RESOLUTION
	==========
	
	Copy the Hppcl.drv and Unidrv.dll files from the Windows 95 System folder to the
	Winstone\Windows\System folder.
	
	For information about how to copy a file, click Start, click Help, click the
	Index tab, type "copying" (without the quotation marks), and then double-click
	the "Copying files" topic.
	
	MORE INFORMATION
	================
	
	Winstone 94 is the sole Microsoft-certified benchmark for the testing of
	industry-standard computers running Windows 3.1-based programs.
	
	Winstone 94 is manufactured by Ziff-Davis Publishing, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: word perfect wp ziff davis err msg 3rdparty
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint kbtool win95 appscomp kbPrinting kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
