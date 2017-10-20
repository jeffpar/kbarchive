---
layout: page
title: "Q88841: Windows Err Msg: An Old Version of UNIDRV.DLL Is Installed..."
permalink: /kb/088/Q88841/
---

## Q88841: Windows Err Msg: An Old Version of UNIDRV.DLL Is Installed...

{% raw %}

	Article: Q88841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Printers icon from the Windows 3.1 Control Panel, and then
	choose the Setup button, Windows may display the following message:
	
	  An old version of UNIDRV.DLL is installed on your system. Your printer
	  requires a newer version. Install the updated UNIDRV.DLL file into your
	  Windows SYSTEM directory.
	
	When you choose OK to dismiss the message, Windows displays the following:
	
	  Control Panel
	
	  Not enough memory available for this task. Quit one or more applications to
	  increase available memory, and then try again.
	
	NOTE: This second message does not accurately describe the problem; ignore this
	message.
	
	CAUSE
	=====
	
	As the first error message indicates, this problem occurs when a printer driver
	does not match the version of UNIDRV.DLL currently installed. This typically
	occurs when you attempt to manually copy an updated printer driver file into the
	Windows SYSTEM or Windows directory, without actually updating the UNIDRV.DLL
	and driver file through Control Panel.
	
	RESOLUTION
	==========
	
	To correct the problem:
	
	1. Reinstall the printer driver through Control Panel:
	
	  a. Choose the Printers icon, and choose the Add button.
	
	  b. Select Install Unlisted Or Updated Printer, then choose the Install
	     button.
	
	  c. Type the directory path to the OEMSETUP.INF file for the printer driver
	     and UNIDRV.DLL combination. (This will install the printer driver as well
	     as its associated UNIDRV.DLL.
	
	  - or -
	
	2. Copy the UNIDRV.DLL and UNIDRV.HLP files, which came with the updated printer
	  driver, into your WINDOWS\SYSTEM directory.
	
	3. If UNIDRV.DLL exists in the C:\WINDOWS directory, remove it. UNIDRV.DLL
	  should reside in the WINDOWS\SYSTEM directory.
	
	Additional query words: 3.10 3.11 cpanel unidrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
