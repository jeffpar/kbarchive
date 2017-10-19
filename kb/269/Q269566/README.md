---
layout: page
title: "Q269566: WD97: ErrMsg Clicking &quot;Exit&quot;, &quot;AutoCorrect&quot;, &quot;Increase Indent&quot;"
permalink: /kb/269/Q269566/
---

## Q269566: WD97: ErrMsg Clicking &quot;Exit&quot;, &quot;AutoCorrect&quot;, &quot;Increase Indent&quot;

	Article: Q269566
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you do one of the following:
	
	- On the Tools menu, you click AutoCorrect.
	
	  -or-
	
	- On the File menu, you click Exit to quit Microsoft Word.
	
	  -or-
	
	- On the Formatting toolbar, you click Increase Indent.
	
	  -or-
	
	- On the Standard toolbar, you click either Bullets or Numbering.
	
	Microsoft Word may stop responding (crash) with the following error message.
	
	In Microsoft Windows 95 or Microsoft Windows 98:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, one of the following messages appears:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at address.
	
	  -or-
	
	  WINWORD caused an invalid page fault in module MSO9.DLL at address.
	
	NOTE: The actual memory address may vary.
	
	In Microsoft Windows NT 4.0:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  WINWORD.EXE
	
	  Exception: access violation (c0000005, address:c0000005)
	
	In Microsoft Windows 2000:
	
	  WINWORD has generated errors and will be closed by Windows. You will need to
	  restart the program.
	
	  An error log is being created.
	
	To view the error log in Microsoft Windows 2000, follow these steps:
	
	1. Click Start, point to Search, and then click "For Files or Folders".
	
	2. In the "Search for files or folders named" box, type "Drwtsn32.log" (without
	  the quotation marks).
	
	3. Click Search Now.
	
	4. Right-click the file, and then click Open on the shortcut menu that appears.
	
	  NOTE: The Drwtsn32.log file is located in the following folder by default:
	
	  C:\Documents and Settings\All Users\Documents\DrWatson
	
	
	CAUSE
	=====
	
	This problem may occur when you turn off all of the following options (clear the
	check boxes):
	
	- On the Tools menu, click Options. On the Edit tab, the "Tabs and backspace
	  set left indent" check box is cleared.
	
	  -and-
	
	- On the Tools menu, click AutoCorrect. All of the check boxes on the
	  AutoCorrect, AutoFormat As You Type, and AutoText tabs are cleared.
	
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To temporarily work around this problem, delete the Word Data key in the Windows
	registry. To do this, follow these steps:
	
	1. Quit all Windows programs.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks).
	
	4. Click OK.
	
	5. Select the following Windows registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	6. On the Edit menu, click Delete.
	
	7. Click Yes to the following question in the Confirm Key Delete dialog box:
	
	  Are you sure you want to delete this key?
	
	8. On the Registry menu, click Exit.
	
	NOTE: Deleting the Data key resets several options back to the default settings,
	including the most recently used file list on the File menu, and many settings
	that you customize in the Options dialog box (on the Tools menu, click Options).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. The fix for this problem is included in
	the latest Microsoft Word 97 for Windows patch. Please see the "Resolution"
	section of this article for more information.
	
	Additional query words: patch IPF
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
