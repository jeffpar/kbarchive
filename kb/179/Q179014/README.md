---
layout: page
title: "Q179014: XFOR: Characters Are Stripped on Fixed File Sent from PROFS"
permalink: /kb/179/Q179014/
---

## Q179014: XFOR: Characters Are Stripped on Fixed File Sent from PROFS

	Article: Q179014
	Product(s): Microsoft Exchange
	Version(s): 3.2,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when a fixed format file in CMS has been put into the PROFS
	"store" and is sent to Exchange Server by way of the LinkAge OV/VM (PROFS)
	connector. This results in an attachment in which the first two characters of
	the first line are dropped. In the rest of the lines, the first two characters
	of each line are appended to the end of the previous line.
	
	CAUSE
	=====
	
	The LinkAge OV/VM Connector incorrectly interpreted the first 2 bytes of the
	attachment as length which results in these bytes (and characters) being
	stripped from the attachment
	
	RESOLUTION
	==========
	
	Apply the fix described below. The LinkAge OV/VM connector was fixed to
	correctly interpret the file and length bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: IBM HOST SENDFILE
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 3.2,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
