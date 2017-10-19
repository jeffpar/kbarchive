---
layout: page
title: "Q214983: Skipinv.exe Fails to Compensate for Change of Month"
permalink: /kb/214/Q214983/
---

## Q214983: Skipinv.exe Fails to Compensate for Change of Month

	Article: Q214983
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbInventory kbsmsUtil
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Skipinv.exe is a utility shipped with the Microsoft BackOffice Resource Kit that
	runs on a Systems Management Server client to determine if taking of inventory
	should be skipped. This utility might fail to recognize when the last inventory
	was taken if that inventory occurred during a previous month but within the
	timeframe specified. For example, if the last inventory was taken on 3/30/99 and
	SKIPINV 10 is executed, inventory should not be taken until 4/9/99. But on
	4/1/99, Skipinv.exe allows inventory to be taken because it incorrectly accounts
	for the month change.
	
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
	
	The English version of this fix should have the following file attributes (or
	later):
	
	Date      Time    Version      Size    File name     Platform
	-------------------------------------------------------------
	3/18/99 12:58               17,052   Skipinv.exe      x86
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	this specific fix may also contain additional files.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Systems Management Server 1.2.
	
	Additional query words: bork reskit prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbInventory kbsmsUtil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
