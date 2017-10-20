---
layout: page
title: "Q207369: SMS: INVOS2 Does Not Report TCP/IP Information"
permalink: /kb/207/Q207369/
---

## Q207369: SMS: INVOS2 Does Not Report TCP/IP Information

{% raw %}

	Article: Q207369
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbInventory
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	INVOS2 does not report any TCP/IP information for OS/2 clients. For 16-bit
	Windows and Windows NT, the inventory agents report IP address, subnet mask,
	default gateway, and DNS name when available.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
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
	
	  Date     Time       Size     File name   Platform
	  -----------------------------------------------------------
	  11/16/98  2:03pm    157,661  Invos2.exe  (x86)
	  10/22/98  5:10pm     14,556  OS2Bios.exe (x86)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. In the <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\X86.bin
	  directory on the site server, replace the Invos2.exe file with the version
	  obtained from the hotfix.
	
	2. Place the new file OS2Bios.exe in the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\X86.bin directory.
	
	NOTE: You can perform Step 1 automatically by using Hotfix.exe with the provided
	Hotfix.ini file.
	
	Maintenance Manager will replicate these files out to the Systems Management
	Server logon servers on its next work cycle. When the files are updated on the
	logon servers, run inventory on the OS/2 clients. TCP/IP information should be
	reported to the database in the NETWORK group.
	
	Additional query words: prodsms os2 tcpip os 2 machine domain system
	
	======================================================================
	Keywords          : kbsms120 kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
