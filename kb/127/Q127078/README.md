---
layout: page
title: "Q127078: PC Win: All Custom Data Is Displayed at Same Start Position"
permalink: kb/127/Q127078/
---

## Q127078: PC Win: All Custom Data Is Displayed at Same Start Position

	Article: Q127078
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to cache user data and template information, version 3.2 of
	Microsoft Mail for Windows only reads in the data start position of the first
	custom template item declared in the ADMIN.TPL file. This is the same value for
	all other custom data declarations, regardless of the field data start positions
	specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for Windows. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The two examples below:
	
	  Department : ~14~20~A~Sales~
	  Tel : ~6~20~NP~16 1 43 99 99 22~
	
	  and
	
	  Department : ~14~20~A~Sales~
	  Tel : ~6~25~NP~16 1 43 99 99 22~
	
	will both display as the following:
	
	Department :        Sales
	Tel :               16 1 43 99 99 22
	
	In the second example, the second data declaration has a data start point of 25;
	however, the Windows Mail client will display it the same as the first example.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
