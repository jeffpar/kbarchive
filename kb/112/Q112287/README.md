---
layout: page
title: "Q112287: PC WFW: Err Msg: This PostOffice Cannot Be Updated..."
permalink: /kb/112/Q112287/
---

## Q112287: PC WFW: Err Msg: This PostOffice Cannot Be Updated...

{% raw %}

	Article: Q112287
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail and Schedule+ Extensions for Microsoft Windows for Workgroups, version 3.0 
	- Microsoft Mail for Windows Update for Microsoft Windows for Workgroups, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.0 of Microsoft Extensions for Windows for Workgroups or
	version 3.2 of the Microsoft Mail Update for Windows for Workgroups, you may
	receive the following error message:
	
	  This Postoffice cannot be updated. Consult Microsoft Product
	  Support Services for more information.
	
	CAUSE
	=====
	
	Two different situations will result in the same error message.
	
	Situation 1
	-----------
	
	The Extend program cannot be run on a server postoffice. Extend may only be
	performed on a Windows For Workgroups postoffice.
	
	If the postoffice is not a Windows For Workgroups postoffice, you do not need to
	run the Extend utility. The Extend utility is only for use with Windows for
	Workgroups postoffices to extend them to the full functionality of a full
	Microsoft Mail for PC Networks postoffice. After the Extend utility is run
	successfully, then the Update program should be used to give the postoffice the
	full functionality of a Microsoft Mail postoffice.
	
	Situation 2
	-----------
	
	The Update program cannot be run on a Windows for Workgroups postoffice.
	
	If you run the Update program without first running the Extend utility or if you
	do not have a valid Microsoft postoffice, you will receive the error:
	
	  This Postoffice cannot be updated. Consult Microsoft
	  Product Support Services for more information.
	
	If you do NOT have Windows for Workgroups and have not yet created a Microsoft
	Mail postoffice, you must run the Install program instead of the Update program.
	If you have any existing Microsoft Mail postoffice, you should run the Update
	utility to add the features of the new version of Microsoft Mail while retaining
	the definitions of the older postoffice.
	
	Additional query words: 3.00 3.20 WFW WFWG MSMail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbWFWSearch kbZNotKeyword3 kbMailScheduleX320
	Version           : :3.0,3.2
	
	=============================================================================
	

{% endraw %}
