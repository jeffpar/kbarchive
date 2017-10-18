---
layout: page
title: "Q130898: Using Batch Files in Sharing Packages"
permalink: kb/130/Q130898/
---

## Q130898: Using Batch Files in Sharing Packages

	Article: Q130898
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a batch file as the command line executable for a sharing package in
	Microsoft System Management Server, the "Requires Drive Letter" option should be
	used. If "Runs with UNC Name" is used, the program item gives the following
	error upon execution:
	
	  Could not start application with command line 'batch filename'.
	  File not found."
	
	MORE INFORMATION
	================
	
	Windows 3.x clients do not process batch files when they are executed through a
	Universal Naming Convention (UNC) connection. When the batch file is executed,
	an MS-DOS virtual machine is opened to process the batch file. However, the
	virtual machine does not support running batch files through UNC connections and
	is unable to continue.
	
	If instead, the package is defined to use a drive letter, the client will assign
	a drive letter to the package share which will be available to the virtual
	machine for processing the batch file.
	
	Additional query words: sms share prodsms
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
