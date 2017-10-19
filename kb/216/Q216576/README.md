---
layout: page
title: "Q216576: Err Msg: Setup Was Unable to Write to the Floppy Disk in..."
permalink: /kb/216/Q216576/
---

## Q216576: Err Msg: Setup Was Unable to Write to the Floppy Disk in...

	Article: Q216576
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup using "winnt32.exe /b", you may receive the following error
	message:
	
	  Setup was unable to write to the floppy disk in drive A:, the floppy disk may
	  be damaged. Try a different floppy disk. Click OK. Setup will prompt you for
	  a different floppy disk.
	
	If you then insert another floppy disk, you may receive the same error message,
	and Setup may be unable to write to any disk you provide.
	
	CAUSE
	=====
	
	This issue can occur because when the /b Setup switch is used, Winnt32.exe
	copies all setup files to the hard disk so Setup can run without using the boot
	disks. The setup files need to be changed to reference the hard disk as the
	source path, not the floppy drive.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the 3 boot disks that come with Small Business Server
	to install the product.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: smallbiz bof
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	
	=============================================================================
	
