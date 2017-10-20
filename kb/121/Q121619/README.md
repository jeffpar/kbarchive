---
layout: page
title: "Q121619: ARP Cache Commands May Not Work Correctly"
permalink: /kb/121/Q121619/
---

## Q121619: ARP Cache Commands May Not Work Correctly

{% raw %}

	Article: Q121619
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	ARP -D and ARP -S commands may not function correctly under Windows NT 3.5
	and Microsoft TCP/IP-32.
	
	Example
	-------
	
	To see what's currently in the ARP cache:
	
	  c:>arp -a
	  No ARP Entries Found
	
	Attempt to add an entry:
	
	  c:>arp -s 22.101.9.229 08-00-09-12-34-56 22.101.102.207
	  The ARP entry addition failed: 3
	
	Check the cache again:
	
	  c:>arp -a
	  No ARP Entries Found
	  c:>ipconfig
	
	  Windows NT IP Configuration
	  Ethernet adapter EE161:
	
	       IP Address. . . . . . . . . : 22.101.102.207
	       Subnet Mask . . . . . . . . : 255.255.0.0
	       Default Gateway . . . . . . : 22.101.0.1
	
	  Ethernet adapter NdisWan5:
	
	       IP Address. . . . . . . . . : 0.0.0.0
	       Subnet Mask . . . . . . . . : 0.0.0.0
	       Default Gateway . . . . . . :
	
	  Ethernet adapter NdisWan9:
	
	Attempt to alter an entry:
	
	  c:>arp -s 22.101.9.229 08-00-09-12-34-56
	
	  c:>arp -a
	
	  Interface: 22.101.102.207
	
	     Internet Address      Physical Address      Type
	     22.101.101.15         00-20-af-1d-2b-91     dynamic
	
	Ping the address and let ARP fill in the cache:
	
	  c:>ping 22.101.101.15
	
	  Pinging 22.101.101.15 with 32 bytes of data:
	
	  Reply from 22.101.101.15: bytes=32 time<10ms TTL=32
	  Reply from 22.101.101.15: bytes=32 time<10ms TTL=32
	  ^C
	  c:>arp -a
	
	  Interface: 22.101.102.207
	
	     Internet Address      Physical Address      Type
	     22.101.0.1            08-00-02-04-89-82     dynamic
	     22.101.101.15         00-20-af-1d-2b-91     dynamic
	
	Attempt to delete the entry:
	
	  c:>arp -d 22.101.101.15
	
	  c:>arp -a
	
	  Interface: 22.101.102.207
	
	     Internet Address      Physical Address      Type
	     22.101.0.1            08-00-02-04-89-82     dynamic
	     22.101.101.15         00-20-af-1d-2b-91     dynamic
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32. This
	problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: wfw wfwg prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
