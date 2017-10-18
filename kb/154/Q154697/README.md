---
layout: page
title: "Q154697: Some NE2000 Adapters on Windows 95 Cause Disk or Network Error"
permalink: kb/154/Q154697/
---

## Q154697: Some NE2000 Adapters on Windows 95 Cause Disk or Network Error

	Article: Q154697
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients accessing data on a computer running Windows NT Server may
	receive a "Disk or Network error".
	
	
	CAUSE
	=====
	
	Windows 95 clients using certain uncertified NE2000 adapters may drop incoming
	packets, resulting in session termination.
	
	
	RESOLUTION
	==========
	
	Contact the manufacturer for an updated BIOS or driver. If the problem persists,
	replace the adapter with one that is certified.
	
	MORE INFORMATION
	================
	
	The network trace given below shows that the client is not responding to LLC
	Receive Ready Poll frames from the server. Although the server sent the data
	frames requested by the client, the redirector did not receive them because the
	network interface card (NIC) dropped the frames. In this instance, the client
	redirector terminates the connection after 45 seconds (the session timeout
	value). In other instances, when there are no responses to the LLC RR frames,
	the server would issue a DISC frame and terminate the connection.
	
	
	  Frame#  Delta   Dest.   Source    Desc.
	  -----------------------------------------------------
	  6435    0.0033  SERVER  DAVE      SMB C F=3818 Read Block Raw 32768 at
	                                                                  1376256
	  6436    0.0023  DAVE    SERVER    NETB D=0C S=21 Data, 1468 bytes
	  6437    0.0018  DAVE    SERVER    NETB D=0C S=21 Data, 1468 bytes
	  6438    0.4305  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6439    0.2448  SERVER  DAVE      LLC C D=F0 S=F0 RR NR=17 P
	  6440    0.0008  DAVE    SERVER    LLC R D=F0 S=F0 RR NR=108 F
	  6441    0.4068  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6442    0.9499  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6443    1.4042  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6444    2.0508  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6445    3.0544  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6446    4.5565  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6447    6.8098  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=108 P
	  6448    5.0446  SERVER  DAVE      NETB Session alive
	  6449    0.1628  DAVE    SERVER    LLC R D=F0 S=F0 RR NR=109
	  6450    4.8570  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=109 P
	  6451   10.0644  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=109 P
	  6452   10.0644  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=109 P
	  6453   10.0684  DAVE    SERVER    LLC C D=F0 S=F0 RR NR=109 P
	  6454    1.4729  SERVER  DAVE      NETB D=21 S=0C Session end
	
	Additional query words: disconnect
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
