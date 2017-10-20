---
layout: page
title: "Q216303: Incorrect NDIS Filtering of Some Ethernet Multicast Frames"
permalink: /kb/216/Q216303/
---

## Q216303: Incorrect NDIS Filtering of Some Ethernet Multicast Frames

{% raw %}

	Article: Q216303
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Ethernet multicast frames may be incorrectly identified as Ethernet
	broadcast frames by the filtering logic in Ndis.sys.
	
	Consequently, these multicast frames are not always delivered as expected to NDIS
	packet drivers and higher layers of the network stack.
	
	CAUSE
	=====
	
	Ethernet multicast frames are distinguished from directed packets by having the
	Individual/Group (I/G) bit of the destination address set to 1 (Group).
	
	The Ethernet broadcast address is defined to be 0xFFFFFFFFFFFF, which is a
	special case of Ethernet multicast address.
	
	Frames with an Ethernet multicast destination address whose first byte was 0xFF
	were being incorrectly identified and treated as broadcast frames.
	
	
	WORKAROUND
	==========
	
	To work around this problem, choose an Ethernet multicast addressing scheme that
	does not include Ethernet multicast addresses whose first byte is 0xFF.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
