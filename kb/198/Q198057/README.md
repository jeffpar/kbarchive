---
layout: page
title: "Q198057: WD97: Macro Virus Warning Message When You Start Word"
permalink: /kb/198/Q198057/
---

## Q198057: WD97: Macro Virus Warning Message When You Start Word

{% raw %}

	Article: Q198057
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbvirus word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Word, the following macro virus warning message appears:
	
	  The document you are opening contains macros or customizations. Some macros
	  may contain viruses that could harm your computer.
	
	  If you are sure this document is from a trusted source, click Enable Macros.
	  If you are not sure and want to prevent any macros from running, click
	  Disable Macros.
	
	CAUSE
	=====
	
	This problem may occur when you double-click any of the following:
	
	- A shortcut pointing to an incorrect or missing document or a template that
	  contains macros.
	
	- A Word shortcut on the desktop that points to a document or template that
	  contains macros.
	
	- A shortcut on the Windows menu that points to a Word document or template
	  that contains macros.
	
	- A Word file on the Windows desktop that contains macros (and you use this
	  shortcut to start Word).
	
	- A Word shortcut that points to Email.dot.
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: Change the Shortcut
	-----------------------------
	
	Change the desktop or menu shortcut to point to the correct file or to a file
	that does not contain macros.
	
	NOTE: You may have had a previous Word shortcut that pointed to an existing file,
	but you may have renamed, deleted, or moved the file, causing your shortcut to
	become invalid. When this occurs, Windows tries to find the file, and it is
	possible that the shortcut will be directed to an incorrect file. This can also
	occur when you upgrade from one version of Word to another. Shortcuts you may
	have are not affected by the Word Setup program. It is possible that your
	existing shortcut will become invalid after you upgrade to a new version of
	Word.
	
	Method 2: Move the File and Correct the Shortcut
	------------------------------------------------
	
	Move the file that contains macros to any of the template folders that Word uses,
	and then correct your shortcut to point to the file in the new location.
	
	NOTE: Word trusts that a file placed in any of the template folders is safe (free
	of macro viruses). Be certain that this is the case for all files that you place
	in these locations.
	
	Method 3: Create a New Desktop File
	-----------------------------------
	
	Create a new Word file on the Windows desktop that does not contain macros to
	start Word.
	
	MORE INFORMATION
	================
	
	This functionality is by design in Word when you have Macro Virus Protection
	turned on (this setting is on by default). To turn on Macro Virus Protection (if
	it is turned off), use the following procedure:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Under General Options, click to select the Macro virus protection check box,
	  and then click OK.
	
	To Change a Desktop Shortcut
	----------------------------
	
	1. On the Windows desktop, right-click the Word shortcut icon.
	
	2. On the shortcut menu, click Properties.
	
	3. Click the Shortcut tab.
	
	4. Change the "Target" and "Start in" paths as appropriate, and then click OK.
	
	To Change a Windows Menu Shortcut
	---------------------------------
	
	1. On the Windows taskbar, click Start, point to Settings, and then click
	  Taskbar.
	
	2. Click the Start Menu Programs tab, and then click Advanced.
	
	  This takes you to the Start Menu folder.
	
	3. Switch to the location that the menu shortcut displays. For example, for Word
	  97, double-click Programs. On the right side of the window, you should see a
	  shortcut to Microsoft Word.
	
	4. Right-click the Microsoft Word shortcut, click Properties, and then click the
	  Shortcut tab.
	
	5. Change the "Target" and "Start in" paths, as appropriate, and then click OK.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q160686 WD97: No Macro Warning Opening File in Template Folder
	
	  Q161515 WD97: Macro Virus Warning Displayed When No Macros Exist in File
	
	  Q134727 WD: What to Do If You Have a Macro Virus
	
	  Q163932 WD97: Frequently Asked Questions About Word Macro Viruses
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbvirus word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
