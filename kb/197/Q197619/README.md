---
layout: page
title: "Q197619: Runtime Error '800a0046' Using the Send Method of CDONTS.NewMail"
permalink: /kb/197/Q197619/
---

## Q197619: Runtime Error '800a0046' Using the Send Method of CDONTS.NewMail

	Article: Q197619
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send mail using the CDONTS.NewMail object from the SMTP service
	included in the Windows NT Option Pack (NTOP) and Active Server Pages (ASP), you
	may receive the following error message:
	
	  Microsoft VBScript runtime error '800a0046'
	  Permission denied
	  /filename.asp, line xxx
	
	where xxx is the line number using the send method of the NewMail object.
	
	CAUSE
	=====
	
	This behavior can occur if the anonymous user account is not granted at least
	CHANGE permissions to the SMTP mail server folders.
	
	RESOLUTION
	==========
	
	To resolve this error, follow these steps:
	
	1. Open the Windows NT Explorer and browse to your mail folders. By default,
	  this is the X:\InetPub\MailRoot folder, where X: is the drive that you
	  specified during the installation of NTOP.
	
	2. Right-click the Pickup folder, and then click Properties.
	
	3. On the Security tab, click Permissions.
	
	4. If the IIS user accounts are listed, IUSR_<computer> and
	  IWAM_<computer> are the defaults, skip to step 13.
	
	5. Click Add.
	
	6. Select your computer in the List Names From: drop-down menu.
	
	7. Click Show Users.
	
	8. Highlight the IUSR_<computer> Internet guest account and the
	  IWAM_<computer> impersonation account, then click Add.
	
	9. Click Change in the Type Of Access drop-down menu.
	
	10. Click OK to close the "Add Users And Groups" dialog.
	
	11. Click OK to close the Directory Permissions dialog.
	
	12. Click OK to close the Directory Properties dialog.
	
	13. Repeat steps 2 through 12 for each folder under the MailRoot folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
