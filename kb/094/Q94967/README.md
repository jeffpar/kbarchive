---
layout: page
title: "Q94967: FAX: &quot;Communication Error&quot; Using Intel SatisFAXtion 200 Board"
permalink: kb/094/Q94967/
---

## Q94967: FAX: &quot;Communication Error&quot; Using Intel SatisFAXtion 200 Board

	Article: Q94967
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 2.1b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to Fax may experience "Connection Error" problems
	when it is used with the Intel SatisFAXtion/200 fax board.
	
	Intel Corporation has created a new driver for its SatisFAXtion/200 board, called
	DOWNLOAD.200. To install this driver, copy it to the root directory of the boot
	disk.
	
	The driver corrects problems if you use the SatisFAXtion software, even if you do
	not use the Microsoft Mail Gateway to Fax. The README.TXT file, also available
	from Intel, lists the problems that it resolves.
	
	In the United States, you can obtain the driver directly from Intel Corporation
	through its FAXBack Service. To use the FAXBack Service, you must have a
	Touch-Tone telephone and a SatisFAXtion board. To obtain the driver, perform
	these six steps:
	
	1. Boot your computer that contains the fax board and start the SatisFAXtion
	  software.
	
	2. Use a Touch-Tone telephone to call the FAXBack service at (800) 525-3019.
	
	3. Follow the voice directions for the download service. The document identifier
	  is 0028. The system prompts for the telephone number to which the
	  SatisFAXtion board is connected.
	
	4. Hang up the phone and the FAXBack service downloads the driver to the
	  SatisFAXtion board. (The status indicator in the SatisFAXtion software
	  indicates when the download is complete.)
	
	5. Select the Receive attachment option to read the README.TXT file.
	
	6. Copy the new DOWNLOAD.200 file to the root directory of the boot disk.
	
	REFERENCES
	==========
	
	For more information on the FAXBack Service, see the "Intel SatisFAXtion
	Software User's Manual."
	
	For more information on the Intel SatisFAXtion/200 modem, contact Intel Technical
	Support at (503) 629-7000.
	
	Additional query words: 2.10b 3.00 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax210b
	Version           : MS-DOS:2.1b,3.0
	
	=============================================================================
	
