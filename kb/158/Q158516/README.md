---
layout: page
title: "Q158516: Access Violation in RPCRT4.DLL When Pickling Buffered RPC Data"
permalink: kb/158/Q158516/
---

## Q158516: Access Violation in RPCRT4.DLL When Pickling Buffered RPC Data

	Article: Q158516
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Pickling, or serialization, is a Remote Procedure Call (RPC) process of
	marshaling data (encoding) and unmarshaling data (decoding) from buffers that
	you own. When you pickle and use wire_marshal, you may experience an Access
	Violation in Rpcrt4.dll. The wire_marshal attribute specifies a data type that
	will be used for transmission (the wire-type) instead of an application-specific
	data type (the userm-type). Each userm-type has a one- to-one correspondence
	with a wire-type that defines the wire representation of the type. You must
	supply routines to size the data for marshaling, to marshal and unmarshal the
	data, and to free memory.
	
	NOTE: If there are embedded types in your data that are also defined with
	wire_marshal or user_marshal, you need to manage the servicing of those embedded
	types as well.
	
	CAUSE
	=====
	
	An uninitialized (NULL) buffer pointer is dereferenced to see if the underlying
	buffer was overwritten, causing an Access Violation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
