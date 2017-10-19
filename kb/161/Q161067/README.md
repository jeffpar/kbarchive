---
layout: page
title: "Q161067: IIS FTP RNTO Overwrites Existing Files"
permalink: /kb/161/Q161067/
---

## Q161067: IIS FTP RNTO Overwrites Existing Files

	Article: Q161067
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the FTP Service included with Internet Information Server (IIS) versions 1.0
	and 2.0, if you have write permissions you can overwrite an existing file with
	the FTP RNTO command.
	
	NOTE: This issue will also occur on the Microsoft FTP Server Service in Windows
	NT version 3.1 through version 3.51.
	
	
	WORKAROUND
	==========
	
	Create an automated process to copy existing FTP upload files to a separate
	directory that is not available to the FTP client. This would eliminate the
	overwriting of existing files through the FTP clients' use of the FTP RNTO
	command.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server.
	
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
