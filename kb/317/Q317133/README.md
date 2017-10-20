---
layout: page
title: "Q317133: &quot;STOP 0x0000000A&quot; Error Message in Scsiport.sys"
permalink: /kb/317/Q317133/
---

## Q317133: &quot;STOP 0x0000000A&quot; Error Message in Scsiport.sys

{% raw %}

	Article: Q317133
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg ocsso
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0-based computer, you may receive a STOP error message similar
	to the following:
	
	  STOP 0x0000000A (0x00000020 0x00000002 0x00000001 0x801DFF42)
	
	NOTE: The parameter values may be different on your computer, but the error is
	based in Scsiport.sys.
	
	CAUSE
	=====
	
	This behavior can occur if Compaq Network Teaming and Configuration (CPQNTAC)
	functionality is enabled and the driver for the network adapter, Cpqntac.sys or
	Cpqttac.sys, is dated earlier than November, 1999.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Compaq to obtain and install an updated driver
	that can resolve this issue.
	
	This issue was originally addressed in a softpaq update available from Compaq,
	Softpaq SP12294, which contains versions of Cpqntac.sys and Cpqttac.sys that are
	dated November, 1999. It is available for download from the following Compaq FTP
	site:
	
	  ftp://ftp.compaq.com/pub/softpaq/sp12001-12500
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot a STOP 0x0A error message
	that occurs after you upgrade to Windows NT 4.0 Service Pack 6 (SP6), click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q246683 STOP 0xA on Compaq Computers When Upgrading to Windows NT 4.0 Service
	  Pack 6
	
	For additional information about how to troubleshoot STOP 0x0A error messages,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q165863 Troubleshooting "Stop 0x0A" Messages in Windows 2000 and Windows NT
	
	  Q237699 Error Message: Stop 0x0000000A in ScsiPort.sys on SMP Systems
	
	  Q236981 "STOP 0x0000000A" Involving Scsiport.sys in Windows NT 4.0 SP5
	
	For additional information about how to collect more information about an error
	message that appears on a blue screen, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q192463 Gathering Blue Screen Information After Memory Dump in Windows 2000
	  or Windows NT
	
	For information about how to contact Compaq, click the appropriate article number
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
	
	REFERENCES
	==========
	
	SOX000209700049
	SOX000209700049
	SOX000517700021 STOP 0x00000024
	SOX000516700055 STOP 0x00000024 (0x00190201, 0x1A6AA80, 0xF1A6A8BC, 0x80112DDE)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg ocsso 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
