---
layout: page
title: "Q213241: SMS: Software-Metering Server Is Not Fully Uninstalled"
permalink: /kb/213/Q213241/
---

## Q213241: SMS: Software-Metering Server Is Not Fully Uninstalled

	Article: Q213241
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbtool kbServer kbsms200bug kbsmsMeter kbsms200preSP3fix
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to uninstall a software-metering server, the uninstallation
	process may not work. When this occurs, many of the software-metering server
	components may remain on the server, and the partially-uninstalled server is
	still listed in the software-metering database tables for the site. Also,
	License Server Manager will continually try to uninstall the software-metering
	server, and you can view this in the Licsvcfg.log file in the \SMS\Logs folder
	on the site server.
	
	CAUSE
	=====
	
	The two most common causes of this problem are:
	
	- The LicMtr share has been removed from the software-metering server before it
	  is uninstalled.
	
	- The share that contains the software-metering database files is removed
	  before you try the uninstallation process.
	
	Under either of the preceding conditions, License Server Manager may try to
	continuously uninstall the server.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do not remove the LicMtr share or the share that
	contains the software-metering database files on a software-metering server
	before you uninstall that server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbServer kbsms200bug kbsmsMeter kbsms200preSP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
