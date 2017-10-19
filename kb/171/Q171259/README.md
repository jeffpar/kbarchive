---
layout: page
title: "Q171259: XFOR: How to Move the Microsoft Mail Connector Postoffice"
permalink: /kb/171/Q171259/
---

## Q171259: XFOR: How to Move the Microsoft Mail Connector Postoffice

	Article: Q171259
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	NOTE: As of 1/28/98, Quarterdeck Mail became StarNine Mail.
	
	SUMMARY
	=======
	
	When using the Microsoft Exchange Microsoft Mail Connector to connect Microsoft
	Exchange and Quarterdeck Mail for the Macintosh, the Exchange Connector
	Postoffice is required to be on an NTFS partition. By default, the Exchange
	Connector Postoffice is installed to the <Exchange Server
	Path>\Connect\Msmcon directory. If Microsoft Exchange is installed to a FAT
	drive, the connection to Quarterdeck Mail for the Macintosh requires that either
	the drive containing the Exchange Server installation be formatted as NTFS or
	the connector postoffice be moved to an NTFS partition.
	
	MORE INFORMATION
	================
	
	To move the Microsoft Mail Connector Postoffice to a different drive, you can
	follow the following steps:
	
	1. Stop the MS Mail Connector Interchange service, MSMail connector (Appletalk)
	  MTA service (if present), and any PCMTA services that are running.
	
	2. Stop sharing \\<Server Name>\Maildat$.
	
	3. Create a directory on the NTFS partition called ExchSrvr.
	
	4. Copy the <Exchange Server Path>\Connect\Msmcon directory tree to the
	  newly created ExchServ directory on the NTFS partition.
	
	5. Share the <NTFS Drive Letter>\ExchSrvr\Connect\Msmcon\Maildata
	  subdirectory as Maildat$.
	
	6. Modify the following registry keys under:
	
	     HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services
	 
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  The following registry entries assume that you moved the connector postoffice
	  to the D: drive. If this is not the case, then you must substitute the drive
	  letter where the new connector postoffice is located for the "D:" value.
	
	  Registry Key: MSExchangeATMTA
	  Value Name: ImagePath
	  Data Type: REG_EXPAND_SZ
	  Data Value: D:\ExchSrvr\Connect\Msmcon\Bin\Macgate.exe
	
	  Registry Key: MSExchangeATMTA/Performance
	  Value Name: Library
	  Data Type: REG_EXPAND_SZ
	  Data Value: D:\ExchSrvr\Connect\Msmcon\Bin\Macgperf.dll
	
	  Registry Key: MSExchangeMSMI
	  Value Name: ImagePath
	  Data Type: REG_EXPAND_SZ
	  Data Value: D:\ExchSrvr\Connect\Msmcon\Bin\Mt.exe
	
	  Registry Key: MSExchangeMSMI/Performance
	  Value Name: Library
	  Data Type: REG_SZ
	  Data Value: D:\ExchSrvr\Connect\Msmcon\Bin\Mtperf.dll
	
	  Registry Key: MSExchangePCMTA/Performance
	  Value Name: Library
	  Data Type: REG_SZ
	  Data Value: D:\ExchSrvr\Connect\Msmcon\Bin\Xtnperf.dll
	
	7. Restart the MS Mail Connector Interchange service, MSMail connector
	  (Appletalk) MTA service (if present), and any PCMTA services that are defined
	  for Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
