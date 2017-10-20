---
layout: page
title: "Q245120: &quot;STOP 0x0000003F&quot; When NAI Antivirus Software Is Installed"
permalink: /kb/245/Q245120/
---

## Q245120: &quot;STOP 0x0000003F&quot; When NAI Antivirus Software Is Installed

{% raw %}

	Article: Q245120
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Networks Associates VirusScan antivirus software for Windows NT or
	NetShield antivirus software for Windows NT, you may receive the following STOP
	error message:
	
	  STOP: 0x0000003F
	  (0x00000000,0x00000000,0x00000000,0x00000000)NO_MORE_SYSTEMS_PTES
	
	CAUSE
	=====
	
	This behavior can occur if you install Networks Associates VirusScan antivirus
	software for Windows NT or NetShield antivirus software for Windows NT version
	4.0.2, 4.0.3, or 4.0.3a in Windows NT Server version 4.0 or Windows NT
	Workstation version 4.0 with Service Pack 3 installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest service pack for Windows NT Server 4.0
	or Windows NT Workstation 4.0.
	
	For information about obtaining the latest service pack, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	You can determine the version of Network Associates VirusScan antivirus software
	for Windows NT or NetShield antivirus software for Windows NT that you have
	installed by verifying the dates of the following filter drivers. If the dates
	of the drivers appear to be the same as indicated here, you have installed
	Network Associates VirusScan antivirus software for Windows NT or NetShield
	antivirus software for Windows NT version 4.0.2, 4.0.3, or 4.0.3a:
	
	  NaiFsRec.sys Wed Dec 09 15:54:25 1998
	  NaiFiltr.sys Wed Dec 09 15:54:24 1998
	
	For more information about Network Associates VirusScan antivirus software for
	Windows NT or NetShield antivirus software for Windows NT, please visit the
	following Web site for Network Associates, Inc.:
	
	  http://www.nai.com/
	
	NOTE: On December 1, 1997, McAfee Associates merged with Network General
	Corporation, Pretty Good Privacy, Inc., and Helix Software, Inc. to form Network
	Associates, Inc. The combined company subsequently acquired Dr Solomon's
	Software, Trusted Information Systems, Magic Solutions, and CyberMedia, Inc.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 0x00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
