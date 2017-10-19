---
layout: page
title: "Q317151: Non-Paged Pool Memory Leak with Emulex Fibre SCSI Driver"
permalink: /kb/317/Q317151/
---

## Q317151: Non-Paged Pool Memory Leak with Emulex Fibre SCSI Driver

	Article: Q317151
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): ocsso
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Emulex Fibre Channel PCI Host Bus Adapter is installed on a Windows
	NT-based computer, the computer's performance may degrade or the computer may
	stop responding (hang) because of a memory leak. For example, you may experience
	one or more of the following behaviors:
	
	- Performance Monitor displays a consistent increase in non-paged pool memory
	  usage.
	
	- Performance Monitor logs indicate a negative value for the Pool Nonpaged
	  Bytes counter.
	
	- The pool tag, which indicates the location of the memory leak, is TMRL.
	
	- The computer stops responding (hangs) or displays a STOP error message
	  similar to one of the following on a blue screen:
	
	  Stop 0x0000000a (0x00000002 0x00000002 0x00000001 0x80208669)
	
	  Stop 0x0000002d (0x00000000 0x00000000 0x00000000 0x00000000)
	
	  STOP 0xffffffff (0x00001310 0x61315c6e 0x74345c73 0x6c697363)
	
	
	CAUSE
	=====
	
	The TMRL pool tag indicates that the memory leak is caused by the Emulex Fibre
	Channel SCSI driver, Elxsli2.sys. This behavior can occur if the driver is of
	the following version and date stamp:
	
	  Version v4-1.24
	  December 14, 1999
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Emulex to determine whether an updated driver is
	available that can resolve this behavior.
	
	For more information, browse to the following Emulex Web site:
	
	  http://www.emulex.com/ts/index.html (http://www.emulex.com/ts/index.html)
	
	WORKAROUND
	==========
	
	To work around this issue, use an earlier version of the driver with which you
	do not experience the behavior described in the "Symptoms" section of this
	article.
	
	MORE INFORMATION
	================
	
	For additional information about a similar memory leak issue, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q265096 "Stop 41" Error Message Occurs and Event 2000 Is Logged
	
	For additional information about how to identify memory leaks in Windows NT,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q130926 Using Performance Monitor to Identify a Pool Leak
	
	  Q177415 How to Use Poolmon to Troubleshoot Kernel Mode Memory Leaks
	
	For information about how to contact Emulex, click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : ocsso 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
