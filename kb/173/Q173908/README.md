---
layout: page
title: "Q173908: WD97: Errors Opening File If Low Memory or Low Disk Space"
permalink: kb/173/Q173908/
---

## Q173908: WD97: Errors Opening File If Low Memory or Low Disk Space

	Article: Q173908
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open a file, the file does not open, and one or more of the
	following error messages may appear:
	
	- The Word work file and memory are nearly full. Save your work.
	
	  -or-
	
	- There is not enough memory or disk space to complete the operation.
	
	  -or-
	
	- There is insufficient memory or disk space. Close extra windows and save your
	  work.
	
	  -or-
	
	- There is insufficient memory or disk space. Close an application.
	  (<path>\<filename>)
	
	  -or-
	
	- This program has performed an illegal operation and will be shut down.
	
	  If this problem persists, contact the program vendor.
	
	  When you click Details, the following message is displayed:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:3007ead6.
	
	Or, Word may stop responding.
	
	CAUSE
	=====
	
	There is insufficient random access memory (RAM) on your computer or
	insufficient disk space available for Word to open the file.
	
	WORKAROUND
	==========
	
	To work around this problem in the short term, use either of the following
	methods:
	
	- As a short-term solution, you can free RAM memory by quitting unneeded
	  programs, or you can free disk space by deleting unneeded files.
	
	  -or-
	
	- Restart Windows. To do this, on the Start menu, click Shut Down. In the Shut
	  Down Windows dialog box, click Restart The Computer, and then click Yes.
	
	To prevent this problem from occurring in the long term, use either of the
	following methods:
	
	- Add more RAM memory to your computer.
	
	  -or-
	
	- Acquire more hard disk space, either by adding a larger disk drive or by
	  using a disk compression utility.
	
	NOTE: When troubleshooting these problems, ensure that there are no other
	programs active and that there is a minimum of 20 megabytes (MB) of free hard
	disk space. As a general guideline, 20 MB of free space is enough to work with
	Word files. However, if you frequently work with large documents (10 MB or
	more), you may need to free some additional space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above.
	
	MORE INFORMATION
	================
	
	For additional information about optimizing your computer for Word 97, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q160068 WD97: Optimizing Microsoft Word 97
	
	For additional information about similar problems, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q135887 OFF: Cannot Start Office Programs If Available Disk Space Low
	
	
	  Q162053 WD97: Errors Initializing Visual Basic Editor
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
