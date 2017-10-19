---
layout: page
title: "Q177837: SMSINST: SMS Installer Ignores REG_NONE Key Changes"
permalink: /kb/177/Q177837/
---

## Q177837: SMSINST: SMS Installer Ignores REG_NONE Key Changes

	Article: Q177837
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Installer does not detect registry changes for the
	REG_NONE value type and does not create registry values for REG_NONE when an
	application is repackaged. REG_NONE is a registry value type created by the
	registry APIs.
	
	WORKAROUND
	==========
	
	Use either of the following methods to work around this problem.
	
	Method 1
	--------
	
	1. After the software is installed you can export the registry tree to a text
	  file.
	
	2. Create a batch file that calls REGINI to import the text file into the
	  registry.
	
	3. Create a Systems Management Server package to distribute the files to the
	  clients.
	
	Method 2
	--------
	
	Manually script and compile a separate Systems Management Server Installer
	package to update the registry with the changes that were not added to the
	script during the Repackage operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms winnt win95 smsinst empty
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
