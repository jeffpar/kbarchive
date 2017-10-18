---
layout: page
title: "Q153108: Errors in Appman.log After Running NADRESET"
permalink: kb/153/Q153108/
---

## Q153108: Errors in Appman.log After Running NADRESET

	Article: Q153108
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2.
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smsgeneral smsappman smspcm kbArtTypeINF kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2. 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you detach a child site from a parent site and run Nadreset.exe,
	Appman.log will report errors similar to the following:
	
	  ERR ##> Error getting package <package id> from source (SQL).
	
	If SQL tracing is turned on the error appears after a select statement to the
	Packages table querying the package ID. A query to the packages table shows that
	the package no longer exists in the database.
	
	CAUSE
	=====
	
	Applications Manager looks in the registry in the HKEY_LOCAL_MACHINE subtree at
	the following subkey:
	
	  \Software\SMS\Components\SMS_DESPOOLER\Master Packages
	
	for the list of packages to search for in the database. Nadreset.exe does not
	delete the package keys from the registry although it does remove them from the
	database.
	
	RESOLUTION
	==========
	
	WARINING: Using Registry Editor can cause serious, system-wide problems that may
	require you to reinstall Windows NT to correct them. Microsoft cannot guarantee
	that any problems resulting from the use of Registry Editor can be solved. Use
	this tool at your own risk.
	
	Deleting the package ID keys will alleviate the errors in the APPMAN.LOG.
	
	1. Run the Registry Editor (REGEDT32.EXE).
	
	2. Under the HKEY_LOCAL_MACHINE subtree go the following subkey:
	
	  \Software\SMS\Components\SMS_DESPOOLER\Master Packages.
	
	3. Delete the package ID keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smsgeneral smsappman smspcm kbArtTypeINF kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1,1.2.
	
	=============================================================================
	
