---
layout: page
title: "Q150925: How to Uninstall Novell's 32-Bit Network Client"
permalink: kb/150/Q150925/
---

## Q150925: How to Uninstall Novell's 32-Bit Network Client

	Article: Q150925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to uninstall Novell's 32-bit network client.
	
	MORE INFORMATION
	================
	
	To uninstall Novell's 32-bit network client, follow these steps:
	
	1. Remove the client in Network properties. To do so, follow these steps:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Novell 32-bit client, and then click Remove.
	
	  c. Click the Novell 32-bit IPX protocol, and then click Remove.
	
	2. Add the Microsoft Client for NetWare Networks. This step ensures that
	  registry entries created by Novell's installation program are overwritten.
	  After you install the Microsoft client and restart the computer, you can
	  either remove the Microsoft client or leave it installed. To add the
	  Microsoft client, follow these steps:
	
	  a. In Network properties, click Add.
	
	  b. Click Client, and then click Add.
	
	  c. In the Manufacturers box, click Microsoft. In the Network Clients box,
	     click "Microsoft Client for NetWare Networks", and then click OK.
	
	  d. Click OK. When you are prompted to restart the computer, click No.
	
	3. Click the Start button, point to Find, and then click "Files or folders". In
	  the Named box, type "netdef.inf" (without the quotation marks), and then
	  click Find Now. When the file is found, right-click the file, and then click
	  Rename. Rename the file to Netdef.nw.
	
	4. If Novell's 32-bit client has been installed only once, click the Start,
	  point to Find, and then click "Files or folders". In the Named box, type
	  "netdef.bnw" (without the quotation marks), and then click Find Now. When the
	  file is found, right-click the file, and then click Rename. Rename the file
	  to Netdef.inf. This restores the original Netdef.inf file. Shut down and
	  restart your computer, and skip the remaining steps in this article. If the
	  32-bit client has been installed more than once, or if you are not sure,
	  continue with step 5.
	
	5. Extract a new copy of the Netdef.inf file from your original Windows 95
	  CD-ROM or disks.
	
	  To extract the Netdef.inf file from the CD-ROM, type the following command at
	  a command prompt
	
	  "extract drive:\win95\precopy2.cab netdef.inf /L c:\windows\inf" (without the
	  quotation marks)
	
	  where drive is the drive letter of the CD-ROM drive. To extract the Netdef.inf
	  file from the floppy disk, type the following command
	
	  "extract drive:\precopy2.cab netdef.inf /L c:\windows\inf" (without the
	  quotation marks)
	
	  where driveis the drive letter of the floppy disk drive. Insert disk 2 in the
	  floppy disk drive before typing this command.
	
	6. Shut down and restart your computer.
	
	For a list of all the files installed with Novell's 32-bit client, please contact
	Novell.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	
	Additional Information
	----------------------
	
	Novell's Knowledge Base on the Internet contains an article about uninstalling
	the Novell 32-bit client. The article indicates that you can use the Novell
	Unc32.exe tool to uninstall the client and remove all the associated registry
	keys.
	
	To determine if the Unc32.exe tool is already installed on your computer, follow
	these steps:
	
	1. Click Start, point to Find, and then click "Files or folders".
	
	2. In the Named box, type "unc32.exe" (without the quotation marks), and then
	  click C: in the "Look in" box.
	
	3. Click Find Now.
	
	If the Unc32.exe tool is not installed on your computer, obtain it from Novell
	Technical Support or download it from Novell's Web site.
	
	For information about how to obtain this file, please contact Novell.
	
	Additional query words: client32
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
