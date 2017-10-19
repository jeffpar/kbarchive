---
layout: page
title: "Q238143: BUG: WTSQuerySessionInformation() Returns Invalid Client Address"
permalink: /kb/238/Q238143/
---

## Q238143: BUG: WTSQuerySessionInformation() Returns Invalid Client Address

	Article: Q238143
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDSN
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You should use the WTSQuerySessionInformation function with the filtering flag,
	WTSClientAddress, to get the client IP address on a Windows Terminal Client. The
	buffer that is returned by this function contains a WTS_CLIENT_ADDRESS structure
	for the client address family and address. However, on Windows NT Server version
	4.0, Terminal Server Edition (TS4), the client address field is invalid.
	
	RESOLUTION
	==========
	
	As a workaround on TS4, you can first use the WTSQuerySessionInformation
	function with the WTSClientName filtering flag to get the client name. The
	client name is either a dotted IP address or a name string. If the client name
	is a name string, use the gethostbyname function to resolve the name to an IP
	address.
	
	The following code fragment illustrates how to use the gethostbyname function to
	resolve a client name string to its IP address:
	
	     ...
	     ...
	     ...
	     lphp = gethostbyname(szClientName);
	
	     if (lphp == NULL)
	     {
	        printf("gethostbyname failed: %d", WSAGetLastError());
	        return -1;
	     }
	
	     inAddr.s_addr = ((struct in_addr far *)(lphp->h_addr))->s_addr;
	     printf("Client address: %s\n", inet_ntoa(inAddr));
	     ...
	     ...
	     ...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Because of this bug, both the auditing event log and tsadmin do not show the IP
	address of the client.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
