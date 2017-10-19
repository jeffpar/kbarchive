---
layout: page
title: "Q192922: MIFs Not Processed After Applying Hotfix for Q188880"
permalink: /kb/192/Q192922/
---

## Q192922: MIFs Not Processed After Applying Hotfix for Q188880

	Article: Q192922
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After implementing the hotfix described in Microsoft Knowledge Base article
	Q188880, "SMS: OSR2 and Internet Explorer 4.0 Inventoried as Windows 98", delta
	MIF files are not processed. The following errors are displayed in the
	Datalodr.log file (note that the entries that begin with "SQL" only appear if
	SQL Tracing is enabled):
	
	  SQL>>>select * from Operating_System_COMM where datakey = 7
	  SQL>>>>> Done. CGroup::IsGroupInDatabase - MIF type does not
	  match type in Defined Group for Attribute Installation Date in Group
	  MICROSOFT|OPERATING_SYSTEM|1.0 finished processing current machine. Cannot
	  process MIF X00000000.MIF, moving it to BADMIFS
	
	CAUSE
	=====
	
	This problem can occur if inventory has previously been taken using the hotfix
	described in Microsoft Knowledge Base article Q159087, "SMS: Does Not Identify
	Pentium Pro (P6) Processor Speeds". As a result, any delta MIF files created
	using the hotfix mentioned in Q188880, "SMS: OSR2 and Internet Explorer 4.0
	Inventoried as Windows 98", are not processed.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time           Size         File name   Platform
	  ---------------------------------------------------------
	  8/6/98   7:15pm         536,608      Base4.dll   (Intel)
	  8/6/98   7:13pm         917,264      Base4.dll   (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	This fix is included in Systems Management Server (SMS) 1.2 SP4.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Stop the SMS Executive service.
	
	2. Close all Systems Management Server applications (including the SMS
	  Administrator program, SMS Database Manager, and so on).
	
	3. Replace the Base4.dll file in the
	  <SMS_root_directory>\Site.srv\<platform>.bin directory with the
	  hotfixed version.
	
	4. Restart the SMS Executive service.
	
	NOTE: You can perform Step 3 automatically by running Hotfix.exe with the
	Hotfix.ini file that is provided.
	
	Additional query words: prodsms datalodr dataldr dataloader
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
