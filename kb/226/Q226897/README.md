---
layout: page
title: "Q226897: SMS: Duplicate COMM &amp; SPEC Caused by Failed Child Attachment"
permalink: /kb/226/Q226897/
---

## Q226897: SMS: Duplicate COMM &amp; SPEC Caused by Failed Child Attachment

	Article: Q226897
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbDatabase kbServer kbsms120 kbsms120bug kbDataLoader kbInventory
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft SQL Server administration tools to directly view the
	contents of the Systems Management Server (SMS) database, there may be duplicate
	values in the COMM and SPEC tables. You may also notice tables that start with
	underscores, such as the following:
	
	  _User_Information_COMM
	
	CAUSE
	=====
	
	When a child site sends its inventory to a parent site on the initial attachment
	or after running PREINST /SYNCPARENT, the *.UPD directory may not be processed
	at the parent site. This behavior leaves many of the NextCommonKey and
	NextSpecificKey values in the GroupMap table set incorrectly. Normal Management
	Information Format (MIF) processing that occurs afterwards results in the
	creation of duplicate datakeys in the COMM and SPEC tables.
	
	When the *.UPD directory is not processed completely, there may be tables in the
	SMS database that begin with an underscore, as in the example in the "Symptoms"
	section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbDatabase kbServer kbsms120 kbsms120bug kbDataLoader kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
