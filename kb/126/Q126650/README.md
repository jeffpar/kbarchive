---
layout: page
title: "Q126650: PC Rmt: Using Null Modem Script at Higher Baud Rates Than 9600"
permalink: kb/126/Q126650/
---

## Q126650: PC Rmt: Using Null Modem Script at Higher Baud Rates Than 9600

	Article: Q126650
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The null modem script is written to transfer data at a default maximum of 9600
	Baud. To increase the data transfer speed to 19200 baud:
	
	1. Modify the NULLMODM.MDM script according to the instructions located in the
	  Microsoft Mail version 3.2 "Administrator's Guide" on page 378 "Modifying a
	  Script File."
	
	2. Add the following line to the INITIALIZE: section of the script before the
	  return 0 line:
	
	  " BAUD 19200" (without the quotation marks)
	
	3. Save and compile the script.
	
	MORE INFORMATION
	================
	
	Below is an example of a modified INITIALIZE: section:
	
	INITIALIZE:
	
	  title "Null Modem"
	  BAUD 19200
	  return 0
	
	You should only modify the script. Do not modify the speed setting within
	Microsoft Mail Remote for MS-DOS. You should keep it at 9600 baud. To verify the
	setting, from the Mail menu, select Communications. The Baud Rate should be set
	at 9600.
	
	In addition, the serial port settings in the Mail postoffice (PO) should also be
	set to 9600 baud. To verify this, start the Mail Administration program
	(ADMIN.EXE), from the Config menu, select Serial. This will list the current
	Baud Rate setting.
	
	When the MS-DOS Remote client is finished and disconnects from External, it will
	display the Closing Connection message, but it may not accept another null modem
	connection from the Remote client. If it does not, you must exit from External
	and restart it.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote320DOS
	Version           : MS-DOS:3.2
	
	=============================================================================
	
