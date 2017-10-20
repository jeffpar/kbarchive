---
layout: page
title: "Q137055: PPT7: PowerPoint Presentation Conferencing Fails"
permalink: /kb/137/Q137055/
---

## Q137055: PPT7: PowerPoint Presentation Conferencing Fails

{% raw %}

	Article: Q137055
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbualink97 kbdta kbconfkbbuglist
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to set up a Presentation Conference, the conference might fail
	without any error messages. The audience members' computers may connect and the
	presentation may start, but the presenter's computer shows this message:
	
	  Connecting to audience machine(s). This may take a moment...
	
	The only option is to click Cancel and stop the conference.
	
	CAUSE
	=====
	
	This behavior may occur if any of the following conditions is true:
	
	- You are running the Presentation Conference on a Novell network with Internet
	  Protocol (IP) as the default protocol, and you are using PowerPoint 95.
	
	- The name of an audience member's computer or the presenter's computer is
	  longer than fifteen characters or it contains uppercase characters, spaces,
	  or special characters or symbols (such as, $,@,#,!,^,&,*,<,>,?,_).
	
	- You are running a third-party TCP/IP protocol stack.
	
	- The presentation you are trying to conference is corrupted or damaged.
	
	- One of the audience computers may be out of disk space and may have stopped
	  responding. This may cause the presenter's computer to stop responding as
	  well.
	
	RESOLUTION
	==========
	
	Presentation Conference in PowerPoint 7.0 does not work on a Novell network,
	even with IP addressing. It is not compatible with any version of Novell
	NetWare, or or any third-party TCP/IP protocol stack. It functions properly only
	with Microsoft Windows 95 TCP/IP protocol.
	
	If the computer name is longer than fifteen characters or contains any special
	characters or symbols, rename it so that it has fifteen or fewer characters and
	does not contain any spaces or capital letters.
	
	If an audience member's computer is low on disk space, either free up some disk
	space on that computer, or do not include that computer in the conference.
	
	To regain connection to some or all computers in the conference, you may have to
	reboot the presenter's computer as well.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q134865 PPT: Presentation Conference Fails with Errors
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 7.00 ppt7 ppt95 ppt97 failure communicate netdde nt ethernet internet 3.12 3.11 3.22 4.0 4.1 vlm netx client ip 2.1 odi drivers 3.51 wsock32 dll caps
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbualink97 kbdta kbconf kbbuglist
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
