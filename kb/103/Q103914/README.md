---
layout: page
title: "Q103914: Err Msg with Adaptec 1542c: Cannot Write to Drive C:"
permalink: /kb/103/Q103914/
---

## Q103914: Err Msg with Adaptec 1542c: Cannot Write to Drive C:

{% raw %}

	Article: Q103914
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows or Windows for Workgroups and use an Adaptec 1542c
	bus-mastering SCSI hard disk controller, you may receive the following error
	message:
	
	  Cannot write to drive C:
	
	CAUSE
	=====
	
	The Adaptec 1542c controller does not need a device driver to function correctly
	in most circumstances. However, on some hardware, it cannot perform necessary
	functions (such as double buffering for direct memory access) without a device
	driver.
	
	WORKAROUND
	==========
	
	According to Adaptec Technical Support, a possible workaround is to use
	ASPI4DOS.SYS, which is normally used only with the 1542b SCSI controller. Load
	this driver in the CONFIG.SYS file as follows:
	
	  DEVICE=C:\DOS\ASPI4DOS.SYS
	
	This line assists the controller in performing its functions.
	
	
	MORE INFORMATION
	================
	
	You can obtain ASPI4DOS.SYS from the Adaptec bulletin board service or Adaptec
	Technical Support.
	
	The Adaptec 1542c Controller is manufactured by Adaptec, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 ASPI4.DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
