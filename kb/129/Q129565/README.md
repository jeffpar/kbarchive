---
layout: page
title: "Q129565: PC WSPlus: Change of Status Not Always Reflected in POF File"
permalink: /kb/129/Q129565/
---

## Q129565: PC WSPlus: Change of Status Not Always Reflected in POF File

{% raw %}

	Article: Q129565
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The access control list (.POF file) can become out of date when you change an
	assistant's status (friendly name change, delete the user, etc.) in the Admin
	program.
	
	CAUSE
	=====
	
	When you select an assistant, the selection will be accurately recorded in the
	access control list. However, if the assistant's status is subsequently changed,
	the access control list will not be updated and will be out of date.
	
	It is unreasonable to periodically check the access control list for accuracy;
	therefore, it will not be updated in future releases.
	
	
	The POF files contain Assistant routing information in the specific user's
	record, if one is designated by the user and information about free/busy times
	for users on the local postoffice. There is also a POF file for each external PO
	defined.
	
	Additional query words: schedule plus 1.00 POF
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
