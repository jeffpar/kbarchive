---
layout: page
title: "Q177384: Expedia Streets 98: Known Address Parsing Limitations"
permalink: /kb/177/Q177384/
---

## Q177384: Expedia Streets 98: Known Address Parsing Limitations

	Article: Q177384
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The address parsing or search routines in Microsoft Expedia Streets 98 have some
	functionality limitations.
	
	MORE INFORMATION
	================
	
	When you search for a specific street address using Expedia Streets 98, keep the
	following guidelines in mind:
	
	- House numbers must be numeric. For example, Expedia Streets can find "1
	  Microsoft Way," but may not find "One Microsoft Way."
	
	- Expedia Streets divides road names into parts: a street name and a street
	  type. For example, "1st Avenue" has a street name of "1st" and a street type
	  of "Avenue."
	
	  Road names which have a street name that is the same as a street type may not
	  be found by Expedia Streets. For example, "Court Avenue" or "Circle Drive"
	  may not be found, because both "Court" and "Circle" are street types.
	
	- If an area contains more than one road with the same name AND one of the
	  roads does not have street address data associated with it, when you search
	  for a house number, Expedia Streets may not find a match for houses on either
	  road.
	
	  For example, assume there is a "Memory Lane" and "Memory Circle" in the same
	  area. When you click on "Memory Lane," Expedia Streets may display "325
	  Memory Lane" indicating that you clicked on the location of house number 325.
	  However, if you click on "Memory Circle", Expedia Streets may display "Memory
	  Circle" without a house number, because Expedia Streets does not have street
	  address data for that road.
	
	  As a result of this limitation, if you are searching for "325 Memory Lane"
	  using the Find An Address command, Expedia Streets may only find "Memory
	  Lane," and not "325 Memory Lane."
	
	The Expedia Streets online Help file discusses techniques to improve the number
	and quality of matches if you search for a specific street address. The best
	technique is to search only for the street name and remove the house number from
	the address.
	
	Additional query words: 98 auto map automap auto-map expedia streets etak gdt tiger
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
