---
layout: page
title: "Q134693: Unable to Delete More than 250 Computers from Ad Hoc Query List"
permalink: kb/134/Q134693/
---

## Q134693: Unable to Delete More than 250 Computers from Ad Hoc Query List

	Article: Q134693
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you try to delete more than 250 computers from an Ad Hoc query result list,
	the SQL server returns the following error message:
	
	  Too many ANDs and ORs in expression (limit 250 per expression level).
	  Try splitting query or limiting ANDs and ORs.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Select less than 250 computers from the Ad Hoc query result list for
	  deletion.
	
	-or-
	
	- If you are using Systems Management Server 1.0, use the DBCLEAN.EXE command
	  for database maintenance.
	
	-or-
	
	- If you are using Systems Management Server 1.1 use the Delete Special option
	  in Systems Management Server Administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms inactive inventory architecture
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
