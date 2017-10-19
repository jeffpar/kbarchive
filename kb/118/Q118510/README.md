---
layout: page
title: "Q118510: PC Adm: Microsoft Mail MOVEUSER.EXE Version 3.2.8 Update"
permalink: /kb/118/Q118510/
---

## Q118510: PC Adm: Microsoft Mail MOVEUSER.EXE Version 3.2.8 Update

	Article: Q118510
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	3.20
	MS-DOS
	kbtool kbenv kbfile kbbug3.20 kbfix3.20a
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MOVEUSER.EXE file that is included with
	version 3.2 of Microsoft Mail for PC Networks.
	
	For complete information about obtaining and installing the MOVEUSER.EXE file,
	see the following sections:
	
	- To download the updated file
	
	- To update your MOVEUSER.EXE file
	
	MORE INFORMATION
	================
	
	This update contains MOVEUSER.EXE, a replacement for the MOVEUSER.EXE file that
	is included with version 3.2 of Microsoft Mail for PC Networks. This update
	corrects the following problem:
	
	- Users moved from one postoffice to another postoffice with the MOVEUSER
	  utility are assigned an invalid identification number if the TID.GLB file on
	  the destination postoffice is locked open. Moving multiple users while the
	  TID.GLB file is locked open results in the same invalid identification number
	  being assigned to multiple users. When Mail is addressed to one of these
	  users, the other users with the same invalid identification number also get
	  added to the recipients list. To avoid this problem, the MOVEUSER version
	  3.2.8 update will not move a user if the TID.GLB file is locked open.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mvusr.exe now
	  (http://download.microsoft.com/download/pcmail/Update/15/WIN/EN-US/Mvusr.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
