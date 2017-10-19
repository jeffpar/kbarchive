---
layout: page
title: "Q142647: Callback Field for RAS May Not Be Viewable From Rasadmin.exe"
permalink: /kb/142/Q142647/
---

## Q142647: Callback Field for RAS May Not Be Viewable From Rasadmin.exe

	Article: Q142647
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view a Windows NT 4.0 Remote Access Service (RAS) server from a Windows
	NT 3.51 server, the callback field may not show the phone number correctly, or
	you may not see a phone number at all.
	
	CAUSE
	=====
	
	The Windows NT 4.0 RAS server has the capability to accept or call IP numbers,
	NetBIOS names, and Domain Name Service (DNS) host names as well as phone
	numbers. The Windows NT 3.51 Rasadmin executable file does not have this
	capability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt sur
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
