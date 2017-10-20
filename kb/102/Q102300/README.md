---
layout: page
title: "Q102300: X400: Retaining Addresses When Reinstalling Gateway"
permalink: /kb/102/Q102300/
---

## Q102300: X400: Retaining Addresses When Reinstalling Gateway

{% raw %}

	Article: Q102300
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you reinstall the Microsoft Mail Gateway to X.400 access component on a
	version 2.1, 3.0, or 3.2 Microsoft Mail for PC Networks postoffice, it is a good
	idea to retain the current X.400 gateway recipient list.
	
	The advantages of doing this are:
	
	1. The administrator will not need to re-enter the X.400 list using the Admin
	  Import command.
	
	2. Those users with X.400 recipients in their Personal Address Lists (PALs)
	  should not lose these addresses.
	
	  NOTE: Versions 3.0 and 3.2 of Microsoft Mail for Windows use a Personal
	  Address Book (PAB) and would not be affected by the procedure described
	  below. The MS-DOS and Macintosh workstations will be affected.
	
	To Retain the X.400 Address List
	--------------------------------
	
	1. Go to the Mail database and make backup copies of X400.NME and X400.GLB from
	  the NME and GLB subdirectories, respectively.
	
	2. Remove the access component using the following command
	
	  x:\install -r,
	
	  where x is the drive letter of the Microsoft Mail Gateway Access for X.400
	  disk.
	
	3. Reinstall the access component using the following command:
	
	  x:\install
	
	4. Copy the X400.NME and X400.GLB backup files into the NME\X400.NME and
	  GLB\X400.GLB directories, respectively, replacing the new 4-byte X400.GLB and
	  0-byte X400.NME files created by the installation process.
	
	You can only restore the X400.NME and X400.GLB files to the postoffice at which
	they were originally created.
	
	To retain the list of X.400 users defined on a postoffice or to copy users from
	one postoffice to another, use the IMPORT.EXE utility included with Microsoft
	Mail for PC Networks.
	
	
	Additional query words: 2.10 3.00 3.20 pal po
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
