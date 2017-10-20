---
layout: page
title: "Q129145: Commas Not Recognized in NetWare Logon Scripts"
permalink: /kb/129/Q129145/
---

## Q129145: Commas Not Recognized in NetWare Logon Scripts

{% raw %}

	Article: Q129145
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Windows 95 client for NetWare networks with logon script
	processing enabled, you receive the following error message if your logon script
	contains IF statements that use commas as separators:
	
	  Login Script Error: Error interpreting command line.
	
	CAUSE
	=====
	
	The logon script processor that is installed with the Windows 95 client for
	NetWare networks (NWLSPROC.EXE) does not support the use of commas as separators
	with the IF statement.
	
	WORKAROUND
	==========
	
	To resolve this problem, replace the commas used as separators in IF statements
	with the AND keyword. The comma is normally used in IF statements as a
	replacement for the AND keyword, so you will lose no functionality when you use
	this workaround.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
