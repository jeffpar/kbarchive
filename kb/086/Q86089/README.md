---
layout: page
title: "Q86089: PC WSPlus: Add Gateway Brings Up All Gateways"
permalink: /kb/086/Q86089/
---

## Q86089: PC WSPlus: Add Gateway Brings Up All Gateways

{% raw %}

	Article: Q86089
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	In the Microsoft Schedule+ for Windows Administration program, bringing up
	the Add Gateways window from the Distribution Settings window will show all
	the gateways installed in the postoffice even if there are no compatible
	scheduling programs on the other side of these gateways. Distribution
	Settings can be chosen from the Administration menu. Adding any of these
	gateways will enable SCHDIST to begin sending updates that the gateway does
	not understand. This may cause the gateway to start displaying error
	messages.
	
	This feature allows for future compatibility with foreign scheduling
	systems such as IBM PROFS without requiring an update of the Schedule+
	Administration program. To determine if there is compatibility, check with
	the maker of the foreign scheduling system or with a Microsoft Messaging
	Specialist.
	
	Additional query words: 1.00 SCHDADMIN Fax PROFS SMTP X400 MCI AT&T Connection schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
