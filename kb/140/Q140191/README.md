---
layout: page
title: "Q140191: PC WSPlus: SCHDIST.EXE Ignores CAL File Security"
permalink: kb/140/Q140191/
---

## Q140191: PC WSPlus: SCHDIST.EXE Ignores CAL File Security

	Article: Q140191
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set an user's access to your calendar file (CAL) to be None, he or she
	will not be able to see your free/busy times. However, if you set an external
	postoffice user's access to None, he or she will still be able to see your
	free/busy information.
	
	CAUSE
	=====
	
	This occurs because the free/busy information is distributed by SCHDIST.EXE in
	the form of .POF files. The .POF files do not have support for the individual
	security settings that can be applied to .CAL files created by Schedule+.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Microsoft Schedule+ for Windows. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q132209 Viewing Free/Busy on Remote Postoffice Via Async
	
	  Q138725 Definition of *.POF Files (Access Control List)
	
	
	Additional query words: 1.00 1.00a sched plus dist security cal error schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
