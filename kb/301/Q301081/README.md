---
layout: page
title: "Q301081: HOW TO: Export a Table from Windows CE by Using eMbedded Visual"
permalink: /kb/301/Q301081/
---

## Q301081: HOW TO: Export a Table from Windows CE by Using eMbedded Visual

	Article: Q301081
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
	- How to Export a Table from ADOCE to Microsoft Access
	- Additional Information
	
	- REFERENCES
	
	SUMMARY
	=======
	
	With Microsoft(r) ActiveSync(r) 3.1 and ActiveX(r) Data Objects (ADO) for the
	Microsoft Windows(r) CE operating system (ADOCE) 3.1 installed, you can manually
	export tables from a Windows CE-based device to a desktop computer. This is
	convenient if you update data in a single table in a database. This article
	describes the steps to export tables from a Windows CE device to a Microsoft
	Access database.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure, and service packs that you will need:
	
	- Microsoft Access or Microsoft SQL Server
	- Microsoft ActiveSync 3.1
	- Microsoft Windows CE-based device
	
	How to Export a Table from ADOCE to Microsoft Access
	----------------------------------------------------
	
	With Microsoft ActiveSync 3.1 and the ADOCE control installed, you can manually
	export tables from a Windows CE-based device to a desktop computer. This is
	convenient if you update data in a single table in a database, or if you want to
	save time. It is faster to transfer selected tables in a database than to
	transfer the contents of an entire database. In the "Export from Mobile Device
	to Database" dialog box, you can choose which tables on the device to convert to
	a Microsoft Access database.
	
	To export an ADOCE database, follow these steps:
	
	1. Connect the device to the desktop computer, and open the ActiveSync 3.1
	  window.
	
	2. On the Tools menu, click "Export Database Tables". The "Export from Mobile
	  Device to Database" dialog box appears, which displays the ADOCE tables on
	  the connected device.
	
	3. To select a Microsoft Access .mdb file, click Browse. You can also type the
	  path and file name in the Location text box. ADOCE creates the file if it
	  does not exist.
	
	4. Select the check boxes for the tables that you want to export, and clear the
	  check boxes for the tables that you do not want to export. ADOCE places the
	  selected tables in the same .mdb file.
	
	5. Select the "Overwrite existing tables and/or data" check box to replace
	  tables in the .mdb that have the same names as the selected ADOCE tables.
	
	6. Click OK to begin the conversion.
	
	For each .mdb file that is exported, the converter generates a log file named
	Ce2db.txt in the partner directory for the device, which is usually in the
	C:\Program Files\Windows CE Services\Profiles\Devicename folder.
	
	To export data from a device into an Open Database Connectivity (ODBC) data
	source, follow these steps:
	
	1. Connect the device to the desktop computer, and open the ActiveSync 3.1
	  window.
	
	2. On the Tools menu, click "Export Database Tables".
	
	3. In the "Export from Mobile Device to Database" dialog box, click Browse.
	
	4. In the "Choose Your New Database's Filename" dialog box, in the Save as Type
	  combo box, click ODBC Database.
	
	5. Select an ODBC data source.
	
	6. Select the check boxes for the tables that you want to export, and clear the
	  check boxes for the tables that you do not want to export.
	
	7. In the "Choose Your New Database's Filename" dialog box, select the
	  "Overwrite existing tables and/or data" check box to replace tables in the
	  existing database that have the same names as the selected ADOCE tables.
	
	8. Click OK to begin the conversion.
	
	For each .mdb file that is exported, the converter generates a log file named
	Ce2db.txt in the partner directory for the device, which is usually in the
	C:\Program Files\Windows CE Services\Profiles\Devicename folder.
	
	Additional Information
	----------------------
	
	The following options are available in the "Export from Mobile Device to
	Database" dialog box:
	
	- Location text box:
	
	  This text box specifies the Microsoft Access .mdb file in which to store the
	  selected tables. Type a path and file name, or use the Browse button to
	  select an existing file or change directories. The default database location
	  and name is <Device Partner Folder>\Dbxx.mdb, where the number xx
	  represents the next available number. If the file that is specified in the
	  Location text box does not exist, ADOCE creates one.
	
	- "Select the tables to copy" list box:
	
	  This list box displays every table that ADOCE can read, except the ADOCE
	  system tables. To select the table for conversion, select the check box by
	  the table name. ADOCE places the selected tables in the same .mdb file.
	
	- "Overwrite existing tables and/or data" check box:
	
	  When you select this check box, if you have tables in the selected database
	  with the same name as tables that appear in the window, the existing tables
	  are replaced with the converted ones. If you clear this check box, the
	  converter generates an error if it finds a table with the same name. You
	  cannot merge the data in an ADOCE table with existing data in a Microsoft
	  Access table.
	
	- Default button:
	
	  Click this button to select the default tables for conversion. ADOCE
	  automatically selects all tables.
	
	- OK and Cancel command buttons:
	
	  Click OK to start to convert the selected tables. Click Cancel to quit the
	  conversion.
	
	REFERENCES
	==========
	
	For more information, see the Embedded Developer Documentation on MSDN at:
	
	  http://msdn.microsoft.com/library/wcedoc/embedanchor.htm
	  (http://msdn.microsoft.com/library/wcedoc/embedanchor.htm)
	
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
	
