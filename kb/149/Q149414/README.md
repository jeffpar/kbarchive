---
layout: page
title: "Q149414: After RPLCMD Is Used, &quot;Required&quot; Is Misspelled"
permalink: /kb/149/Q149414/
---

## Q149414: After RPLCMD Is Used, &quot;Required&quot; Is Misspelled

	Article: Q149414
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the RPLCMD to set the password options for a remoteboot client from
	the default "optional" to "required," the outcome is misspelled "requred."
	
	CAUSE
	=====
	
	The problem appears to be a misspelling in the code for the line:
	
	  RemoteBoot password is required
	
	Steps to Reproduce
	------------------
	
	1. Run RPLCMD at a command prompt.
	
	2. Select "W" at:
	
	  Adapter Boot Config Profile Service Vendor Wksta [Quit]:
	
	3. Select "S" at:
	
	  Add Clone Del Enum GetInfo SetInfo:
	
	4. Select "2" at:
	
	  Information Level <0, 1 or 2> =
	
	5. Select "any RPL workstation" at:
	
	  Input WkstaName =
	
	6. Select "any new RPL workstation" at:
	
	  WkstaName =
	
	7. Leave WkstaNameComment blank
	
	8. Select "R" at:
	
	  Is Remoteboot password Required, Optional or Not solicited [R,O,N] =
	
	9. Leave defaults on all other items
	
	10. After SetInfo has completed, select "W" at:
	
	  Adapter Boot Config Profile Service Vendor Wksta [Quit]:
	
	11. Select "G" at:
	
	  Add Clone Del Enum GetInfo SetInfo:
	
	12. Select "2" and "WkstaName" at:
	
	  Input Information Level <0, 1 or 2> and WkstaName
	
	The misspelled word "requred" is on the second line of the displayed information.
	
	RESOLUTION
	==========
	
	There is no resolution at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
