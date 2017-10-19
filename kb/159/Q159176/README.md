---
layout: page
title: "Q159176: XADM: Store Stops Responding with High CPU Usage"
permalink: /kb/159/Q159176/
---

## Q159176: XADM: Store Stops Responding with High CPU Usage

	Article: Q159176
	Product(s): Microsoft Exchange
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Information Store service may appear to stop
	responding with 90 to 100 percent CPU time. Any clients may also stop
	responding; the cursor turns into the "wait" symbol (hourglass). When this
	problem occurs, stopping and starting the Information Store reduces the CPU
	usage to normal levels and frees up the clients.
	
	CAUSE
	=====
	
	A Microsoft Exchange Server Information Store thread loops forever on a Winsock
	recv() function. Winsock recv() is returning zero bytes received because the
	remote computer has gracefully disconnected the connection.
	
	The reason for the problem is that the Information Store thread is stuck in a
	remote procedure call (RPC). The RPC routine is continually calling the Winsock
	recv() function because it is returning zero bytes read, which is an error.
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the appropriate file:
	
	Windows NT 3.51
	---------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/rpc-fix
	
	Windows NT 4.0
	--------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/rpc-fix
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0.
	
	A fully supported fix is now available, but it has not been fully regression
	tested and should only be applied to systems determined to be at risk of attack.
	Please evaluate your system's physical accessibility, network and Internet
	connectivity, and other factors to determine the degree of risk to your system.
	If your system is sufficiently at risk, Microsoft recommends you apply this fix.
	Otherwise, wait for the next Windows NT service pack, which will contain this
	fix. Please contact Microsoft Technical Support for more information.
	
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 3.51. A fully supported fix is now
	available, but it has not been fully regression tested and should only be
	applied to systems determined to be at risk of attack. Please evaluate your
	system's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your system. If your system is
	sufficiently at risk, Microsoft recommends you apply this fix. Otherwise, wait
	for the next Windows NT service pack, which will contain this fix. Please
	contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodnt 4.00 3.51 utilization slow shutdown store.exe
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
