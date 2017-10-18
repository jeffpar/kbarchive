---
layout: page
title: "Q260731: Windows NT Option Pack Document Incorrectly Lists SMTP Version"
permalink: kb/260/Q260731/
---

## Q260731: Windows NT Option Pack Document Incorrectly Lists SMTP Version

	Article: Q260731
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Simple Mail Transfer Protocol (SMTP) using Windows NT 4.0 Option
	Pack, you may find a text document (Smtpread.txt) in either of the following
	locations:
	
	- The C:\Inetpub\Mail\Smtp\Admin folder
	
	- http://localhost/mail/smtp/admin/smtpread.txt
	
	MORE INFORMATION
	================
	
	The information in the Smtpread.txt file incorrectly states that the version of
	SMTP that is included with Windows NT 4.0 Option Pack is a Beta 3 version. The
	version of SMTP that is included with Windows NT 4.0 Option Pack is the Final
	Release Version 2.0 (build 7494), so you can safely delete the Smtpread.txt
	file.
	
	You can find the version information at the following location:
	
	  http://localhost/mail/smtp/admin/version.htm
	
	Additional query words: smtpb3 beta3 NTOP readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
