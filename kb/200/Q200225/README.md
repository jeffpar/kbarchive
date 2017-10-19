---
layout: page
title: "Q200225: XFOR: Requirements for the Exchange Server Connection Agent"
permalink: /kb/200/Q200225/
---

## Q200225: XFOR: Requirements for the Exchange Server Connection Agent

	Article: Q200225
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Connection Agent provides coexistence and interoperability solutions
	for existing and emerging groupware platforms and information sources, which
	include Lotus Notes and Exchange Server. The Connection Agent for Notes and
	Exchange Server synchronizes information between databases and folders, which
	enables workgroups to collaborate and distribute information across both
	systems. If changes are made in a Notes database (such as new message
	submissions, edits to existing messages, responses to messages, or deletions of
	messages) these changes are also made in the corresponding Exchange Server
	folder.
	
	This information exchange enables wider collaboration in a cost-effective and
	scalable delivery system. The Connection Agent keeps the information
	synchronized between the two systems and maintains the related topics and
	responses in the proper context.
	
	MORE INFORMATION
	================
	
	Network Requirements
	--------------------
	
	The Connection Agent runs on:
	
	- Microsoft Windows NT Server version 3.51 and later, and Microsoft Windows NT
	  Advanced Server version 3.51 and later.
	
	- Microsoft Windows 95 and Microsoft Windows 98.
	
	Network Setup
	-------------
	
	The Connection Agent administrator must have full network access rights to all
	servers that store databases for the site that is being administered.
	
	Hardware
	--------
	
	The required minimum system is a Pentium PC with 16 megabytes (MB) of random
	access memory (RAM).
	
	Software
	--------
	
	You need to install the following software before you install the Connection
	Agent:
	
	- 32-bit Lotus Notes Client release 4.0 or later and Lotus Notes Server release
	  3.0 or later.
	
	- 32-bit Microsoft Exchange Client version 4.0 or later and Microsoft Exchange
	  Server version 4.0 or later.
	
	Storage
	-------
	
	To store the Connection Agent programs, you need a minimum of 4 MB of disk space
	and additional disk space for Notes and Exchange Server databases, folders,
	forms, and messages.
	
	Additional query words: Conversion synchronization Replication
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
