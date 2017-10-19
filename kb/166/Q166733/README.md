---
layout: page
title: "Q166733: SMSINST: Access Violation When Adding a Large Number of Files"
permalink: /kb/166/Q166733/
---

## Q166733: SMSINST: Access Violation When Adding a Large Number of Files

	Article: Q166733
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Systems Management Server Installer 1.0 or 2.0 Repackage option
	from the Installation Expert, you may receive an access violation (AV) error
	when you click Finish. Additionally, attempting to use the Application Files,
	Installation Files dialog box from the Installation Expert to add the contents
	of a directory containing more than 5,885 files will produce the following
	message :
	
	  You cannot add any more items. Please delete items before trying to add any
	  new items.
	
	CAUSE
	=====
	
	During a repackage where a large number of files are added, Systems Management
	Server Installer attempts to create the Install File(s) script action for each
	and every file detected. There is a finite limit to the number of Install
	File(s) script actions that can be added by a repackage at any one time. This is
	currently limited to approximately 5,885 Install File(s) script actions added by
	a repackage. Similarly, attempting to add the contents of a directory containing
	a large number of files from the Installation Expert is limited to 5,885 files.
	
	WORKAROUND
	==========
	
	The workaround provided in this section assumes that you have familiarized
	yourself with Systems Management Server Installer scripting, to add appropriate
	script actions.
	
	1. Install the proposed application on another computer to know the number of
	  files the application installs.
	
	2. Record the full paths to directories where more than 5,885 files will be
	  created. (for example, d:\Bigapp\bin)
	
	3. When selecting the Repackage option on the reference computer, click Change,
	  to modify the "Files to ignore" option for the repackage.
	
	4. Type paths to directories to scan as required, by clicking Add in the
	  "Directories to Scan" section of the Repackage Advanced Settings dialog box.
	
	5. Click Add in the "Files to ignore" section and then type the full path
	  recorded earlier to the directory that will contain the large number of
	  files, including a file wildcard (such as d:\Bigapp\Bin\*.*). The dialog box
	  will allow you to type paths that do not currently exist, along with file
	  wildcards if required.
	
	  This allows directories that will contain certain file types to be ignored, or
	  all files in a particular directory to be ignored. You can add multiple
	  directory paths by repeatedly clicking Add and typing each path and file
	  specifier to be ignored.
	
	6. When you are finished selecting files to ignore, Click OK to close the
	  Repackage Advanced Options dialog box.
	
	7. Enter the repackage options as normal (Installation Program, Command Line
	  Options and so on) and then click Next.
	
	  The Systems Management Server Installer will scan directories and the registry
	  and then start the application setup program. After the repackage is
	  complete, clicking Finish should no longer cause Systems Management Server
	  Installer to generate an AV, and return you to the Installation Expert.
	
	8. On the File menu, click Save or Save As to save the script.
	
	9. To now include the files that were ignored during the repackage, change the
	  Systems Management Server Installer view from Installation Expert to the
	  Script Editor (on the View menu, click Script Editor).
	
	10. Examine the script for Install File script actions where other files during
	  the repackage have been selected. These are typically added after the
	  "Include Script %_SMSINSTL_%\INCLUDE\uninstal.ipf" Include Script action.
	
	11. Add an Install File(s) script action below the Include Script script action,
	  using the source the path to the previously excluded files, along with file
	  wildcard (*,?) specifiers where possible. For example, for the earlier
	  example, the d:\Bigapp\bin directory had all its files ignored, so you would
	  type the following as the Source for an Install File(s) script action:
	
	  "d:\Bigapp\bin\*.*" (without the quotation marks)
	
	12. If wildcards were used in the Source entry, type "%MAINDIR%" (without the
	  quotation marks) as the only entry in the Destination field.
	
	13. Complete other entries in the Install File(s) dialog box as necessary and
	  click OK.
	
	14. Add further Install File(s) script actions if required or change back to the
	  Installation Expert from the View menu.
	
	  At this point, you may want to save the script under another file name, to
	  allow testing with the new script.
	
	15. Use the Test option to test the script as appropriate. To ensure conclusive
	  results, test the compiled Systems Management Server Installer executable
	  file on a computer that did not previously have a copy of the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Systems Management Server
	Installer version 1.0 and 2.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To keep scripts small and concise, it is recommended that you review scripts
	that are created by using the Repackage option. For example, it is possible to
	replace many hundreds of lines containing Install File(s) script actions that
	install single files with a single line using the *.* wildcard.
	
	Additional query words: prodsms wild card
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : :1.0,2.0
	Issue type        : kbbug
	
	=============================================================================
	
