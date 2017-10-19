---
layout: page
title: "Q181759: SMSINST: Edit INI File Is Limited to 30720 Characters"
permalink: /kb/181/Q181759/
---

## Q181759: SMSINST: Edit INI File Is Limited to 30720 Characters

	Article: Q181759
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message is displayed when clicking OK on the Edit INI File
	Settings dialog box in either the Script Editor or Installation Expert views:
	
	  Please enter no more than 30720 characters.
	
	CAUSE
	=====
	
	The .ini file that you are trying to edit contains more than 30,720 characters.
	The Edit INI File option is limited to 30,720 characters.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next version of Systems Management Server
	Installer. The hotfix should have the following timestamp:
	
	  2/23/98      7:25pm      2,130,765 Smsinstl.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
