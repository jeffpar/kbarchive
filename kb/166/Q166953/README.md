---
layout: page
title: "Q166953: WD97: Cannot Locate Msconv97.dll When Converting Files"
permalink: /kb/166/Q166953/
---

## Q166953: WD97: Cannot Locate Msconv97.dll When Converting Files

	Article: Q166953
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbusage word97
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to open a document that was created in non-Word format, you may
	receive one of the following error messages:
	
	  Cannot locate Msconv97.dll.
	
	  -or-
	
	  Cannot locate conversions library.
	
	CAUSE
	-----
	
	There are two possible causes:
	
	- The Msconv97.dll file is in the wrong location. You will receive the error
	  message if the Msconv97.dll file is in a different location from the text
	  converters.
	
	- The Wpft632.cnv file was incorrectly installed. If Office 95 is installed on
	  your computer and if you install any 97-series Microsoft program, Wpft632.cnv
	  is re-installed and registered. Some programs, such as Microsoft Publisher
	  97, install or update the Wpft632.cnv file and register it. When the 97
	  programs are subsequently uninstalled, some of those components or registry
	  entries may not be removed.
	
	RESOLUTION
	==========
	
	If the Files Are in the Wrong Location
	--------------------------------------
	
	
	Use one of the following methods to correct the problem:
	
	Method 1:
	
	Remove the text converters that are not in the \Microsoft Shared\Textconv
	directory and run Microsoft Office Setup to install them to the correct
	directory.
	
	Method 2:
	
	Copy the Msconv97.dll file to the directory that contains the text converters.
	The most likely directory is \Msapps\Textconv.
	
	If You Suspect That Msconv97.dll or Wpft632.cnv Was Installed Incorrectly
	-------------------------------------------------------------------------
	
	1. Search the hard disk drive for any occurrences of Msconv97.dll and
	  Wpft632.cnv and rename those files.
	
	2. Remove the following registry entries:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\CNVCORE
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	        \SharedDLLs
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools
	        \Text Converters\Import\WordPerfect6x
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools
	        \Text Converters\Import\WrdPrfctDOS
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the Changing Keys And
	  Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	3. Run Office 95 Setup and remove all of the text converters. Choose Yes to
	  remove shared components. If you are correcting an Office 97 installation,
	  perform a Remove All of Office 95.
	
	4. If you are restoring an Office 95 installation, run Office 95 Setup and
	  reinstall the text converters you want to use. If you are correcting an
	  Office 97 installation, reinstall the Office 97 text converters you want to
	  use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When you uninstall FrontPage, Office 95, or Office 97, the proofing tools and
	text converters of the remaining applications may not work as expected. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q160226 Can't Use Proofing Tools (Spelling Checker) or Text Converters
	
	REFERENCES
	==========
	
	For more information on troubleshooting document conversion, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q114168 Troubleshooting Guide: Converting Docs in Word for Windows
	
	  Q157089 Limitations of Converting from WordPerfect 6.x to Word 97
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	Additional query words: maintenance mode office off97
	
	======================================================================
	Keywords          : kbinterop kbusage word97 
	Technology        : kbOSWin95 kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
