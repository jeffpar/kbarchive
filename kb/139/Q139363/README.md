---
layout: page
title: "Q139363: FIX: Setup Wizard Creates Disk Images That Are Too Big"
permalink: /kb/139/Q139363/
---

## Q139363: FIX: Setup Wizard Creates Disk Images That Are Too Big

	Article: Q139363
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disk images created by the Setup Wizard do not fit on floppy disks. The total
	file size is a few hundred or thousand bytes over what a floppy disk can hold.
	This behavior occurs randomly.
	
	CAUSE
	=====
	
	At times, the Setup Wizard underestimates the actual size of the files it is
	creating because part of the file is still in memory. The actual size of the
	files is therefore bigger than the size the Setup Wizard estimates.
	
	WORKAROUND
	==========
	
	By disabling disk caching, you can prevent the Setup Wizard from miscalculating
	the total size of the files. To disable caching, comment the lines in your
	system files that load caching software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
