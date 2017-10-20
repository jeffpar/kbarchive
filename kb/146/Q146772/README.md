---
layout: page
title: "Q146772: Converting from 1.0 CAL File to 7.0 .SCD File"
permalink: /kb/146/Q146772/
---

## Q146772: Converting from 1.0 CAL File to 7.0 .SCD File

{% raw %}

	Article: Q146772
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update to Schedule+ version 7.0 from Schedule+ version 1.0, the .CAL
	file extension may not be recognized by Schedule+ version 7.0 Import command.
	
	CAUSE
	=====
	
	The above can be caused by one of the following conditions:
	
	- The option to Use an Existing File the first time you started Schedule+
	  version 7.0 was not selected.
	
	- An invalid .CAL file is selected or the password is forgotten.
	
	- System or network problems during the *.CAL file import are experienced.
	
	RESOLUTION
	==========
	
	1. Click Open on the File menu. Then select Archive or Project Schedule...
	
	2. Locate and select the .CAL file. Click the OK button.
	
	3. Enter the password. The .CAL file will open in a separate window.
	
	4. From "old" Schedule+ window, click Export Appointments on the File menu. Then
	  select Schedule+ Interchange, and copy the export file with the extension
	  *.SC2. Click the OK button and close the "old" Schedule+ window.
	
	5. From the "new" Schedule+ window, click Import on the File menu. Then select
	  Schedule+ Interchange. Locate and select the file you created in step 4.
	  Click the OK button. The data now will be imported from the old .CAL file.
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
