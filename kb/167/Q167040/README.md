---
layout: page
title: "Q167040: PPTP Performance Update for Windows NT 4.0 Release Notes"
permalink: kb/167/Q167040/
---

## Q167040: PPTP Performance Update for Windows NT 4.0 Release Notes

	Article: Q167040
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the Point to Point Tunneling Protocol (PPTP)
	Performance Update for Microsoft Windows NT Server and Workstation version 4.0
	Release Notes. The PPTP Performance Update has been replaced by the PPTP
	Performance and Security Upgrade for WinNT 4.0. For your convenience, the
	English version of this post-SP3 hotfix has been posted to the following
	Internet location. However, Microsoft recommends that you install Windows NT 4.0
	Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	  /hotfixes-postSP3/pptp3-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	US and Canadian customers can download the 128-bit version of this hotfix from
	the following Web page:
	
	  http://support.microsoft.com/support/ntserver/128Eula.asp
	
	You can find the original version at the following Microsoft ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	  /hotfixes-postSP3/archive/pptp2-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	WARNING: If you install the original (archived) version of this hotfix AFTER you
	apply the later version, your system may become unusable. Microsoft does not
	recommend you install the original hotfix after applying the later version.
	
	MORE INFORMATION
	================
	
	Point to Point Tunneling Protocol (PPTP) Performance Update for
	    Microsoft Windows NT 4.0 Server and Workstation Release Notes
	----------------------------------------------------------------------------------------------------------------------------------
	
	Please use this document to address questions which may arise during the
	installation of this PPTP Update for Microsoft Windows NT 4.0 Server and
	Workstation.
	
	Contents
	
	- Information on Installation
	
	- New features added in this Update
	
	- Other issues addressed in this Update
	
	Information on Installation
	---------------------------
	
	Microsoft has released a PPTP Performance Update for the Windows NT Workstation
	and Server version 4.0. We have made refinements to current Windows PPTP client
	and server communication technologies that significantly improve the performance
	of secure PPTP connections via the Internet.
	
	This update should be applied to both Windows NT 4.0 Servers and Workstations.
	You must have Service Pack 3 for Windows NT 4.0 installed before applying this
	update. Windows NT 4.0 Servers running Routing and Remote Access Service (RRAS)
	must first apply this Windows NT PPTP Update followed by the RRAS Hotfix 2.0.
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q168469
	  TITLE : RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 2.0 Release Notes
	
	This update is packaged in an auto-install format. Copy the Update to a temporary
	directory, and double-click the executable name or type the executable name
	"pptpfixi.exe" for x86 or "pptpfixa.exe" for alpha (without quotation marks) at
	a command prompt to install.
	
	The files can also be extracted from the Update without installing them. To do
	this, copy the Update to a temporary directory, and type pptpfixi/x or
	pptpfixa/x at a command prompt. After extracting the files, the Update can be
	installed by typing hotfix at a command prompt.
	
	To uninstall this update, type "HOTFIX -Y" (without the quotation marks) from the
	directory you copied the files to.
	
	Output of "HOTFIX -?":
	
	  HOTFIX [-y] [-f] [-n] [-z] [-q] [-m] [-l]
	     -y Perform uninstall (only with -m or -q)
	     -f Force apps closed at shutdown
	     -n Do not create uninstall directory
	     -z Do not reboot when update completes
	     -q Quiet or Unattended mode with no user interface
	     -m Unattended mode with user interface
	     -l List installed hotfixes
	
	RAS Servers that terminate compulsory PPTP connections from an FEP (Front End
	Processor) must disable historyless compression/encryption in order for legacy
	Windows 95 clients to receive data properly. An FEP is a dial-up server which
	can create a PPTP tunnel on behalf of its dial-up clients. This feature is
	available from several Access Server vendors, including Compaq (Microcom),
	Ascend, and 3com.
	
	The value to set in the registry to enable/disable historyless
	encryption/compression is:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NdisWan
	\Parameters
	
	  Historyless: REG_DWORD: 0 - Disabled
	               REG_DWORD: 1 - Enabled [default]
	
	New Features Added in this Update:
	
	PPTP Performance Issues Addressed in this Update:
	
	- A new historyless mode for encryption and compression over PPTP connections
	  has been enabled in this update. This new mode solves performance problems
	  encountered using PPTP in high latency networks or networks that experience
	  significant packet loss. This upgrade is fully compatible with legacy PPTP
	  systems. However, in order to negotiate historyless mode, both the PPTP
	  client and server must support it. If either client or server refuses the new
	  mode, normal MPPE compression and encryption will be negotiated. To
	  experience the full benefit of the PPTP performance update, this Update must
	  be installed on both Windows NT clients and servers.
	
	
	
	- The default PPTP receive window size was increased to 16.
	
	- The window between the NDISWAN driver and the PPTP driver was increased.
	
	- The PPTP frame size defaults to 1400 bytes to avoid packet fragmentation.
	  This was fixed in an earlier hotfix, and is also included in this update. It
	  is documented at:
	
	  http://support.microsoft.com/support/kb/articles/q162/2/30.asp
	
	Other Issues Addressed in this Update
	-------------------------------------
	
	Remote Access Service and PPTP Issues:
	
	- PPTP server responsiveness has been improved during the time period right
	  after termination of multiple PPTP connections.
	
	- Corrected a problem in the PPTP server in which an improperly configured
	  "start session" in the packet header could disable a PPTP server. It is
	  documented at
	
	  http://support.microsoft.com/support/kb/articles/q179/1/07.asp
	
	- Improved integrity of session encryption in MPPE by removing predictability
	  of successive packet following an encryption or compression reset.
	
	- Corrected a user interface issue where, under certain situations, a RAS/PPTP
	  server could allow a client to connect with no data encryption even though
	  the administrator was under the impression that the server was configured to
	  require data encryption. It is documented at:
	
	  http://support.microsoft.com/support/kb/articles/q177/6/70.asp
	
	- Updated MSCHAP to disable sending the LM hash when client set to "require"
	  128-bit encryption.
	
	Other Windows NT Issues Addressed in this Update:
	
	- This release includes an enhancement to TCP/IP which will improve the
	  performance of TCP-based applications over high latency networks, such as the
	  Internet.
	
	Information in this document is subject to change without notice and is provided
	for informational purposes only. The entire risk of the use or results of the
	use of this document remains with the user, and Microsoft Corporation makes no
	warranties, either express or implied. The names of companies, products, people,
	characters, and/or data mentioned herein are fictitious and are in no way
	intended to represent any real individual, company, product, or event, unless
	otherwise noted. Complying with all applicable copyright laws is the
	responsibility of the user. No part of this document may be reproduced or
	transmitted in any form or by any means, electronic or mechanical, for any
	purpose, without the express written permission of Microsoft Corporation.
	
	Microsoft may have patents, patent applications, trademarks, copyrights, or other
	intellectual property rights covering subject matter in this document. Except as
	expressly provided in any written license agreement from Microsoft, the
	furnishing of this document does not give you any license to these patents,
	trademarks, copyrights, or other intellectual property.
	
	(c) 1998 Microsoft Corporation. All rights reserved.
	
	Microsoft, MS-DOS, MS, Windows, Windows NT, are either registered trademarks or
	trademarks of Microsoft Corporation in the U.S.A. and/or other countries.
	
	Other product and company names mentioned herein may be the trademarks of their
	respective owners.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
