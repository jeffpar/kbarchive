---
layout: page
title: "Q241447: How to Restrict the Use of Certain Ciphers in IIS 5.0"
permalink: /kb/241/Q241447/
---

## Q241447: How to Restrict the Use of Certain Ciphers in IIS 5.0

	Article: Q241447
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you use Internet Information Services (IIS) 5.0, you may want to restrict
	the use of certain ciphers that are used in secure communications (such as SSL
	or TLS). For example, you may want to ensure that the Triple DES encryption
	algorithm (cipher) is not used because it requires more of the CPU's time than
	RC4 does.
	
	MORE INFORMATION
	================
	
	To restrict the use of a cipher, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/SecurityProviders/SCHANNEL/Ciphers
	
	3. Under this key, all the ciphers currently used by Schannel for secure
	  communications are listed. Select the one you want to disable and expand the
	  key.
	
	4. You should see a DWORD value under the key called "Enabled." Depending on the
	  cipher you have selected, this value will either be set to "ffffffff" or
	  "000000f0" ("ffffffff" means enabled, "000000f0" means disabled).
	
	  NOTE: Be sure that you change it to reflect a hexadecimal value (this should
	  already be the setting).
	
	5. When you set this value, restart the Web services so the change can take
	  affect. Open a command prompt (Cmd.exe) and run Iisreset.exe to restart the
	  Web server and its dependant services. Note that your site (and those
	  services restarting) will be unavailable until IISRESET completes.
	
	Please note that Cipher Suite 1 and 2 are not supported in IIS 5.0.
	
	Additional query words: iis cipher disable
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
