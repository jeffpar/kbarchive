---
layout: page
title: "Q238155: HOWTO: Create a New Database in Visual SourceSafe"
permalink: /kb/238/Q238155/
---

## Q238155: HOWTO: Create a New Database in Visual SourceSafe

{% raw %}

	Article: Q238155
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbddconv kbSSafe400 kbSSafe500 kbSSafe600 kbSSExplorer kbFAQ kbDSuppor
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a new database in the Visual SourceSafe
	versions listed above. Visual SourceSafe 6.0 has a Create Database feature in
	the Administrator program that allows you to create new databases in version 6.0
	or 5.0 format. Earlier versions of Visual SourceSafe use MKSS and DDCONV
	utilities to create a DATA directory, and you have to create the remainder of
	the database manually.
	
	MORE INFORMATION
	================
	
	Steps to Create a New Database in Visual SourceSafe 6.0
	-------------------------------------------------------
	
	1. Open the Visual SourceSafe 6.0 Administrator program. From the Tools menu,
	  select Create Database.
	
	2. Type or browse for the path to where you want to create the new database in
	  the Create new VSS Database in edit box.
	
	3. The New 6.0 database format checkbox is selected by default. If you want your
	  new database to be in the 5.0 format, clear the checkbox.
	
	4. Click OK. A dialog box will appear saying, "Database Creation Complete."
	  Click OK.
	
	The Create Database feature will produce the following directories and files:
	
	- Temp (directory)
	
	- Data (directory)
	
	- Users (directory)
	
	- Srcsafe.ini
	
	- Users.txt
	
	Steps to Create a New Database in Earlier Versions of Visual SourceSafe 
	-----------------------------------------------------------------------
	
	1. Create a target directory for the new database.
	
	2. Create a directory called "Temp" inside the target directory.
	
	3. Create a directory called "Data" inside the target directory.
	
	4. Copy the Users directory from an existing database into the target directory.
	  Delete all directories inside the Users directory except for Admin and Guest.
	
	5. Copy the Users.txt file from an existing database into the target directory.
	  Open users.txt and remove all lines except the following:
	
	  
	
	  Admin = users\admin\ss.ini
	  Guest = users\guest\ss.ini
	
	  Save the file.
	
	6. Copy the Srcsafe.ini file from an existing database into the target
	  directory. (Note: If this is a Visual SourceSafe 6.0-installed database, you
	  should have a template directory from which you can get a default copy of the
	  Srcsafe.ini file.) Open Srcsafe.ini and modify the following variables to
	  point to the correct location:
	
	  Data_Path = data
	  Temp_Path = temp
	  Users_Path = users
	  Users_Txt = users.txt
	
	  Save the file.
	
	Mkss.exe and Ddconv.exe are located in the Win32 directory in Visual SourceSafe
	4.0 and later.
	Mkss.exe and Ddconv.exe are located in the Admin directory in versions prior to
	Visual SourceSafe 4.0.
	
	7. Run MKSS <path to the Data directory (created in Step 3)>.
	
	8. Run DDCONV <path to the Data directory (created in Step 3)>.
	
	If you have a version of SourceSafe prior to version 4.0, you must complete an
	additional step.
	
	9. Execute SERIALIZE <path to the Data directory (created in Step
	  3)>-s<serial number>, to initialize the database with serial number
	  information.
	
	REFERENCES
	==========
	
	  Q176909 HOWTO: Move a VSS Database or Project to New Location
	
	Additional query words: mkss ddconv
	
	======================================================================
	Keywords          : kbsetup kbConfig kbddconv kbSSafe400 kbSSafe500 kbSSafe600 kbSSExplorer kbFAQ kbDSupport kbGrpDSSSafe kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
