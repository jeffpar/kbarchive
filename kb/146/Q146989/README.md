---
layout: page
title: "Q146989: XCLN: Views: Group By and Sort Have Same Property Values"
permalink: /kb/146/Q146989/
---

## Q146989: XCLN: Views: Group By and Sort Have Same Property Values

	Article: Q146989
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new view for a folder, Exchange will not allow you to create a
	Sort By criteria on a column already defined in the Group By dialog box.
	Attempting to do so returns the following error:
	
	  The grouping you specified is not valid. You cannot sort on a property that
	  you are using to group by.
	
	Completely removing the column that is currently defined by a valid Sort By
	criteria causes the Sort By dialog box to be populated with another column
	defined in your Group By dialog box. This, in effect, contradicts the previous
	error message because it defines a Sort By property that you are using to group
	by. No error message is returned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 Windows 3.x, Windows 95, and Windows NT clients. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
