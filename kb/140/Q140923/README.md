---
layout: page
title: "Q140923: SMS Windows NT Client Terminates Due to Heap Error"
permalink: /kb/140/Q140923/
---

## Q140923: SMS Windows NT Client Terminates Due to Heap Error

	Article: Q140923
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Systems Management Server Windows NT client (CLI_NT.EXE) terminates due to a
	heap error. This occurs only when there is no "Load" value in the client
	computer's registry. That is, in the HKEY_CURRENT_USER subtree, if the key
	value:
	
	  Software/Microsoft/Windows NT/CurrentVersion/Windows/Load
	
	exists, but is blank, the problem does not show up. However, if the value,
	"Load," does not exist, the heap error occurs.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, CLI_NT.EXE, CLI_DOS.EXE, and CLI_OS2.EXE, to
	correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
