---
layout: page
title: "Q242088: Winnt /b Doesn't Work on WinNT 4.0 w/ Onboard Adaptec 7895 SCSI"
permalink: /kb/242/Q242088/
---

## Q242088: Winnt /b Doesn't Work on WinNT 4.0 w/ Onboard Adaptec 7895 SCSI

{% raw %}

	Article: Q242088
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft Windows NT with the 'WINNT /B' command, the
	computer may stop responding (hang), or you may receive a STOP 0x0000007b error
	message.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft's generic Aic78xx.sys driver is used
	instead of an Original Equipment Manufacturer (OEM) driver. On any Windows NT
	4.0-based computer using the Adaptec 7895 or 7890 SCSI (Dual) controller, the
	OEM driver must be used. This includes Windows NT-based computers dedicated to
	Microsoft Small Business Server or Terminal Server. Some Gateway and IBM
	computers use this chip set, and it is becoming more popular on 'clone'
	computers as well.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the 7800wnt.exe file from Adaptec:
	
	1. Visit the following Adaptec Web site and download the 7800wnt.exe file by
	  copying and pasting the following URL into the Address line of your Web
	  browser:
	
	http://www.adaptec.com/worldwide/support/suppdetail.html?cat=/Product/AHA-2940&prodkey=AHA-2940
	
	2. Once the 7800wnt.exe file is downloaded, double-click it to install the files
	  it contains.
	
	NOTE: On Dell computers, a proprietary version of the Adaptec chip set is used.
	Obtain the correct files from the Dell file library at the following Dell Web
	site:
	
	  http://support.dell.com/filelib/index.asp
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: driver
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
