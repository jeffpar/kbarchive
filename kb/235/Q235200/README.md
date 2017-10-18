---
layout: page
title: "Q235200: SMS: Err Msg Using W95to98.inf to Upgrade to Windows 98 SE"
permalink: kb/235/Q235200/
---

## Q235200: SMS: Err Msg Using W95to98.inf to Upgrade to Windows 98 SE

	Article: Q235200
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSo
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you advertise a package to upgrade a client from Microsoft Windows 95 to
	Microsoft Windows 98 Second Edition (SE) by using the W95to98.inf file, you may
	receive the following error message during the upgrade process:
	
	  The file 'Driver21.cab' on 11 cannot be
	  found.
	
	  Setup could not find a file on the specified
	  path. If the path appears below, make sure it
	  is correct. Click OK to try copying again.
	
	You can click any of the available buttons (OK, Skip File, Browse, or Cancel),
	but the upgrade is not completed successfully.
	
	CAUSE
	=====
	
	This behavior occurs because the Driver21.cab file is not included in Windows 98
	SE.
	
	WORKAROUND
	==========
	
	Copy the Driver21.cab file from the original version of Windows 98 to the
	Microsoft Systems Management Server (SMS) package source directory. The upgrade
	can now be completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
