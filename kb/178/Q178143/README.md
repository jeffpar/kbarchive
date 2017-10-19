---
layout: page
title: "Q178143: SMSINST: Installer Script Is Limited to 8,192 Lines"
permalink: /kb/178/Q178143/
---

## Q178143: SMSINST: Installer Script Is Limited to 8,192 Lines

	Article: Q178143
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:1.2
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Repackage option in the Installation Expert or add
	script lines manually in the Systems Management Server Installer script editor,
	you may receive an access violation error if the script exceeds 8,192 lines
	displayed in the script editor. An IPF script file of 1,141,000 bytes contains
	approximately 8,192 lines.
	
	CAUSE
	=====
	
	The Systems Management Server Installer has a design limit of 8,192 script line
	items imposed in version 1.0. This includes the number of lines in the Mainline
	script in combination with the lines from all Include scripts. It may be
	difficult to assess how many lines a Repackage is actually adding to a script.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 (Systems Management Server Installer version 1.0). We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If an access violation error does occur during a repackage, use the following
	steps to troubleshooting the problem:
	
	1. When you attempt to repackage the application again, click the Change button
	  on the Repackage Application dialog box to display the Repackage Advance
	  Settings dialog box.
	
	2. Attempt to ignore files (or directories) if the application may try to create
	  a large number of files.
	
	3. Repackage the application.
	
	If the repackage is successful, use the script editor to modify "Install File(s)"
	actions which installs a single file, and where possible, change them to use
	wildcards to install multiple files. This will reduce the number of files the
	script uses.
	
	
	Additional query words: prodsms AV
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
