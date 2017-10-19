---
layout: page
title: "Q262856: SMS: Invalid Pointer Causes Low-rights Client Install to Fail"
permalink: /kb/262/Q262856/
---

## Q262856: SMS: Invalid Pointer Causes Low-rights Client Install to Fail

	Article: Q262856
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbsms200 kbDiscovery
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a non-administrative user installs the Systems Management Server 2.0 client
	on a Windows NT 4.0 system via the logon installation method, installation fails
	and no client components are installed. When this behavior occurs, the following
	error is present in the Wn_logon.log:
	
	  ASSIGNMENT ***************************************
	  Before adding new sites, there are 1 site keys and 0 sites in the site list
	     Site Key #0: "XXX"
	  Some sites in the registry are not assigned
	  Assessing assignment state from "\SITES\XXX"
	  Calling GetAccessiblePath with \SITES\XXX\ 
	  GetAccessiblePath failed for NAL path \SITES\XXX\. Error = 0x80004003
	  Warning: Unable to Check Assignment for site "XXX" - Invalid pointer
	  After adding any new sites, there are 1 site keys and 0 sites in the site list
	     Site Key #0: "XXX" 
	  Not writing Site List data back to the registry (no new sites)
	  Client is not assigned to any sites - finished.
	   STATUS CALLBACK -  -
	  ReWriteSitesRegistry returning 28931
	  Finished CliEx processing.
	  Unloading CliEx.
	
	CAUSE
	=====
	
	This behavior occurs because the logged on user is not able to create registry
	entries under the HKEY_CLASSES_ROOT registry hive. As a result, Network
	Abstraction Layer (NAL) components are not installed correctly and the client
	installation cannot be completed.
	
	RESOLUTION
	==========
	
	On the system experiencing this problem, verify the Interactive Group has the
	following permissions on HKEY_CLASSES_ROOT and all its subkeys:
	
	- Query Value
	
	- Set Value
	
	- Create Subkey
	
	- Enumerate Subkeys
	
	- Notify
	
	- Delete
	
	- Read Control
	
	NOTE: These are the default permissions for the Interactive Group, but may have
	been changed by an administrator for security purposes.
	
	MORE INFORMATION
	================
	
	When the Systems Management Server client core components are installed, several
	Nal.dll files must be registered under the HKEY_CLASSES_ROOT registry hive. If
	these files are not registered, NAL is unable to resolve paths on behalf of
	System Management Server client components, resulting in failure to install the
	client.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbsms200 kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
