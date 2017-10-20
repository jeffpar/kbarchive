---
layout: page
title: "Q142601: ADT2: How to Supply a Custom System Database with an ADT App"
permalink: /kb/142/Q142601/
---

## Q142601: ADT2: How to Supply a Custom System Database with an ADT App

{% raw %}

	Article: Q142601
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install a custom application created with the Microsoft Access
	Developer's Toolkit (ADT), the Setup program creates a new, unsecured system
	database (named SYSTEM.MDA) and modifies the custom .INI file so that it
	references the new SYSTEM.MDA. This article explains how you can customize the
	Setup program to use your secured system database instead of the new, unsecured
	SYSTEM.MDA.
	
	MORE INFORMATION
	================
	
	If you want to supply your own system database, there are two general steps to
	follow. First, in the ADT Setup Wizard, you add the custom system database along
	with the other files for your application. Second, after creating your
	distribution disks, you modify the SETUP.STF file to prevent the creation of a
	new SYSTEM.MDA file and to set the system database name for the [Options]
	section of your application's .INI file.
	
	To modify the SETUP.STF file to use your system database instead of a new,
	unsecured SYSTEM.MDA, you can follow this procedure.
	
	NOTE: This procedure makes changes to the SETUP.STF file which is not supported
	by Microsoft. Microsoft provides this information "as is" without warranty of
	any kind, either express or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	1. Make a backup copy of the SETUP.STF file located in your DISK1 directory (or
	  in the shared directory of the administrator's installation on the network
	  server), and name the backup copy SETUPSTF.BAK.
	
	2. Open the SETUP.STF file using an application that supports a delimited- text
	  file format, such as Microsoft Excel.
	
	3. In the first column of the SETUP.STF file, scroll down to the row that
	  contains ObjID. Note that the ObjID row contains column headings. Three of
	  these column headings (ObjID [column 1], Title [column 3], and Object Data
	  [column 6]) are referenced in steps 4 through 10.
	
	4. In the ObjID row, move the pointer to the Title column (column 3).
	
	5. In the Title column, scroll down to the row that contains "Create
	  SYSTEM.MDA." This row is usually located near the bottom of the SETUP.STF
	  file.
	
	6. In the Create SYSTEM.MDA row, move the pointer the ObjID column (column 1),
	  and write down the ObjID value.
	
	7. Move the pointer to the Title column (column 3), and scroll to the row that
	  contains "User Non File Work."
	
	8. In the User Non File Work row, move the pointer to the Object Data column
	  (column 6), and delete the ObjID value that you wrote down in step 6.
	
	9. In the Title column (column 3), scroll to the row that contains
	  "USER_UserINI_1."
	
	10. In the USER_UserINI_1 row (or the USER_UserINI_2 row), move the pointer to
	  the Object Data column (column 6), and replace the name "SYSTEM.MDA" with
	  the name of your system database. For example, if your system database is
	  called SECURE.MDA, you can change the following sample line:
	
	  "%322\myapp.ini", "Options", "SystemDB", "%26\SYSTEM.MDA"
	
	  to:
	
	  "%322\myapp.ini", "Options", "SystemDB", "%26\SECURE.MDA"
	
	  NOTE: This step ensures that your program will find and use the custom system
	  database, regardless of the application path specified by any user at the
	  time the user installs your application.
	
	11. Save the SETUP.STF file as a delimited-text file.
	
	Additional query words: workgroup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
