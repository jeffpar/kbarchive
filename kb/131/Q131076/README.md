---
layout: page
title: "Q131076: Mac DOS: Err Msg: Low on memory. Unable to Complete Operation."
permalink: kb/131/Q131076/
---

## Q131076: Mac DOS: Err Msg: Low on memory. Unable to Complete Operation.

	Article: Q131076
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you address a message in versions 3.0 and later of Microsoft Mail for
	AppleTalk Networks, MS-DOS workstation, the following error may occur:
	
	  Low on memory. Unable to complete the operation. Please close some windows.
	
	You can choose OK to continue addressing the mail.
	
	CAUSE
	=====
	
	This error occurs when you choose the Network address list and double-click the
	Mail network you are currently logged into. The error only occurs if there are
	no other postoffices with that network name.
	
	RESOLUTION
	==========
	
	One method to resolve the problem is to address mail to recipients on the same
	postoffice via the Postoffice or Global address lists.
	
	An additional workaround is to add another postoffice to the same network that is
	currently being used. However, the address list will still not be available
	under Network; the mail will need to be addressed from another address list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and later of
	Microsoft Mail for AppleTalk Networks, MS-DOS workstation. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: 3.0.6 3.0.5 3.0.4 3.0.3 3.0.2 3.0.1
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
