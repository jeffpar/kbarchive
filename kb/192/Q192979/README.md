---
layout: page
title: "Q192979: PRB: VFPODBC Driver Ignores Path in DSN When Executing SQL"
permalink: /kb/192/Q192979/
---

## Q192979: PRB: VFPODBC Driver Ignores Path in DSN When Executing SQL

	Article: Q192979
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kb
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you connect to a particular database, or point to a free table directory,
	the Visual FoxPro ODBC driver ignores the path specified in the Datasource.
	
	RESOLUTION
	==========
	
	In the SQL statement, use the full drive and path where the table is to be
	stored. For example:
	
	     CREATE TABLE 'C:\PROGRAM FILES\MICROSOFT VISUAL STUDIO\MSDN98\98VS\1033\ 
	     SAMPLES\VFP\DATA\MYTEST1' (FLD1 C(10),FLD2 N(6.2))
	
	NOTE: With MSQuery, if you are using a path similar to the preceding example, you
	must use a command similar to the following:
	
	     CREATE TABLE d:\PROGRA~1\MICROS~1\MSDN98\98VS\1033\SAMPLES\vfp98\DATA\ 
	     MYTEST1' (FLD1 C(10),FLD2 N(6.2))
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The driver uses the current directory of the calling application for any work it
	must perform.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample uses MSQUERY to show the behavior. Please note that MSQuery
	is not unique in this behavior. Any software that can issue a Create Table SQL
	command through an ODBC driver can be used to reproduce this behavior.
	
	1. Create a Data Source using the Microsoft Visual FoxPro Driver that references
	  the TestData.dbc. TestData.dbc is located in the Samples\Data
	  (Samples\VFP\Data of the Visual FoxPro directory.
	
	2. In MSQuery, click the Execute SQL option located on the File menu.
	
	3. Copy and paste the following SQL string into the SQL Statement window:
	
	        CREATE TABLE MYTEST1 (FLD1 C(10),FLD2 N(6,2))
	
	4. Click the Datasources button and select the datasource you created in Step 1.
	
	5. Click the Execute button.
	
	6. Click the Start menu, point to Find and then click Find Files. In the
	  Find:All Files dialog box, type MyTest1.dbf in the Named text box. Click the
	  Find button. Note that the MyTest1.dbf file is not in the Data directory with
	  the TestData table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
