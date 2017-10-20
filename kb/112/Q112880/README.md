---
layout: page
title: "Q112880: PC WSPlus: Access Privileges Invalid After Using MOVEUSER"
permalink: /kb/112/Q112880/
---

## Q112880: PC WSPlus: Access Privileges Invalid After Using MOVEUSER

{% raw %}

	Article: Q112880
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After MOVEUSER.EXE moves an account from one postoffice to another, on different
	servers, the following error message appears:
	
	  The schedule file could not be opened. You may not have the necessary access
	  privileges or the file may be unavailable.
	
	When you attempt to open someone's .CAL file, Schedule+ checks your .CAL file to
	see if you have access privileges or not. Access privileges are given according
	to the 10/10/10 addressing scheme used by Microsoft Mail. A 10/10/10 address
	corresponds to the following: Network name/Postoffice name/User account name.
	Should the address in the .CAL file you wish to access not match your address,
	you will not be able to access the .CAL file.
	
	RESOLUTION
	==========
	
	To solve this problem, the user that was moved, needs to go into Options, Set
	Access Privileges to remove and re-establish user access privileges for all
	accounts that can no longer access their calendar file after it was moved.
	
	NOTE: When re-establishing accounts, make sure you choose their names from either
	the Global Address List or Postoffice Address List so that their 10/10/10
	addresses will be used.
	
	Additional query words: schedule plus 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
