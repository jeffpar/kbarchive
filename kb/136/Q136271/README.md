---
layout: page
title: "Q136271: Windows 95 Does Not Detect AMI Fast SCSI II Controller"
permalink: /kb/136/Q136271/
---

## Q136271: Windows 95 Does Not Detect AMI Fast SCSI II Controller

{% raw %}

	Article: Q136271
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 does not detect an AMI Fast SCSI II controller in your computer.
	Instead, it installs a Buslogic driver.
	
	CAUSE
	=====
	
	Windows 95 does not include an AMI SCSI controller driver. The AMI Fast SCSI
	Series 7000 chip set on these controllers is backward compatible with Buslogic
	and Adaptec controllers. However, using either of these drivers may cause the
	floppy disk drive(s) not to work.
	
	RESOLUTION
	==========
	
	You may be able to use the Microsoft Windows NT driver for the AMI Fast SCSI
	controller. To do so, follow these steps:
	
	1. Obtain the Windows NT driver for the controller from AMI's BBS. The driver
	  file is currently named Ami0nt.sys.
	
	2. Rename this file to Buslogic.mpd or Aha154x.mpd.
	
	3. Copy the file to the Windows\System\Iosubsys folder.
	
	4. Refer to the controller's documentation for further information about setting
	  up the Windows NT driver for the controller.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
