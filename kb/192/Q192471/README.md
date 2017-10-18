---
layout: page
title: "Q192471: DOCERR: SMS Resource Guide Lists Wrong Option for PREINST"
permalink: kb/192/Q192471/
---

## Q192471: DOCERR: SMS Resource Guide Lists Wrong Option for PREINST

	Article: Q192471
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbdocerr smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 3 of the "Microsoft Systems Management Server Resource Guide" states that
	the PREINST command requires braces {} around the sitecode in the /DEINSTALL and
	/UPGRADE switches. This is incorrect. The correct syntax for the options is
	
	     /DEINSTALL:sitecode
	     /UPGRADE:sitecode
	
	without braces around sitecode.
	
	MORE INFORMATION
	================
	
	The only switch for PREINST that requires braces is the /DELSITE switch to
	indicate which site to delete from the database. For example:
	
	     PREINST /DELSITE:{sitecode,parentsite}
	
	Additional query words: prodsms hman hierarchy manager mgr
	
	======================================================================
	Keywords          : kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
