---
layout: page
title: "Q175596: XADM: Importing CAL File Causes High Store.exe CPU Utilization"
permalink: kb/175/Q175596/
---

## Q175596: XADM: Importing CAL File Causes High Store.exe CPU Utilization

	Article: Q175596
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you import a CAL file using a Microsoft Outlook client and you select
	either Replace Duplicates With Items Imported or Do Not Import Duplicate Items,
	the import process becomes progressively slower as each appointment is processed
	in the CAL file, and the information store CPU utilization gradually increases.
	After the import process is complete, the Outlook client will observe slow
	calendar operations (slow to create or modify appointments, and reminder
	notifications are slow to appear).
	
	CAUSE
	=====
	
	The Outlook client is using an inefficient process during the CAL file import to
	determine when duplicate items exist. This causes the information store to
	create structures in the database that impact the performance of operations
	involving the Calendar folder.
	
	The structure created is a view (also called a filter, restricted view, or simply
	a restriction). A restriction can be thought of as a semi-permanent "search"
	query applied to a folder. The creation of a restriction is normal, but should
	be used sparingly because the information store caches restrictions that are
	created. When you create or modify a message in a folder that contains
	restrictions, the information store attempts to determine if any of the
	restrictions for that folder apply to the message. As the number of restrictions
	increases, the CPU overhead for processing the restrictions increases.
	
	The creation of restrictions can be viewed by enabling maximum logging for the
	category of Views under MSExchangeIS - Private in Exchange Admin. With logging
	enabled, an Event ID 1167 will be logged with the creation of each new
	restriction; for example:
	
	  Event ID: 1167
	  Source:MSExchangeIS Private
	  Type:Information
	  Category:Views
	
	  Description:
	  <USER> created a new restricted view on folder Calendar.
	
	WORKAROUND
	==========
	
	The following workarounds can be used to avoid or correct this condition as
	specified.
	
	- If possible, select "Allow Duplicates to Be Created;" this option is selected
	  in the Import Wizard. From the File menu, choose Import, and select the
	  appropriate file type. After you specify the correct filename to import, you
	  will have the option to "Allow Duplicates to Be Created;" this option is
	  listed in a dialog box under "File to Import."
	
	  -OR-
	
	- Run ISINTEG -FIX -PRI. This causes the cached restrictions to be discarded,
	  thereby restoring normal performance of the Calendar folders.
	
	  -OR-
	
	- Lower the value of the Aging Keep Time. The Information Store discards cached
	  restrictions that are unused after the Aging Keep Time has been reached
	  (default is eight days). Lowering the value causes the Information Store to
	  discard these restrictions sooner.
	
	  For additional information on the Aging Keep Time, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	
	  -OR-
	
	- The Information Store will discard all cached restrictions if the "Reset
	  Views" registry value is specified with a value of 0x1 (during the next IS
	  Maintenance process).
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	
	  -OR-
	
	- Move a user mailbox to another server in the Exchange Server site. Cached
	  restrictions are not moved when the user data is moved.
	
	  -OR-
	
	- Obtain the fix mentioned below. This causes the Outlook client to use a
	  different process to query for duplicates. This new process does not cause
	  the creation of cached restrictions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook version 8.01,
	8.02, and 8.03.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: 100% office 97
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
