---
layout: page
title: "Q186420: PRB: Status.dat File Is too Large"
permalink: /kb/186/Q186420/
---

## Q186420: PRB: Status.dat File Is too Large

	Article: Q186420
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual SourceSafe status.dat file size is larger than expected.
	
	RESOLUTION
	==========
	
	The fastest method is to rename the status.dat file, then run the following
	command at the command prompt:
	
	     DDCONV -S <Path to data dir>
	
	DDCONV.exe is located in the VSS\Win32 subdirectory.
	
	A less efficient method is to rename the Status.dat file, then run the Analyze
	utility with the -f switch.
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: kbDSupport kbdse kbNoKeyword kbSSafe400 kbSSafe400a kbSSafe500
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 _IK 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbprb
	
	=============================================================================
	
