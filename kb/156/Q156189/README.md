---
layout: page
title: "Q156189: SMS: Shared Installation of Microsoft Exchange on Windows NT"
permalink: kb/156/Q156189/
---

## Q156189: SMS: Shared Installation of Microsoft Exchange on Windows NT

	Article: Q156189
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up a shared package of Microsoft Exchange on a
	client running Windows NT.
	
	MORE INFORMATION
	================
	
	1. Create a source directory for the Microsoft Exchange Windows NT client setup
	  files (for example, C:\XNTFlat).
	
	2. Create a directory called Msapps below the XNTFlat directory (for example,
	  C:\XNTFlat\Msapps).
	
	3. Run Setup /A for the Windows NT client from the Microsoft Exchange client
	  compact disc, and install to the directories created in the previous steps.
	
	4. From the Microsoft Exchange Administrator program group, run the Microsoft
	  Exchange Setup Editor. Point the Setup Editor to the C:\XNTFlat directory.
	
	5. Modify entries as necessary for your installation. NOTE: Remove Personal
	  Folders if you want all clients to store their e-mail messages on the server.
	
	6. To perform a totally unattended workstation installation, edit the Setup.stf
	  file in C:\XNTFlat, making the following change:
	
	  Change line 14 from:
	
	          14    Network    AppMainDlg    21 22 23 24 : 25  382  17 ...
	
	  To:
	
	          14    Network    AppMainDlg    24 : 25  382  17 ...
	
	  Line 14 tells the Setup program which options to present to the user when
	  doing a network installation. By making this change, you are limiting the
	  installation to a workstation installation, defined by line 24. The following
	  is a list of the lines, and the options they represent:
	
	  21 - Typical
	  22 - Custom
	  23 - Laptop
	  24 - Workstation
	
	7. Copy the Exwinnt.pdf file from the Exchange client compact disc to the
	  Systems Management Server directory on your hard drive. Edit the file using a
	  text editor such as Notepad, and add the following section below the [Setup
	  Package for Sharing] section:
	
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
	
	8. Save the file and use it to create a shared package. When creating the
	  package, you must still designate the source directory, designate the share
	  point, and change the icon.
	
	9. Create the program group and job to distribute the file.
	
	The quiet mode of installation used in this .pdf file uses the following registry
	key for the user's name:
	
	    HKEY_CURRENT_USER\Software\Microsoft\MS Setup(ACME)\User Info
	
	If this is incorrect or somehow different from the Exchange mailbox, the user
	must run Control Panel Mail and Fax to edit his or her profile. The key above
	has two values: DefName (for the user name) and DefCompany (for the company
	name).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	
