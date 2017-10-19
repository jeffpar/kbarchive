---
layout: page
title: "Q252664: Stop 0x0000000A Error in Tcpip.sys on FTP Server"
permalink: /kb/252/Q252664/
---

## Q252664: Stop 0x0000000A Error in Tcpip.sys on FTP Server

	Article: Q252664
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Windows NT-based computer is running the File Transfer Protocol (FTP)
	service, you may receive a "Stop 0x0000000A" error message in the Tcpip.sys file
	on a blue screen.
	
	CAUSE
	=====
	
	This behavior can occur on a multiple processor FTP server because of an error
	adjusting the size of the Ipr_Buffer chain. The buffer size was not trimmed
	correctly when urgent packets were resequenced where an overlap existed.
	Overlaps can occur when packets are received from computers using non-Windows
	implementations of the TCP/IP stack.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time       Size      File name     Platform
	  -------------------------------------------------------
	  02/01/2000  01:04p     802,328   Tcpip.sys     I386
	  02/04/2000  05:17p     305,744   Tcpip.sys     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
