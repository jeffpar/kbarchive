---
layout: page
title: "Q126887: PC MAPI: Accessing Attachments Using the Function MAPIReadMail"
permalink: /kb/126/Q126887/
---

## Q126887: PC MAPI: Accessing Attachments Using the Function MAPIReadMail

	Article: Q126887
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Simple Messaging Application Program Interface (MAPI) function MAPIReadMail,
	which is included with Microsoft Mail for PC Networks, has the ability to access
	attachment files associated with a given message found in Microsoft Mail for
	Windows Inbox.
	
	MORE INFORMATION
	================
	
	When called, the MAPIReadMail function will automatically save the attachment to
	a temporary file. The temporary file is a direct copy and is not encrypted.
	However, the attachment file will not be written to disk if the
	MAPI_SUPPRESS_ATTACH or MAPI_ENVELOPE_ONLY flag is used in the call to
	MAPIReadMail.
	
	The temporary attachment file is copied to the TEMP directory as defined by the
	operating system (per the SET TEMP= command). The file will use the original
	attachment file name, date, and time.
	
	If multiple MAPIReadMail calls are made to the same message containing an
	attachment, or the same file name already exists in the TEMP directory, the
	temporary file name will be altered. This is done so that the original file is
	not overwritten. The file naming scheme is to add a number to the end of the
	original file name. For example, an attachment called MYFILE.TXT, already
	residing in the TEMP directory, will be created as MYFILE1.TXT. Subsequent calls
	to MAPIReadMail will produce MYFILE2.TXT, MYFILE3.TXT, and so on. The caller of
	MAPIReadMail is responsible for deleting these files.
	
	Additional query words: 3.00 3.20 attachments
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
