---
layout: page
title: "Q148198: XADM: Where Newprof.exe Gets the Username"
permalink: /kb/148/Q148198/
---

## Q148198: XADM: Where Newprof.exe Gets the Username

	Article: Q148198
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Automatic Profile Generator (Newprof.exe) reads a Profile
	Descriptor File (PRF) and creates a profile based on the information in this
	file. One of the settings in the PRF is for the Microsoft Exchange mailbox name
	for which the profile is being created. If this entry is missing or does not
	have a value associated with it, Newprof.exe automatically inserts a user name
	into the profile. The user name inserted may or may not be a valid Microsoft
	Exchange user.
	
	This article explains where Newprof.exe gets the user name that it uses in the
	profile.
	
	MORE INFORMATION
	================
	
	When it creates a profile, Newprof.exe looks in the PRF for the MailboxName=
	entry under the section containing the Microsoft Exchange Server Service
	settings. If this entry is missing or empty, Newprof.exe uses the user name
	specified during the Setup process.
	
	Most Microsoft products use a setup toolkit (ACME) for their Setup programs. When
	the Setup program is run, users are prompted for their name and company name.
	This information is saved on the local computer for later use. This allows the
	Setup program to automatically populate the above information if the user has
	run the Setup program for most other Microsoft products.
	
	Newprof.exe reads this setup information to obtain the user name, and adds this
	user name to the profile being created.
	
	Depending on the operating system of the client computer, the Setup information
	is saved in different locations.
	
	Windows NT or Windows 95:
	
	Under Windows NT and Windows 95, the setup user information is saved in the
	Registry in the following Key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\MS Setup(ACME)\User Info
	
	The above key has two values: DefName and DefCompany, for the user name and
	company name, respectively.
	
	Windows 3.x:
	
	Under Windows 3.x, the setup information is saved in the Win.ini file, in the
	following section:
	
	  [MS User Info]
	  DefName= <User Name>
	  DefCompany= <Company Name>
	
	Since the Microsoft Exchange Client Setup program does not check the user and
	company name entered by the user, it is possible that the default profile
	created by Newprof.exe, when it is spawned by the client Setup program, will
	contain a user name not found in the Microsoft Exchange Directory. In this case,
	when the user runs the Microsoft Exchange client for the first time, the
	following error message will be displayed:
	
	  Microsoft Exchange could not be started. The name could not be matched to a
	  name in the address list.
	
	Upon clicking the OK button, the Microsoft Exchange Server Properties dialog will
	be displayed that allows the user to change the Microsoft Exchange account
	and/or server name.
	
	In order to avoid confusing users when they see the above dialog, one workaround
	to this problem will be to manually edit the Default.prf file present in the
	client installation share point. Edit the entry MailboxName= in the [Service2]
	section with the following information and if the entry is not present, add it:
	
	  MailboxName= Enter your Microsoft Exchange Mailbox Name
	
	Now when the Microsoft Exchange Client Setup program is run, the default profile
	created will have "Enter your Exchange Mailbox Name" as the mailbox name. When
	the Microsoft Exchange client is run for the first time, it will not be able to
	find an entry in the Microsoft Exchange Directory with the name "Enter your
	Exchange Mailbox Name". This will cause the Microsoft Exchange client to display
	the error message indicating that the name could not be matched in the address
	list. Upon clicking OK to dismiss the error message, the Microsoft Exchange
	Server Properties dialog will be displayed. The edit box for the mailbox name
	will contain "Enter your Exchange Mailbox Name". The user can then enter his/her
	mailbox name and then click on the CheckName button to verify the name entered.
	
	Additional query words: exclnfaqold
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
