---
layout: page
title: "Q273782: PRB: Error When You Copy and Paste GUID in Data View Window"
permalink: /kb/273/Q273782/
---

## Q273782: PRB: Error When You Copy and Paste GUID in Data View Window

{% raw %}

	Article: Q273782
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataview kbGrpDSVBDB kbDSupport
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy and paste a globally unique identifier (GUID) value from one row
	in the grid, which the Data View tool provides, to another row, you may receive
	the following error message:
	
	  The value you entered is not consistent with the data type of length of the
	  column
	
	CAUSE
	=====
	
	This error occurs because of a change in the Mdt2qd.dll file, which is one of
	the files in the Data View tool. Mdt2qd.dll file versions later than 2.0.0.8456
	exhibit this behavior.
	
	RESOLUTION
	==========
	
	To work around this behavior, use version 2.0.0.8456 or earlier of the
	Mdt2qd.dll file. To unregister the current version and register the new version
	of Mdt2qd.dll, follow these steps:
	
	1. On the Start menu, click Run, and type the following command to unregister
	  the current version of the Mdt2qd.dll file:
	
	  "regsvr32 /u mdt2qd.dll" (without the quotation marks)
	
	2. Rename Mdt2qd.dll (such as "MDT2QD.old" or "MDT2QD.prv").
	
	3. Copy the original Mdt2qd.dll file from the Microsoft Visual Studio Service
	  Pack 3 disk.
	
	4. On the Start menu, click Run, and type the following command to register the
	  new Mdt2qd.dll:
	
	  "regsvr32 mdt2qd.dll" (without the quotation marks)
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: These steps are based on Microsoft SQL Server.
	
	1. Create a table on an available datasource with a datatype of GUID as follows:
	
	  CREATE TABLE test (Fld1 varchar(20) NULL, MyGuid uniqueidentifier NULL)
	
	2. Insert a row and data into the table as follows:
	
	  INSERT INTO test VALUES ('aaa',NEWID())
	
	3. Start Visual Basic 6.0 or any Microsoft application that uses the Data View
	  tools.
	
	4. Create a connection in the Data View tool to the datasource that contains the
	  newly created table.
	
	5. Open the table in the Data View window.
	
	6. Copy the GUID value from the row, and paste this value into another row.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataview kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
