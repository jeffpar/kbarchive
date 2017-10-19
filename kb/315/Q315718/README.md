---
layout: page
title: "Q315718: SMS: Windows File Protection Message During Client Installation"
permalink: /kb/315/Q315718/
---

## Q315718: SMS: Windows File Protection Message During Client Installation

	Article: Q315718
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the base installation of the Systems Management Server (SMS) client, you
	may receive the following error message on your Microsoft Windows XP-based
	computer:
	
	  Windows File Protection
	  Files that required for Windows to run properly have been replaced by
	  unrecognized versions. To maintain system stability. Windows must restore the
	  original versions of these files.
	  Insert your Windows XP Professional CD-ROM now.
	
	The System Event log may contain the following informational Windows File
	Protection 64005 events:
	
	  The protected system file snmpthrd.dll was not restored to its original,
	  valid version because the Windows File Protection restoration process was
	  cancelled by user interaction, user name is smsadmin. The file version of the
	  bad file is 1.10.698.0.
	
	  The protected system file snmpcl.dll was not restored to its original, valid
	  version because the Windows File Protection restoration process was cancelled
	  by user interaction, user name is smsadmin. The file version of the bad file
	  is 1.10.698.0
	
	WORKAROUND
	==========
	
	To work around this problem, install the WMI SNMP Provider by using the
	Add/Remove Programs tool in Control Panel. This process copies the Windows XP
	versions of the Snmpcl.dll and Snmpthrd.dll files into the Windows\System32\Wbem
	folder. Because these files are a later version than the files that are included
	with SMS, the SMS Wbemsdk.exe tool will not try to overwrite those files. With
	SMS 2.0 Service Pack 4 (SP4) and later, SMS no longer tries to install these
	files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The SMS Wbemsdk.exe tool contains version 698 of Windows Management
	Instrumentation (WMI), and the SMS base installation runs Wbemsdk.exe on Windows
	XP-based computers that have WMI version 2600. However, before SMS 2.0 SP4,
	Wbemsdk.exe would install the Snmpcl.dll and Snmpthrd.dll files before an
	evaluation of the WMI version. The installation script was then stopped because
	of a later version of WMI already being installed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
