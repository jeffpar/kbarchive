---
layout: page
title: "Q123437: PC Adm: Err Msg: Could Not Access Requestor's Configuration..."
permalink: /kb/123/Q123437/
---

## Q123437: PC Adm: Err Msg: Could Not Access Requestor's Configuration...

{% raw %}

	Article: Q123437
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing a Config, DirSync, Requestor, Import from the Microsoft Mail
	for PC Networks Administrator program (ADMIN.EXE), the user may encounter the
	following error message:
	
	  Notice 159
	  Could not access Requestor's configuration information.
	  Press Enter to continue
	
	CAUSE
	=====
	
	This error message indicates the REQCONF.GLB is either missing or has become
	corrupted. In particular, a REQCONF.GLB with a file size less than or equal to
	100 bytes will cause this error to be displayed. The REQCONF.GLB should always
	be 512 bytes in size.
	
	RESOLUTION
	==========
	
	The administrator will need to recover a copy of the REQCONF.GLB from a tape
	backup prior to the corruption. If a backup does not exist, the administrator
	can instead copy a REQCONF.GLB from a different postoffice and then perform the
	steps outlined in the "Directory Synchronization (Dir-Sync)" document for
	resetting a single requestor's Dir-Sync files. This will require the
	administrator to run LISTDS against the requestor. In addition, the
	administrator will also need to unregister and reregister the requestor on the
	Dir-Sync server.
	
	For more information about Dir-Sync and how to obtain the Dir-Sync document,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	MORE INFORMATION
	================
	
	A Config, DirSync, Requestor, Import (CDRI) can only be performed on a
	requestor. Therefore, this error message will never be generated on the
	Directory Synchronization Server (DSS). The actual error message text may also
	appear as follows:
	
	  Notice 159
	  Error file not accessible
	  Check server connection
	  Press Enter to continue
	
	This message text is displayed if the user did not install the Administration
	utilities from the Setup disk. The Notice 159 still implies the same error as
	described above. However, the message text displayed is different due to the
	fact that the database did not have the appropriate Admin error message file in
	the database (ERRORADM.GLB).
	
	Additional query words: 3.00 3.00a 3.20 CDRI
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
