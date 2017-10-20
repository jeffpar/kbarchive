---
layout: page
title: "Q185710: STOP 0x3F Error When SFGW Fails to Create DBCS Folder"
permalink: /kb/185/Q185710/
---

## Q185710: STOP 0x3F Error When SFGW Fails to Create DBCS Folder

{% raw %}

	Article: Q185710
	Product(s): Microsoft SNA Server
	Version(s): Windows:4.0
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a double-byte character set (DBCS) directory on the AS/400 using
	the Shared Folders Gateway (SFGW) Service, the computer may display the
	following blue screen STOP error message:
	
	  STOP:0x0000003F (0x00000000, 0x00000010, 0x0000000A, 0x0000522B)
	  NO_MORE_SYSTEM_PTES
	
	CAUSE
	=====
	
	When the CreateDirectory() call fails, the SFGW Service completes the same I/O
	request packet (IRP) twice, which causes the blue screen STOP error to occur.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : Windows:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
