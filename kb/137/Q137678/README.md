---
layout: page
title: "Q137678: SMS Service Pack Does Not Upgrade Administrator Tools"
permalink: kb/137/Q137678/
---

## Q137678: SMS Service Pack Does Not Upgrade Administrator Tools

	Article: Q137678
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbsmsAdmin smsadmin smssetup smshowto smsconfigkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install a Systems Management Server Service Pack onto a
	computer running Windows NT that only has the Systems Management Server
	Administrator Tools installed (not a site server), the Upgrade command on the
	Operations menu is unavailable.
	
	CAUSE
	=====
	
	The Setup program for the service pack currently only allows the service pack to
	be installed onto computers running Windows NT with a Systems Management Server
	Primary Site.
	
	Because there are updates to the Administrator Tool components in both Systems
	Management Server 1.1 Service Pack 1 and Systems Management Server 1.2 Service
	Pack 1 that affect Helpdesk functionality, you must manually update these
	components.
	
	WORKAROUND
	==========
	
	To work around this problem, follow the instructions below corresponding to the
	version of Systems Management Server you are using.
	
	Installation Instructions for Systems Management Server 1.1 Service Pack 1
	--------------------------------------------------------------------------
	
	1. From the expanded copy of Systems Management Server 1.1 Service Pack 1, use
	  File Manager to locate the appropriate platform directory for your computer
	  running Windows NT (such as X86.BIN, Alpha, or MIPS). Go to the INTNL
	  directory.
	
	2. Click the Sightnt.dl_ file and then click Copy on the File menu. In the To
	  field, enter the path to the Administrator tool <platform>.bin
	  directory (for example, x:\Sms\Site.srv\X86.bin), and the new file name
	  Sightnt.dll (so that the complete To field may be: x:\Sms\Site.srv\
	  X86.bin\Sightnt.dll). If the File Replace option is set in the Confirmation
	  dialog box (found on the Options menu), you will be prompted to replace the
	  existing copy of Sightnt.dll. Choose to replace this file.
	
	3. Repeat step 2 above, using the new file name Smsres.dll (so that the complete
	  To field may be x:\Sms\Site.srv\X86.bin\Smsres.dll).
	
	The installation is now complete.
	
	Installation Instructions for Systems Management Server 1.2 Service Pack 1
	--------------------------------------------------------------------------
	
	1. Follow steps 1-3 for the installation instructions for Systems Management
	  Server 1.1 Service Pack 1, listed in the previous section.
	
	2. Click the Multprot.dl_ file and then click Copy on the File menu. Type the
	  same path to the local Systems Management Server Administrator Tools once
	  more, including the platform directory (for example,
	  X:\Sms\Site.srv\X86.bin), and the new file name Multprot.dll (so that a
	  complete to field may be x:\Sms\Site.srv\X86.bin\Multprot.dll).
	
	3. Repeat step 2 above, using the new file name Sightnt.dl_ (so that the
	  complete To field may be x:\Sms\Site.srv\X86.bin\Sightnt.dll).
	
	4. Follow this step if Network Monitor has been installed. From the service
	  pack's Smssetup\System32\<platform>.bin directory, click the Rnal.dl_
	  file. On the File menu, click Copy and type the path to the Windows NT
	  System32 directory, using the new file name, Rnal.dll.
	
	The installation is now complete.
	
	Installation Instructions for Systems Management Server 1.2 Service Pack 2
	--------------------------------------------------------------------------
	
	Run Service Pack 2 setup on computers running the Systems Management Server
	version 1.2 Administrator Tools. No additional steps are required.
	
	Installation Instructions for Systems Management Server 1.2 Service Pack 3
	--------------------------------------------------------------------------
	
	Run Service Pack 3 setup on computers running the Systems Management Server
	version 1.2 Administrator Tools. No additional steps are required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: upgrade
	
	======================================================================
	Keywords          : kbsetup kbConfig kbsmsAdmin smsadmin smssetup smshowto smsconfig kbfixlist
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
