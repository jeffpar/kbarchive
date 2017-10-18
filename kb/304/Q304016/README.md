---
layout: page
title: "Q304016: SMS: Software Inventory Scans Drive M on Exchange 2000"
permalink: kb/304/Q304016/
---

## Q304016: SMS: Software Inventory Scans Drive M on Exchange 2000

	Article: Q304016
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you run a Systems Management Server (SMS) software inventory scan on a
	Microsoft Exchange Server 2000-based server, you may notice that the "Last
	Logged On By" and "Last Logon Time" columns in the Exchange System Manager tool
	have changed. The "Last Logged On By" column displays "SMSCliToknAcct&" as
	the account name and the "Last Logon Time" column matches the date and time the
	software inventory scan last ran. Depending on the number of mailboxes, the
	software inventory scan could take hours to finish.
	
	Note that accessing the mailbox folders on the Exchange Installable File System
	(IFS) drive (which defaults to drive M) with a domain administrator account has
	the same effect on the "Last Logged On By" and "Last Logon Time" columns.
	
	CAUSE
	=====
	
	This issue occurs because the SMS Software Inventory agent recognizes the
	Exchange Server 2000 IFS drive as a fixed drive rather than as an IFS drive and
	scans the drive during its inventory cycle.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English Service Pack 2 (SP2) version of this fix should have the following
	file attributes or later:
	
	  Date         Time   Version         Size     File name        Platform
	  ----------------------------------------------------------------------
	  10-Jun-2001  13:50                       67  Compversinv.ini  Intel
	  10-Jun-2001  13:50                  284,477  Insinv32.exe     Intel
	  10-Jun-2001  13:50  2.00.1493.2220  104,816  Sinv32.exe       Intel
	  10-Jun-2001  13:50                       67  Compversinv.ini  Alpha
	  10-Jun-2001  13:50                  512,271  Insinv32.exe     Alpha
	  10-Jun-2001  13:50  2.00.1493.2220  151,824  Sinv32.exe       Alpha
	
	Note that the fix that is described in Microsoft Knowledge Base article Q241982
	also resolves this issue, and vice versa. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q241982 SMS: Substitute Command "Subst" Locks Out SMSCliToknAcct& and
	  SMSCCMBootAcct& Accounts
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can make the following registry change to hide the IFS drive from Windows
	Explorer and prevent SMS from scanning the drive:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following value in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EXIFS\Parameters\DriveLetter
	
	3. Change the data value to be blank (clear the M and do not leave a space).
	
	4. Reboot the server.
	
	IMPORTANT: Hiding the Exchange IFS drive by modifying the registry value may
	prevent Microsoft Outlook Web Access (OWA) from functioning properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
