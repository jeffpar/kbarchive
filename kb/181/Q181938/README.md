---
layout: page
title: "Q181938: XCLN: Assertion Failure When Starting Outlook 8.0"
permalink: kb/181/Q181938/
---

## Q181938: XCLN: Assertion Failure When Starting Outlook 8.0

	Article: Q181938
	Product(s): Microsoft Exchange
	Version(s): 3.1,3.11,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Outlook version 8.0, or you perform a Check
	Name command on a profile, you may get the following error message:
	
	  Stop Error: ASSERTION FAILED
	  Expression Hierarchyinfo && Count ==
	  HierarchyInfo->cRows, File
	  I:\dsa\src\emsabp\root.c, Line 960
	
	This error is fatal and will stop the client from launching properly.
	
	CAUSE
	=====
	
	This problem may occur if either of the following conditions are met; however,
	you may also experience this problem even if neither of these conditions are
	met:
	
	- If the Exchange organization has over 1,000 containers listed in the Global
	  Address List
	
	-OR-
	
	- The Exchange Server is on a Windows NT Server that is not a Primary Domain
	  Controller or a Backup Domain Controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Outlook client version 5.5
	for Windows 3.x. This problem has been corrected in the latest U.S. Service Pack
	for Microsoft Exchange Server version 5.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: login profiles
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : :3.1,3.11,8.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
