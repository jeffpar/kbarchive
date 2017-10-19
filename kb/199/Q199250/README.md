---
layout: page
title: "Q199250: SMS: Version 1.2 to 2.0 Secondary Site Upgrade Options"
permalink: /kb/199/Q199250/
---

## Q199250: SMS: Version 1.2 to 2.0 Secondary Site Upgrade Options

	Article: Q199250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles describes the three methods to upgrade a Systems Management Server
	secondary site from Systems Management Server 1.2 to version 2.0 after the
	primary site server has been upgraded to 2.0
	
	MORE INFORMATION
	================
	
	Options for Upgrading a Systems Management Server Secondary Site
	----------------------------------------------------------------
	
	- Download the upgrade from the parent site.
	
	  Select this option when the secondary site does not have an administrator who
	  can perform the upgrade and when the impact on inter-site bandwidth is not a
	  concern. Each site upgrade involves the transmission of approximately 65 MB
	  of data. Concurrent secondary site upgrades should be limited to less than
	  the "maximum concurrent sendings" for "all sites," as set in Systems
	  Management Server Sender Manager.
	
	- Initiate the upgrade from the parent site using source files located at the
	  secondary site.
	
	  Select this option when you want to control the upgrade from the primary site
	  but want to minimize the impact on inter-site bandwidth.
	
	- Upgrade locally at the secondary site server using the Systems Management
	  Server installation CD-ROM.
	
	  Select this option when the secondary site has an administrator who can
	  perform the upgrade or when the impact on inter-site bandwidth is a concern.
	
	If you plan to initiate the upgrade from the parent site but complete the
	installation at the secondary site, make sure the source files are at the
	secondary site. Someone at the secondary site must insert the Systems Management
	Server 2.0 CD-ROM into a drive that is accessible from the secondary site
	server. Alternatively, you can copy all of the files (both i386 and Alpha, even
	if you are using only one of these platforms) to a network drive at the
	secondary site before you begin the upgrade.
	
	NOTE: As soon as you have run the Secondary Site Upgrade Wizard at the primary
	site, the secondary site's properties appear in the details pane when its parent
	site is selected in the console tree. However, the secondary site's properties
	do not appear under the parent site in the console tree until the primary site
	receives the site control file from the upgraded secondary site. This can take
	up to 24 hours.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
