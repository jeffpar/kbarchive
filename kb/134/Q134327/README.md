---
layout: page
title: "Q134327: Program Group Control Tasks During Startup"
permalink: /kb/134/Q134327/
---

## Q134327: Program Group Control Tasks During Startup

	Article: Q134327
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the tasks Program Group Control (PGC) performs during
	startup.
	
	MORE INFORMATION
	================
	
	PGC checks the following during startup:
	
	1. Detect new shared applications and make them available.
	
	  During PGC startup, PGC checks the NAD database for any new shared
	  applications and program groups. PGC updates its internal data structures in
	  the registry for the new items.
	
	2. Detect obsolete shared applications and remove them.
	
	  If the NADNAME (shared application ID) is no longer valid (there is no
	  corresponding entry in the NAD database), then the application is removed
	  from PGC internal data structures. If the NADNAME is valid, but refers to a
	  different application, then the internal entry is obsolete, and needs to be
	  removed also.
	
	3. Remove references to shared applications for users who do not have permission
	  for them.
	
	  If the user does not have permission for an application, the deinstall program
	  specified in the PDF is run to remove it from the "insert object" dialog
	  menus. Likewise, when it is discovered that the user does have permission for
	  an application that was previously denied, the application objects is placed
	  back into the "insert object" dialogs.
	
	4. Make and update program groups and icons for the shared applications.
	
	  Every time that PGC starts up, it verifies all the program groups and icons
	  which have been assigned. If there are any new groups or items, they are
	  added. If items are removed, the corresponding groups and items are deleted.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
