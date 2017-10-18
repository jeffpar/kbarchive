---
layout: page
title: "Q246863: The Assignments Are Not Mandatory Over Slow Links Option"
permalink: kb/246/Q246863/
---

## Q246863: The Assignments Are Not Mandatory Over Slow Links Option

	Article: Q246863
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "Assignments are not mandatory over slow links" option in an
	advertisement's properties, some or all of the following symptoms may occur:
	
	- When there is a high-speed connection to the client access point (CAP) and a
	  slow link to the distribution point, the Slownet utility evaluates the
	  network speed against the high-speed connection to the CAP and assigns the
	  advertisement. The advertisement then runs against the distribution point
	  over the slow link.
	
	- When there is a slow link to the CAP and a fast link to the distribution
	  point, the Slownet utility evaluates the link speed to the CAP, and the
	  advertisement is not assigned even though the link speed to the distribution
	  point may be fast.
	
	- If a client is assigned to multiple sites, the advertisement may not be
	  assigned in spite of a fast link to the CAP and the distribution point for
	  the site from which the advertisement originated, which indicates that a slow
	  link is detected.
	
	- If a site server has been rebuilt with a new site code and the clients still
	  have the old site in the site list, advertisements may not be assigned due to
	  slow link detection in spite of a fast link to the new site.
	
	CAUSE
	=====
	
	This behavior is caused by the slow-link detection method used on the Microsoft
	Systems Management Server (SMS) client. The SMS client uses an algorithm to
	evaluate the link speed to the CAP for the first site in its site list. Then it
	uses the results to determine whether an assignment should occur in spite of the
	link speed to the selected distribution point.
	
	In addition, since the client only checks the link speed to the CAP in the first
	site from its site list, a detected slow link to the CAP effectively blocks
	assignment for other sites to which the client has a fast connection. Also, if
	the CAP that the client attempts to use for slow-link detection is offline or
	unavailable, the slow-link detection algorithm reports that the link speed is
	slow and blocks the assignment.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Use collections to control the targeted resources for a given advertisement
	  rather than the "Slow-link detection" option.
	
	- Build additional logic into the package itself to prevent excessive traffic
	  over a slow link.
	
	- Use the Slownet2.exe utility to obtain, test, or set the Slownet threshold
	  speed on the client.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The Slownet2 Command Line Utility
	---------------------------------
	
	Description::
	
	The Slownet2 utility expands the capability of the original Slownet utility by
	enabling a user to obtain, set, and delete a slow network threshold setting for
	a client. This setting overrides any per-site setting that is configured based
	upon a client's site membership.
	
	The Slow Network Threshold Speed registry value name is placed in the following
	registry key.
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\Client\Configuration\Client
	  Properties
	
	Usage::
	
	SlowNet2 [<UNC destination path> | GetThreshold | SetThreshold |
	DelThreshold] ([required speed | 0 for Remote Access Service (RAS) check only])
	(/v)
	
	Parameters::
	
	[<UNC destination path> | GetThreshold | SetThreshold | DelThreshold] must
	be specified.
	
	- <UNC destination path> - the universal naming convention (UNC) path
	  whose speed is to be tested. A connection must be established for this path
	  prior to starting the utility.
	- GetThreshold - query and display the current value of the Slow Network
	  Threshold Speed value name.
	- SetThreshold - use the value specified in param2 as the new threshold. If the
	  Slow Network Threshold Speed value name does not exist in the registry, it is
	  created.
	- DelThreshold - if the Slow Network Threshold Speed value name exists in the
	  registry, it is deleted.
	- ([required speed | 0 for RAS check only]) must be specified for SetThreshold
	  only. If the value is 0 and RemotePath is specified, the utility only
	  performs a RAS connection check. If found, an exit code of 1 is returned,
	  which indicates a slow link. If only RemotePath is specified, the link speed
	  is tested against the utility's default speed of 40,000 bps.
	- (/v) is Optional Verbose mode.
	
	If specified, the utility displays a trace of its actions and results.
	
	Returns::
	
	0 for success or fast (if testing link speed). 1 for unsuccessful or slow (if
	testing link speed).
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
