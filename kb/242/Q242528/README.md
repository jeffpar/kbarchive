---
layout: page
title: "Q242528: Time-Out to Unreachable Computers Is Excessive"
permalink: /kb/242/Q242528/
---

## Q242528: Time-Out to Unreachable Computers Is Excessive

	Article: Q242528
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are attempting to connect to a computer that is unreachable in a
	Terminal Server session, you may experience an excessive delay before the
	attempted connection times out. The typical, expected delay of less than a
	minute does not occur. Instead, Terminal Server may take from 90 seconds to 20
	minutes before an "Unsuccessful" error message is returned. This may cause the
	program that requested the network connection to stop responding (hang).
	
	CAUSE
	=====
	
	There are several iterations of calls to the redirector to establish a
	connection. First, the system context attempts a connection to
	\\<server>\ipc$, which allocates a server list entry and attempts to
	connect. The returned status is "0xC00000BE invalid connection," and the last
	connect time is set in the server entry. Then, the application context attempts
	a connection to \\<server>\<share>, which allocates a second server
	list entry and attempts to connect. During this time, the cleanup thread wakes
	up and determines that the first server list entry has expired and dereferences
	and frees it. The second connection attempt then returns "failure 0xC00000BE."
	The driver then reiterates on \\<server>\ipc$ by using the Multiple UNC
	Provider (MUP) and does not find the server list entry. A new one is allocated
	and a connection attempt is made. During this time, the cleanup thread wakes up
	again and determines that \\<server>\<share> has expired and
	dereferences and frees it. This continues until the timing is just right and
	both server list entries can be found. Note that these connection attempts can
	take a minute or so each because the server does not exist and Windows is
	relying on a time-out to determine this.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0, Terminal Server Edition,
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time               Size       File name     Platform
	  --------------------------------------------------------------
	  10/28/1999   11:03 PM        266,576    Rdr.sys       Intel
	  10/28/1999   11:09 PM        510,032    Rdr.sys       Alpha
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	One way to work around the problem is to configure the following registry
	setting:
	
	  HKLM\System\CurrentControlSet\Services\RDR\Parameters
	
	  Value Name: FailedConnectTimeout
	  Data Type: REG_DWORD
	  Data: 0x80 (This is about 120 seconds)
	
	This registry setting does not really solve the problem, but avoids it. The
	second attempt to connect should really be locating the server list entry rather
	than reattempting the connection. The redirector code has been changed to
	prevent the need for the futile second connection attempt.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The length of the hang changes depending on the WINS configuration and the name
	resolution used by the destination server and Terminal Server. If the
	destination server's IP address cannot be resolved, the hang occurs for less
	than 2 minutes.
	
	If the destination server's IP address resolves successfully, Terminal Server
	then attempts a connection. Address Resolution Protocol (ARP) takes about 50
	seconds for each unsuccessful attempted connection, causing the program to hang
	for more than 20 minutes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
