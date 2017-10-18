---
layout: page
title: "Q177322: XADM: -1022 or -1026 Error Verifying Consistency of Databases"
permalink: kb/177/Q177322/
---

## Q177322: XADM: -1022 or -1026 Error Verifying Consistency of Databases

	Article: Q177322
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to use the Edbutil.exe program with the /C switch to verify the
	consistency of the Dir.edb or Priv.edb file, a -1022 error indicating that a
	disk I/O error has occurred may be displayed. A -1026 error indicating that a
	record has exceeded the maximum size may be displayed instead of a -1022 error
	when you attempt to verify the consistency of the Priv.edb file.
	
	If you use the Edbutil.exe program with the /D, /DS, and /R switches to
	defragment the Dir.edb or Priv.edb file, the defragmentation process finishes
	successfully. However, if you then attempt to verify the consistency of the
	file, you experience the symptoms described above again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
