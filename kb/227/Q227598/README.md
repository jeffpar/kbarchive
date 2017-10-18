---
layout: page
title: "Q227598: Input Devices Do Not Work After Installing Windows Using SMS 1.2"
permalink: kb/227/Q227598/
---

## Q227598: Input Devices Do Not Work After Installing Windows Using SMS 1.2

	Article: Q227598
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 25-JUL-2001
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 2000 using Systems Management Server 1.2 and you
	restart the computer at the end of the installation, the pointing device (mouse)
	and keyboard may stop functioning.
	
	CAUSE
	=====
	
	This issue can occur because of the Kbstuff.sys driver that is installed by
	Systems Management Server 1.2.
	
	STATUS
	======
	
	This issue does not occur using Systems Management Server 2.0 or later.
	
	Additional query words: trackball pointer glide pad
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
