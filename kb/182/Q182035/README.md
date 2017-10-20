---
layout: page
title: "Q182035: XCLN: How to Set Up Windows 95 Roving Users with Profgen.exe"
permalink: /kb/182/Q182035/
---

## Q182035: XCLN: How to Set Up Windows 95 Roving Users with Profgen.exe

{% raw %}

	Article: Q182035
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Exchange Resource Kit utility Profgen.exe, you can set up roving users
	for the Exchange Windows 95 client without using server-based Windows 95
	profiles. Several conditions must be met and several steps must be followed to
	accomplish this. Although it is possible to do this with the aid of the Exchange
	Resource Kit utility Profgen.exe, the use of Profgen.exe is not officially
	supported by Microsoft Product Support Services (PSS) and is offered "as is."
	
	MORE INFORMATION
	================
	
	PSS recommends that roving Exchange users be set up by using server-based
	Windows 95 user profiles. It is possible to set up Exchange roving users without
	using server-based Windows 95 profiles with the aid of the Exchange Resource Kit
	utility Profgen.exe. When you set up Exchange roving users using Profgen.exe,
	the roving user's mailbox name must match the roving user's Windows NT username,
	because Profgen.exe creates a temporary profile referencing a mailbox name that
	is drawn from the currently logged on user's Windows NT username. Perform the
	following steps to set up Exchange roving users with Profgen.exe:
	
	1. Run the Exchange Setup Editor (Stfedtr.exe) against the client install
	  point.
	
	  The Exchange Setup Editor is in the <client_install_point>\Stfedtr
	  subdirectory. The client install point is created by running the Setup.exe
	  program from the appropriate language subdirectory (for example, \Eng) of the
	  Exchange Client CD. After you bring up the Exchange Setup Editor, specify the
	  following options:
	
	  From the User Options dialog box:
	
	   - Specify a "Home Server". This home server does not have to be the same
	     server that all users have their mailbox on, but it does need to be a
	     server in the same Exchange site that the roving users have their
	     mailboxes in.
	
	  From the Setup Program Options dialog box:
	
	   - Specify to install only the Exchange Server Service on the Services tab.
	
	   - Specify "C:\Exchange" as the "Directory for client software" on the
	     General tab.
	
	  After you run the setup editor against the appropriate client install point,
	  the Default.prf file is created in the client install point and contains the
	  Exchange profile settings that you just applied. Now, when the user installs
	  Exchange from the client install point, the Newprof.exe and Default.prf files
	  are copied down to the Exchange client directory during Setup. The client
	  must be installed in the "Exchange" directory (the default) on all computers
	  that will be used for roving users.
	
	2. You must copy Profgen.exe to the user's Exchange directory on the client
	  computer. Also, every computer that is to be used as a "roving" client must
	  have a copy of the Profgen.ini file in its Windows directory with the
	  following settings:
	
	        [NEWPROF]
	        PathToExeFile=c:\exchange\newprof.exe
	        PathToPRFFile= C:\exchange\default.prf
	        DisplayUI=0
	        AutoExecute=0
	
	        [PROFGEN]
	        Logging=0
	        UpdateMailboxName=0
	        DoNotRenamePRF=1
	        UseLoginIDAsProfileName=1
	        ;must have this entry for multiple users at the same computer or
	        ;any profiles after the 1st one will not be created
	    
	
	3. Profgen.exe must be called with a login script or must be called with the
	  Load=statement in the Win.ini file as follows:
	
	        Load=c:\exchange\profgen.exe
	   
	
	  When started, Profgen.exe will create the Profgen.tmp file in the root of the
	  hard disk drive of the client computer. Profgen.tmp is a modified copy of the
	  Default.prf file and is used by Newprof.exe to set up a profile with a
	  mailbox based on the currently logged-on user's ID.
	
	4. When the user logs on to the Exchange client, this newly created profile will
	  be the default profile and will have the name of the user's mailbox. As long
	  as the Windows NT user ID matches the mailbox name, the user can access
	  messages.
	
	  After you set up a Windows 95 computer for roving users this way, it is not
	  necessary to restart a computer that another account is logged on to if you
	  want to access your messages. If you select Start, Shut Down, and then "Close
	  all programs and log on as a different user", Windows 95 will run Profgen.exe
	  again and create a new profile. This assumes that this particular Windows 95
	  computer is set up for the option "Users can customize their preferences and
	  desktop settings" (in Control Panel / Passwords / User Profiles).
	
	It is important to use the latest version of Profgen.exe when setting this up.
	The correct version has a file size of 78 KB (80,752 bytes) and a date of
	8/07/96. This is available on the Microsoft Web site at
	ftp://ftp.microsoft.com/bussys/exchange/exchange-unsup-ed/
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q159978 XADM: Troubleshooting Profgen.exe Problems
	
	  Q159504 XCLN: Profgen.exe Fails to Replace MailBoxName
	
	Additional query words: Roaming profgen.exe roving users profiles
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
