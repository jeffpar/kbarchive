---
layout: page
title: "Q309650: SMS: Error Message: There Are No Forms Available"
permalink: /kb/309/Q309650/
---

## Q309650: SMS: Error Message: There Are No Forms Available

	Article: Q309650
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Mifwin.exe tool after you install the Microsoft BackOffice
	Resource Kit version 4.5, you may receive the following error message:
	
	  There are no forms available
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy the following files from the BackOffice Resource Kit 4.5 to the
	  Windows\Ms\SMS\Noidmifs folder:
	
	   - Mifwin.exe
	   - _mif.dll
	   - Uinfo.xnf
	
	  You can do this by creating a package from an SMS Installer script that
	  contains the files (or a variety of other ways), and then creating an
	  advertisement that targets the clients. The initial advertisement can also
	  run the Mifwin.exe tool to bring up the form for the user to fill out.
	
	  NOTE: The SMS version 1.2 files of the same name will not work with SMS
	  version 2.0.
	
	2. Create an advertisement to run the Windows\Ms\SMS\Noidmifs\Mifwin.exe program
	  on the client whenever an update to the user information is needed.
	
	  A Uinfo.mif file will be created or updated whenever the form is saved, and a
	  User Information section will be created under the Hardware section of the
	  Resource Explorer for the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
