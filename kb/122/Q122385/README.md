---
layout: page
title: "Q122385: Err Msg: Mail Could Not Read the Entire Message..."
permalink: /kb/122/Q122385/
---

## Q122385: Err Msg: Mail Could Not Read the Entire Message...

	Article: Q122385
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT version 3.5 Workstation or Server sends mail to or receives
	mail from a Microsoft Mail client, you receive this error message:
	
	  Mail System Error
	  =================
	  Mail could not read the entire message from the post office.
	  Some parts of the message may be missing.
	  Ask sender to resend the message.
	
	CAUSE
	=====
	
	The Windows NT Workstation and Server Mail client incorrectly zeros out the
	subject field before a message is transmitted. This effects the .MAI file.
	
	
	RESOLUTION
	==========
	
	Microsoft fixed this problem in an updated version of the Windows NT file,
	MSSFS32.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt S14980
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
