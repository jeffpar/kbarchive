---
layout: page
title: "Q138241: PCM Reports Failed Job As Complete"
permalink: kb/138/Q138241/
---

## Q138241: PCM Reports Failed Job As Complete

	Article: Q138241
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	AT a site containing both a NetWare domain and a Windows NT domain, the package
	command manager (PCM) reports failed job as complete.
	
	CAUSE
	=====
	
	This problem is caused by timing conditions. PCM writes the results file (.SNI)
	before the MIF file (.PCK). If the despooler wakes up between the time the .SNI
	file is written and the time that the .PCK file is written, it does not look for
	a MIF, and the status in the MIF file is ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsmS sms
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
