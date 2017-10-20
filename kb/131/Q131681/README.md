---
layout: page
title: "Q131681: PC DirSync: After Reset, Export/Import Times Still Exist"
permalink: /kb/131/Q131681/
---

## Q131681: PC DirSync: After Reset, Export/Import Times Still Exist

{% raw %}

	Article: Q131681
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators can reset the Reqconf.glb file using Listds.exe. This utility
	provides part of the process a mail administrators uses to reset a Dir-Sync
	requester for versions 3.0 and 3.2 of Microsoft Mail for PC Networks.
	
	After Listds.exe is used to reset a Dir-Sync requester, the times for the last
	Dir-Sync Export and Dir-Sync Import still exist. This article explains why.
	
	MORE INFORMATION
	================
	
	An administrator may view the Dir-Sync last Export and Import times by running
	the ADMIN.EXE program and selecting Config, DirSync, Requester, Import (or
	Export).
	
	NOTE: The Import option is not available for a Dir-Sync Server.
	
	When one of these options is selected, and an Export or Import has been done
	previously, the program will provide the following information:
	
	Import
	------
	
	  Last Import request processed on DATE at TIME. Continue?
	
	Export
	------
	
	  Last Export request processed on DATE at TIME. Continue?
	
	This last Import/Export information is stored in the REQCONF.GLB file. However,
	the Listds.exe utility does not reset that particular portion of this file.
	Therefore, even though the Listds.exe "resets" the Reqconf.glb by successfully
	resetting the REQSYNC and SRVSYNC values, the last Import/Export times will
	remain. This is normal and expected behavior.
	
	Resetting the last Import or Export times is not required to successfully reset a
	DirSync requester.
	
	The Listds.exe utility is included in the "Directory Synchronization (Dir- Sync)"
	document. You can obtain this document from the following sources:
	
	- Microsoft's World Wide Web Site on the Internet
	
	- The Internet (Microsoft anonymous ftp server)
	
	- The Microsoft Network (MSN)
	
	The following self-extracting file is available for download from the Microsoft
	Download Center:
	
	  Wa0725.exe
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Wa0725.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/23/WIN/EN-US/Wa0725.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This document has also been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail public/WA0725/
	
	For more information about how to obtain this document, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : :3.0,3.2
	
	=============================================================================
	

{% endraw %}
