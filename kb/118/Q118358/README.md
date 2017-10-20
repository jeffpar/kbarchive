---
layout: page
title: "Q118358: PC DB: Err Msg: Notice 107, File Is Inaccessible"
permalink: /kb/118/Q118358/
---

## Q118358: PC DB: Err Msg: Notice 107, File Is Inaccessible

{% raw %}

	Article: Q118358
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing functions in the Mail Administrator program (ADMIN.EXE)--
	especially Remote, Regenerate--you may receive the following error messages:
	
	  Notice 107, file is inaccessible as the selected process is finishing.
	
	  -and-
	
	  Check server connections in conjunction with this error message.
	
	CAUSE
	=====
	
	The problem occurs because two files, ERRORADM.GLB and ERRORDYN.GLB, are missing
	or corrupted. The Mail Administrator program generates status messages at the
	end of most of its commands or functions, and the text for these messages is
	stored within these two files. The Mail Administrator program generates a Notice
	107 error when certain files cannot be found or read from, and this is the case
	for these two .GLB files.
	
	RESOLUTION
	==========
	
	If another Mail for PC Networks postoffice is available, copy ERRORADM.GLB and
	ERRORDYN.GLB from that postoffice's GLB directory to the affected postoffice's
	GLB directory. If another postoffice is not available, run Setup from the server
	installation disks and choose to install the Mail Administrator executable
	files. It may be desirable to have Setup install the executable files to a
	directory other than the existing one (the directory the customer is using),
	especially if you have updated any of the existing files with current
	Application Notes.
	
	NOTE: This resolution also works for the error:
	
	  Notice 169 Error file not accessable. Check server connections.
	
	MORE INFORMATION
	================
	
	This problem can occur when Mail is installed on a server but you only choose to
	install the database files and none of the administration or client files. In
	this situation, Setup does not copy these two files to the GLB directory.
	
	Additional query words: 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
