---
layout: page
title: "Q94333: SETVER Table Entries Are Not Maintained When Upgrading"
permalink: /kb/094/Q94333/
---

## Q94333: SETVER Table Entries Are Not Maintained When Upgrading

{% raw %}

	Article: Q94333
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not install MS-DOS 6 or later Upgrade in the current MS-DOS directory,
	your old SETVER entries are not maintained.
	
	CAUSE
	=====
	
	When you install MS-DOS Upgrade, Setup updates the current version table
	(maintained in SETVER.EXE). If you install MS-DOS Upgrade in a new directory,
	Setup cannot update the old version table.
	
	MORE INFORMATION
	================
	
	When you install MS-DOS Upgrade to your existing MS-DOS directory, Setup updates
	your existing SETVER.EXE version table. When updating SETVER.EXE, Setup does not
	overwrite exiting entries, even if the new setver table contains a different
	version. For example, if your SETVER.EXE table has a NETX.EXE 5.00 entry, MS-DOS
	6.2 Upgrade Setup does not replace it with the new default for NETX.EXE (which
	is NETX.EXE 6.00).
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Update the new SETVER.EXE file, adding the entries that your software
	  requires.
	
	-or-
	
	- Uninstall MS-DOS and reinstall MS-DOS Upgrade in the original MS-DOS
	  directory.
	
	Additional query words: 6.22 6.20 6.00 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
