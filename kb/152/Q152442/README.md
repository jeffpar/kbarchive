---
layout: page
title: "Q152442: XADM: How to Populate the Display Name for the SA"
permalink: /kb/152/Q152442/
---

## Q152442: XADM: How to Populate the Display Name for the SA

{% raw %}

	Article: Q152442
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange System Attendant does not list a display name by default,
	the Display Name box for the properties is blank and read only. Although this is
	not recommended, a Microsoft Exchange administrator can enter a display name.
	This name will appear under Server Recipients when the View Hidden Recipients
	menu option is checked.
	
	Please be aware that changing any setting in raw mode is inherently dangerous.
	Incorrect settings can alter the way that Microsoft Exchange behaves and may
	disrupt operation altogether. Please be very cautious about altering settings
	while in Raw Mode.
	
	To change the display name, follow these steps:
	
	1. Start the Microsoft Exchange Administrator program in Raw Mode. This is done
	  by adding the -raw switch on the command line for the icon properties.
	
	2. Start the Microsoft Exchange Administrator program.
	
	3. Click System Attendant under the Server object.
	
	4. Click File, Raw Properties. This will load the "schema".
	
	5. From the List Attributes of Type drop down list on the bottom left, choose
	  the All option.
	
	6. Scroll through the Object Attributes and pick the Display Name listing. The
	  Edit Value and the Attribute Value will be blank.
	
	7. Type System Attendant in the Edit Value box and click the Set button.
	
	8. Exit the properties box.
	
	9. With the Server Recipients displayed, select Hidden Recipients from the View
	  menu. There will be a listing for System Attendant.
	
	10. Exit the Microsoft Exchange Administrator program and remove the -raw switch
	  from the icon.
	
	Having no display name for the System Attendant is not unusual, it should not
	appear on any Microsoft Exchange Server that was originally installed with the
	released version of Microsoft Exchange. However, it may still show up on
	Microsoft Exchange Servers that were upgraded to the released version from the
	beta.
	
	
	Additional query words: system attendant display raw
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
