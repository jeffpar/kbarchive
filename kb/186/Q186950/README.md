---
layout: page
title: "Q186950: XCLN: Installing and Using Global Address List Modify Tool"
permalink: kb/186/Q186950/
---

## Q186950: XCLN: Installing and Using Global Address List Modify Tool

	Article: Q186950
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Global Address List Modify tool is a BackOffice Resource Kit utility that
	enables users to modify personal information displayed in the global address
	list. When it is installed, users can update their information contained in the
	global address list through their Outlook or Exchange client.
	
	MORE INFORMATION
	================
	
	The Global Address List Modify tool is available on the Back Office Resource
	Kit, Second Edition, under Client Tools.
	
	Installing the Global Address List Modify Tool
	----------------------------------------------
	
	You can install this tool when you run the Microsoft BackOffice Resource Kit,
	Second Edition Setup program, or you can use the following procedure:
	
	1. From the Exchange\<operating system>\<platform>\Client\GalMod
	  folder on the Microsoft Back Office Resource Kit, Second Edition compact
	  disc, copy the Galmod32.exe file to your computer, to a user's computer, to a
	  public folder, or to a network share. Any computer that can run the 32- bit
	  Microsoft Exchange Client or Microsoft Outlook client can run the
	  Galmod32.exe program.
	
	2. If you want to enable users to view and modify their custom attributes, copy
	  the Galmodca.exe file from the Client\GalMod folder on the compact disc. An
	  additional Custom Attributes property page is displayed by the GALModCA
	  program.
	
	Using the Global Address List Modify Tool
	-----------------------------------------
	
	If you want users to be able to modify information other than Notes for either
	version of this tool, you must set appropriate permissions on the global address
	list properties. To do this for Microsoft Exchange Server version 5.5, you need
	to start the Microsoft Exchange Server Administrator in raw mode.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. In the Exchange Server Administrator program, on the main menu, click View.
	
	3. On the View menu, click Raw Directory.
	
	4. In the right pane of the window, double-click Schema.
	
	5. Double-click the attribute that you want to modify.
	
	6. In the Access-Category box, change the value to 2, which denotes user
	  access.
	
	  NOTE: The Access Category property of an attribute determines the rights that
	  a user needs to have to modify the attribute. The Access Category property
	  value definitions are as follows:
	
	   - 0: Only the system can modify the attribute
	
	   - 1: Users with Modify Admin Attributes permission can modify the attribute
	
	   - 2: Users with Modify User Attributes permission can modify the attribute
	
	   - 3: Users with Modify Permissions rights can modify the attribute
	
	  For example, the Exchange Phone Number attribute, which is mapped to the LDAP
	  telephoneNumber attribute, has an Access Category of 2, which means that
	  users with "Modify Users Attributes" permission on the object can change the
	  value. The Primary Windows NT Account associated with a mailbox is granted
	  "Modify Users Attributes" permission by default, so that the primary user of
	  the mailbox can change the phone number in the directory.
	
	7. Click Set.
	
	8. Click OK. When the warning message appears, click OK again.
	
	NOTE: The Global Address List Modify tool is a Win32 program that requires that
	you have either Microsoft Windows NT version 3.1 or later or Microsoft Windows
	95 or later installed on your computer.
	
	NOTE: There is a version of the Global Address List Modify Tool that uses Outlook
	Web Access (OWA) that is not discussed in this article. For more information
	about how to use the Outlook Web Access version of this tool, please see the
	BackOffice Resource Kit.
	
	Additional query words: Address Updater bork reskit rkit 8.5
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
