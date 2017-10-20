---
layout: page
title: "Q247066: Windows NT DHCP Server May Not Add BAD_ADDRESS Entries"
permalink: /kb/247/Q247066/
---

## Q247066: Windows NT DHCP Server May Not Add BAD_ADDRESS Entries

{% raw %}

	Article: Q247066
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a third-party Dynamic Host Configuration Protocol (DHCP) client detects
	that the Transport Control Protocol/Internet Protocol (TCP/IP) address received
	from a DHCP server already exists on the Local Area Network (LAN), the DHCP
	client may send a DHCP decline message to the DHCP server. However, the DHCP
	server may not add a BAD_ADDRESS entry in the DHCP database for this duplicate
	TCP/IP address.
	
	CAUSE
	=====
	
	This problem can occur when a Windows NT 4.0-based server with Service Pack 4
	(SP4) or later receives a DHCP decline message that does not conform to Request
	for Comment (RFC) 2131.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem is corrected in Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0-based DHCP servers running SP4 or later do not add a BAD_ADDRESS
	entry in the DHCP database when they receive a DHCP decline message from a DHCP
	client that conforms to RFC 1541.
	
	RFC 2131 specifies the "Requested IP address" field in the Option Field (0x32
	hexadecimal, or 50 decimal) of the DHCP decline message, and RFC 1541 specifies
	the "Requested IP address" field in the ciaddr field of the DHCP decline
	message. A Windows NT 4.0-based DHCP server does not add BAD_ADDRESS to the DHCP
	database for a duplicate TCP/IP address if the "Requested IP address" is not
	present in the Option field of a DHCP decline message.
	
	Third-party print servers that do not conform to RFC 2131 are mostly affected by
	this issue. Windows NT-based DHCP clients are not affected. For more information
	about DHCP server behavior when receiving DHCP decline messages, see RFC 2131,
	section 4.3.3.
	
	REFERENCES
	==========
	
	- For information about DHCP decline message format according to RFC 2131, see
	  RFC 2131, section 4.4.1 (Table 5).
	
	- For information about DHCP decline message format according to RFC 1541, see
	  RFC 1541, section 4.4.1 (Table 4).
	
	- For information about the relevant option field "Requested IP Address", see
	  RFC 1533, section 9.1.
	
	Additional query words: bootp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
