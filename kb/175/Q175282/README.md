---
layout: page
title: "Q175282: FIX: Error Message Appears When Answer File Contains Blank Entri"
permalink: /kb/175/Q175282/
---

## Q175282: FIX: Error Message Appears When Answer File Contains Blank Entri

	Article: Q175282
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use unattended setup for computers running Windows NT Server and leave
	the AdvServerType and AutoMode / AutoUsers sections out of the Unattend.txt
	file, it may cause the setup process to display the following error message:
	
	  A Setup parameter specified by your system administrator or computer
	  manufacturer is missing or invalid. Setup must therefore ask you to
	  provide this information now.
	
	  Once you have furnished the required information, unattended setup will
	  continue.
	
	  You may wish to inform system administrator or computer manufacturer
	  that the 'XXXXXXX' value is missing or invalid.
	
	The error message appears twice, once for the AdvServerType and once for AutoMode
	/ AutoUsers. The XXXXXXX in the error message refers to the missing entry in the
	answer file.
	
	CAUSE
	=====
	
	One of the files that runs setup, Syssetup.dll, does not handle the missing
	values as for AdvServerType and AutoMode / AutoUsers the same way it does for
	ComputerName and IPAddress during unattended setup.
	
	RESOLUTION
	==========
	
	Copy the Syssetup.dll that comes with Windows NT 4.0 Service Pack 3 or later to
	you distribution server, this will suppress the first message that appears for
	AdvServerType. You must set the Licensing Type to either AutoMode or AutoUsers
	or you will still get the above error message once during setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Under a normal unattended installation of Windows NT 4.0, not entering in a
	value will simply cause the setup to prompt the user for information. It may be
	beneficial to have setup stop for sections like ComputerName or IPAddress and
	give the installer the ability to type in the machine specific information
	without using Uniqueness Database Files (UDFs).
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Windows NT 4.0 Deployment Guide. You can download the Deployment
	Guide from:
	
	http://www.microsoft.com/ntworkstation
	
	Note that the Deployment Guide is valid for both Windows NT workstation and
	Windows NT Server.
	
	Additional query words: answerfile unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
