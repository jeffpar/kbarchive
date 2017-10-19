---
layout: page
title: "Q222604: Configuring Cached Dfs Referral Expiration Time in Dfs 4.1"
permalink: /kb/222/Q222604/
---

## Q222604: Configuring Cached Dfs Referral Expiration Time in Dfs 4.1

	Article: Q222604
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If the target directory of a Dfs volume is modified, clients do not become aware
	of the change for a whole week, unless they are restarted.
	
	It takes a week because the Cached Dfs Referral Expiration time is one week. In
	some versions of Dfs, this value is hard-coded.
	
	CAUSE
	=====
	
	As documented in the release notes of Dfs 4.1, the "Cached Dfs referral
	expiration has been extended from 5 minutes to 1 week, to improve response times
	and reduce load on the root server." This value is hard-coded, and cannot be
	modified by the user in the base release of Dfs 4.1.
	
	In Dfs 4.0, the cached Dfs referral expiration time was hard-coded to five
	minutes. This ensures that changes are communicated promptly to clients, but it
	can generate significant amounts of Dfs-related network traffic.
	
	In Dfs 4.1, the cached Dfs referral expiration time was changed to a hard-coded
	value of one week. This minimizes the amount of Dfs-related network traffic, but
	changes to Dfs referrals will not be communicated to clients for one week,
	unless the Dfs clients are restarted.
	
	In networks where Dfs references are changed on a regular basis, the new
	expiration time of one week is too long for clients to efficiently reflect the
	changes.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  98/10/28  21:33                 62,096 Dfs.sys       (x86)
	  98/10/28  21:34                106,576 Dfs.sys       (Alpha)
	
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	After applying the fix and before restarting the computer, add the following
	value to the registry to specify the value for the cached Dfs referral
	expiration time:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\DfsHost\volumes
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: TimeToLiveInSecs
	  Data Type: REG_DWORD
	  Value: cached Dfs referral expiration time in seconds
	  Default: 604800 seconds (one week)
	
	4. Quit Registry Editor.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the Dfs clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	You should choose a value for TimeToLiveInSecs that is appropriate for your
	network.
	
	If your Dfs configuration is stable, a large value is recommended to reduce the
	amount of Dfs-related traffic to a minimum. In such static Dfs networks, the
	default value of one week may be perfectly appropriate.
	
	You should only need to consider configuring a smaller value if your Dfs
	configuration is so volatile that the frequency of workstation restarts required
	to access the correct locations through Dfs becomes disruptive to normal
	production work.
	
	The amount of Dfs-related network traffic is directly proportional to the number
	of Dfs clients on your network -- doubling the number of clients will double the
	traffic.
	
	Furthermore, the amount of Dfs-related network traffic is inversely proportional
	to the value chosen for TimeToLiveInSecs -- halving this value will double the
	traffic.
	
	These points should be considered carefully before you modify TimeToLiveInSecs.
	
	It is also recommended that you monitor network traffic volumes after reducing
	the value of TimeToLiveInSecs, using Network Monitor for example, to ensure that
	the amount of Dfs-related traffic is not excessive, and is not impacting network
	performance and throughput.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
