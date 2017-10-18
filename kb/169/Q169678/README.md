---
layout: page
title: "Q169678: XADM: IMS and IS Use Quoted-Printable Encoding For MIME/JIS"
permalink: kb/169/Q169678/
---

## Q169678: XADM: IMS and IS Use Quoted-Printable Encoding For MIME/JIS

	Article: Q169678
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Service (IMS) and Information Store (IS)
	use Quoted-Printable encoding for MIME/JIS (Japanese Industry Standards, code
	set for Japanese character) configuration, but some mail readers don't support
	Quoted-Printable encoding and the Japanese characters are not displayed
	correctly.
	
	
	
	MORE INFORMATION
	================
	
	Support for Quoted-Printable encoding is defined in the RFC and Microsoft
	Exchange Server is supporting this correctly. However, to enable inter-
	operability between Microsoft Exchange Server and mail readers that don't
	support Quoted-Printable encoding, Microsoft has created the fix below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: JPN DBCS QP
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
