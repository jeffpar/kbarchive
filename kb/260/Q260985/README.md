---
layout: page
title: "Q260985: XIMS: Minimum NTFS Permissions Required to Use CDONTS"
permalink: kb/260/Q260985/
---

## Q260985: XIMS: Minimum NTFS Permissions Required to Use CDONTS

	Article: Q260985
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.1,1.2,2.0; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Collaboration Data Objects (CDO) for NTS, versions 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the minimum NTFS permissions that are required to use
	Collaboration Data Objects for Windows NT Servers (CDONTS) in conjunction with
	either the Internet Information Server (IIS) SMTP service or the Exchange Server
	Internet Mail Service.
	
	MORE INFORMATION
	================
	
	If you are using CDONTS with the Option Pack SMTP service, the following minimum
	NTFS permissions are required:
	
	- The IUSR account must have Add rights to the Mailroot\Pickup folder.
	
	- If you are running CDONTS out of process, the IWAM account must have Add
	  rights to the Mailroot\Pickup folder.
	
	- The System account must have Full Control rights to the entire Mailroot
	  folder structure.
	
	- The default location for the Mailroot folder is Inetpub\Mailroot.
	
	If you are using CDONTS with Exchange Server, the following minimum NTFS
	permissions are required:
	
	- The IUSR account must have Add rights to the Exchsrvr\Imcdata\Pickup folder.
	
	- If you are running CDONTS out of process, the IWAM account must have Add
	  rights to the Exchsrvr\Imcdata\Pickup folder.
	
	- The Exchange Server service account must have Full Control rights to the
	  entire Exchsrvr\Imcdata folder structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbiisSearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbExchange550 kbiis500 kbiis400 kbZNotKeyword2 kbCDO110NTS kbCDO120NTS kbCDO200NTS
	Version           : WINDOWS:1.1,1.2,2.0; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
