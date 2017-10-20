---
layout: page
title: "Q242492: SMS: LSM Can Deinstall Domain If PDC Connectivity Lost"
permalink: /kb/242/Q242492/
---

## Q242492: SMS: LSM Can Deinstall Domain If PDC Connectivity Lost

{% raw %}

	Article: Q242492
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple Systems Management Server (SMS) sites share the same Microsoft
	Windows NT domain, Windows clients may begin to deinstall the SMS client
	software after performing Windows Networking Logon Client Installation or
	Discovery. This problem can be sporadic, with clients appearing to reinstall the
	SMS client during a future logon.
	
	When you check the primary domain controller's Smslogon share, the
	Sites\<Sitecode> folder for one or a number of sites that share the logon
	point may be missing or empty. Additionally, the Sitescfg folder on the logon
	point is missing the <Sitecode>_cfg.lcf files for one or more sites.
	
	These symptoms are more likely to occur on a Windows NT domain in which domain
	controllers exist across slow links.
	
	CAUSE
	=====
	
	During an SMS_NT_LOGON_SERVER_MANAGER polling interval performed by one of the
	sites sharing the SMS Logon Point, connectivity to the domain's primary domain
	controller (PDC) was lost for a short period. During the period of
	communications loss, the SMS site server was unable to read the configuration
	files in the PDC's Smslogon\Sitecfg folder. This can cause a site server that is
	not currently the senior site to assume the role of the senior site, and perform
	a domain deinstallation of all sites for which it is unable to find a
	<Sitecode>_cfg.lcf file.
	
	You can consider the domain deinstallation process performed by Logon Server
	Manager to be the same as if Windows Networking Logon Installation or Windows
	Networking Logon had been disabled for some sites in the domain. As part of this
	process, the Sites\<Sitecode> folder on the SMS Logon Point is removed
	from the PDC and the Logon Point configuration is replicated to all other domain
	controllers in the domain. Any clients that run the SMS logon script for any of
	the deleted sites are unable to find the configuration files for the site on the
	SMS Logon Point. The SMS client, being unable to determine the site boundary
	from the site's Netconf.ncf file, begins the deinstallation process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix:
	
	1. Copy the Q242492.exe file from the disk on which you received it to a share
	  on your network. This is an SMS Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run the executable file that you copied in step 1 and follow the directions
	  in the wizard.
	
	Additional query words: prodsms LSM
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
