---
layout: page
title: "Q176046: XCON: Routing Issues with Microsoft Exchange Server, Version 5.0"
permalink: /kb/176/Q176046/
---

## Q176046: XCON: Routing Issues with Microsoft Exchange Server, Version 5.0

	Article: Q176046
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A message from a Microsoft Exchange user to a recipient on a remote X.400 system
	may be routed to a local recipient. This can happen if the address of the local
	recipient and the recipient on the remote X.400 system are similar. For example,
	if the local recipient has the following X.400 address:
	
	  C=US;A=PTT;P=COMPANY;S=USER1
	
	and the remote X.400 recipient has the following address:
	
	  C=US;A=PTT;S=USER1
	
	Note that the remote address matches the address of the local recipient, except
	that there is no Private Management Domain (P=...) defined. Both addresses are
	syntactically correct and valid.
	
	CAUSE
	=====
	
	Microsoft Exchange Server version 5.0 uses a slightly different algorithm for
	address resolution. Even if the "Allow fuzzy proxy search" registry key is
	disabled, Exchange Server still uses a fuzzy algorithm in certain cases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, apply the fix referenced below. You will also need to
	create a new entry in the Windows NT registry. To do this:
	
	1. Start the Windows NT Registry Editor.
	
	2. Go to the following subkey:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\
	  Parameters
	
	3. Create the following new registry value:
	
	  Allow fuzzy proxy search
	
	  Set this value to 2. This case-sensitive registry value is a DWORD type value.
	
	If this registry value does not exist in the registry, the Microsoft Exchange
	Server message transfer agent (MTA) assumes a value of 1 for this setting and
	enables fuzzy proxy searches.
	
	This value has three possible settings:
	
	- Allow fuzzy proxy search=0. Restricted fuzzy proxy searches are allowed. A
	  unique match on the Surname and the Given Name or an exact match is allowed.
	
	- Allow fuzzy proxy search=1. Full fuzzy proxy searches are allowed.
	
	- Allow fuzzy proxy search=2. No fuzzy proxy searches are allowed at all, only
	  an exact match is allowed.
	
	REFERENCES
	==========
	
	For additional information about the fuzzy proxy search in Microsoft Exchange
	Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q159184 XADM: MTA Does Not Deliver Messages with High Directory Service
	  Activity
	
	NOTE: Be aware that the registry settings are different for Exchange Server
	version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
