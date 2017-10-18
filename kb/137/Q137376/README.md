---
layout: page
title: "Q137376: Hierarchy Manager Site Status Codes"
permalink: kb/137/Q137376/
---

## Q137376: Hierarchy Manager Site Status Codes

	Article: Q137376
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Site Hierarchy Manager log file contains site status codes for each site in
	the hierarchy at, and below, the current site. These status codes may need to be
	interpreted to determine the detailed status of a site.
	
	MORE INFORMATION
	================
	
	The following codes are reported by Hierarchy Manager:
	
	Status    Number    Description
	------    ------    -----------
	ACTIVE      1       Site is active & normal
	PENDING     2       Being installed
	FAILED      3       Failed install
	DELETED     4       Delete has been initiated
	UPGRADE     5       Upgrade in progress
	
	The following are detailed site status values used during site installations:
	
	
	Number  Status             Description
	------  ------             -----------
	
	100     NEWSITE            Newsite appears when Hierarchy Manager
	                          first detects a pending new site install.
	
	11      PREINSTJOB_BEGIN   Process where the sender installs the
	                          bootstrap service and verifies
	                          the proposed site's accessibility.
	
	12      PREINSTJOB_END
	
	13      PREINSTJOB_ERROR
	
	21      INSTJOB_BEGIN      Where the system files needed are
	                          packaged and sent to the bootstrap service
	                          on the proposed site.
	
	22      INSTJOB_END
	
	23      INSTJOB_ERROR
	
	31      FIRSTSCJOB_BEGIN   The .CT1 file that will be used to
	                          bring the site up initially.
	
	32      FIRSTSCJOB_END
	
	33      FIRSTSCJOB_ERROR
	
	41      SCJOB_BEGIN        When site properties of a child are changed
	                          in a parent's database, the proposed changes
	                          must be sent down to the child to be
	                          implemented.
	
	42      SCJOB_END
	
	43      SCJOB_ERROR
	
	51      DELETE_WAITONJOB   Site deinstall.
	
	52      DEINSTSITE_WAITONJOB
	
	61      UPGRADE_REQUIRED   Automatically determined based on the build
	                          number reported by the secondary site.
	                          Hierarchy Manager then does an automatic
	                          upgrade if needed.
	
	62      UPGRADE_BEGIN
	
	63      UPGRADE_END
	
	64      UPGRADE_ERROR
	
	These are in the HIWORD of DetailedSTATUS
	-----------------------------------------
	
	  SITEPROP_UPDATE 0x80000000
	  NO_SITE_ADDRESS 0x40000000
	  UIRESERVED1 0x20000000
	  UIRESERVED2 0x10000000
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
