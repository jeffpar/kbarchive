---
layout: page
title: "Q193015: SMS: Pentium II Processor Detected as 486DX on OS/2 Clients"
permalink: /kb/193/Q193015/
---

## Q193015: SMS: Pentium II Processor Detected as 486DX on OS/2 Clients

{% raw %}

	Article: Q193015
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms kbsms120 kbDSupport
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On computers with Pentium II processors, Invos2 reports the processor as a
	486DX.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time               Size    File name   Platform
	  ----------------------------------------------------------
	  08/17/98   02:32pm            151,981 Invos2.exe   (x86)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	MORE INFORMATION
	================
	
	To manually install the hotfix, perform the following steps on the Systems
	Management Server site server:
	
	1. In the <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\X86.bin
	  directory on the site server, replace the Invos2.exe file with the version
	  obtained from the hotfix.
	
	  NOTE: You can perform Step 1 automatically by using Hotfix.exe with the
	  provided Hotfix.ini file.
	
	2. The file will be replicated at the next Maintenance Manager work cycle to all
	  Systems Management Server logon servers to the SMS\Logon.srv\X86.bin
	  directory. When that occurs, the clients can be updated.
	
	  To update the clients, either manually run Upgrade.bat on each client, or
	  follow the instructions in the following article in the Microsoft Knowledge
	  Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: warp prodsms IBM
	
	======================================================================
	Keywords          : kbsms kbsms120 kbDSupport 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
