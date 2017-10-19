---
layout: page
title: "Q215023: Datdupck.exe Finds Duplicates That Datdupcl.exe Does Not Clean"
permalink: /kb/215/Q215023/
---

## Q215023: Datdupck.exe Finds Duplicates That Datdupcl.exe Does Not Clean

	Article: Q215023
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 05-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Datdupck.exe tool in conjunction with the Datdupcl.exe tool,
	Datdupck.exe may list tables that Datdupcl.exe does not attempt to clean.
	
	For example, this is a sample excerpt from the Datdupck.log file:
	
	  3 Duplicate datakeys found in Table: groupxyz_COMM
	
	However, this table is absent from the Datdupcl.log file.
	
	CAUSE
	=====
	
	The missing tables are not for groups that belong to the personal computer
	architecture. The query used by Datdupck.exe does not consider the architecture
	of a group and may list tables for those groups with duplicates that are not in
	the personal computer architecture. Datdupcl.exe cleans only the tables for
	groups that belong to the personal computer architecture.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	For more information about the Datdupck.exe and Datdupcl.exe tools from the
	Microsoft BackOffice Resource Kit, see the following article in the Microsoft
	Knowledge Base:
	
	  Q192859 SMS 1.2 SP4 Includes SMSIDDUP, DATDUPC, and DATDUPCL
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
