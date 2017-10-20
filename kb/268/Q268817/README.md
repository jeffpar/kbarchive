---
layout: page
title: "Q268817: Deadlock in Redirector Delays Opening a File on the Network"
permalink: /kb/268/Q268817/
---

## Q268817: Deadlock in Redirector Delays Opening a File on the Network

{% raw %}

	Article: Q268817
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may occasionally experience delays of about 45 seconds when you access files
	on a remote server. There are no other performance problems on the network or on
	the server in general.
	
	CAUSE
	=====
	
	There is a deadlock situation when a client workstation posts a large number of
	directory change notification requests. This deadlock is resolved after 45
	seconds. These requests may be issued by:
	
	- Redirecting user shell folders
	
	- Open Windows Explorer windows with the focus on a network drive
	
	- Programs with open documents on a network drive
	
	- Any code that uses the FindFirstChangeNotification function
	
	The deadlock may occur when more than 48 of these notifications are pending.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size      File name   Platform
	  --------------------------------------------------
	  11/7/2000   02:46   265,904   Rdr.sys     Intel
	  11/7/2000   02:44   509,072   Rdr.sys     Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, increase the MaxMpxCt setting on the server as
	described in the following Microsoft Knowledge Base article:
	
	  Q141709 Limit of 49 Named Pipe Connections from a Single Workstation
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: OPLOCK BREAK Opportunistic Lock
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
