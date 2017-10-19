---
layout: page
title: "Q244408: XADM: Year Displayed Incorrectly After Restoring Backup"
permalink: /kb/244/Q244408/
---

## Q244408: XADM: Year Displayed Incorrectly After Restoring Backup

	Article: Q244408
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbYear2000 exc4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you perform a backup using the Windows NT Backup program (Ntbackup.exe) that
	is included with Exchange Server 4.0 on a computer running Microsoft Windows NT
	Server 3.51, and then restore the backup, the backup date that is displayed in
	the Backup.log file and the Restore Status window may be incorrect. For example,
	if you perform the backup and restore operations during the year 2000, the year
	may be displayed as 1900 instead. This problem only occurs with the date that is
	displayed on the following line:
	
	  Backup performed on 02/29/1900 at 12:57 AM
	
	All other dates in the Backup.log file and the Restore Status window are
	displayed correctly. This problem is not likely to occur before the year 2000.
	
	RESOLUTION
	==========
	
	A supported software update that corrects this problem is now available from
	Microsoft, but it has not been fully regression tested and should be applied
	only to systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Windows NT Backup Program
	
	+--------------------------+
	| File name    | Version   | 
	+--------------------------+
	| Ntbackup.exe | 4.0.997.0 | 
	+--------------------------+
	
	
	This hotfix has been posted to the following Internet location as Q244408enga.exe
	and Q244408engi.exe:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/Exchg4.0/Post-SP4-BACKUP/
	
	NOTE: You must be running Exchange Server 4.0 Service Pack 5 and Windows NT
	Server 3.51 Service Pack 5 on the computer on which this software update is
	applied.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbYear2000 exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
