---
layout: page
title: "Q156588: STOP: 3COM El59x.sys Driver May Cause a STOP 0x0000000A"
permalink: /kb/156/Q156588/
---

## Q156588: STOP: 3COM El59x.sys Driver May Cause a STOP 0x0000000A

{% raw %}

	Article: Q156588
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a 3COM EtherLink III PCI(3C590) or Fast EtherLink PCI(3C595)
	network card, the following STOP message may occur on a computer running Windows
	NT:
	
	  STOP: 0x0000000A (0x00000020, 0x00000002, 0x00000000, 0xfbd50a35)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The fourth parameter shown above, 0xfbd50a35, will be specific to the
	system configuration.
	
	CAUSE
	=====
	
	The problem occurs because of a bug in the network adapter driver for 3COM 3C59X
	series network adapters.
	
	
	RESOLUTION
	==========
	
	The problem has been fixed in the latest version of the 3COM driver. The new
	driver, El59x.sys (version 1.22.00, dated 7/4/97), is available at the following
	World Wide Web location as 3c59xn.exe (a self extracting file):
	
	  http://support.3com.com/infodeli/tools/nic/3C590.htm
	
	
	The driver is also available from 3COM's Bulletin Board Service (BBS) at (408)
	980-8204.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: trap 0xA ntblue 3com el59x
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	

{% endraw %}
