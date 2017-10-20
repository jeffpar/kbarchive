---
layout: page
title: "Q141380: TCP/IP Printing to a QMS 1725 Print System"
permalink: /kb/141/Q141380/
---

## Q141380: TCP/IP Printing to a QMS 1725 Print System

{% raw %}

	Article: Q141380
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	QMS 1725 Print System, NAPS-QMS1725PS-1 may require an update of the firmware to
	make the network printer RFC 1179 compliant. Systems running non-compliant
	firmware will fail to print when Windows NT attempts to send print jobs directly
	to them.
	
	CAUSE
	=====
	
	QMS 1725 Print System, NAPS-QMS1725PS-1, running a TCP/IP versions earlier than
	5.09 are not RFC 1179 compliant.
	
	RESOLUTION
	==========
	
	Check the printer's startup page. Information will be presented on the version
	of TCP/IP in use. If the version of TCP/IP is prior to 5.09 contact QMS
	technical support at (205) 633-4300 for more information.
	
	
	The 1725 Print System, NAPS-QMS1725PS-1 is manufactured by QMS, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
