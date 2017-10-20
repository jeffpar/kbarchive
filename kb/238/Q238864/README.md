---
layout: page
title: "Q238864: Windows 98/95 Clients Hang or Become Unstable After SP1 Upgrade"
permalink: /kb/238/Q238864/
---

## Q238864: Windows 98/95 Clients Hang or Become Unstable After SP1 Upgrade

{% raw %}

	Article: Q238864
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui win95 win98 kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Systems Management Server Service Pack 1 (SP1) to a site with
	Windows 95 or Windows 98 clients, the client computers may stop responding
	(hang) at logon or during normal use. Note that this behavior is more noticeable
	with the Windows 95 client computers.
	
	CAUSE
	=====
	
	This problem can occur because the Systems Management Server client upgrade is
	unable to replace files in use on the Windows 98/95 client computers. Because of
	this, you may need to restart the client computer multiple times to upgrade
	successfully, and if you restart too soon after logon, the upgrade may not be
	successful.
	
	This problem can also occur if the client computer has upgraded core components
	but is running pre-SP1 optional components. When this occurs, the client
	computer may stop responding or generate an application exception error in one
	or more components, including but not limited to the Smsmon32.exe file of the
	Clisvc95.exe file.
	
	NOTE: This may happen if the Logon Point server is upgraded but the client CAP
	server is not upgraded to SP1. For additional information, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q236596 SMS: Client Components Fail to Install with SMS 2.0 SP1
	
	RESOLUTION
	==========
	
	To work around this problem, manually uninstall and then reinstall the client.
	
	To prevent this problem from occurring, verify that your Windows 98/95 clients
	are uninstalled before applying the service pack. You can uninstall clients by
	using either of the following methods:
	
	Method 1
	--------
	
	Disable the Windows NT Logon Installation Method and then run the 20clicln.bat
	file or use the Smsman command with the /u parameter, for example "smsman /u"
	(without the quotation marks).
	
	Method 2
	--------
	
	To uninstall without any manual intervention:
	
	1. Remove the IP subnets from the site boundaries but leave the Windows
	  Networking Logon Installation Method enabled.
	
	  NOTE: If large numbers of Windows 98/95 client computers are currently
	  affected by this problem, it is recommended to leave Windows NT Logon
	  Installation Method enabled and remove the subnet boundaries for 2 or more
	  days so clients can completely uninstall. The number of days needed depends
	  on the number of remote users and the probability of computers being missed
	  because they are not currently running. When the boundaries are removed, it
	  is also recommended to ask your user community to shut down their machines at
	  night until the majority of clients are uninstalled. Also, to determine the
	  client's exact state, client computers should be restarted 1-3 times before
	  reinstalling the SP1 SMS client software.
	
	2. After the clients are uninstalled, upgrade the site, permit all site
	  computers to be upgraded automatically, and then 2 subnet boundaries can be
	  added back (one at a time). After you do so, the clients should be properly
	  reinstalled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To determine the exact uninstallation state and if there are problem client
	computers remaining:
	
	1. Run the Status Message Queries for "Clients that failed to uninstall
	  <component name>" where <component name> is the name of the
	  individual component:
	
	  a. Start the SMS Administration console, and then expand the System Status
	     branch to view the Status Message Queries node.
	
	  b. Right-click the query, and then click Show Messages.
	
	  c. Click Specify, and then type the site code.
	
	  d. Click "Select Date and Time", and then click a date at least 2 weeks ago.
	     Note that you may have to make it longer than 2 weeks, depending on when
	     clients were removed from the boundaries.
	
	2. View the list to find the client computers, and then determine what their
	  current state is by viewing the Components tab in the Systems Management tool
	  in Control Panel.
	
	3. Run the Status Message Query to look for clients that uninstalled the base
	  components, and then verify on a few computers that they are actually
	  uninstalled.
	
	
	For related information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server Service Pack
	
	  Q238865 SMS: SMSMon32 Process Hangs on Client After Applying SMS 2.0 SP1
	
	  Q237543 Client Upgrade Considerations in Service Pack 1
	
	  Q236596 Client Components Fail to Install After Applying SMS 2.0 SP1
	
	Additional query words: prodsms smssetup lock gpf fail smsfaqtop
	
	======================================================================
	Keywords          : kbnetwork kbui win95 win98 kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbSMS200
	Version           : WINDOWS:95; winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
