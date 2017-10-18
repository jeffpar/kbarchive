---
layout: page
title: "Q172142: Event ID 4129 May Appear When Using Compaq Insight Manager"
permalink: kb/172/Q172142/
---

## Q172142: Event ID 4129 May Appear When Using Compaq Insight Manager

	Article: Q172142
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Compaq's Insight Manager with Windows NT 3.51 or 4.0, it may
	generate the following Event ID:
	
	  Event ID: 4129
	  Source: SysMgmt
	  Type: Error
	  Description: The Compaq Systems Management Driver has detected that an
	  application has passed a bad parameter to its Device IO Control routine.
	
	
	CAUSE
	=====
	
	According to Compaq technical support, this error may be caused by a user mode
	application sending a bad IOCTL packet to the Sysmgmt.sys driver. In addition,
	this error has also been caused by bad or defective SCSI cables/connectors and
	or improper termination.
	
	
	RESOLUTION
	==========
	
	To correct the problem:
	
	1. Verify that the latest SSD from Compaq is installed.
	
	2. Verify proper cabling and termination on the SCSI Bus.
	
	MORE INFORMATION
	================
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	
	=============================================================================
	
