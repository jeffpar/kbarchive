---
layout: page
title: "Q132807: Enhanced Encryption for Windows 95 Password Cache"
permalink: /kb/132/Q132807/
---

## Q132807: Enhanced Encryption for Windows 95 Password Cache

{% raw %}

	Article: Q132807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win2000:95
	Operating System(s): 
	Keyword(s): kbfile kbnetwork osr1 msnets win95 kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following issues exist regarding password list files in Windows 95:
	
	1. An algorithm that can be used to compromise the security scheme used in the
	  Windows 95 password list (.pwl) file has been posted on the Internet. A
	  person who can access the password list file on the hard disk of a Windows
	  95-based computer may be able to use this decryption algorithm to generate
	  unencrypted passwords.
	
	2. If two users with user names containing the same first eight characters log
	  on to the same Windows 95-based computer, the first user's password list file
	  becomes invalid.
	
	  Note that this second symptom occurs only with the Windows 95 Password Cache
	  update (Mspwl32.dll version 9.00.951) available with Microsoft Windows 95
	  Service Pack 1 and OEM Service Release 1.
	
	CAUSE
	=====
	
	1. The encryption mechanism used specifically for Windows 95 .pwl files,
	  including not only the algorithm itself but also the manner in which it is
	  applied, may be susceptible to certain decryption techniques.
	
	  Different encryption algorithms are applied elsewhere in Windows 95 to encrypt
	  other information. These algorithms are not susceptible to the decryption
	  techniques mentioned above.
	
	
	2. When a user logs on to Windows 95, Windows 95 checks the System.ini file to
	  see if that user has logged on before. If there is no entry for that user,
	  the first eight characters of the user name are used to create a password
	  list file for the user. If another password list file with the same name
	  exists, it is overwritten.
	
	  Note that this second symptom occurs only with the Windows 95 Password Cache
	  update (Mspwl32.dll version 9.00.951) available with Microsoft Windows 95
	  Service Pack 1 and OEM Service Release 1.
	
	RESOLUTION
	==========
	
	This issue is resolved in Microsoft Windows 98.
	
	These issues are resolved by the following updated files for Windows 95 and
	Windows 95 OEM Service Release 1:
	
	  Mspwl32.dll version 4.00.952 (dated 4/26/96) and later<BR/>
	  Net.exe (no version information) dated 12/11/95 and later
	
	To install this update, follow these steps:
	
	1. Download the Mspwlupd.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Mspwlupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Mspwlupd.exe now
	  (http://download.microsoft.com/download/win95/Update/95/w95/EN-US/mspwlupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Mspwlupd.exe file contains the following files:
	
	  File name     Version    Date/Time         Size     Destination folder
	  ----------------------------------------------------------------------
	  Mspwl32.dll   4.00.952    4/26/96 9:52am    21,504  Windows\System
	  Net.exe                  12/11/95 9:51am   375,930  Windows
	
	
	MORE INFORMATION
	================
	
	This update is an enhanced security component that substantially strengthens the
	encryption used for the Microsoft Windows 95 password cache. The new component
	uses a 128-bit key, increased from the 32-bit key used in the previous version.
	The new component also includes enhancements to the method used to store
	passwords in the .pwl file. With the 128-bit security, the new component is 2^96
	times more difficult to decrypt.
	
	This component replaces the Mspwl32.dll and Net.exe files. The previous .pwl file
	is automatically upgraded to the new format.
	
	Net.exe, which is usually used from the command line, no longer uses the password
	cache. Users are prompted for passwords when using Net.exe to connect to
	resources on the network.
	
	NOTE: Because the same algorithm is used to cache passwords in Windows for
	Workgroups version 3.11, you may want to disable password caching in Windows for
	Workgroups using Admincfg.exe. For information about using Admincfg.exe, please
	refer to the Windows for Workgroups Resource Kit.
	
	NOTE: If you disabled password caching on a Windows 95-based computer as a
	temporary workaround before installing this update, you can re-enable password
	caching after installing this update. You can re-enable password caching by
	reversing the procedure documented in the following article in the Microsoft
	Knowledge Base:
	
	  Q140557 Microsoft Windows 95 Password List Security Issue
	
	To re-enable password caching, set the DisablePwdCaching value to zero (0) or
	delete the DisablePwdCaching value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork osr1 msnets win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95; Win2000:95
	
	=============================================================================
	

{% endraw %}
