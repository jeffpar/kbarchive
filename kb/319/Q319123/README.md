---
layout: page
title: "Q319123: &quot;STOP 0x00000050&quot; Err Msg with Trend Micro Antivirus"
permalink: /kb/319/Q319123/
---

## Q319123: &quot;STOP 0x00000050&quot; Err Msg with Trend Micro Antivirus

{% raw %}

	Article: Q319123
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your Microsoft Windows NT 4.0-based computer, you may receive a STOP 0x50
	error message similar to one of the following on a blue screen:
	
	  Stop 0x00000050 (0xBEBEE9F8 0x0000000 0x0000000 0x00000002)
	
	  STOP 0x00000050 (0xf15ca000, 0x00000000, 0x00000000, 0x00000000)
	
	  STOP 0x00000050 (0xffff0000, 0x00000000, 0x00000000, 0x00000000)
	
	NOTE: The parameter values may be different on your computer, but a memory dump
	file analysis indicates it is based in Vsapint.sys.
	
	The STOP 0x50 error message may be displayed after you manually perform a virus
	scan on the computer.
	
	CAUSE
	=====
	
	This behavior can occur if a Trend Micro antivirus program is installed on the
	computer, and there is an issue with the Trend Micro Vsapint.sys driver file and
	the Tmfilter.sys driver file.
	
	This behavior has been reported to occur with Trend Micro ServerProtect for
	Windows NT Server 5.31.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, remove or deactivate the Trend Micro antivirus program to
	verify that the antivirus program is the cause of the STOP error message
	described in the "Symptoms" section of this article, and then contact Trend
	Micro for more information about how to resolve this issue or to inquire about
	the availability of an update.
	
	For more information about how to do this, contact Trend Micro at the following
	Trend Micro Web site:
	
	  http://www.antivirus.com/support/
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot a similar issue, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q307975 Problems with Trend Micro Interscan Virus Firewall Software
	
	For additional information about how to collect more information about an error
	message that appears on a blue screen, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q192463 Gathering Blue Screen Information After Memory Dump in Windows 2000
	  or Windows NT
	
	For information about how to contact Trend Micro, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
