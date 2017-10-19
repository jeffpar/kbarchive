---
layout: page
title: "Q198022: Using the Windows NT Option Pack SMTP Pickup Directory"
permalink: /kb/198/Q198022/
---

## Q198022: Using the Windows NT Option Pack SMTP Pickup Directory

	Article: Q198022
	Product(s): Internet Information Server
	Version(s): WINNT:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need a way to introduce messages through text files onto the Internet.
	By creating a file which is in the RFC-822 format within the
	Root\Inetpub\Mailroot\Pickup subdirectory, the SMTP Relay Host will pick up this
	file, resolve its destination e-mail domain, and deliver the message.
	
	MORE INFORMATION
	================
	
	To create such files, applications must be able to communicate using
	Collaboration Data Objects for Windows NT Server (CDONTS). An example of CDONTS
	is using a FrontPage Server Extension in the creation of Web pages to send the
	user's input in RFC-822 format to the above mentioned directory location.
	
	To distribute these files to the appropriate e-mail domains, you must have the
	IIS and SMTP selections within the NT Option Pack installed. Once installed, the
	SMTP host, using its preconfigured DNS entries for name resolution, will route
	any RFC-822 format compliant message placed in the Pickup folder to the
	appropriate e-mail domain.
	
	REFERENCES
	==========
	
	For further information refer to the following Microsoft Knowledge Base
	articles:
	
	  Q186204 : Use CDONTS to Collect and Mail Information From a User
	
	  Q193685 : Sending E-mail from a Command Prompt Using IIS SMTP Service
	
	Additional query words: NTOP CDONTS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : WINNT:
	Issue type        : kbinfo
	
	=============================================================================
	
