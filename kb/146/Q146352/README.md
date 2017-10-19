---
layout: page
title: "Q146352: XCLN: Invalid Temp Variable Causes Files to Appear on Desktop"
permalink: /kb/146/Q146352/
---

## Q146352: XCLN: Invalid Temp Variable Causes Files to Appear on Desktop

	Article: Q146352
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Microsoft Exchange client for Windows 95, files with
	the an extension of .TMP appear on the desktop.
	
	CAUSE
	=====
	
	This is caused by an invalid environment variable pointing to the desktop
	directory. For example:
	
	  set temp=c:\desktop
	
	RESOLUTION
	==========
	
	Set the temp variable to a valid location in the Autoexec.bat file. Add the
	following lines to this file:
	
	  Set Temp=[drive]:\%windir%\Temp
	  Set Tmp=[drive]:\%windir%\Temp
	
	where drive is the drive letter where Windows 95 is installed and %windir% is the
	name of the Windows 95 directory. Make sure that the Temp directory exists in
	the %windir% tree.
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : 4.00
	
	=============================================================================
	
