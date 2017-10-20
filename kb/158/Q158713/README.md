---
layout: page
title: "Q158713: Fatal Exception Error Using DHCP"
permalink: /kb/158/Q158713/
---

## Q158713: Fatal Exception Error Using DHCP

{% raw %}

	Article: Q158713
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Winipcfg.exe to release or renew IP addresses obtained using DHCP,
	or when you start Windows 95 with the network adapter configured to obtain IP
	addresses using DHCP, you may receive an error message similar to the following
	message on a blue screen:
	
	  Fatal exception 0E at 0028:C433442B in VXD octk16.sys (01) + 0000342B. This
	  was called from 0028:C003C47C in VXD NDIS (01) + 00000D7C. It may be possible
	  to continue normally.
	
	CAUSE
	=====
	
	When you are using the Windows 95 DHCP client, a buffer in memory used to send a
	DHCP message may be freed before the message has been completely sent. The error
	occurs when the network adapter driver attempts to access this buffer to send
	the information on the wire.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The fatal exception error typically occurs in the MAC driver, although it may
	also occur in NDIS itself.
	
	
	This symptom may occur more frequently with Token Ring adapters using locally
	administered addresses (LAAs), although it has been reported to occur with
	Ethernet adapters and without using LAAs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
