---
layout: page
title: "Q140190: PC Win: CONVERT.EXE Not Converting Folders with Mac Attachment"
permalink: kb/140/Q140190/
---

## Q140190: PC Win: CONVERT.EXE Not Converting Folders with Mac Attachment

	Article: Q140190
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CONVERT.EXE utility dated 06/09/95, included with Microsoft Mail for PC
	Networks, does not reliably convert Macintosh user-created private postoffice
	folders containing large Macintosh attachments.
	
	CAUSE
	=====
	
	The Microsoft Mail for PC Networks, Macintosh workstation, under certain
	circumstances, will create erroneous Federal Information Processing Systems
	(FIPS) message attachment header fields in private folders. The fields will
	appear to be valid. However, they will not actually point to any valid
	attachment, and the data contained within the FIPS attachment field will be
	random. The attempt to read by CONVERT.EXE results in random data from within
	the folder being read as an attachment, or it attempts to read past the end of
	the folder itself.
	
	The size of the message folder may have some effect on the problem, where
	messages with smaller attachments appear to convert correctly. The CONVERT.EXE
	utility is a shell that calls MSSFS.DLL from the Windows client to do the actual
	conversion. The following error will occur during a failed conversion:
	
	  The folder conversion process was halted by an error while copying.
	  No folders or messages were converted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with CONVERT.EXE dated 06/09/95 and
	version 3.5 of MSSFS.DLL. This problem was corrected in version 3.5.4092 or
	later of MSSFS.DLL.
	
	To obtain this updated file, please contact your Microsoft Technical Account
	Manager (TAM) or Product Support Services (PSS).
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q121717 Err Msg: The Folder Conversion Process Was Halted...
	
	Additional query words: 3.50 hotfix post35fix 6/9/95
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2a,3.5
	
	=============================================================================
	
