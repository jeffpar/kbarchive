---
layout: page
title: "Q297722: COM Server May Not Be Started from the Login Script"
permalink: kb/297/Q297722/
---

## Q297722: COM Server May Not Be Started from the Login Script

	Article: Q297722
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start COM servers with a login script, a user's password is about to
	expire, and the user receives a dialog box that prompts them to change their
	password, an error message that is similar to the following error message may be
	logged in the Application event log:
	
	  Unable to start a DCOM Server: {000209FF-0000-0000-C000-000000000046}. The
	  error:
	
	  "No process is on the other end of the pipe."
	
	  In the login script was the following command.
	
	  C:\PROGRA~1\MICROS~1\Office\Winword.exe /Automation -Embedding
	
	The script or program that starts the server may also display an error message.
	
	Note that the "No process is on the other end of the pipe" error message is an
	example of an error message that may be logged. Other error codes may also be
	logged.
	
	CAUSE
	=====
	
	This problem occurs because the COM server is started in the user session. The
	server is started by the instance of Winlogon for that session in a separate
	thread that starts during initialization.
	
	To start a COM server, the thread needs information collected when the user logs
	on by the main thread. When the user received the password expiration dialog
	box, the main thread is stalled and cannot provide this information. When this
	occurs, the information is not available and the COM server is not started.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date     Time  Size     File name   Platform
	  --------------------------------------------
	  6/19/01  2:41  207,120  Msgina.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
