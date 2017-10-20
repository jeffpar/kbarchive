---
layout: page
title: "Q119554: PC Adm: Err Msg: Notice 101 Error File Not Accessible"
permalink: /kb/119/Q119554/
---

## Q119554: PC Adm: Err Msg: Notice 101 Error File Not Accessible

{% raw %}

	Article: Q119554
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While creating a data disk for a remote user, a Microsoft Mail for PC Networks
	administrator may experience notice messages during different operations. For
	example, the following message may appear during an Init- Disk operation:
	
	  Notice 101
	  Error file not accessible
	  Check server connection
	  Press Enter to continue
	
	You may also receive a Notice 107 message. For additional information about this
	message, please see the following article in the Microsoft Knowledge Base:
	
	  Q118358 PC DB: Err Msg: Notice 107, File Is Inaccessible
	
	CAUSE
	=====
	
	The Notice 101 error occurs when the ADMIN.EXE program is unable to access the
	following four error message files, which are usually located in the GLB
	subdirectory of the postoffice database:
	
	  ENGMAI.GLB
	  ENGMON.GLB
	  ERRORADM.GLB
	  ERRORDYN.GLB
	
	RESOLUTION
	==========
	
	Check the GLB subdirectory for the existence of these files. If they do not
	exist, the administrator can replace these files in one of the following two
	ways:
	
	1. Find another postoffice in the Mail system that contains these files and copy
	  them from that postoffice to the problem postoffice's GLB subdirectory.
	
	2. Using the complete set of Setup disks for version 3.2 of Microsoft Mail for
	  PC Networks, install a complete temporary postoffice on a local workstation
	  hard drive. Be careful to install the complete client software (for both
	  MS-DOS and Windows) as well. The temporary postoffice will contain the
	  missing files in the GLB subdirectory. Copy the files to the problem
	  postoffice's GLB subdirectory.
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
