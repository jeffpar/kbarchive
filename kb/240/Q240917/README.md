---
layout: page
title: "Q240917: XIMS: Relocating the Directories Used by SMTP Service"
permalink: /kb/240/Q240917/
---

## Q240917: XIMS: Relocating the Directories Used by SMTP Service

	Article: Q240917
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbiis400
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to change the location of the directories that are used by the
	Windows NT version 4.0 Option Pack SMTP mail service. This article provides a
	procedure to make that change.
	
	MORE INFORMATION
	================
	
	Make sure that you stop the SMTP service before you perform this procedure. To
	change the location of the directories, duplicate the mail service structure on
	the drive or location that you want to use, and then modify the metabase by
	running the following command line entries:
	
	- adsutil.vbs set smtpsvc/1/dropdirectory "<drive
	  letter>:\inetpub\mailroot\drop"
	
	- adsutil.vbs set smtpsvc/1badmaildirectory "<drive
	  letter>:\inetpub\mailroot\badmail"
	
	- adsutil.vbs set pickupdirectory "<drive
	  letter>:\inetpub\mailroot\pickup"
	
	- adsutil.vbs set queuedirectory "<drive letter>:\inetpub\mailroot\queue"
	
	After you perform this procedure, the existing directories are moved to a new
	location. Messages that are queued are processed when you restart the SMTP
	service.
	
	Additional query words: smtpsvc
	
	======================================================================
	Keywords          : kbiis400 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
