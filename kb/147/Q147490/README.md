---
layout: page
title: "Q147490: How to Import a 1.0 Cal File Into 7.0"
permalink: kb/147/Q147490/
---

## Q147490: How to Import a 1.0 Cal File Into 7.0

	Article: Q147490
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:3.x,4.0,7.0,95
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 95, 7.0, 3.x 
	- Microsoft Schedule+ for Windows NT, version 7.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While Microsoft Schedule+ 7.0 for Windows 95 will automatically upgrade an
	existing Schedule+ 1.0 Calendar file(CAL) to the new file format the first time
	Schedule+ 7.0 is started, it may be necessary to manually migrate a 1.0 Calendar
	file to Schedule+ 7.0.
	
	MORE INFORMATION
	================
	
	The following steps can be performed to manually migrate a Schedule+ 1.0
	Calendar file to Schedule+ 7.0:
	
	1. Start Schedule+ 7.0 and choose File...Open...Archive or Project Schedule
	
	2. Change to the directory where the 1.0 CAL file is located
	
	3. Change the File Types to be Schedule+ 1.0(*.ARC,*.CAL)
	
	4. Choose the CAL file and click OK.
	
	5. You will be prompted for the Password to the CAL file. Enter the password and
	  click OK
	
	6. A new window is opened up with the Schedule+ 1.0 calendar information.
	  Choose File...Export...Schedule+ Interchange....
	
	7. Write down the name of the Export File name and location and click OK.
	
	8. Once the Export is complete, close the window for the CAL file.
	
	9. From the users Schedule+ window, choose File....Import...Schedule+
	  Interchange and point to the exported file created in step 6.
	
	10. Click OK.
	
	Once completed, the Schedule+ 1.0 calendar information will be in the Schedule+
	7.0 SCD format.
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOfficeSearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3 kbWordPad95 kbMailATN30xSearch
	Version           : WINDOWS:3.x,4.0,7.0,95
	
	=============================================================================
	
