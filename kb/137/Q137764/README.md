---
layout: page
title: "Q137764: Road Atlas 4.0: Error Executing PSS.BAT File on Streets CD"
permalink: /kb/137/Q137764/
---

## Q137764: Road Atlas 4.0: Error Executing PSS.BAT File on Streets CD

{% raw %}

	Article: Q137764
	Product(s): Microsoft Automap
	Version(s): WINDOWS:3.11,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	- the operating system: Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Pss.bat file, you receive error messages.
	
	CAUSE
	=====
	
	The command to run the manual installation of Automap Streets version 4.0 does
	not contain a backslash (\) after the CD-ROM drive letter.
	
	When you attempt to run the Pss.bat file with the incorrect command line syntax,
	you may receive a number of potential error messages.
	
	RESOLUTION
	==========
	
	Do not include the backslash after the CD-ROM drive letter.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q136981 Streets 4.0: Manual Installation Instructions
	
	CAUTION: Do not use the installation steps if you are using Microsoft Windows 95
	or Microsoft Windows NT. The manual installation uses a batch file that copies
	Windows 3.x system files onto your hard drive. Allowing the system files to be
	overwritten in Windows 95 or Windows NT may cause improper system performance.
	
	MORE INFORMATION
	================
	
	NOTE: This information assumes c is the letter of your hard drive and d is the
	letter of your CD-ROM drive.
	
	If you type "pss" (without the quotation marks) at and MS_DOS command prompt from
	the Mssetup\Manual folder located on the CD-ROM drive, the following explanatory
	information screen appears:
	
	  Microsoft Automap Streets manual installation batch file
	
	  You need to tell this batch file where to install Microsoft Automap
	  Streets and where your Windows directory is.
	
	  The command line is as follows:
	
	  PSS (destination path) (windows path) (cd path)
	
	  Where:
	
	  (destination path)  Is the path to where you want to install
	                      Microsoft Automap Streets.
	
	  (windows path)      Is your Windows path.  This must be correct!
	                      There is no check to make sure it exists.
	
	  (cd path)           Is the drive letter of your CD-ROM followed by
	                      a :.  e.g. type: pss c:\automap c:\windows d:
	
	Notice how the command line entry does not contain a \ after the d:
	
	Additional query words: auto auto-map automap reference errors problems batchfile
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbAutomapSearch kbAutomapStreets400 kbOSWin311
	Version           : WINDOWS:3.11,4.0
	
	=============================================================================
	

{% endraw %}
