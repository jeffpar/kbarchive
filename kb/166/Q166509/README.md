---
layout: page
title: "Q166509: BUG: Column Name Greater Than 128 Characters Cause Error"
permalink: /kb/166/Q166509/
---

## Q166509: BUG: Column Name Greater Than 128 Characters Cause Error

{% raw %}

	Article: Q166509
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfpkbbuglist
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing a column's name to a value greater than 128 characters can cause the
	operating system to return a memory violation error while modifying the
	structure of the table. The error occurs after changing the column name of a
	table with the ALTER TABLE command. This command allows you to programmatically
	assign a column a name greater than 128 characters in length. The dialog boxes
	available through the interface, such as those invoked with the MODIFY STRUCTURE
	command, do not allow a name greater than 128 characters.
	
	One of the following system error appears depending on the version of the
	operating system:
	
	- In Windows 95, the following error appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	  Clicking Details reveals the following message:
	
	  VFP caused an invalid page fault in module KERNEL32.DLL at <memory
	  address>.
	
	- In Windows NT 4.0, the following error appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  VFP.exe
	  Exception: access violation <error number>, Address: <memory
	  address>.
	
	- Finally, the Macintosh operating system reports:
	
	  Sorry, a system error occurred.
	  "Microsoft Visual FoxPro"
	  error type 11
	
	In each case that error may or may not be preceded by an "Internal consistency"
	error.
	
	This error does not occur in Visual FoxPro 5.0 for Windows.
	
	RESOLUTION
	==========
	
	When using the ALTER TABLE command, do not create field names longer than 128
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro Help file topic entitled "Visual FoxPro Naming Rules" states:
	
	  Use 1 to 254 characters, except for field names in free tables and index tags
	  - they can be 10 characters at most.
	
	However, the operating system shuts down Visual FoxPro 3.0 if you attempt
	modifications to a table containing a field name greater than 128 characters
	from within the Table Designer window.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the Customer table located in the \Samples\Data folder.
	
	2. Issue the following command in the Command window:
	
	        COPY TO Home()+"Ztest.dbf"
	        CLOSE ALL
	        CREATE DATABASE Ztest.dbc
	        MODIFY DATA
	
	3. Select Add Table from the Database menu.
	
	4. From the Open dialog box double-click Ztest.dbf to add it to the database
	  container.
	
	5. Bring the Command window forward by pressing CTRL+F2.
	
	6. In the Command window, type the following command:
	
	        ALTER TABLE Ztest RENAME COLUMN Title to Verylongname...longname
	
	  Where Verylongname is a long string of letters greater than 128 characters in
	  length.
	
	7. Click on the Ztest table window in the database container window, then select
	  Modify from the Database menu.
	
	8. Click at several locations and type in the comments Editbox of the Table
	  Designer window, then navigate between tabs, and click OK to close the
	  window. At this point or earlier the error occurs.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS: 3.0,3.0b,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
