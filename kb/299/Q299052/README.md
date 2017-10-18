---
layout: page
title: "Q299052: Automap: Some Data Is Not Displayed After Import into Pushpins"
permalink: kb/299/Q299052/
---

## Q299052: Automap: Some Data Is Not Displayed After Import into Pushpins

	Article: Q299052
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import data into pushpins in Microsoft MapPoint, some of the data may
	not be displayed as expected.
	
	CAUSE
	=====
	
	This behavior can occur if the data consists of more than 1,000 characters.
	
	MORE INFORMATION
	================
	
	A pushpin can hold only 1,000 characters. After you reach this limit, the data
	is truncated, and any fields that do not fit are not displayed.
	
	Character limit is set based on the balloon, not the field. For example, there is
	no restriction on the field size, only on the total number of characters
	supported in the balloon. The character limit for a balloon is approximately
	4,000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2002
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
