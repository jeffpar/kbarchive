---
layout: page
title: "Q159304: XADM: Quoted-Printable Is Used in Mixed DBCS/SBCS Messages"
permalink: /kb/159/Q159304/
---

## Q159304: XADM: Quoted-Printable Is Used in Mixed DBCS/SBCS Messages

	Article: Q159304
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server has been modified to use 7-bit Japanese Industry
	Standards (JIS, the code set for Japanese characters) in the MIME/JIS
	configuration. For more information about this fix, please see the following
	Microsoft Knowledge Base article:
	
	  Q169678 XADM: IMS and IS Use Quoted-Printable Encoding For MIME/JIS
	
	However, Quoted-Printable encoding is still used in messages that contain both
	double-byte character set (DBCS) and single-byte character set (SBCS)
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: JPN QP
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
