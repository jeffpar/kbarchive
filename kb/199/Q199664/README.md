---
layout: page
title: "Q199664: SMSINST: Cannot Remove More Than Two Sections in .ini File"
permalink: /kb/199/Q199664/
---

## Q199664: SMSINST: Cannot Remove More Than Two Sections in .ini File

	Article: Q199664
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsmsInst
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remove more than two sections from an .ini file using the Edit
	INI File script item, the action might fail. Despite this failure, the script
	successfully removes two sections from the .ini file.
	
	WORKAROUND
	==========
	
	Only delete up to two sections of an .ini file per Edit INI File script item in
	your script. Use multiple Edit INI File script items to remove more than two
	sections from an .ini file. For example, to delete four sections using a single
	script, use two instances of the on Edit INI File script items in your script.
	For each instance, delete no more than two sections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
