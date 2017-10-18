---
layout: page
title: "Q156784: SMS: Appstart Corrupts New Process Environment on Windows NT"
permalink: kb/156/Q156784/
---

## Q156784: SMS: Appstart Corrupts New Process Environment on Windows NT

	Article: Q156784
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A Systems Management Server shared application started with Appstart.exe
	(Appsta32.exe) may have problems where dependencies exist on environment
	variables within the new process. If the current environment variable size is
	greater than 1,146 bytes, the environment variables of the new process can
	become corrupt. This can cause problems for applications that depend on the
	environment variables.
	
	CAUSE
	=====
	
	A problem exists in the 32-bit APPSTART component of SMS which causes the new
	environment passed to a new PGC application process to be corrupted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms appsta32 appstart
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
