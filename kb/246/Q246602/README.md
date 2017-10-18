---
layout: page
title: "Q246602: XADM: Pfadmin Won't Work with Err. Mssg.: OpenAddressBook Failed"
permalink: kb/246/Q246602/
---

## Q246602: XADM: Pfadmin Won't Work with Err. Mssg.: OpenAddressBook Failed

	Article: Q246602
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Pfadmin.exe utility with the setacl switch by using the following
	command
	
	  pfadmin "<your_profile>" setacl
	  "<public_folder>\<subfolder>" "<user_mailbox>"
	  <rights>
	
	the command may not work and the following error message may be displayed:
	
	  CMapiSession::GetAddressBook: m_pMapiSession-->OpenAddressBook failed,
	  error = 0x40380.
	
	CAUSE
	=====
	
	This problem can occur if you use a profile that was created with Outlook 2000
	in the syntax of the Pfadmin.exe command. Typically, this problem only occurs if
	you use a profile from an Outlook 2000 client that was upgraded from Microsoft
	Outlook 98 and had existing Outlook 98 profiles.
	
	WORKAROUND
	==========
	
	To work around this problem, either use an Outlook 98 workstation, or use an
	Outlook 98 profile on an Outlook 2000 workstation.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create two test mailboxes. Name them "Test MB1" and "Test MB2."
	
	2. Verify that Outlook 2000 is installed on the test workstation.
	
	3. Log on as the service account, or an account that has similar permissions.
	
	4. Create a new Outlook profile. Name it "OL2000 Profile" and point it to the
	  Test MB1 mailbox.
	
	5. Start Outlook by using the newly created profile.
	
	6. Click to expand Public Folders, click to expand All Public Folders, and then
	  create a new folder named PFAdmin Test.
	
	7. Quit and log off from Outlook.
	
	8. At a command prompt, change to the folder where the Pfadmin.exe utility is
	  located, and then type the following:
	
	  pfadmin "OL2000 Profile" setacl "PFAdmin Test" "Test MB2" PA
	
	9. This command attempts to grant the Test MB2 mailbox the role of Publishing
	  Author (PA). However, the command does not work and the following error
	  message is displayed:
	
	  CMapiSession::GetAddressBook: m_pMapiSession-->OpenAddressBook failed,
	  error = 0x40380.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
