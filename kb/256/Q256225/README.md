---
layout: page
title: "Q256225: ATT: Extracting ATT Gateway User List by Using the Import Tool"
permalink: /kb/256/Q256225/
---

## Q256225: ATT: Extracting ATT Gateway User List by Using the Import Tool

{% raw %}

	Article: Q256225
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to extract a user list from the AT&T Mail Gateway to Microsoft
	Mail for PC Networks. You can do this by using the Import utility (Import.exe).
	
	MORE INFORMATION
	================
	
	Because the AT&T Mail Gateway to Microsoft Mail for PC Networks is an SMTP
	gateway, you must specify type SMTP for the gateway type when you use the Import
	program to extract the user list.
	
	Using the instructions for the Import utility supplied in Appendix A, pages
	320-337 of the Microsoft Mail for PC Networks Administrator's Guide, the command
	line should be
	
	  import admin -Ppassword -Ffilename -X -Gsmtp -Ddrive
	
	where admin is the administrator's mailbox, password is the password for that
	mailbox, filename is the name of the output file for the gateway users' list,
	smtp is the gateway type, and drive is the drive letter the postoffice database
	is mapped to.
	
	The AT&T Mail Gateway to Microsoft Mail for PC Networks is supported by
	AT&T. For additional information, please click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q249142<A0>Gtwy: AT&T Mail Gateway to Microsoft Mail for PC Networks Version
	  5.0 Supported by AT&T
	
	Additional query words: export dump pull print
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
