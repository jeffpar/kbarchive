---
layout: page
title: "Q226890: SMS: Cannot Delete Files on a CD-ROM Drive"
permalink: kb/226/Q226890/
---

## Q226890: SMS: Cannot Delete Files on a CD-ROM Drive

	Article: Q226890
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS), if you attempt to delete a file on a CD-ROM
	drive on a client computer when connected through Remote Tools - File Transfer,
	the remote control screen appears to stop responding (hang) for up to five
	minutes. After this time, you receive the following error message:
	
	  Could not delete '<filename>' the file may be read-only or in use.
	
	Click OK to close the error message.
	
	Your computer appears to stop responding because files cannot be deleted from
	CD-ROMs. After SMS gives up the attempt and displays the error message, normal
	control is returned to the user. This behavior is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
