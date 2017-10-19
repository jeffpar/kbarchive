---
layout: page
title: "Q263020: WD97: Word Crashes When You View Form Field Properties"
permalink: /kb/263/Q263020/
---

## Q263020: WD97: Word Crashes When You View Form Field Properties

	Article: Q263020
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of a form field, Word may stop responding and you
	may receive one of the following error messages.
	
	NOTE: To view the properties of a form field, unprotect your form. Then,
	right-click the form field and click Properties on the shortcut menu.
	
	In Microsoft Windows 95 or Microsoft Windows 98
	-----------------------------------------------
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at 0167:30733613.
	
	NOTE: The actual memory address may vary.
	
	In Microsoft Windows NT 4.0
	---------------------------
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  WINWORD
	
	  Exception: access violation (c0000005, address:30733613)
	
	In Microsoft Windows 2000
	-------------------------
	
	  WINWORD.exe has generated errors and will be closed by Windows.
	  You will need to restart the program.
	
	  An error log is being created.
	
	To view the error log, point to Search on the Windows Start menu, and then click
	"For Files or Folders". In the "Search for files and folders named" box, type
	"drwtsn32.log" (without the quotation marks) and click Search Now. After the
	file is found, right-click Drwtsn32 (Drwtsn32.log), and then click Open on the
	shortcut menu.
	
	CAUSE
	=====
	
	This problem occurs when two or more macros have the same name in different
	modules in the same Microsoft Word project.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Microsoft Word 2000.
	
	WORKAROUND
	==========
	
	Rename one of the macros to use a different macro name. To rename one of the
	macros, follow these steps:
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. Click the macro that you want to rename.
	
	3. Click Edit.
	
	4. In the Visual Basic Editor, rename the text after Sub.
	
	  For example, if you have two macros named Update, change the macro name to
	  Update2. The Sub line in your macro should now look similar to the following:
	
	  Sub Update2()
	
	5. On the File menu, click "Close and Return to Microsoft Word".
	
	6. Save your template or document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words: crash crashes crashing crashed quit quitting quits fail fails failing failed break
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
