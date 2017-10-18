---
layout: page
title: "Q109988: PROFS: Err Msg: Data Exception - LISTFILE: re-ipl"
permalink: kb/109/Q109988/
---

## Q109988: PROFS: Err Msg: Data Exception - LISTFILE: re-ipl

	Article: Q109988
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.4 of the Microsoft Mail Gateway to IBM PROFS and OfficeVision Host
	Access, the Calendar Manager (xxxCAL) disks are accessed all at once and then
	the gateway does a ListFile for each file. A Data Exception error may occur
	between the Access and subsequent ListFile if one of the mini- disks is updated
	before the ListFile.
	
	The following Error Message will be displayed:
	
	  DMSITP143T Data exception occurred at 00E29F8 in system LISTFILE: re-ipl
	  CMS HCPMSG057I MSCSM not receiving; MSG off
	  HCPGIR450W CP entered; disabled wait PSW 000A0000 80E3131C
	
	CAUSE
	=====
	
	This error occurs in cases where the production calendar is highly used; thus,
	preventing the MS-CSM machine from correctly accessing the PROFS/OV user's
	schedule data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	for Windows. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.40 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
