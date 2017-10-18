---
layout: page
title: "Q199319: XADM: Extracting Public Folder Permissions Using PFADMIN"
permalink: kb/199/Q199319/
---

## Q199319: XADM: Extracting Public Folder Permissions Using PFADMIN

	Article: Q199319
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to extract the client permissions associated with
	Exchange Server public folders, into a file, which you can then use to
	automatically import these permissions.
	
	This procedure may be useful in cases where the client permissions are lost
	because the public folders are accidentally re-homed and you must extract the
	public folder permissions from a backup. You can run this procedure on a regular
	basis to back up the public folder client permissions.
	
	MORE INFORMATION
	================
	
	Pfinfo.exe and Pfadmin.exe are utilities that are available in the Microsoft
	BackOffice Resource Kit, Second Edition.
	
	You can use Pfinfo.exe (version 3.0.6 or later) to extract information about the
	public folders in a Microsoft Exchange site. You can then save this information
	to a delimited file, which you can view in a spreadsheet by using Microsoft
	Excel or any other spreadsheet program. You can then manipulate the data in any
	way.
	
	When you use Pfinfo.exe, a file generates that contains information on public
	folder permissions and replicas that you can use in conjunction with the
	PFAdmin.exe utility.
	
	You can use Pfadmin.exe (version 1.3 or higher) to import public folder
	permissions. For a full list of functions, type the "PFAdmin.exe /?" (without
	the quotation marks) command at a command prompt.
	
	To extract the public folders client permissions:
	
	1. On the Exchange Server computer, another server, or workstation, install the
	  Microsoft Exchange Administrator Program, and then copy the Pfadmin.exe,
	  Pfinfo.exe, Pfinfo.ini and Aclcls.dll files to the local hard disk.
	
	2. Create a new mailbox on the Exchange Server computer named TestMailbox, and
	  then make sure that the primary Microsoft Windows NT account associated with
	  this mailbox has Service Account Administrator privileges on the Exchange
	  Server Organization, Site, and Configuration containers.
	
	3. Install the Exchange Server client or Outlook on the computer used in step
	  one.
	
	4. Create an Exchange client or Outlook MAPI profile called "PFProfile," and
	  then add the Exchange Server service to the profile.
	
	5. Remove all other services including Outlook Address Book, and then type the
	  server name and a mailbox (for example, TestMailbox) that exists on the
	  server specified.
	
	6. Start Pfinfo.exe.
	
	7. Click to select the "Create file for use with Pfadmin.exe" check box.
	  Microsoft recommends that you leave the Separator in the output file at TAB.
	  Do not click to select "Only extract data for public folders homed in the
	  current site".
	
	8. Click Options, and then click "Public Folder Permissions" and then verify
	  that the option to include Public Folder Permissions is selected. Click OK.
	
	9. Click OK, and then Start.
	
	After Pfinfo completes the extraction, the SET commands that are required to
	import the permissions are listed in the Pfadmdat.txt file. The Options menu
	references these commands.
	
	To import the public folders client permissions:
	
	NOTE: If you need to change permissions, modify the Pfadmdat.txt by using
	Microsoft Notepad or any other text editor, before you import the permissions.
	
	1. Place the Pfadmdat.txt file into the same folder as the PFAdmin tool.
	
	2. Type in the following command from this folder:
	
	  "pfadmin pfprofile < pfadmdat.txt" (without the quotation marks)
	
	3. If the profile name contains spaces, enclose the profile name in straight
	  quotation marks. This is required. For example, when you use the profile with
	  the name "pfprofile account", use the following syntax:
	
	  "pfadmin "pfprofile account" < pfadmdat.txt" (without the quotation marks)
	
	  NOTE: In this scenario, the quotation marks are required.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
