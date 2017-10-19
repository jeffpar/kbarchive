---
layout: page
title: "Q158020: SMS: Error 529 When Installing a Client"
permalink: /kb/158/Q158020/
---

## Q158020: SMS: Error 529 When Installing a Client

	Article: Q158020
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing a Systems Management Server 1.2 client, the installation script
	(SMSLS or RUNSMS) fails with the following error message:
	
	  ERROR: 529
	  Veuillez contacter votre administrateur systeme.
	
	The error message is NOT displayed in English. The translation is: "Please
	contact your system administrator."
	
	A verbose output shows that CLISETUP (Cli_dos.exe for MS-DOS) fails with an Error
	529.
	
	CAUSE
	=====
	
	This problem occurs when both of the following conditions are true:
	
	- The language setting in Control Panel Regional Settings is set to something
	  other than "English" on the client.
	
	-and-
	
	- A Systems Management Server 1.1 site with the Multi-Lingual Client Pack for
	  Systems Management Server 1.1 has been upgraded to Systems Management Server
	  version 1.2, but the Multi-Lingual Client Pack is still the "old" 1.1
	  version.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Remove (making a backup copy of the files first) the Systems Management
	  Server 1.1 Multi-Lingual Client Pack for Systems Management Server 1.1, in
	  order to install a default U. S. version of Systems Management Server 1.2
	  Client. For a French version, remove Sms\Logon.srv\X86.bin\0000040C.
	
	-or-
	
	- Upgrade the Multi-Lingual Client Pack to the Systems Management Server 1.2
	  version.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Systems Management Server tree is affected as shown by the following:
	
	- Sms\Logon.srv\X86.bin\00000409 (Systems Management Server 1.2, US resources)
	
	- Sms\Logon.srv\X86.bin\0000040C (Systems Management Server 1.1, FR resources)
	
	NOTE: This problem may affect all international clients.
	The following list summarizes most of the existing country codes:
	
	00000405=cz      00000414=no      0000080C=be
	00000406=dk      00000415=pl      00000813=be
	00000407=gr      00000416=br      00000816=po
	00000409=us      00000419=ru      00000C0C=cf
	0000040A=sp      0000041A=yu      00001009=us
	0000040B=su      0000041B=sl      0000100C=sf
	0000040C=fr      0000041D=sv      00010409=dv
	0000040E=hu      00000807=sg      0001040A=sp
	0000040F=us      00000809=uk      00010C0C=cf
	00000410=it      0000080A=la      00020409=us
	00000413=nl
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
