---
layout: page
title: "Q180791: An ATTACH May Fail When Using Set_CPIC_Side_Information"
permalink: /kb/180/Q180791/
---

## Q180791: An ATTACH May Fail When Using Set_CPIC_Side_Information

	Article: Q180791
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When calling Set_CPIC_Side_Information xcmssi(), the parameter Security_User_Id
	is 8 bytes long but the APPC layer uses 10 bytes to store the same information.
	This means it will carry the last two bytes with a value of 0x0000. In the
	ATTACH (FMH-5) message, trailing spaces (0x40 EBCDIC) will be removed and the
	actual length of the Security_User_Id value will be set on the Information
	Field.
	
	If Security_User_Id is less than 8 bytes, it will be padded with spaces and the
	APPC layer will carry <Security_User_Id> + Space(s) + 0x0000. What this
	means is that the ATTACH will carry all bytes BEFORE the first space and it will
	be accepted by the remote end.
	
	If Security_User_Id is equal to 8 bytes, there won't be any padding and the APPC
	layer will carry <Security_User_Id> + 0x0000. The ATTACH will carry all
	bytes BEFORE the first Space, in that case <Security_User_Id> + 0x0000.
	Because this won't match the user id on the remote end, the ATTACH will fail.
	
	When using the SNA Server Manager to configure CPIC Symbolic Destination Names,
	the User ID and Password parameters are correctly padded with spaces up to 10
	bytes before passing them to the APPC layer.
	
	CAUSE
	=====
	
	The Set_CPIC_Side_Information (xcmssi) function accepts an 8 byte user ID and
	password and these needed to be blank padded to 10 bytes before handing to the
	APPC layer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This problem does not exist in the retail version of SNA Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
