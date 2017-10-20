---
layout: page
title: "Q158777: XCLN: Schedule+ 7.0 Prompts for Password After Upgrading"
permalink: /kb/158/Q158777/
---

## Q158777: XCLN: Schedule+ 7.0 Prompts for Password After Upgrading

{% raw %}

	Article: Q158777
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; :4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- Microsoft Exchange Client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Mail version 3.0 and Microsoft Schedule+ version
	1.0 to Microsoft Exchange version 4.0 and Microsoft Schedule+ version 7.0, you
	may be asked to enter a password when you try to synchronize your local calendar
	file with the server-based calendar file. Entering a new password using the
	Change Password command on the Tools menu does not correct this problem.
	
	CAUSE
	=====
	
	The server-based calendar file is protected with the password from Microsoft
	Schedule+ 1.0.
	
	WORKAROUND
	==========
	
	To correct this problem, use the following steps:
	
	1. Start Microsoft Schedule+ 7.0.
	
	2. On the File menu, point to Export, and then click Schedule+ Interchange.
	
	3. In the Export Schedule+ Interchange dialog box, use the default file name and
	  path or type a new name and path in the File Name box. Under Export Range,
	  click to select All Dates. Under Export, click to select All Calendar Data.
	
	4. Click OK.
	
	5. On the File menu, click Exit And Log Off.
	
	6. Press and hold the CTRL+SHIFT keys and start Microsoft Schedule+. When you
	  receive a warning message box indicating that you started Microsoft Schedule+
	  using the CTRL+SHIFT keys, click Yes.
	
	  The calendar information and password will be cleared.
	
	7. On the File menu, point to Import, and then click Schedule+ Interchange.
	
	8. In the Import Schedule+ Interchange dialog box, type the path and file name
	  of the file you created in step 3, and then click Open.
	
	  The calendar information you exported in steps 2-4 will be imported and you
	  will no longer be prompted for a password.
	
	For more information on migrating and converting Microsoft Schedule+ 1.0 calendar
	files to Microsoft Schedule+ 7.0 calendar files, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q147490 How to Import a 1.0 .CAL File Into 7.0
	
	  Q150123 Migrated Schedule+ 1.0 Users Are Prompted for Password
	
	  Q146772 Converting from 1.0 .CAL File to 7.0 .SCD File
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0; :4.0
	
	=============================================================================
	

{% endraw %}
