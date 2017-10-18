---
layout: page
title: "Q128451: INVDOS: SMSSAFE.TMP is Deleted upon Creation"
permalink: kb/128/Q128451/
---

## Q128451: INVDOS: SMSSAFE.TMP is Deleted upon Creation

	Article: Q128451
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run INVDOS on your computer, your computer hangs.
	
	This symptom occurs only on Systems Management Server clients installed on 16-bit
	operating systems, for example, MS-DOS clients.
	
	CAUSE
	=====
	
	INVDOS deletes SMSSAFE.TMP immediately after creating it.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, INVDOS.EXE, to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
