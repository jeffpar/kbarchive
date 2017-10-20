---
layout: page
title: "Q176820: Differences Between 128-bit and 40-bit versions of SP3 &amp; SP4"
permalink: /kb/176/Q176820/
---

## Q176820: Differences Between 128-bit and 40-bit versions of SP3 &amp; SP4

{% raw %}

	Article: Q176820
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	How to identify differences between the exportable and non-exportable (strong
	crypto) versions of Windows NT system files.
	
	MORE INFORMATION
	================
	
	Because of US government regulations that restrict the export of software
	containing strong (128-bit) cryptographic algorithms, Microsoft produces two
	versions of the North American English service packs. One which implements
	strong cryptographic algorithms (128-bit) and is not exportable outside North
	America without an export license, and a second version that contains exportable
	(40-bit) cryptographic code, which is exportable to most destinations without
	restriction.
	
	Because of these governmental export restrictions, no localized versions of
	Windows NT are currently available in 128-bit versions. Non-North American
	English versions of these files contain only exportable cryptographic code.
	
	In Service Pack 3, the only files that are different between the 40-bit and
	128-bit versions of the service packs are:
	
	- Ndiswan.sys
	- Ntlmssps.dll
	- Schannel.dll
	- Security.dll
	- Update.inf
	
	Additionally, the 128-bit version also includes Rsaenh.dll.
	
	Perform the following steps to verify the version of the files installed:
	
	1. Start Windows NT Explorer.
	
	2. Right-click the file, click Properties, and then click the Version tab.
	
	3. Note the description.
	
	  40-bit:
	
	     File Name     Description
	     -------------------------
	     Ndiswan.sys   MS WAN Wrapper Network Driver (Export Version)
	     Ntlmssps.dll  NtLm Security Support Provider Service DLL (Export
	                   Version)
	     Schannel.dll  PCT / SSL Security Provider (Export Version)
	     Security.dll  NtLm Security Support Provider Client DLL (Export
	                   Version)
	
	  128-bit:
	
	     File Name     Description
	     -------------------------
	     Ndiswan.sys   MS WAN Wrapper Network Driver (Domestic Use Only)
	     Ntlmssps.dll  NtLm Security Support Provider Service DLL (Domestic
	                   Use Only)
	     Rsaenh.dll    Microsoft Enhanced Cryptographic Provider (US/Canada
	                   Only, Not for Export)
	     Schannel.dll  PCT / SSL Security Provider (US and Canada Use Only)
	     Security.dll  NtLm Security Support Provider Client DLL (Domestic
	                   Use Only)
	
	Installing 40-bit Service Pack on a 128-bit Windows NT installation will possibly
	result in reduced functionality.
	
	Installing 128-bit Service Pack on a 40-bit Windows NT installation will replace
	all the files concerning encryption and will make the installation 128bit.
	
	NOTE: The uninstall procedure for Service Pack 4 will retain the 128-bit
	schannel.dll but returns all other encryption files to 40-bit versions.
	
	
	When installing hotfixes that replace any one of these files, you should be sure
	to install the correct version of the hotfix to maintain the correct
	cryptographic strength.
	
	Additional query words: 4.00 sp sp1 sp2 sp3 sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
