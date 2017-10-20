---
layout: page
title: "Q133113: Systems Management Server Site Control File Methodology"
permalink: /kb/133/Q133113/
---

## Q133113: Systems Management Server Site Control File Methodology

{% raw %}

	Article: Q133113
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbHMan kbSCMan kbsmsAdmin smsadmin smshierman smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Systems Management Server Site Control File is an ASCII text file containing
	the complete configuration information for a particular Systems Management
	Server Site Server. The Site Configuration Manager uses this file as its
	exclusive means of input on how to control the Systems Management Server
	Executive, and the rest of the system. Site control files are the primary means
	of communication between the Systems Management Server Administrator, the
	Hierarchy Manager, and the Site Configuration Manager.
	
	MORE INFORMATION
	================
	
	Site control files contain configuration information for a site. The Site Config
	Manager makes the site configuration match, if possible, what is requested in
	the site control file. In other words, the site control file represents the
	desired configuration for a site. The site control files exist in the following
	forms:
	
	  ACTUAL (1)
	  PROPOSED (2)
	  NEWSITE (3)
	  TRANSACTIONS (4)
	  LOCALTRANSACTIONS (6)
	
	The file type is specified by the first integer field in the file after the
	BEGIN_FILE_DEFINITION keyword at the start of every site control file. The
	integer type for each is specified above. This document uses the logical names,
	not the integer values.
	
	Typically, there will be a site control file named SITECTRL.CT0 in the
	SITE.SRV\SITECFG.BOX directory at all times after Setup has completed
	installation of the site server. This file is referred to as the master site
	control file. This file contains a backup of the most recent site control file
	submitted to the Site Configuration Manager. It represents the most recent
	proposed configuration for the site. It is present only for backup, error
	recovery, and documentation purposes and is not used in processing. It can
	usually be used to repair a damaged site configuration. Always make a copy of
	this file before doing any examination or editing, and work with the copy if
	possible.
	
	Site control files are stored in two ways: as actual files in the
	SITE.SRV\SITECFG.BOX and as database images manipulated by the Systems
	Management Server Administrator and the Hierarchy Manager at primary sites. The
	SiteControl table in the SQL database maintains complete images of site control
	files. These are kept in pairs: an ACTUAL and a PROPOSED for each site in the
	database. These are referred to as site control images in this article.
	
	The Site Configuration Manager reads all site control files that have a *.CT1
	extension and uses these files as a basis for reconfiguring the site. Typically,
	these files are PROPOSED files, containing the proposed new configuration for
	the site, which may or may not be possible to implement. TRANSACTIONS or
	LOCALTRANSACTIONS files can also be used to provide specific, one-time
	instructions to the Site Configuration Manager. Actions based on these files may
	be acknowledged after they have been performed, depending on the nature of the
	action.
	
	The Site Configuration Manager replies using a site control file with a *.CT2
	extension. These replies are read by the Hierarchy Manager. These are usually
	ACTUAL Site Control Files, but may also be TRANSACTIONS or LOCALTRANSACTIONS
	file in some cases (during system shutdown and system upgrades).
	
	The Hierarchy Manager reads all files that have a .CT2 extension. These files are
	usually ACTUAL files received from the Site Configuration Manager that contain
	the status of the site after having completed the most recent proposed changes.
	CT2 files may also arrive from other Hierarchy Managers from sites lower in the
	site tree. Hierarchy Managers communicate among each other with .CT2 files to
	signal changes in the site hierarchy.
	
	Files of type NEWSITE are used by the Systems Management Server Administrator and
	by Setup to instruct the Hierarchy Manager to begin creation of a new site,
	either locally or remotely. They remain in the database for emergency recovery
	and history purposes, but are not used during normal processing once the site is
	operational.
	
	Files of type TRANSACTIONS contain specific instructions and not general
	configuration information. They are typically used to instruct other Hierarchy
	Managers up the site tree to make a change in the site hierarchy.
	
	Files of type LOCALTRANSACTIONS are used within a site between the Site Config
	Manager and the Hierarchy Manager or Setup to upgrade or deinstall a site. The
	concept "local" means that the transactions are for use within the site rather
	than between sites.
	
	All Site Control files are created and processed in the SITE.SRV\SITECFG.BOX
	directory. The .CT1 extension indicates an input file for the Site Configuration
	Manager, and a .CT2 extension indicates an input file for the Hierarchy Manager.
	
	Additional query words: config sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbHMan kbSCMan kbsmsAdmin smsadmin smshierman smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
