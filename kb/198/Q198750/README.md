---
layout: page
title: "Q198750: SMSINST: HKEY_USERS - User Specific Key Is Repackaged"
permalink: kb/198/Q198750/
---

## Q198750: SMSINST: HKEY_USERS - User Specific Key Is Repackaged

	Article: Q198750
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms120 kbsmsInst
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Repackaging feature of Systems Management Server Installer to
	capture registry changes, the Repackager captures user specific entries under
	HKEY_USERS\<sid>, where <sid> is the globally unique Windows NT
	security identifier (SID) of the user account logged in during the Repackage
	operation.
	
	WORKAROUND
	==========
	
	Exclude the HKEY_USERS hive from being scanned during the Repackage operation by
	completing the following steps:
	
	1. From Installation Expert, choose Repackage.
	
	2. From the Repackage Installation dialog box, click Change.
	
	3. In the Repackage Advanced Settings dialog box, click the Registry tab.
	
	4. In the top left Explorer window, expand the HKEY_USERS tree until you see a
	  SID-specific entry similar to the following example:
	
	  S-1-5-21-124524958-708259337-1543119820-8585
	
	5. Highlight this entry and click Add Tree. This adds the tree to the keys to
	  ignore list on the bottom left. All subkeys and values within this item will
	  not be captured during the Repackage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0 and 2.0.
	
	MORE INFORMATION
	================
	
	Capturing changes in this tree or subtrees is not necessary or useful because
	the Repackage operation captures the duplicate registry changes for
	HKEY_CURRENT_USER, which is the actual instance of that same current user's
	registry hive. Also, the SID-specific keys will not be correctly written to a
	target computer that runs the resulting Systems Management Server Installer
	executable script because that SID may not necessarily exist on the target
	computer.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
