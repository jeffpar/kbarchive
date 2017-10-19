---
layout: page
title: "Q248969: Sinvproc Leaves Zero-Byte Files in the BADSINV Folder"
permalink: /kb/248/Q248969/
---

## Q248969: Sinvproc Leaves Zero-Byte Files in the BADSINV Folder

	Article: Q248969
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsms200 kbsms200bug kbInventory kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you process software inventory files, SMS_SOFTWARE_INVENTORY_PROCESSOR
	(Sinvproc) may fail to open an .sic or .sid file with the following error
	messages in its log file.
	
	  
	
	  Processing file: D:\SMS\inboxes\sinv.box\7U74Z2GZ.sid  $$<SMS_SOFTWARE_INVENTORY_PROCESSOR><Fri Dec 10 01:12:40.304 1999 Pacific Standard Time><thread=322 (0x142)>
	  ERROR - Failed to open file D:\SMS\inboxes\sinv.box\7U74Z2GZ.sid  $$<SMS_SOFTWARE_INVENTORY_PROCESSOR><Fri Dec 10 01:12:40.304 1999 Pacific Standard Time><thread=322 (0x142)>
	  ERROR - Failed to move file D:\SMS\inboxes\sinv.box\7U74Z2GZ.sid to D:\SMS\inboxes\sinv.box\BADSinv\OFW94C1G.sid Directory, Win32 = 32  $$<SMS_SOFTWARE_INVENTORY_PROCESSOR><Fri Dec 10 01:12:40.320 1999 Pacific Standard Time><thread=322 (0x142)>
	  WARNING - Delete file D:\SMS\inboxes\sinv.box\7U74Z2GZ.sid failed, Win32 = 32  $$<SMS_SOFTWARE_INVENTORY_PROCESSOR><Fri Dec 10 01:12:40.320 1999 Pacific Standard Time><thread=322 (0x142)>
	
	When this occurs, zero byte .sic or .sid files are created in the
	SMS\Inboxes\Sinv.box\BADSinv folder.
	
	CAUSE
	=====
	
	This issue can occur if the software inventory files are very large or the
	Client Access Points (CAPs) from where the files are being copied are using slow
	connections. When Windows is copying a file, you cannot open it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	If the copying process takes too long, SMS_SOFTWARE_INVENTORY_PROCESSOR attempts
	to process the file before the file is copied. Sinvproc cannot open the file and
	determines that the file is bad. Sinvproc then attempts to move the file to the
	BADSINV folder and creates a zero length file to act as a place holder for the
	file name. When the move does not work, the zero-byte file is left in the
	folder.
	
	To install the update, use the appropriate method.
	
	Method 1: Using the Update Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the update folder structure to a share on your network. The Q248969.exe
	  program is a Microsoft Windows Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server using an account that has administrative
	  privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q248969.exe and follow the directions in the wizard. You can run the file
	  in silent mode by using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the Systems Management Server Administrator console and stop the
	  Systems Management Server Site Component Manager and Systems Management
	  Server Executive services.
	
	2. Replace the Sinvproc.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the latest
	  version included in the update.
	
	3. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsms200 kbsms200bug kbInventory kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
