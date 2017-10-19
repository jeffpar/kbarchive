---
layout: page
title: "Q146113: PC DB: Effect of Compress on System Used .KEY and .MBG Files"
permalink: /kb/146/Q146113/
---

## Q146113: PC DB: Effect of Compress on System Used .KEY and .MBG Files

	Article: Q146113
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Maintenance of the version 3.x Microsoft Mail for PC Networks postoffices
	includes compressing of the user's mailbags, as shown on page 105 of the version
	3.2 "Administrator's Guide" and page 107 of the version 3.5 "Administrator's
	Guide."
	
	This compression will compress not only the user's mailbags but also the mailbags
	the mail system uses for the delivery of mail. Some examples are the
	INQUEUE3.MBG, <hex-id>.MBG for external postoffices, and SYSTEM.MBG.
	
	MORE INFORMATION
	================
	
	
	Every mailbag contains a header for each mail message that is sent to a user.
	When the message is read or deleted, that header space is marked as free;
	however, the header is not actually deleted until a compress is run against the
	postoffice. Therefore, if you are using filesize to determine the amount of
	undelivered mail for a specific user, the count will be inaccurate unless a
	compress has been performed.
	
	For example, if the MBG for a specific user is 5,452 bytes, the size would
	indicate there are 47 message headers in the .MBG (5452\116=47). However, if 40
	of these messages have been moved into the .MMF, the MBG does not actually hold
	those 40 headers, and after a postoffice compress the mailbag will reflect a
	size of 812 (812\116=7).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q77926 Description of Mail Database Subdirectories
	
	For more information, please see the Microsoft Mail for PC Networks version 3.2
	"Administrator's Guide," page 105 or the Microsoft Mail for PC Networks version
	3.5 "Administrator's Guide," page 107.
	
	Additional query words: 3.50 inqueue inqueue3 compress
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
