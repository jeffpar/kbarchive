---
layout: page
title: "Q227020: Software Metering Installation Fails to Complete Installation"
permalink: kb/227/Q227020/
---

## Q227020: Software Metering Installation Fails to Complete Installation

	Article: Q227020
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbsms200 kbsms200bug
	Last Modified: 16-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server version 2.0, when you install the Software Metering
	components, the installation may fail if the NTFS drive from which the files are
	being installed is compressed.
	
	If you enable logging, this failure is logged in the Licsvcfg.log file located in
	the \SMS\LOGS folder. Log entries include the following error message:
	
	  Copying C:\SMS\bin\i386\ProductDB.Dll to
	  \\<server>\LicMtr\ProductDB.Dll...
	  The file installation failed. The license server manager is attempting to
	  clean up the target server.
	
	The \\<server>\LicMtr share is created but no files are successfully
	copied. During license server manager cleanup, the LicMtr share is removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
