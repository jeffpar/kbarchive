---
layout: page
title: "Q175125: XWEB: Outlook Web Access May Not See Outlook Schedule"
permalink: kb/175/Q175125/
---

## Q175125: XWEB: Outlook Web Access May Not See Outlook Schedule

	Article: Q175125
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You normally work with the Microsoft Outlook Calendar to store your schedule
	data. Then, using Outlook Web Access (OWA), you enable the Use Microsoft
	Schedule+ as My Primary Calendar option. At this point, you may no longer be
	able to view your original schedule data or free-or-busy information that you
	created using the Outlook Calendar.
	
	CAUSE
	=====
	
	This is by design.
	
	MORE INFORMATION
	================
	
	If you normally use the Outlook Calendar for storing your schedule data and you
	then select Schedule+ as the primary calendar from Outlook Web Access,
	appointments will no longer be created in the Calendar folder. Therefore, any
	changes you make in Outlook cannot be viewed in OWA, and vice versa.
	
	This behavior will occur if you work with Microsoft Outlook from more than one
	computer and choose different settings for how you use your schedule. For
	example, if you choose to use the Outlook Calendar on one computer and Schedule+
	on another computer, neither client will be able to see the other's schedule
	data or free-or-busy information correctly.
	
	NOTE: By default, OWA for a Macintosh will use the Schedule+ calendar. If you
	have users that are migrating to a Windows computer and notice that they can no
	longer see their OWA information, they will need to change their OWA setting to
	now use Outlook Calendar instead of Schedule+, then log off and log back into
	OWA to see their Windows calendar.
	
	
	
	Additional query words: 7.x 7.0 7.0a
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	
	=============================================================================
	
