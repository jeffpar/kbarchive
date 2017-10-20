---
layout: page
title: "Q200918: SMSINST: The Application or DLL OLE2.DLL is Not a Valid NT Image"
permalink: /kb/200/Q200918/
---

## Q200918: SMSINST: The Application or DLL OLE2.DLL is Not a Valid NT Image

{% raw %}

	Article: Q200918
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsmsInst
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is encountered when running a Systems Management Server
	Installer executable:
	
	  Bad Image - The application or DLL OLE2.DLL is not a valid NT image.
	
	This error message can reference another .DLL file.
	
	CAUSE
	=====
	
	This occurs if there is already a registered copy of the DLL on the system.
	
	WORKAROUND
	==========
	
	There are four possible workarounds:
	
	- Remove any occurrences of the self-registering files from the Installer
	  script if they were incorrectly captured during a repackage. Then repackage
	  and test. You can check the Install.log for information on any self
	  registering files.
	
	- Delete the pre-existing version of the DLL on the target clients. This will
	  help eliminate possible conflicts during the package installation.
	
	- List the affected files in the Installer including Advanced Configuration,
	  Options, and "System DLLs to exclude from Watch Application" and repackage.
	  This will keep the Installer from including the problem files. This solution
	  is not ideal if you are using this package to install updated files.
	
	- Switch from 32-bit to the 16-bit version of Installer. This message should
	  not occur when using the 16-bit version of Installer.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
