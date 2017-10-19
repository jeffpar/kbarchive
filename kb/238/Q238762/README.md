---
layout: page
title: "Q238762: Software Inventory Creation Date Is Incorrect in SMS Database"
permalink: /kb/238/Q238762/
---

## Q238762: Software Inventory Creation Date Is Incorrect in SMS Database

	Article: Q238762
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory kbsms200sp2fix
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) Resource Explorer may display a created date for
	an inventoried file that is different from the created date listed in the file's
	properties in Windows Explorer. This problem occurs for two reasons:
	
	- The software inventory agent (sinv) did not use the file Creation Date as a
	  key property. Therefore on a single client, files with the same name but with
	  different created time stamps, were treated as the same and were not reported
	  separately.
	
	- The stored procedure (sp_SoftwareInventory) that inserts software inventory
	  information into the SMS database also did not use Creation Date as a key
	  property. As a result, the time stamp that became associated with the file
	  was simply the time stamp of the last reported instance across all clients.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms sinv sinvproc
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
