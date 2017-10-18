---
layout: page
title: "Q253343: Slow Performance Running WINS Server"
permalink: kb/253/Q253343/
---

## Q253343: Slow Performance Running WINS Server

	Article: Q253343
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	SYMPTOMS
	========
	
	When you are running Windows Internet Naming Service (WINS) on your server, you
	may experience slow performance on the WINS Server.
	
	NOTE: The Wins.exe file may use a large amount of the CPU time.
	
	CAUSE
	=====
	
	This issue can occur if you are running a WINS Server with several replication
	partners.
	
	Under certain circumstances, a time interval within the WINS service could become
	zero (0).
	
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
	
	  Date      Time      Size    File name     Platform
	  --------------------------------------------------
	  10/13/99  11:27  349,968    wins.exe      Alpha
	  10/13/99  11:28  195,856    wins.exe      Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
