---
layout: page
title: "Q124640: Windows NT 3.5 Setup Err Msg: Setup has recognized the..."
permalink: /kb/124/Q124640/
---

## Q124640: Windows NT 3.5 Setup Err Msg: Setup has recognized the...

{% raw %}

	Article: Q124640
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT from a compact disc using WINNT.EXE (with or without
	the /B switch), the following message appears during the search for mass storage
	devices:
	
	  Setup has recognized the following mass storage devices in your computer:
	  <none>.
	
	If you are running WINNT without any parameters, and you choose Continue, Setup
	continues and then asks for disk number four. Because disk number four does not
	exist, Setup cannot continue.
	
	If you are running WINNT /B, and you choose Continue, Setup completes. When you
	try to install the Future Domain 800-series device driver the following error
	message appears:
	
	  Error: Unable to open the file D:\i386\fd8xx.sys.
	
	CAUSE
	=====
	
	This problem occurs when the J3 jumpers on your STB Powergraph video accelerator
	card is in the 16-bit BIOS position.
	
	RESOLUTION
	==========
	
	Set the J3 jumper to the 8-bit BIOS position. If you were running WINNT without
	any parameters to install Windows NT, you should now be able to reinstall it.
	
	For more information, contact STB Systems Inc. at (800) 234-4334.
	
	MORE INFORMATION
	================
	
	The J3 jumper is used to configure the card for 8-bit or 16-bit BIOS data
	transfers. The 16-bit BIOS setting is designed for real-mode (MS-DOS) software.
	The 8-bit BIOS setting is designed for non-real mode software.
	
	The STB product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt 8xx 4 #4 cd cdrom cd-rom unconf power graph adapter
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
