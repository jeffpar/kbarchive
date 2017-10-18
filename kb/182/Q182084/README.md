---
layout: page
title: "Q182084: XGEN: CDO's GetNext with Custom Property Fails at 17th Time"
permalink: kb/182/Q182084/
---

## Q182084: XGEN: CDO's GetNext with Custom Property Fails at 17th Time

	Article: Q182084
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you search a custom property of a message on Messages Collection Object in
	Collaboration Data Objects (CDO) version 1.2, calling the GetNext method more
	than 16 times results in the following error message. The error message dialog
	box appears, and the CDO program is terminated, if there is no error trap.
	
	  Run Time error -2147467259(80004005)
	  [Collaboration Data Objects [E_Fail (80004005)]]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem only occurs when you access a custom property of a Field(s) object.
	When you use the MAPI property tag instead of the name of the custom MAPI
	property, you can call GetNext more than 16 times successfully. This problem
	also applies to the GetPrevious method.
	
	
	Additional query words: 17 Active Messaging OLE Visual Basic
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
