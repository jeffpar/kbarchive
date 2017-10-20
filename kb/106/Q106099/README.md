---
layout: page
title: "Q106099: PC Adm: Invalid or Inaccurate Error Messages"
permalink: /kb/106/Q106099/
---

## Q106099: PC Adm: Invalid or Inaccurate Error Messages

{% raw %}

	Article: Q106099
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Mail Administrator upgrades a version 2.1x Microsoft Mail for
	PC Networks postoffice to version 3.2 of Microsoft Mail without upgrading the
	administrative executable files, inaccurate messages may be displayed when the
	Mail Administrator program (ADMIN.EXE) is run.
	
	CAUSE
	=====
	
	The setup program included with version 3.2 of Microsoft Mail for PC Networks
	allows you to upgrade the postoffice, to upgrade the administrative executable
	files, or both.
	
	If the administrative executable files are not upgraded, the error message files
	ERRORADM.GLB and ERRORDYN.GLB will not be updated. This causes invalid or
	inaccurate error messages.
	
	RESOLUTION
	==========
	
	To correct this problem, either copy the files from a 3.2 postoffice in which
	the executable files were updated, or extract the files from Disk 2 - Server
	Programs.
	
	  Error Files      Size (Bytes)     3.2 Size (Bytes)
	  ------------------------------------------------------------------------
	
	  ERRORADM.GLB     10210            22272
	  ERRORDYN.GLB      1536             1920
	
	
	Additional query words: 3.20 Admin wrong different strange non-related errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
