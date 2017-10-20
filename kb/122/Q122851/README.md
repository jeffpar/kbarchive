---
layout: page
title: "Q122851: PC WSPlus: Restoring the SCHEDULE.KEY File"
permalink: /kb/122/Q122851/
---

## Q122851: PC WSPlus: Restoring the SCHEDULE.KEY File

{% raw %}

	Article: Q122851
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: If any conference rooms or any other .CAL files are marked as a resource,
	deleting their .CAL files will DESTROY the resource. If you want to save the
	conference rooms or any other resource, complete all of the following steps; if
	not, complete steps 4 and 5 only).
	
	1. Log in to the RESOURCES or Conference Rooms in Schedule+.
	
	2. From the Options menu, choose General Options. Deselect This Account Is For A
	  Resource.
	
	3. Make sure there is a copy of the Conference Room .CAL file on the local hard
	  disk drive.
	
	4. Rename or delete all .CAL files and the SCHEDULE.KEY file in the CAL
	  subdirectory on the postoffice.
	
	5. Have all Schedule+ users log in to Schedule+. Once synchronized, their new
	  backup .CAL files and their entries in the SCHEDULE.KEY file will be added.
	
	6. Log in to the RESOURCES or Conference Rooms in Schedule+.
	
	7. From the Options menu, choose General Options. Select This Account Is For A
	  Resource.
	
	You should always perform a restore from a backup copy first. The above procedure
	is only recommended if a backup copy of the MAILDATA\CAL directory is
	unavailable or if the backup copy is corrupted as well.
	
	Additional query words: schedule plus 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
