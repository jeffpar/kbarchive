---
layout: page
title: "Q159297: XADM: High Store.exe CPU Utilization During IS Maintenance"
permalink: kb/159/Q159297/
---

## Q159297: XADM: High Store.exe CPU Utilization During IS Maintenance

	Article: Q159297
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A single thread in the Store.exe process is utilizing 90%-100% of the CPU
	processor time. This high utilization coincides with the start of Microsoft
	Exchange Information Store (IS) Maintenance window (as configured by the IS
	Maintenance Schedule) and does not stop unless the Information Store Service is
	cycled or the computer itself is cycled.
	
	CAUSE
	=====
	
	One of the checks during the IS Maintenance schedule is that of Public Folder
	expires. During the IS maintenance run, the System (or Site) Folders are also
	checked. These include the Offline Address Book, the Schedule+ Free Busy folder,
	and the Organization Forms. In particular, the Schedule+ Free Busy folder has a
	default 7 day expiry on it so it is checked during the expiry period of IS
	Maintenance. The function performing the expiry check on the Schedule+ Free/Busy
	folder encounters a second copy of the folder in the deleted folders table and
	this causes the function to remain in a tight loop causing the high CPU
	utilization.
	
	
	RESOLUTION
	==========
	
	To resolve this issue a rebuild of the Site folders is necessary. To rebuild the
	Site folders, follow these steps:
	
	1. Obtain a copy of the utility Guidgen.exe. This utility is available in the
	  Microsoft Developers Network under the product samples. If you do not have
	  access to this utility, Contact Microsoft Product Support Services. The
	  Guidgen utility will randomly generate a globally unique identifier (UID)
	  that will be used to rebuild the site folders.
	
	2. Run Guidgen and select Option 4, Registry Format.
	
	3. Click New GUID.
	
	4. Copy or write down the new GUID number from the RESULT box. This number is
	  needed in Step 10.
	
	5. Run the Microsoft Exchange Administrator program in "raw" mode. To do this,
	  go to the command line, change to the Exchsrvr\Bin directory, and type "admin
	  /r" (without the quotation marks).
	
	6. Select the Configuration container of the Site you want to rebuild and
	  highlight the Information Store Site Configuration object.
	
	7. Select File, Raw Properties.
	
	8. In the Object Attributes window, scroll down to the Site Folder GUID
	  attribute and select it.
	
	9. Click Editor.
	
	10. Replace the existing GUID number with the one generated in Step 2 (the value
	  should be entered in hexadecimal) and then click OK.
	
	11. Click the SET button. After doing this, make sure the Edit Value and
	  Attribute Value are the same.
	
	12. Click OK to close the dialog box.
	
	13. Stop and restart the Information Store service with the Networks tool in
	  Control Panel.
	
	
	MORE INFORMATION
	================
	
	The re-creation of the Site folders will delete any existing content. To
	re-populate the Site folders with data see below:
	
	Repopulating the Site Folders with Data
	---------------------------------------
	
	Offline Address Book:
	
	To repopulate the offline address book Site Folder:
	
	1. Run the Microsoft Exchange Administrator program.
	
	2. Select the Configuration container and get the Properties on the DS Site
	  Configuration object.
	
	3. Click the Offline Address Book tab and click Generate Offline Address Book
	  Now.
	
	Schedule+ Free Busy Information:
	
	The Schedule+ Free Busy Information Site Folder will be repopulated as users log
	on to Schedule+ and generate changes. During this period some users' Free Busy
	information will be temporarily unavailable.
	
	Organizational Forms:
	
	If there was an Organizational Forms Site Folder, it must be re-created using the
	Microsoft Exchange Administrator program.
	
	1. Run the Microsoft Exchange Administrator program.
	
	2. Click Tools, click Forms Administrator and click New.
	
	Additional query words: spinning
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
