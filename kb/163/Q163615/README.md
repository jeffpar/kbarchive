---
layout: page
title: "Q163615: Unattended Setup Does Not Honor Win31Upgrade=no In Answer File"
permalink: /kb/163/Q163615/
---

## Q163615: Unattended Setup Does Not Honor Win31Upgrade=no In Answer File

	Article: Q163615
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You want to run Unattended Setup on a computer that already has Windows 3.x
	installed. But because you do not want to upgrade Windows, you specify
	"Win31Upgrade=no" in your unattended answer file.
	
	Even though you do this, there is a message during text mode setup saying:
	
	  Setup has found a previous version of Microsoft Windows on your hard disk in
	  the directory shown below.
	
	  C:\WINDOWS
	
	  Setup recommends installing Microsoft Windows NT in the same directory.
	
	CAUSE
	=====
	
	When Setup finds Windows, it first checks if there is enough free space on the
	partition containing Windows before it asks for the upgrade. If there is
	insufficient space, Windows NT Setup displays the message above before honoring
	the setting in the unattended answer file.
	
	The drive is too full to hold Windows NT, which requires approximately 122 MB (1
	MB = 1,048,576 bytes) of free disk space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: unattend Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
