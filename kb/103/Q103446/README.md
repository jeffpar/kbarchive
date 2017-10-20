---
layout: page
title: "Q103446: PC Adm: .CAL and .MMF Files Not Counted in Storage Status"
permalink: /kb/103/Q103446/
---

## Q103446: PC Adm: .CAL and .MMF Files Not Counted in Storage Status

{% raw %}

	Article: Q103446
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.2 of Microsoft Mail for PC Networks, the ADMIN.EXE
	program's Local-Admin, Storage, Status command returns the amount of disk space
	used by the Microsoft Mail for PC Networks, MS-DOS, and Macintosh workstation
	users only. Mail Message Files (.MMF files) stored on the postoffice by users of
	Microsoft Mail for Windows are not counted, nor are Microsoft Schedule+ for
	Windows calendar (.CAL) files.
	
	The Mail version 3.2 "Administrator's Guide" is misleading regarding this
	topic--the bottom of page 108 implies that if the .MMF and .CAL files are stored
	on the postoffice, they will be included. However, even if the .MMF and .CAL
	files are on the postoffice, they still are not counted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To calculate an accurate count of all client and Schedule+ files:
	
	1. From the Admin program, select the Local-Admin, Storage, Status command and
	  record the Total Space Used amount.
	
	2. Quit the Admin program.
	
	3. At the MS-DOS prompt, switch to the drive containing the postoffice database.
	
	4. Change to the MMF directory.
	
	5. Type DIR and record the amount.
	
	6. Change to the CAL directory.
	
	7. Type DIR and record the amount.
	
	8. Add the three amounts.
	
	
	Additional query words: 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
