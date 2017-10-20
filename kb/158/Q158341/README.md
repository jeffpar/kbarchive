---
layout: page
title: "Q158341: Applying Windows NT 4.0 Service Pack 128-Bit Encryption"
permalink: /kb/158/Q158341/
---

## Q158341: Applying Windows NT 4.0 Service Pack 128-Bit Encryption

{% raw %}

	Article: Q158341
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbother kbsetup
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply Service Pack 1 (or a later service pack) for Windows NT 4.0 to
	Windows NT Server 4.0, the following dialog message will appear:
	
	  You have a domestic-version 128-bit PCT/SSL security provider installed on
	  your machine. This Update contains only an export grade version 40-bit
	  PCT/SSL security provider. Select Cancel to skip copying this file. Your
	  original 128-bit security provider will be left intact. Please see the
	  readme.txt for information on obtaining the updated 128-bit security
	  provider.
	
	CAUSE
	=====
	
	The version of Windows NT Server 4.0 that is installed has Internet Information
	Server 2.0 installed, and the Service Pack has an updated file used by Internet
	Information Server that the service pack will replace if allowed to do so.
	
	RESOLUTION
	==========
	
	This problem occurs only if
	
	- the Windows NT Server 4.0 is running the Internet Information Server 2.0 Web
	  services
	
	  -and-
	
	- it is using SSL (Secure Sockets Layer) that requires 128-bit encryption.
	
	If 128-bit encryption is required and you are in the U.S. or Canada, follow
	Resolution A. If 128-bit encryption is not required or you are not in the U.S.
	or Canada, follow resolution B.
	
	Resolution A
	------------
	
	1. Click the Cancel button to keep the existing file in place.
	
	2. Restart the server after the Service Pack is applied.
	
	  Internet Information Server will run with the older version of the file, but
	  the security provider will eventually need to be replaced because of fixes
	  and enhancements.
	
	The updated 128-bit security provider (the complete Service Pack, except with the
	128-bit security provider) can be obtained by calling:
	
	  (800) 631-8906 in the US
	
	  (800) 933-4750 in Canada
	
	NOTE: The domestic (128-bit) version of the Service Pack is intended for
	distribution only in the United States and Canada. Export of the domestic
	version of this service pack from the United States is regulated by the
	International Traffic in Arms Regulations (ITAR, 22 CFR 120-130) of the U.S.
	State Department, Office of Defense Trade Controls. A State Department license
	is required to export the domestic version of the Service Pack outside the
	United States or Canada.
	
	NOTE: Another option, if you need the full line of 128-bit encryption, is to
	order the Encryption Pack, which includes 128-bit encryption for RAS, Internet
	Explorer 3.0, and SSL for Windows NT Workstation and Server 4.0. The Encryption
	Pack can be ordered by calling:
	
	  (800) 360-7561 in the US
	
	  (800) 360-7561 in Canada
	
	Resolution B
	------------
	
	1. Click OK to allow the Service Pack to overwrite the existing security
	  provider.
	
	2. Restart the server after the Service Pack is applied.
	
	  Internet Information Server will run with the 40-bit version of the security
	  provider if SSL is used, otherwise it should not affect the operation of
	  Internet Information Server.
	
	
	STATUS
	======
	
	The Readme.txt file included with all Service Packs for Windows NT 4.0 from SP2
	and greater now include a section on how to obtain the 128-bit encryption
	components described in this article. Please refer to the Readme.txt file for
	the most current information.
	
	Additional query words: prodnt IIS SSL Encryption
	
	======================================================================
	Keywords          : kbenv kbother kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis200
	Version           : :2.0,4.0
	
	=============================================================================
	

{% endraw %}
