---
layout: page
title: "Q256073: SMS: Dataloader Cannot Load MIF After Removing Group Class"
permalink: kb/256/Q256073/
---

## Q256073: SMS: Dataloader Cannot Load MIF After Removing Group Class

	Article: Q256073
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbDatabase kbsms200 kbsms200bug kbDataLoader
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete a custom group class using the DelGrp.exe tool, the Dataloader
	is unable to load a Management Information File (MIF) that contains changed
	attributes for the same group class.
	
	When this occurs, the information from the updated MIF does not appear in the
	Administrators Console.
	
	CAUSE
	=====
	
	This issue can occur because the DelGrp.exe tool does not delete the stored
	procedures associated with the group class.
	
	WORKAROUND
	==========
	
	To work around this issue after you run the DelGrp.exe tool to delete the Group
	Class, manually delete the two stored procedures associated with the Group Class
	that you deleted.
	
	For example:
	
	If you are deleting a group called User_info_DATA, you need to delete the stored
	procedures dUser_info_DATA and pUser_info_DATA.
	
	For information about how to delete a stored procedure, view the books online for
	SQL Server. For SQL 6.5, query on "Drop Procedure". For SQL 7.0, search on "How
	to delete a stored procedure".
	
	If you are planning on adding the custom group class back after making
	modifications to the smsdef.mof that deviate from the original modification,
	then you may need to follow the additional items below to remove the
	architecture. Otherwise, when the new architecture is created, there may be 2
	references created in Resource Explorer; one containing the original
	architecture that will not be displaying any data, the other with the new
	architecture that does display the new data. Because the same group class name
	was used, Delgrp.exe will delete BOTH objects.
	
	1. Make a backup of the SMS server, using the native SMS backup task.
	
	2. Make sure unwanted MIF files are removed from all client machines. (NOIDMIFS
	  directory)
	
	3. Use DELGRP.exe (part of BORK 4.5 in the SMS section) to remove the unwanted
	  tables from SQL server.
	
	4. Through SQL Enterprise Manager, manually removed the associated Stored
	  Procedures, prefixed by 'p' and 'd'. (right click and delete) This is per the
	  workaround in Q256073.
	
	5. Run CONV20.exe (This will look at the SMS database and verify/repair its
	  structure.)
	
	6. Stop the WMI service.
	
	7. Delete all files located in the c:\winnt\system32\wbem\repository directory.
	
	8. Restart the WMI service.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When Dataloader processes a new MIF that contains information for the deleted
	Group Class name and you have changed the format of the data, the tables for the
	group class are created again but the associated stored procedures are not. The
	earlier stored procedures still exist.
	
	The stored procedures become out of sync with the tables structure and the
	Dataloader cannot update the MIF information.
	
	For example, you may see the following text in the Dataloader log:
	
	CDefinedGroup::InsertDefinedAttribute - could not find table  $$<SMS_INVENTORY_DATA_LOADER>
	SQL>>>rollback transaction  $$<SMS_INVENTORY_DATA_LOADER>
	SQL>>>>> Done.  $$<SMS_INVENTORY_DATA_LOADER>
	CGroup::DefineAttributes - couldn't defined attribute  $$<SMS_INVENTORY_DATA_LOADER>
	CGroup::DefineGroupAndAttributes - couldn't define attributes for MICROSOFT|INVENTORY_FILES|1.0  $$<SMS_INVENTORY_DATA_LOADER>
	CMachineSource::InsertMachine - could not validate machine  $$<SMS_INVENTORY_DATA_LOADER>
	~Cannot process MIF XGY6OD1Q5.MIF, moving it to D:\SMS\inboxes\dataldr.box\BADMIFS\IUSH4YZ5.MIF  
	
	In some instances, when the group class is re-created, duplicate stored
	procedures may exist. Changes to the name of the MIF or the data collected by
	the MIF will result in changes to the table name and table contents
	respectively. To determine which stored procedure should be retained, examine
	the properties of the stored procedure for reference to the tables being
	queried.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbDatabase kbsms200 kbsms200bug kbDataLoader 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
