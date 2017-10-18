---
layout: page
title: "Q214954: Software Metering Server Is Not Installed If LicMtr Share Exists"
permalink: kb/214/Q214954/
---

## Q214954: Software Metering Server Is Not Installed If LicMtr Share Exists

	Article: Q214954
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up a Software Metering server in Systems Management Server (SMS)
	2.0, the installation may not succeed and the following error message may be
	generated in the Licsvcfg.log file:
	
	  INFO: installation destination = '\\<Servername>\LicMtr'
	  Checking for the existence of a License Server share
	  \\<Servername>\LicMtr
	  ERROR: FAILED TO INSTALL LICENSE SERVER '<Servername>'
	
	CAUSE
	=====
	
	The Software Metering installation process checks for the existence of the
	LicMtr share before installing a Software Metering server. The LicMtr share may
	exist if you previously started to install a Software Metering server but you
	stopped the installation after the LicMtr share was created but before the
	installation process was finished.
	
	WORKAROUND
	==========
	
	Manually delete the LicMtr share. The Software Metering server installation
	process checks the site control file to verify successful installation; if the
	installation was incomplete, the installation is retried automatically retried.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
