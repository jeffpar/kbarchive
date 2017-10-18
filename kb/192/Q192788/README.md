---
layout: page
title: "Q192788: SMS: Wuser32 Leaks Memory After UDP Port 1762 Attack"
permalink: kb/192/Q192788/
---

## Q192788: SMS: Wuser32 Leaks Memory After UDP Port 1762 Attack

	Article: Q192788
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a utility to send packets to UDP port 1762, the Systems Management
	Server Remote Control Agent (Wuser32.exe) will rapidly allocate memory. This
	will continue until either no more memory can be allocated or the Systems
	Management Server Remote Control Agent is stopped.
	
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
	
	  Date      Time                Size    File name     Platform
	  ------------------------------------------------------------
	
	  10/5/98   3:36pm              170,720 Wuser32.exe   (Intel)
	  10/5/98   3:29pm              345,872 Wuser32.exe   (Alpha)
	  10/5/98   3:35pm               54,112 Multprot.dll  (Intel)
	  10/5/98   3:30pm              129,296 Multprot.dll  (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Wuser32.exe file in the
	
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	
	  directory with the hotfixed version.
	
	2. Replace the Multprot.dll file in the
	
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	
	  directory with the hotfixed version.
	
	3. Maintenance manager will replicate the updated files to the
	
	  Logon.srv\<platform>.bin directory on the Systems Management Server
	
	  logon servers during its next work cycle. After that occurs, you can update
	  the clients. To update the clients, either manually run Upgrade.bat on each
	  client or follow the instructions in the following article in the Microsoft
	  Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	NOTE: For consistency, Multprot.dll should also be updated in the
	<SMS_root_directory>\Site.srv\<platform>.bin on the Systems
	Management Server site server, as well as on any computers running the Systems
	Management Server Administrator tools.
	
	Additional query words: prodsms smsremtshoot out of virtual memory
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
