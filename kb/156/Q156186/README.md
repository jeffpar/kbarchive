---
layout: page
title: "Q156186: XCLN: Shared Install of Microsoft Exchange NT Client with SMS"
permalink: kb/156/Q156186/
---

## Q156186: XCLN: Shared Install of Microsoft Exchange NT Client with SMS

	Article: Q156186
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up a shared package of the Microsoft Exchange
	Windows NT client.
	
	MORE INFORMATION
	================
	
	1. Create a source directory for the Microsoft Exchange Windows NT client Setup
	  files, for example C:\XNTFlat.
	
	2. Create a directory called Msapps below the XNTFlat directory, for example
	  C:\XNTFlat\MSAPPS.
	
	3. Run SETUP /A for the Windows NT client from the Microsoft Exchange client
	  compact disc to the above directories.
	
	4. From the Microsoft Exchange Administrator program, run Microsoft Exchange
	  Setup Editor. Point the Setup Editor to C:\XNTFlat directory. Modify whatever
	  entries necessary for your installation.
	
	  NOTE: Remove Personal Folders if you want all clients to store their mail on
	  the server.
	
	5. To perform a totally unattended workstation setup, edit the Setup.stf file in
	  C:\XNTFlat as follows:
	
	  Change line 14 from:
	
	     14    Network    AppMainDlg    21 22 23 24 : 25  382  17 ...
	
	  to:
	
	     14    Network    AppMainDlg    24 : 25  382  17 ...
	
	  Line 14 tells the setup program which options to present to the user when
	  doing a network install. This change limits the installation to a workstation
	  install, which is located on line 24. Below is a list of the lines in the
	  Setup.stf file and the options they represent.
	
	     21 - Typical
	     22 - Custom
	     23 - Laptop
	     24 - Workstation
	
	6. Copy the Exwinnt.pdf from the Microsoft Exchange Windows NT client compact
	  disc in the SMS directory to your hard disk drive. Edit the file using
	  Notepad and add the following section under the [Setup Package for Sharing]
	  section.
	
	         [Program Item Properties 1]
	         CommandLine=exchng32.exe
	         Description=Microsoft Exchange NT Client
	         ConfigurationScript=dosetup.exe exchange setup.exe /Q1
	         RegistryName=exchange
	         DefaultINIFile=
	         RunMinimized=FALSE
	         RunLocalCopyIfPresent=FALSE
	         DriveMode=ANY_DRIVE_LETTER
	         SupportedPlatforms=Windows NT 3.1 (x86)
	         SetupIcon=
	         DisplayIconInProgGroup=TRUE
	
	7. Save this file and use it to create a shared package. When creating the
	  package you will still have to designate the source directory, share point
	  and change the icon.
	
	8. Create the Program Group and Job to distribute the file.
	
	  The quiet mode install used in this package definition file (PDF) uses the
	  registry key below for the user's name. If this is incorrect or somehow
	  different from the Microsoft Exchange mailbox, the user will have to open
	  Control Panel Mail and Fax to edit the profile. The registry key is:
	
	     HKEY_CURRENT_USER\Software\Microsoft\MS Setup(ACME)\User Info
	
	  The above registry key has two values: DefName and DefCompany, for the user
	  name and company name, respectively.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbSMSSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbSMS100 kbSMS110 kbSMS120 kbExchange400NT
	Version           : WINDOWS:4.0; winnt:1.0,1.1,1.2
	
	=============================================================================
	
