---
layout: page
title: "Q229041: Files Are Not Deleted From Recycler Folder"
permalink: /kb/229/Q229041/
---

## Q229041: Files Are Not Deleted From Recycler Folder

{% raw %}

	Article: Q229041
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool diskmem kbDiskMemory
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you empty the Recycle Bin in Windows, the files may not be deleted from
	your hard disk.
	
	NOTE: You cannot view these files using Windows Explorer, My Computer, or the
	Recycle Bin.
	
	CAUSE
	=====
	
	This issue can occur if a third-party filter driver is using the files you try
	to delete.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the files from an MS-DOS prompt. To do this,
	follow these steps:
	
	1. Click Start, click Run, type "cmd.exe" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Change to the drive and folder where you deleted the files.
	
	For example if you deleted a file from the C:\Windows folder, type "cd\windows"
	(without the quotation marks) at the C: prompt, and then press ENTER.
	3. From that folder type "cd recycler" (without the quotation marks), and then
	  press ENTER.
	
	4. From the Recycler folder type "dir" (without the quotation marks), and then
	  press ENTER. You may see some User<SID> folders where <SID> is
	  the security ID for each user who deleted files in that folder.
	
	5. Type "cd user<SID>" (without the quotation marks), and then press
	  ENTER.
	
	6. Type "del *.*" (without the quotation marks), and then press ENTER. If you
	  receive an error message that indicates some files are open, quit all the
	  programs running on your computer.
	
	7. Type "cd.." (without the quotation marks), press ENTER, and then repeat steps
	  5-7 for each folder in the Recycler folder.
	
	8. Type "exit" (without the quotation marks), and then press ENTER.
	
	MORE INFORMATION
	================
	
	For information about the Recycle Bin, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q165126 Cannot Delete File Using Windows NT Explorer
	
	  Q171051 How To Bypass The Recycle Bin When Deleting Files
	
	  Q171694 Differences Between The Recycle Bin and the Recycler Folder
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool diskmem kbDiskMemory 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
