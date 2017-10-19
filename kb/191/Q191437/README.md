---
layout: page
title: "Q191437: SMS: NULL Data Values Reported Differently by INVDOS &amp; INVWIN32"
permalink: /kb/191/Q191437/
---

## Q191437: SMS: NULL Data Values Reported Differently by INVDOS &amp; INVWIN32

	Article: Q191437
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The data reported for common properties by INVWIN32 does not match the data
	reported by INVDOS.
	
	INVDOS reports None if there is no data for certain fields and INVWIN32 reports a
	blank value if there is no data for certain fields.
	
	There are certain properties that differ:
	
	  Files Not Installed
	  System Files Not Modified
	  Failed Hardware Checks
	
	The differing methods of reporting null data may lead to difficulties generating
	queries in the Systems Management Server Administration User interface.
	
	Queries to return all data must include both None and a space, for example:
	
	  'None'
	
	  -or-
	
	  ' '
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms SP SP4
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
