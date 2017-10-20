---
layout: page
title: "Q167021: INFO: 3Com 3c900 Card Does Not Install During Unattended Setup"
permalink: /kb/167/Q167021/
---

## Q167021: INFO: 3Com 3c900 Card Does Not Install During Unattended Setup

{% raw %}

	Article: Q167021
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the unattended setup option to install Windows NT on a computer
	that uses a 3Com 3c900 EtherLink adapter, you may get the following message
	during the graphical user interface (GUI) mode portion of network setup:
	
	  Network Card not Present in the system
	
	This message is produced when the Oemsetup.inf file of the netcard does not
	return a proper value. The following command string returns an empty list:
	
	     <B>Shell $(UtilityInf), GetPCIInformation, $(Vendor) $(CFID)</B>
	
	MORE INFORMATION
	================
	
	This is a known problem between Windows NT and this 3Com card. Contact 3Com for
	a workaround to this problem.
	
	The EtherLink product discussed here is manufactured by 3Com Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	Additional query words: automated Unattended Setup
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
