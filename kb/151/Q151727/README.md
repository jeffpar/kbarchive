---
layout: page
title: "Q151727: BUG: Mastering Exchange: Add/Remove Does not Remove all Files"
permalink: kb/151/Q151727/
---

## Q151727: BUG: Mastering Exchange: Add/Remove Does not Remove all Files

	Article: Q151727
	Product(s): Microsoft Mastering Series
	Version(s): 1.0; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbmm kbsetup kbnokeyword kbBug kbISS
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Exchange Development ISBN 1-57231-337-4, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Add/Remove Programs tool in Windows 95 to remove a Complete
	installation of Mastering Microsoft Exchange Development, not everything
	installed by setup is removed. Add/Remove Programs does not remove the Med
	directory or the directories below it including the Labs directory, the Lab
	subdirectories, and the Lists directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	If you did a Complete installation, you can manually delete the Med directory
	and the directories below it by using the following steps:
	
	1. Click Start, point to Find, and click Files or Folders.
	
	2. Type the name of the directory you want to remove. For example, type "Med"
	  (without the quotation marks) in the Named field.
	
	3. Click Find Now.
	
	4. Right-click on the "Med" folder, and then click Delete.
	
	NOTE: If you worked on any of the labs or annotated any topics, the information
	is saved in the Lists and Labs directories. If you remove these directories, the
	information will be lost.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm kbsetup kbnokeyword kbBug kbISS 
	Technology        : kbMSPressSearch kbOSWin95 kbOSWinSearch kbZNotKeyword2
	Version           : :1.0; WINDOWS:95
	Issue type        : kbbug
	
	=============================================================================
	
