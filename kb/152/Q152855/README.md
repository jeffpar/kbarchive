---
layout: page
title: "Q152855: XADM: How to Set up the Anonymous Posting Service"
permalink: kb/152/Q152855/
---

## Q152855: XADM: How to Set up the Anonymous Posting Service

	Article: Q152855
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Anonymous Posting service will allow you to have users post anonymous
	submissions to a Microsoft Exchange Public Folder (PF). This article describes
	the steps necessary to set up the Anonymous Posting service.
	
	MORE INFORMATION
	================
	
	The following steps are required to set up the Anonymous Posting service:
	
	1. Create a Windows NT service account. Make sure that you grant this account
	  the Logon as a Service privilege. In addition, make sure that this account is
	  a member of the ADMIN group. If this account does not have administrative
	  privileges, you will receive the following error:
	
	  Could not start the Anonymous Posting Service on \\<Computer_Name>.
	  Error 1069: The Service did not start due to a Logon Failure.
	
	2. Create a mailbox named Anonymous. Set the Primary Windows NT Account for the
	  mailbox to the user account created in step 1. At this point, make sure to
	  note the following settings of the Mailbox:
	
	O
	
	  rganization Name
	  Home site
	  Directory Name (Advanced Tab for the Mailbox)
	
	3. Create the anonymous PF:
	
	  a. Create the PF from a Microsoft Exchange client.
	
	  b. Open the folder properties and select Permissions.
	
	  c. Add the Anonymous mailbox to the permissions list with the Editor Role.
	
	  d. Select to the Administration tab and select the folder assistant.
	
	  e. Add a rule, select FROM, choose the anonymous mailbox, and click OK.
	
	  f. Choose FORWARD TO, select the anonymous mailbox, and choose OK.
	
	  g. In the folder assistant dialog box, click Edit Rule, and then click
	     Delete.
	
	  h. Click the advanced button, check the box labeled Only Items That Do not
	     Match These Conditions, and Click OK.
	
	  i. Close all remaining open dialog boxes.
	
	4. Copy the Anonymous Posting service files from the Microsoft Exchange Server
	  CD to a directory on your hard drive where you want to run the service from.
	  These files are located in the following location:
	
	  \Setup\<platform>\sampapps\server\anon
	
	5. Install the files necessary for the Anonymous Posting service. Do this by
	  running the Instanon.exe program that you copied in step 4. You will need to
	  enter the information that you wrote down when you created the Anonymous
	  mailbox. Choose OK to install the service.
	
	6. Make sure that the Anonymous Posting account has the following rights in the
	  Microsoft Exchange permissions context:
	
	   - In the site object, the Anonymous Posting account needs at least the
	     Administrator role.
	
	   - In the Organization object the Anonymous Posting account also needs at
	     least the Administrator role.
	
	7. To test the Anonymous folder, start a Microsoft Exchange client, go to the
	  Anonymous public folder, and compose a new post in this forum. Type in a
	  message and post the message.
	
	8. If the Anonymous Posting service is not running, you will be able to post a
	  message with no errors, but the message will not appear in the PF until the
	  service is restarted.
	
	For additional information about the Anonymous Posting service, please refer to
	the Anon.wri file in the Setup\<platform>\sampapps\server\anon directory
	on the Microsoft Exchange Server 4.0 CD. For additional information on sending
	mail from one user to another and displaying an anonymous sender name, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q145923 XADM: How to Send Mail with the "Anonymous" Sender Name
	
	For additional information, also see the Exchange Server 5.0 Readme.wri file on
	the Microsoft Exchange Server 5.0 CD.
	
	
	Additional query words: anonymous login error setup
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
