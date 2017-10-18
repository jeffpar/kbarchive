---
layout: page
title: "Q192982: XFOR: Internet Mail Service Does Not Allow Auto Forwarded Msgs"
permalink: kb/192/Q192982/
---

## Q192982: XFOR: Internet Mail Service Does Not Allow Auto Forwarded Msgs

	Article: Q192982
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When the Microsoft Internet Mail Service is configured to disable auto replies
	to the Internet, auto forwards to an Internet address are also suppressed.
	
	CAUSE
	=====
	
	The Internet Mail Service cannot detect the difference between a message that is
	an auto reply and a message that is an auto forward. The difference between the
	messages is that the auto forwarded message has the MAPI property
	PR_AUTO_FORWARDED set.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2407.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	New code was added to the Internet Mail Service to enable detection of an auto
	forwarded message. To add the necessary registry key, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: AlwaysAllowForwarding
	     Data Type:  REG_DWORD
	     Value:   1
	
	4. Quit Registry Editor.
	
	After this key is added and the new Internet Mail Service hotfix is applied, auto
	forwarded messages can be sent while auto replies are disabled.
	
	Additional query words: auto-forward turf
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
