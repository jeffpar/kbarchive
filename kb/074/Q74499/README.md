---
layout: page
title: "Q74499: Future Domain SCSI Controllers Require BIOS Upgrade"
permalink: /kb/074/Q74499/
---

## Q74499: Future Domain SCSI Controllers Require BIOS Upgrade

{% raw %}

	Article: Q74499
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully install Microsoft MS-DOS version 5.0 on a system containing a
	Future Domain SCSI controller card, you must obtain a ROM BIOS upgrade for the
	card.
	
	MORE INFORMATION
	================
	
	The following information was obtained from Future Domain technical support:
	
	- Future Domain 8-bit SCSI controllers require ROM BIOS version 7.0.
	
	- Future Domain 16-bit SCSI controllers require ROM BIOS version 2.0.
	
	Without the correct ROM BIOS version, Setup will not be able to see the hard
	disk. The version of ROM BIOS for the controller card is displayed during the
	boot sequence.
	
	
	To obtain a ROM BIOS upgrade or further technical support from Future Domain,
	please contact FDC Technical Support.
	
	Before contacting FDC, please have the following information available:
	
	- Model of the FDC host adapter you are installing
	
	- Version of the FDC host adapter BIOS
	
	- FDC host adapter jumper settings
	
	- Version of the FDC software being used
	
	- Exact error message as shown on the screen
	
	- Stage of installation where error message occured.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	

{% endraw %}
