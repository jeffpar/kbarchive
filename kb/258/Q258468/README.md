---
layout: page
title: "Q258468: XCLN: Unable to Import .pst File into Outlook Profile"
permalink: kb/258/Q258468/
---

## Q258468: XCLN: Unable to Import .pst File into Outlook Profile

	Article: Q258468
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to import a .pst file from a CD-ROM to your Outlook folders by using
	the Outlook Import and Export Wizard, in the Import dialog box, after you browse
	to the .pst file, you may receive the following error message:
	
	  Personal Folders:
	  Properties for this information service must be defined prior to use.
	
	If you click OK, you may receive the following error message:
	
	  Microsoft Outlook:
	  File access is denied. You do not have permission required to acces the file
	  c:\<path_name>.
	
	
	If you click OK again, the Import dialog box is displayed, so that you can browse
	to the .pst file again.
	
	This behavior also occurs if you attempt to open a .pst file from a CD-ROM.
	
	CAUSE
	=====
	
	This behavior can occur because when you burn a file to a CD-ROM, the file is
	created with a read-only file attribute. There is no way to change this on a
	CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the .pst file from the CD-ROM and save it to a
	hard disk or to another type of media in which you can change the file
	properties. Cancel the selection of the read-only attribute on the .pst file and
	save the changes. The Import process should now finish successfully.
	
	MORE INFORMATION
	================
	
	A .pst file is not specific to a version of Exchange Server or to the operating
	system, so if you use a .pst file that is from a different version, it does not
	affect the Import process. A .pst file is not owner specific either, although
	password-protected .pst files require you to provide the password to finish the
	Import process.
	
	Additional query words: OL97 OL98 OL2000 OL2K
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
