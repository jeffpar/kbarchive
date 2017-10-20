---
layout: page
title: "Q63964: Mac Srv: Err Msg: Mail Server Could Not Be Loaded"
permalink: /kb/063/Q63964/
---

## Q63964: Mac Srv: Err Msg: Mail Server Could Not Be Loaded

{% raw %}

	Article: Q63964
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Apple System Installer is used to update the operating system to version
	6.0.4 or 6.0.5 on a Macintosh running a Microsoft Mail server, the Microsoft
	Mail error message "The Microsoft Mail Server could not be loaded because" with
	no reason or explanation given may be generated.
	
	To solve this problem, the System Folder must be reinstalled. It is important to
	install NEW files in the System Folder, not update existing ones. Do the
	following:
	
	1. Save your fonts, desk accessories (DAs), and other needed files (such as the
	  "Microsoft Mail Data file") by removing them from the System Folder since the
	  current system software files will be replaced by new ones.
	
	2. Restart the machine using the System Tools disk.
	
	3. Delete the System Folder on the hard disk.
	
	4. Run the Installer on the System Tools disk to reinstall the System software.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
