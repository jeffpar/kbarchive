---
layout: page
title: "Q235669: XADM: Exchange Server 5.5 Setup Fails on Windows 2000 Server"
permalink: kb/235/Q235669/
---

## Q235669: XADM: Exchange Server 5.5 Setup Fails on Windows 2000 Server

	Article: Q235669
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 on a Windows 2000 Server
	computer, an error may occur in Mapi32.dll with a call stack similar to the
	following:
	
	  
	
	  CDB: integer divide by zero
	  CDB: !!! second chance !!!
	  eax=ffffffff ebx=00000000 ecx=6fb4ebb8 edx=00000000 esi=00000058 edi=00000000
	  eip=6fae79f4 esp=0068f560 ebp=00750040 iopl=0         nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	  *** WARNING: Using export symbols for mapi32.dll
	  MAPI32!_CPPValidateParameters+0x6154:
	  6fae79f4 f7351cbfb46f                               ds:0023:6fb4bf1c=00000000
	                         div     dword ptr [MAPI32+0xbbf1c (6fb4bf1c)]
	  0:001> kb
	  ChildEBP RetAddr  Args to Child
	  00750040 000000c8 000000c4 000000c0 fc1e01cd MAPI32!_CPPValidateParameters+0x615
	
	CAUSE
	=====
	
	The Exchange Server service account does not have the required permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, add the Exchange Server service account to the local
	Power Users group or local Administrators group on a member server. On a domain
	controller, add the account to the built-in Administrators group.
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, verify that the service account has
	Administrator permissions before you attempt to install Exchange Server 5.5 on a
	Windows 2000 Server computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The minimum rights necessary for the Exchange Server service account on a member
	server are Power Users rights. However, if installation problems occur when you
	use the local Power Users group, add the Exchange Server service account to the
	local Administrators group. Also, if the local Power Users group is not
	available because of the type of installation that was performed, use the local
	Administrators group.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
