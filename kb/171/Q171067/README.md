---
layout: page
title: "Q171067: SMSINST: Error Creating Registry Keys with Empty Values"
permalink: /kb/171/Q171067/
---

## Q171067: SMSINST: Error Creating Registry Keys with Empty Values

	Article: Q171067
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsms120bug kbsmsInst
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are logged on as an administrator and try to run an executable from the
	Systems Management Server Installer, the following error message appears:
	
	  **
	  ERROR
	  You do not have access to make the required system configuration
	  modifications. Please rerun this installation from an administrators
	  account.
	  **
	
	CAUSE
	=====
	
	This problem may occur when the Systems Management Server Installer attempts to
	write to the client's registry and the configuration requires that the registry
	contain a subkey that actually has no values in it. This may occur with most
	Windows NT services that are installed.
	
	WORKAROUND
	==========
	
	Add a value with no data, to allow the subkey to be copied and installed, as in
	the following example:
	
	  MainKey
	  SubKey
	  Value = Keep; REG_SZ; Data=""
	
	STATUS
	======
	
	This problem was corrected in the latest version of the Systems Management
	Server Installer.
	
	MORE INFORMATION
	================
	
	To obtain the latest version of the Systems Management Server Installer, go to
	http://www.microsoft.com/smsmgmt/downloads/install.asp.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms120bug kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
