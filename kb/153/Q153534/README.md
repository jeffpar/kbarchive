---
layout: page
title: "Q153534: SMS: Retrieving SMSVIEW Data Using Microsoft Access"
permalink: /kb/153/Q153534/
---

## Q153534: SMS: Retrieving SMSVIEW Data Using Microsoft Access

{% raw %}

	Article: Q153534
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbDatabase smsdatabasekbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are problems associated with Querying within SMS - SMS Query Results
	Display Only First Data Record. You must use another program to retrieve the
	correct data. For instance, Access can be used to retrieve drive information
	from the Systems Management Server Database Views.
	
	MORE INFORMATION
	================
	
	To retrieve drive information from the Systems Management Server Database Views
	using Microsoft Access, perform the following steps:
	
	1. Run SMSVIEW to create the views.
	
	2. Confirm SQL connectivity using ODBC Manager.
	
	3. Start Access and create a new database.
	
	4. On the File menu, point to Get External Data, and click Import.
	
	5. In Files of Type, select ODBC Databases().
	
	6. Select your Systems Management Server data source and log in to SQL.
	
	7. Select all the tables that are preceded by 'dbo.v' - the views.
	
	8. Open the Tools / Relationships and Added dbo.vDisk and dbo_vIdentification.
	
	9. In the first table, select dwMachineID. Drag and drop dwMachineID into the
	  second table.
	
	10. Open the Relationships window and select Create.
	
	11. In the Database window, select Queries, and then select New.
	
	12. Use the Simple Query Wizard.
	
	13. At the first screen, select dbo.vIdentification and choose SMSID0 as the
	  selected field. Select dbo.vDisk and choose Disk_Index0,
	  Storage_Size_MByte_0, Storage_Used_MByte_0, Free_Storage_MByte_0, and
	  __Disk_Full0 as selected fields.
	
	14. At the next screen select Detail. At the Final screen give it a title and
	  select Finish. At this point you should see all your SMSIDs and associated
	  drives.
	
	15. Select View and select SQL. You should see a query similar to the following:
	
	        SELECT DISTINCTROW [dbo.vIdentification].[SMSID0],
	        [dbo.vDisk].[Disk_Index0], [dbo.vDisk].[Storage_Size__MByte_0],
	        [dbo.vDisk].[Storage_Used__MByte_0],
	        [dbo.vDisk].[Free_Storage__MByte_0],
	        [dbo.vDisk].[__Disk_Full0]
	        FROM dbo.vDisk INNER JOIN dbo.vIdentification ON
	        dbo.vDisk].[dwMachineID]=[dbo.vIdentification].[dwMachineID];
	
	16. Modify the query you found in step 15 to include the following WHERE
	  statement so that it is the final entry. Note that the query ends with a
	  semicolon(;). Remove the semicolon from the original query before you add
	  the final line:
	
	        WHERE (((dbo.vDisk.Disk_Index0)>"B"));
	
	  The following table is an example of the output you may receive:
	
	                         Storage_   Storage_   Free_
	                Disk_    Size__     Used__     Storage__   __Disk_
	     SMSID0     Index0   MByte_0    MByte_0    MByte_0     Full0
	     ---------  ------   --------   --------   ---------   --------
	     UUU01000   C        324        284        40          88
	     UUU01000   D        324        267        57          83
	     UUU02000   C        502        398        104         80
	     UUU02000   D        1545       1426       119         93
	     UUU02001   C        514        347        167         68
	     UUU01001   C        514        347        167         68
	     UUU01002   C        202        171        31          85
	
	Additional query words: prodsms views smsview.exe report
	
	======================================================================
	Keywords          : kbDatabase smsdatabase kbfaq
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
