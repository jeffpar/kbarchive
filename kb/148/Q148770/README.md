---
layout: page
title: "Q148770: PC DirSync: IMPORT -S Hangs Computer During Dir-Sync"
permalink: /kb/148/Q148770/
---

## Q148770: PC DirSync: IMPORT -S Hangs Computer During Dir-Sync

	Article: Q148770
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When IMPORT -S is run on an MS-DOS based-computer, the system may hang if the
	templates that Import is trying to process are larger than usual (that is 50-150
	lines). On a computer other than MS-DOS, such as Microsoft Windows NT, IMPORT -S
	may cause a General Protection (GP) Fault.
	
	Also, if a Requestor Import response is being generated during the Directory
	Synchronization (Dir-Sync) cycle, the same symptoms may occur during the SRVMAIN
	process. That is, the computer running DISPATCH.EXE may hang or GP Fault.
	
	CAUSE
	=====
	
	The buffer used to store the template information read from the ADMIN.TPL file
	is not large enough. There is no allowance for the extra spaces being inserted
	to separate the template fields. The problem can occur when more requestors are
	added to the Dir-Sync Server (DSS), and those requestors try to get a full
	Import, including templates. In this case, SRVMAIN -T will hang an MS-DOS
	computer.
	
	This issue also affects ADMIN.EXE, SRVMAIN.EXE, and REQMAIN.EXE.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name     Version
	  ---------------------
	  Admin.exe     3.5.22
	  Import.exe    3.5.22
	  Reqmain.exe   3.5.22
	  Srvmain.exe   3.5.22
	
	The Administrator program hotfix has been posted to the following Internet
	location as Admy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	The directory synchronization (dirsync) hotfix has been posted to the above
	Internet location as Dirsy2k.exe.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	version 3.5.
	
	MORE INFORMATION
	================
	
	An allowance for extra spaces between template fields has been added to
	IMPORT.EXE. This will allow up to 256 template fields.
	
	
	Additional query words: 3.50 post35fix
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
