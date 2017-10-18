---
layout: page
title: "Q160689: Systems Management Server Query Appears to Lose Data"
permalink: kb/160/Q160689/
---

## Q160689: Systems Management Server Query Appears to Lose Data

	Article: Q160689
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create large queries based on the Identification table or machine name,
	there appears to be a size limitation and/or file locking behavior that leads to
	lost data, if the query is administered or added to by more than one computer
	running Systems Management Server Administrator at the same time.
	
	WORKAROUND
	==========
	
	To work around this problem, create or administer large queries only on one
	Administrator console at a time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: missing disappear gone vanish
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
