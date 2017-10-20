---
layout: page
title: "Q122857: RDISK /S and RDISK /S- Options in Windows NT"
permalink: /kb/122/Q122857/
---

## Q122857: RDISK /S and RDISK /S- Options in Windows NT

{% raw %}

	Article: Q122857
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	3.50 3.51 4.00
	
	WINDOWS
	
	kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The RDISK utility included with Windows NT version 3.5 or later has two
	command line options:
	
	 RDISK /S
	
	  -and-
	
	 RDISK /S-
	
	When you use the RDISK /S option, the program skips the initial Create
	Repair Disk? dialog box and goes directly into saving the configuration.
	
	When you use the RDISK /S- option, the program also skips the Create Repair
	Disk? dialog box, saves configuration, and then the program quits.
	
	WARNING PLEASE READ:
	--------------------
	
	Both of these options also overwrite the saved SAM._ and SECURITY._
	registry hives created during initial Windows NT Installation. The default
	administrator account and password used during Setup is all that is
	contained in these small files.
	
	If you choose either of the above optional switches - Rdisk copies the
	entire current SAM and SECURITY database files containing ALL users and
	groups into the repair directory. On a domain controller containing many
	hundreds or even thousands of users these files can become very large which
	will Inhibit the ability to copy them to the emergency repair diskette
	(ERD).
	
	Be sure you have enough disk space when using either of these switches on Windows NT Machines and Domain Controllers that have a large number of users and groups defined.
	
	As a precaution - you should make a backup copy of the %systemroot%\repair
	directory to ensure you will still be able to make an emergency repair
	diskette after running RDISK while using one of the above switches.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
