---
layout: page
title: "Q104870: PC DirSync: Err Msg: Fatal &#91;202&#93; No Valid Postoffice Found"
permalink: /kb/104/Q104870/
---

## Q104870: PC DirSync: Err Msg: Fatal &#91;202&#93; No Valid Postoffice Found

{% raw %}

	Article: Q104870
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run REBUILD.EXE, the following error message may be displayed:
	
	  FATAL [202] No Valid Postoffice found.
	
	Even though the error is reported, the Global Address List (GAL) is still
	rebuilt.
	
	CAUSE
	=====
	
	This error occurs if the MASTER.GLB file is marked read-only, or if the
	MASTER.GLB file is locked open.
	
	RESOLUTION
	==========
	
	Check the attributes of the MASTER.GLB file in the GLB subdirectory, and remove
	the read-only attribute if it has been set. Use the MS-DOS ATTRIB.EXE command to
	set the attribute to read-write:
	
	  attrib -r master.glb
	
	If the file is locked open, close the file. On a Novell server, you can determine
	the status of locked files by starting the Rconsole program. Choose the
	FileOpen/Lock activity, and choose
	<volume>/<dir>/<subdir>/MASTER.GLB. This will yield a
	connection number. From Connection Activity, you then can find out who has the
	file open.
	
	On a LAN Manager server, you can check for locked files by running the NET ADMIN
	command and selecting Status, Opened Files.
	
	For other file servers, consult the administrator's guide for that server to
	determine if a file is locked open and by whom.
	
	After the status of the MASTER.GLB file has been reset, the GAL rebuild process
	will not report the error.
	
	MORE INFORMATION
	================
	
	The NetWare client-32 for Microsoft Windows 95 can cause the MASTER.GLB to get
	locked open. There is a patch on Novell's BBS under the client section called
	C3295C.EXE that resolves file-locking issues on the postoffice.
	
	The latest NetWare client-32 for Microsoft Windows 95 can be found on web site
	http://support.novell.com.
	
	Additional query words: 3.00 3.00b 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN350
	Version           : WINDOWS:3.0,3.0b,3.2,3.5
	
	=============================================================================
	

{% endraw %}
