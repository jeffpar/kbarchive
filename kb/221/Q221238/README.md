---
layout: page
title: "Q221238: XADM: OST Sync Fails with 80070005-508-00-324"
permalink: kb/221/Q221238/
---

## Q221238: XADM: OST Sync Fails with 80070005-508-00-324

	Article: Q221238
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0,8.01,8.02,8.03,8.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are synchronizing the Off-line Store (OST) in Outlook, the
	synchronization will fail with an error code in the synchronization log and
	display the following:
	
	  > 13:57:43 Microsoft Exchange Server Information Store
	  > 13:57:43 Error synchronizing folder
	  > 13:57:43 [80070005-508-0-324]
	  > 13:57:43 You do not have sufficient permission to
	  > perform this operation on this object. See the folder contact or your
	  > system administrator.
	
	CAUSE
	=====
	
	The user does not have Create rights to the public folder that is being
	synchronized in their favorites folder. If a conflict occurs, the store was
	using the user's rights to the folder to create the conflict message. Because
	the user did not have Create rights, the Microsoft Exchange information store
	will return Access Denied.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Store.exe | 5.5.2571.0 | 
	+------------------------+
	
	
	WORKAROUND
	==========
	
	To work around this problem, set the clients rights to the folder to include
	create rights. This workaround can be used until the fix for Store.exe can be
	applied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:8.0,8.01,8.02,8.03,8.5; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
