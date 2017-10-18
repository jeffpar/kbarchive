---
layout: page
title: "Q165231: WD97: Fax Wizard Leaves .tmp Files Behind"
permalink: kb/165/Q165231/
---

## Q165231: WD97: Fax Wizard Leaves .tmp Files Behind

	Article: Q165231
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbother winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the File menu to view the most recently used (MRU) list, there
	may be a file listed that resembles the following:
	
	  C:\...\~$CovSht@13-03-97,10-01-03.tmp
	
	Note: The numbers in the file name will differ from the example. The numbers are
	actually the date and time the file was created.
	
	CAUSE
	=====
	
	This file was created and left on the system by the Fax Wizard.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps to reset the MRU list:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Clear the "Recently Used File List" check box, and click OK.
	
	4. On the Tools menu, click Options.
	
	5. Click the General tab.
	
	6. Click to select the Recently Used File List check box and click OK.
	
	For additional information about resetting MRU lists in Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q161631 WD97: How to Reset Word 97 MRU Lists
	
	MORE INFORMATION
	================
	
	The Fax Wizard helps you create a cover sheet and fax a document to someone. You
	can use the Fax Wizard to send a fax, to mail merge to a fax, or to print a
	cover sheet to send from a fax machine.
	
	In the Fax Wizard, there is an opportunity to enter the recipients names and
	their fax numbers. The Fax Wizard creates a Word document with a table
	containing these names and numbers for use during the fax process. Each time the
	Fax Wizard is run, a new file is created. Each of these files are approximately
	20 kilobytes (KB) in size. Once the process is complete, Word does not remove
	these files from your computer or reuse the information from the file in the Fax
	Wizard.
	
	
	There is no way to prevent the Fax Wizard from creating these files, or to have
	the Fax Wizard delete the file when it has finished. You will have to manually
	search for and delete these files from your computer.
	
	Note: Deleting these files will not remove them from the MRU list.
	
	The documents are named similar to other temporary files created by Windows
	programs and are stored in the Temp folder. The Temp folder in Windows 95 is
	usually C:\Windows\Temp, but may be different on your computer.
	
	You may want to check the Autoexec.bat file, if one exists, for the location of
	the Temp folder. You may want to delete these files from your computer
	periodically by using the following steps:
	
	To Remove Temporary Files
	-------------------------
	
	1. Quit all Windows programs.
	
	2. On the Start menu, point to Find, and then click "Files or Folders".
	
	3. Click the Name & Location tab.
	
	4. In the Named: box, type "~*.*" (without the quotation marks).
	
	5. Make sure the Look in: box displays the correct drive (for example, your hard
	  disk drive - usually Drive C:), and the Include subfolders check box is
	  selected. Click Find Now.
	
	6. If any files are found, do the following:
	
	  a. On the Edit menu, click Select All.
	
	  b. On the File menu, click Delete.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
