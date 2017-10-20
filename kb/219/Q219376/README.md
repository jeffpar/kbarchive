---
layout: page
title: "Q219376: NDIS Does Not Indicate NDIS_RESET_END Status"
permalink: /kb/219/Q219376/
---

## Q219376: NDIS Does Not Indicate NDIS_RESET_END Status

{% raw %}

	Article: Q219376
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT 4.0 Service Pack 4, the Microsoft Network
	Driver Interface Specification (NDIS) software does not notify any protocols
	bound to a miniport driver that the miniport has completed its reset routine.
	The NDIS_RESET_START command is issued during a reset, but no command is issued
	at the completion of the reset. Previous versions of NDIS notified the protocol
	bound to the miniport at both the beginning (using NDIS_RESET_START) and the end
	(with NDIS_RESET_END) during a reset.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0 Service
	Pack 4. This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting NDIS issues, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q216780 DLC Protocol Stops Transmitting Packets
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
