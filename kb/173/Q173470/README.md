---
layout: page
title: "Q173470: XWEB: Troubleshooting &quot;Failed to get Inbox&quot; Error Message"
permalink: /kb/173/Q173470/
---

## Q173470: XWEB: Troubleshooting &quot;Failed to get Inbox&quot; Error Message

{% raw %}

	Article: Q173470
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When a Microsoft Exchange user logs on to Exchange Server through the Microsoft
	Internet Explorer, the Active Server page does not bring up the dialog box to
	enable the user to enter the domain name, user name, and password. The user may
	also get one of the following error messages:
	
	  Failed to get Inbox
	
	  -or-
	
	  Error: Access is denied
	
	Verification
	------------
	
	1. Confirm that the mailbox name does not include any spaces. If the name of the
	  mailbox includes a space, then rename all of the mailboxes by removing the
	  spaces. For more information, refer to the following article in the Microsoft
	  Knowledge Base:
	
	  Q166994 XWEB: Spaces in Alias Name Cause "Failed to get Inbox."
	
	2. Confirm that the user is trying to log on to the same Exchange Server
	  computer that the user is created as a user on. If the user is trying to log
	  on to an Exchange Server computer other than the user's home server, be sure
	  to allow enough time for the user's mailbox to replicate to the server that
	  the user is trying to log on to.
	
	  For more information, refer to the following article in the Microsoft
	  Knowledge Base:
	
	  Q165661 XWEB: Error Message: Failed to Get Inbox.
	
	3. Verify that the user can log on to Exchange Server through Internet Explorer
	  on the same computer where the Microsoft Internet Information Server (IIS) is
	  located. If the user is not able to log on from the IIS computer, check for
	  an issue in the user's account or password.
	
	  To verify that the Windows NT account is valid, from the IIS server, use
	  Internet Explorer to log on to the Exchange Server computer with Outlook Web
	  Access (OWA). If the user can log on from the IIS computer but not remotely
	  through the Active Server, then give the user and all other users the
	  advanced Windows NT access right of Log on Locally. To do this, go to User
	  Manager for Domains. From the menu, select Policies, and then User Rights. In
	  the User Rights dialog box, select from the drop-down menu Log On Locally.
	  Add the desired group of users to the Grant To dialog box.
	
	4. If the dialog box asking for the user name and password is displayed, but you
	  are still getting the errors shown above, then modify the password
	  authentication to both Allow Anonymous and Basic (Clear text). This can be
	  done in the IIS \Internet Service Manager. Double-click on WWW service to
	  open the properties. In the Password Authentication selection box, select
	  both Allow Anonymous and Basic (Clear Text).
	
	5. If the Exchange Server computer is on a Windows NT file system (NTFS)
	  partition, then share the \webdata and \webtemp with the same names and give
	  the group Everyone Full Control for Type of Access in the Permissions dialog
	  box.
	
	6. Attempt to log on to the Exchange Server Web Access logon page again,
	  entering the name in the Log On dialog box as:
	
	  DomainName\UserName
	
	7. If all of the above procedures are not successful, try to log on with the
	  same user credentials from IE located on another computer. If the same user
	  is able to log on from another computer, then the password file of the user
	  in the original computer may be corrupt. Delete the Username.pwl file in the
	  original Windows 95 computer, log off, and log back on to the original
	  Windows 95 computer. This will recreate this Username.pwl file and solve this
	  issue.
	
	  NOTE: If you are using a personal certificate, you should export it before
	  renaming your .pwl file. If you do not do so, it may be unavailable when you
	  send e-mail. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	MORE INFORMATION
	================
	
	The above errors may also be reported if two users from two different Windows NT
	domains have the same name. A local user account (from domain A) exists on the
	computer used for remote access of the Exchange Server computer, and a remote
	user account (from domain B) exists on the Exchange Server that is accessed
	remotely. Credentials for the two accounts will not match, because they are from
	different domains, with different passwords, even though the user name is the
	same. This situation may occur after joining two sites and can be verified by
	attempting to log on using a different computer (step # 7 above).
	
	As a final resort, you may need to perform the following steps:
	
	1. Uninstall Outlook Web Access Component.
	
	2. Uninstall the Option Pack.
	
	3. Reinstall the Option Pack.
	
	4. Apply SP4 or later to the Windows NT server.
	
	5. Reinstall OWA.
	
	For more information, see the following Microsoft Knowledge Base article:
	
	  Q165987 XWEB: "Failed to Get Inbox" Error Message via Web
	
	Additional query words: exfaqclnt exclnfaq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
