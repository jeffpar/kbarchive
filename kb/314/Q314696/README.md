---
layout: page
title: "Q314696: The &quot;domain&lt;1c&gt;&quot; Name Is Occasionally in Conflict"
permalink: kb/314/Q314696/
---

## Q314696: The &quot;domain&lt;1c&gt;&quot; Name Is Occasionally in Conflict

	Article: Q314696
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down a backup domain controller that communicates with a Windows
	Internet Name Service (WINS) server over a wide area network (WAN), the
	domain<1C> name may sometimes enter a conflicting state. This behavior may
	occur if you run Windows NT 4.0-based domain controllers in a WAN environment
	that uses central WINS servers. When this problem occurs, the following
	information is logged on the backup domain controllers:
	
	  Event Type: Error
	  Event Source: NetBT
	  Event Category: None
	  Event ID: 4320
	  Date: 11.10.2001
	  Time: 12:42:17
	  User: N/A
	  Computer: N0001009
	  Description:
	  Another machine has sent a name release message to this machine probably
	  because a duplicate name has been detected on the TCP network. The IP address
	  of the node that sent the message is in the data. Use nbtstat -n in a command
	  window to see which name is in the Conflict state.
	
	  Data:
	  0000: 00040000 00540001 00000000 c00010e0
	  0010: 00000000 00000000 00000000 00000000
	  0020: 00000000 00000000 0168fc82
	
	CAUSE
	=====
	
	The server incorrectly determines that the name is in conflict when it receives
	the name-release message from WINS because the server does not check the name
	type.
	
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
	
	  Date         Time   Version        Size     File name
	  -----------------------------------------------------
	  22-Jan-2002  04:13  4.0.1381.7124  124,784  Netbt.sys
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
