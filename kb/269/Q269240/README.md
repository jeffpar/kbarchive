---
layout: page
title: "Q269240: XCCC: Using Outlook 2000 to Change Conference Resource"
permalink: kb/269/Q269240/
---

## Q269240: XCCC: Using Outlook 2000 to Change Conference Resource

	Article: Q269240
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Conferencing Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the different behavior that occurs if you use Microsoft
	Outlook 2000 to change resources and providers in an online conference that is
	currently running.
	
	MORE INFORMATION
	================
	
	Data Conference Service
	-----------------------
	
	- If you use Outlook 2000 to change a Data Conference Service resource, if the
	  new or updated conference resource does not contain a Data Conference
	  Technology Provider (CTP) but the previous resource did, current participants
	  are disconnected from the data portion of the conference.
	
	- If you add a Data CTP to the new resource, participants must rejoin to
	  participate in the data conference.
	
	Video Conference Service
	------------------------
	
	- If you use Outlook 2000 to change a Video Conference Service resource, if the
	  new or updated conference resource does not contain a Video CTP but the
	  previous resource did, new clients cannot participate in the audio/video
	  conference.
	
	- If you add a Video CTP to the new resource, participants must rejoin to
	  participate in the audio/video conference.
	
	If you change or modify the conference size, the changes take effect immediately.
	For example, if you reduce a conference size from ten participants to five on a
	specific conference resource, if there are seven participants who have already
	joined the conference, the additional two participants are not disconnected.
	However, new participants cannot join the conference.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000ConfServ
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
