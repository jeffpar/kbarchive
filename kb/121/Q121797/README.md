---
layout: page
title: "Q121797: PC WSPlus:  Standard Response Buttons Unavailable"
permalink: kb/121/Q121797/
---

## Q121797: PC WSPlus:  Standard Response Buttons Unavailable

	Article: Q121797
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a meeting request is received and the header of the message is incomplete or
	is missing, any or all of the standard response buttons listed in the [Custom
	Messages] section of the MSMAIL.INI file may not be complete.
	
	CAUSE
	=====
	
	When Schedule+ version 1.0 is installed, it writes the following lines into the
	[Custom Messages] section of the MSMAIL.INI:
	
	    IPM.Microsoft Schedule.MtgReq=3.0 ;;;;SchedMsg.DLL;;1111100000000000;;;;
	
	    IPM.Microsoft Schedule.MtgRespP=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	
	    IPM.Microsoft Schedule.MtgRespN=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	
	    IPM.Microsoft Schedule.MtgRespA=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	
	    IPM.Microsoft Schedule.MtgCncl=3.0 ;;;;SchedMsg.DLL;;1100100000000000;;;;
	
	If these lines are not in the recipient's MSMAIL.INI file, the header information
	and the buttons will not be available. If the lines are in the MSMAIL.INI file
	and are later removed, any undeleted meeting request messages will still be
	present and uncorrupted, but the header information and buttons will be
	unavailable.
	
	RESOLUTION
	==========
	
	Check the MSMAIL.INI file on the recipient's computer. If the above lines are
	missing, add them to the MSMAIL.INI file. If this is unsuccessful, it is
	possible that the SCHEDMSG.DLL file in the Windows subdirectory has been
	corrupted.
	
	Additional query words: schedule plus 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail320 kbMail320a
	Version           : WINDOWS:1.0,3.2,3.2a
	
	=============================================================================
	
