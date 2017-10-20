---
layout: page
title: "Q89558: WFWG and Novell: LASTDRIVE=Z Makes &#91; and &#93; Active Drives"
permalink: /kb/089/Q89558/
---

## Q89558: WFWG and Novell: LASTDRIVE=Z Makes &#91; and &#93; Active Drives

{% raw %}

	Article: Q89558
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symbols appear as NetWare login drives when Novell NetWare
	Connectivity is loaded in Windows for Workgroups and the line LASTDRIVE=Z is
	included in the CONFIG.SYS file:
	
	    "[" and "]"
	
	CAUSE
	=====
	
	Setting LASTDRIVE=Z conflicts with Novell NetWare NETX.COM and NETX.EXE because
	they use drive letters after those set by the LASTDRIVE= statement in the
	CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To correct this problem, change the line to LASTDRIVE=P, instead of Z.
	
	MORE INFORMATION
	================
	
	The value of the LASTDRIVE statement is set to P by default when Novell NetWare
	connectivity is loaded in Windows for Workgroups. The LASTDRIVE statement
	specifies the range of drive letters you can use for connecting to other Windows
	for Workgroups computers. For example, if your LASTDRIVE is set to P, you can
	use letters from A to P to connect to other Windows for Workgroups computers.
	
	If you set up Novell NetWare connectivity, the letter that follows the LASTDRIVE
	value is your login drive. (This is because Novell uses LASTDRIVE +1.) For
	example:
	
	- If LASTDRIVE=P, then your login drive is Q. Although you can use any letter
	  to connect to NetWare directories, letters after the value of the LASTDRIVE
	  statement (that is drives after P) are reserved for NetWare directories only.
	
	- If LASTDRIVE=F, then your login drive is G, and drives after F are
	  unavailable for connecting to other Windows for Workgroups computers.
	
	NOTE: If your login script(s) has been set up to use drive F as the login drive,
	setting LASTDRIVE=P may result in errors during bootup. To resolve those errors,
	change your login script(s) to reflect the login drive change, or change
	LASTDRIVE to E. Please note the following limitations:
	
	- If you set LASTDRIVE to E and your users have machines with single hard disk
	  drives (C), you are limiting them to two network connections (D and E).
	
	- If you set LASTDRIVE to E, and your users have local hard disk drives with
	  only two partitions (C and D) and a CD-ROM drive (E), they cannot establish
	  any network connections.
	
	Novell NetWare is manufactured by Novell, Inc., a vendor independent of
	Microsoft; we make no warranty implied or otherwise regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 novell last drive login default 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
