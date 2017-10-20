---
layout: page
title: "Q115351: X400: CANCEL Does Not Save Remote MTA Screen Update Changes"
permalink: /kb/115/Q115351/
---

## Q115351: X400: CANCEL Does Not Save Remote MTA Screen Update Changes

{% raw %}

	Article: Q115351
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you exit the screen using CANCEL, the Remote MTA screen does not save the
	changes you make using Update.
	
	MORE INFORMATION
	================
	
	Although you may feel this feature does not work as expected, it actually does
	work as designed: Cancel takes you back to where you were before you entered the
	form.
	
	All Cancel buttons in the utility behave the same way.
	
	STEPS TO REPRODUCE BEHAVIOR
	---------------------------
	
	1. Make a change to MTA1.
	
	2. UPDATE.
	
	3. Make another change, but to MTA2.
	
	4. UPDATE.
	
	5. Go back to MTA1.
	
	6. Changes made should be current, but notice that MTA1 has the original values.
	
	  -or -
	
	1. Make a change to MTA1.
	
	2. UPDATE.
	
	3. Make a change to MTA2.
	
	4. UPDATE.
	
	5. CANCEL (To exit).
	
	6. Go back to REMOTE MTA screen and notice that the settings for MTA1 and MTA2
	  do not reflect any changes you made.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
