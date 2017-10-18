---
layout: page
title: "Q301091: HOW TO: Import a Table into a Windows CE ADOCE Database by Using"
permalink: kb/301/Q301091/
---

## Q301091: HOW TO: Import a Table into a Windows CE ADOCE Database by Using

	Article: Q301091
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbGrpDSVB kbAudDeveloper kbHOWTOmaster
	Last Modified: 23-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- How to Import a Table into an ADOCE Database
	- Additional Information
	
	- REFERENCES
	
	SUMMARY
	=======
	
	With Microsoft(r) ActiveSync(r) 3.1 and the ActiveX(r) Data Objects (ADO) for
	the Microsoft Windows(r) CE operating system (ADOCE) 3.1 installed, you can
	manually import selected tables from Microsoft Access .mdb files or from Open
	Database Connectivity (ODBC) sources to a Windows CE-based device. This is
	convenient if you update data in a single table in a database. This article
	describes how to import a table to an ADOCE database.
	
	Requirements
	------------
	
	This list outlines the recommended hardware, software, network infrastructure,
	and service packs that you will need:
	
	- Microsoft Access 97, Microsoft Access 2000, or Microsoft SQL Server(tm)
	- Microsoft ActiveSync 3.1
	- Microsoft Windows CE-based device
	
	How to Import a Table into an ADOCE Database
	--------------------------------------------
	
	With Microsoft ActiveSync 3.1 and the ADOCE control installed, you can manually
	import selected tables from Microsoft Access .mdb files to a Windows CE-based
	device. It is faster to transfer selected tables in a database than to transfer
	the contents of an entire database. In the "Import from Database to Mobile
	Device" dialog box, you can select which tables and fields to convert to ADOCE
	databases.
	
	To import a Microsoft Access table and field to a device, follow these steps:
	
	1. Connect the device to the desktop computer, and open ActiveSync 3.1.
	
	2. On the Tools menu, click "Import Database Tables".
	
	3. In the Open dialog box, select the Microsoft Access .mdb file that contains
	  the table that you want to import.
	
	4. In the "Import from Database to Mobile Device" dialog box, select the check
	  box for the table and field that you want to import, and clear the check
	  boxes for the tables and fields that you do not want to import.
	
	5. Select the Read-Only check box for tables that you want to make read-only.
	
	6. Select the "Overwrite existing tables and/or data" check box to replace
	  tables on the device that have the same name as the tables in the .mdb file.
	
	7. Click OK to begin the conversion. You can also initiate the conversion by
	  dragging the .mdb file to the device icon in the ActiveSync Mobile Devices
	  window. This replaces steps 2 and 3 in the procedure.
	
	You may also choose to import tables from an ODBC data source. To import data
	from an ODBC data source into a device, follow these steps:
	
	1. Connect the device to the desktop computer, and open ActiveSync 3.1.
	
	2. On the Tools menu, click "Import Database Tables".
	
	3. In the Open dialog box, in the Files of Type list box, click ODBC Database.
	
	4. Select an ODBC data source.
	
	5. In the "Import from Database to Mobile Device" dialog box, select the check
	  box for the table and field that you want to import, and clear the check
	  boxes for the tables and fields that you do not want to import.
	
	6. Select the Read-Only check box for tables that you want to make read-only.
	
	7. Select the "Overwrite existing tables and/or data" check box to replace
	  tables on the device that have the same name as the tables in the database
	  file.
	
	8. Click OK to begin the conversion.
	
	Additional Information
	----------------------
	
	The "Import from Database to Mobile Device" dialog box includes the following
	features:
	
	- "Select the tables and fields to copy" tree view:
	
	  This area of the dialog box provides a hierarchical view of the tables and
	  fields in the Access database that are selected for conversion. To copy a
	  table or field to a device, select the check box by the field name or table
	  name. During the conversion process, each selected Access table becomes a
	  separate database in the Databases folder of a Windows CE-based device. By
	  default, all fields except OLE Object fields are automatically selected for
	  conversion.
	
	  All tables list an extra Read-Only field that enables you to make the database
	  table read-only on the device.
	
	- "Overwrite existing tables and/or data" check box:
	
	  If you select this check box, ADOCE replaces an existing table with a
	  converted table if the tables share the same name. If you do not select this
	  check box, the converter does not overwrite an existing table. Instead, the
	  converter attempts to create a new name for the converted table by appending
	  a number, 0 through 9, to the end of the table name. If ADOCE cannot generate
	  a unique table name, a dialog box appears to indicate that the table
	  conversion has failed.
	
	- Default button:
	
	  Click Default to select the default fields for conversion. This automatically
	  selects all fields, except OLE Object fields, for conversion and clears the
	  Read-Only fields. The defaults apply to all tables in the .mdb file.
	
	- OK and Cancel buttons:
	
	  Click OK button to start the conversion of the selected tables. Click Cancel
	  to quit the conversion.
	
	For each .mdb file that is imported, the converter generates a log file named
	Db2ce.txt in the partner folder for the device, usually in C:\Program
	Files\Windows CE Services\Profiles\<devicename> folder.
	
	REFERENCES
	==========
	
	For more information, see the Embedded Developer Documentation on MSDN at:
	
	  http://msdn.microsoft.com/library/wcedoc/embedanchor.htm
	
	You can download ActiveSync 3.1 from the following Microsoft Web site:
	
	  http://www.microsoft.com/mobile/pocketpc/downloads/activesync.asp
	
	You can download ADOCE 3.1 from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/code/sample.asp?url=/msdn-files/027/001/491/msdncompositedoc.xml
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbGrpDSVB kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
