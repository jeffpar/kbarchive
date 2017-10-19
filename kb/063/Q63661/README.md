---
layout: page
title: "Q63661: FIX: Problems Viewing C README.DOC in PWB 1.0 Online Help and QH"
permalink: /kb/063/Q63661/
---

## Q63661: FIX: Problems Viewing C README.DOC in PWB 1.0 Online Help and QH

	Article: Q63661
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Problems can occur when attempting to access the C version 6.0 README.DOC from
	the main contents screen in the DOS version of Programmer's WorkBench (PWB)
	version 1.0 or QuickHelp via the online help.
	
	When attempting to view the README.DOC file using the online help inside the DOS
	version of PWB, the messages "Error displaying help" and then "Cannot process
	cross reference" may be displayed in successive dialog boxes.
	
	When attempting to view the README.DOC file from within QuickHelp, the message
	"The database README.DOC is not open, or the topic is not found" may be
	displayed.
	
	RESOLUTION
	==========
	
	The following are two possible workarounds for the problem in PWB version 1.0:
	
	1. The README.DOC file can be loaded into the help system by typing the
	  following
	
	  " arg "$PATH:readme.doc!" arg pwbhelp " (without the quotation marks)
	
	  with default keys:
	
	  " Alt+A $PATH:readme.doc! F1 " (without the quotation marks)
	
	  Note that this method may fail if there is another file named README.DOC in
	  the path before the C 6.00 README.DOC. If this is the case, the other
	  README.DOC will be loaded instead of the C 6.0 README.DOC. This method can
	  also fail if there is not enough memory to load the file into the help
	  system.
	
	-or-
	
	2. If the previous method fails, the C 6.0 README.DOC can be loaded into PWB as
	  a normal text file by choosing Open from the File menu. The README.DOC can be
	  found in the C 6.0 bound executable directory (for example, C:\C600\BINB).
	
	The following are three possible workarounds for the problem in QuickHelp:
	
	1. Inside QuickHelp, choose Search from the View menu, type "$PATH:readme.doc!"
	  (without the quotation marks) and press ENTER. Again, this will bring up the
	  first README.DOC on the path.
	
	2. You can also choose Open from the File menu and load the the file by giving
	  the full path and filename of the C 6.0 README.DOC. QuickHelp allows you to
	  open any text file under 64K in size.
	
	3. To enable direct access of the README.DOC from within QuickHelp via the
	  README.DOC button, it is necessary to point the QH environment variable to
	  the directory where the README.DOC is located. For example:
	
	     set qh=c:\c600\binb\readme.doc
	
	  The QH environment variable is not documented in the C 6.0 printed or online
	  documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with PWB version 1.0.
	
	README.DOC access is not an issue with PWB version 1.1, since there is no longer
	a link to the README.DOC on the main Microsoft Advisor contents screen.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	
