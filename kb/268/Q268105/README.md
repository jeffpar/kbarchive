---
layout: page
title: "Q268105: XADM: Mailbox Manager May Access Violate Cleaning a Container"
permalink: /kb/268/Q268105/
---

## Q268105: XADM: Mailbox Manager May Access Violate Cleaning a Container

{% raw %}

	Article: Q268105
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Mailbox Manager to clean a container with a hidden mailbox that has a
	space at the end of the directory name, Mailbox Manager may Access Violate. The
	DrWatson.log contains the following stack, if symbols are properly installed:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name<BR/>
	
	  0162eb40  7801299d  00090004 00411130 0162f554 MSVCRT!__ascii_stricmp+0x17
	  0162eb54  7801296e  00090004 00411130 00402066 MSVCRT!_stricmp+0x2c
	  0162eb60  00402066  00090004 00411130 77e88778 MSVCRT!_strcmpi+0xd
	  0162f444  00406824  00851160 00414348 00850fd0 MBCLEAN!hrWalkUsersInContainer+0x1a6
	  0162f488  0040629d  00000000 00000000 00850fd0 MBCLEAN!ProcessOneContainer+0x474
	  0162f4f8  00405be6  00851160 0162f554 00850fd0 MBCLEAN!ProcessContainer+0xcd
	  0162fa20  004096bc  0162fa58 77f87e6c 0162fd70 MBCLEAN!StartMailboxCleanup+0x566(...)
	  0162fa44  77f9fb67  0162fda8 d490dba8 01bfe1f4 MBCLEAN!TimerAPCProc+0x25c
	  0162fa58  00000000  00000000 00000000 00000000 NTDLL!KiUserApcDispatcher+0x7
	
	CAUSE
	=====
	
	This issue can occur because Mailbox Manager builds a list of mailboxes to send
	to the directory to be resolved. This resolution process strips the trailing
	spaces so the names can be resolved against the directory by using ambiguous
	name resolution, which causes the name lookup to fail and not populate the list
	with the required Messaging Application Programming Interface (MAPI) properties.
	When the directory returns this list to Mailbox Manager, Mailbox Manager does
	not check the list to determine whether all of the name lookups were successful.
	When Mailbox Manager attempts to gain access to an item in the list that was not
	successfully resolved, Mailbox Manager stops responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
