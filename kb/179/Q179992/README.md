---
layout: page
title: "Q179992: XADM: Exchange Setup Fails with Error File=common&#92;list1.c"
permalink: /kb/179/Q179992/
---

## Q179992: XADM: Exchange Setup Fails with Error File=common&#92;list1.c

{% raw %}

	Article: Q179992
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to install a new Exchange Server or Remove All from Exchange
	Server, the Exchange Setup Add/Remove dialog box appears.
	
	The Exchange Setup and/or Maintenance Mode Setup Remove All option fails with the
	following error message:
	
	  Error 'File=common\list1.c, Line=1018'
	
	CAUSE
	=====
	
	The Microsoft Exchange Server was not fully removed from a prior installation.
	There are orphaned files or registry keys or both that are preventing the
	installation or removal of Exchange Server.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, do the following:
	
	1. Remove all \exchsrvr directories and subdirectories from each hard disk
	  drive.
	
	2. Remove all registry entries keys made by Exchange Server. For information
	  about how to do this, please see Microsoft Knowledge Base article Q147374,
	  "XADM: Registry Key Modifications Made During Setup."
	
	3. Run Setup from the Exchange Server CD-ROM.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
