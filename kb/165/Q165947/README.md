---
layout: page
title: "Q165947: Event 2007 Error When Printing to an LPR Port"
permalink: /kb/165/Q165947/
---

## Q165947: Event 2007 Error When Printing to an LPR Port

{% raw %}

	Article: Q165947
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you print to a Windows NT printer
	that connects through an LPR printer port:
	
	  Event ID: 2007
	  Source: LPR Print Monitor
	  Type: Error
	  Category: None
	
	  The LPR print monitor failed to open the port named <port name or IP
	  address>:
	
	CAUSE
	=====
	
	This error occurs when the server name for the port is incorrect.
	
	RESOLUTION
	==========
	
	To reestablish connectivity to the printer, remove and recreate the LPR port
	using the correct server name.
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
