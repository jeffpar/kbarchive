---
layout: page
title: "Q147094: XCLN: View/Group By Changes Column Order, Column Size"
permalink: /kb/147/Q147094/
---

## Q147094: XCLN: View/Group By Changes Column Order, Column Size

	Article: Q147094
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click Group By on the View menu in the Microsoft Exchange Client and
	select Group items by (None) or Clear All, message columns and the column order
	do not appear as originally configured.
	
	CAUSE
	=====
	
	When you choose Group By, the column order is changed to properly group the
	messages. MicrosoftExchange does not maintain the original order or size of the
	columns, and therefore cannot restore these settings.
	
	Selecting Group items by (None) or Clear All might cause the message column order
	to be rearranged. Some column sizes might also be set to 1 character wide,
	preventing the columns from being viewed properly. Any columns that were
	selected as part of the Group By criteria will be set to a length of 1 if Group
	items by (None) or Clear All is selected.
	
	RESOLUTION
	==========
	
	Select one of the predefined personal views by clicking Personal Views on the
	View menu to reset the view you desire.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
