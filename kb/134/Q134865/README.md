---
layout: page
title: "Q134865: PPT7: Presentation Conference Fails with Errors"
permalink: /kb/134/Q134865/
---

## Q134865: PPT7: Presentation Conference Fails with Errors

{% raw %}

	Article: Q134865
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbnetwork kbualink97
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are the presenter in a Presentation Conference, you may receive one of
	the following error messages, depending on what computer and network operating
	system configuration you are running:
	
	- Name was not located on DNS Server.
	
	- Netscape was unable to create a network socket connection.
	
	- Fatal Error: Cannot read IP Config.
	
	- There is not enough memory available to run this program. Quit one or more
	  programs, and try again.
	
	- Cannot find audience. Press OK to return to wizard.
	
	In addition, audience members may receive the following error message:
	
	  An unexpected error occurred reading file. Restart PowerPoint and try again.
	
	If you receive one of these error message, you won't be able to use the
	Presentation Conference feature. In addition, other programs that use the TCP/IP
	network protocol also will not function.
	
	CAUSE
	=====
	
	These errors occur if the presentation you are using in the Presentation
	Conference is corrupted. The TCP/IP protocol cannot handle the corrupted data
	stream and shuts down, generating the errors.
	
	RESOLUTION
	==========
	
	To run your Presentation Conference, quit all programs, exit Windows 95, turn
	off all the computers involved in the conference, restart Windows 95, and
	restart Presentation Conferencing. Do not reopen the file that is corrupted.
	
	Additional query words: 7.00 ppt95 netware novell banyan vines lantastic presentation conference conferencing machine name located dns server corrupt netscape tcp error message stating
	
	======================================================================
	Keywords          : kbnetwork kbualink97 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
