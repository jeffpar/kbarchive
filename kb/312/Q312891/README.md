---
layout: page
title: "Q312891: HOW TO: Synchronize a Computer Database with Pocket Access"
permalink: kb/312/Q312891/
---

## Q312891: HOW TO: Synchronize a Computer Database with Pocket Access

	Article: Q312891
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 2000 
	- Microsoft Access 2002 
	- Microsoft Pocket PC 2002 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Synchronize a Desktop Computer Database to a Pocket PC Device
	- Troubleshooting
	
	SUMMARY
	=======
	
	This step-by-step article describes how to synchronize a computer database with
	Microsoft Pocket Access on a Pocket PC. Pocket Access is a Pocket PC program you
	can use to create and access databases. You can synchronize Pocket Access
	databases on a Pocket PC with Microsoft Access databases on a computer.
	
	Databases can be synchronized between your Pocket PC and desktop computer by
	using Microsoft ActiveSync. Note that by default, the synchronization of
	databases is not enabled. However, it is fairly simple to synchronize a database
	on your computer to a Pocket PC device.
	
	Synchronize a Desktop Computer Database to a Pocket PC Device
	-------------------------------------------------------------
	
	1. Connect the Pocket PC to the desktop computer, and then start ActiveSync.
	
	2. In ActiveSync, click Options on the Tools menu.
	
	3. In the list of mobile devices, click Pocket Access.
	
	4. Click OK. ActiveSync synchronizes information and configures the Pocket PC to
	  accept databases.
	
	5. On the Tools menu, click Options.
	
	6. Click Pocket Access, and then click Settings to view the Database
	  Synchronization Settings dialog box.
	
	7. Click Add to view the Open dialog box. Note that by default, only Microsoft
	  Access databases are listed in the Open dialog box, but you can browse for
	  any other type of ODBC database by clicking the ODBC option in the "Files of
	  Type" box.
	
	8. Find the database on the computer that you want to synchronize, and then
	  click OK to view the "Import from Database to Mobile Device" dialog box.
	
	9. Type a location and file name for the database on your Pocket PC in the "Copy
	  the *.CDB file to this location on your device" box.
	
	10. Use the tree-view of the database to select specific tables and fields to
	  include in the synchronization.
	
	11. Use the "Keep tables synchronized" option if you want to maintain automatic
	  synchronization of the desktop computer and Pocket PC databases.
	
	12. Use the "Overwrite existing tables and/or data" option if you want to copy
	  over existing database information on the Pocket PC.
	
	13. Click OK.
	
	14. ActiveSync copies the database file to the device, and then returns you to
	  the Database Synchronization Settings dialog box.
	
	Troubleshooting
	---------------
	
	Only tables, fields, and indexes are synchronized to the Pocket PC. Also, only
	65,536 records may be synchronized to a Pocket Access database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess2000 kbAccess2002 kbAccess2000Search kbAccess2002Search kbPocketPC2002
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
