---
layout: page
title: "Q252190: WINS Resolution Disabled by Default Viewing Network Properties"
permalink: kb/252/Q252190/
---

## Q252190: WINS Resolution Disabled by Default Viewing Network Properties

	Article: Q252190
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbenv win98kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows Sockets 2.0 (Winsock2), the Disable WINS Resolution
	option is selected by default whenever you view the WINS Configuration tab for
	TCP/IP properties in Network properties. WINS resolution may be disabled even if
	you do not click the WINS Configuration tab.
	
	CAUSE
	=====
	
	The Disable WINS Resolution option is incorrectly selected in TCP/IP properties
	by default (instead of the current setting).
	
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
	
	  Date      Time    Version     Size    File name   Platform
	  ----------------------------------------------------------
	  04/17/00  03:56p  4.00.1113   31,872  Mstcp.dll   Winsock2
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, click the appropriate WINS resolution option
	before you quit the Network tool in Control Panel every time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: w95qfe
	
	======================================================================
	Keywords          : kbenv win98 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
