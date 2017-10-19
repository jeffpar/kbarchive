---
layout: page
title: "Q177957: XFOR: Messages with Non-ANSI Characters Arrive with Garbage"
permalink: /kb/177/Q177957/
---

## Q177957: XFOR: Messages with Non-ANSI Characters Arrive with Garbage

	Article: Q177957
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	E-mail messages arriving through the Internet Mail Service (US English) that
	contain non-ANSI characters such as DBCS (Japanese, Korean, and so on) may
	arrive with corruption or unusable characters such as squares or boxes in place
	of the originally intended characters. This can occur in messages using RTF or
	HTML objects as attachments.
	
	CAUSE
	=====
	
	The predefined RTF font table is always set to an ANSI character set. This
	causes non-ANSI characters to be converted into unusable or garbage characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Additional code added to Exchange Server version 5.5 allows an extra font in the
	RTF conversion table that eliminates this problem.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
