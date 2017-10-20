---
layout: page
title: "Q312284: A Direct RAS Connection on a Serial Cable Always Uses 1 Stop Bit"
permalink: /kb/312/Q312284/
---

## Q312284: A Direct RAS Connection on a Serial Cable Always Uses 1 Stop Bit

{% raw %}

	Article: Q312284
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400nospFix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A direct Remote Access Service (RAS) connection over a null-modem serial cable
	may not connect if one of the devices is not running Windows NT 4.0, and if the
	connection is not set to use one stop bit.
	
	CAUSE
	=====
	
	RAS Manager is designed to use one stop bit for direct cable connections, no
	matter what settings you configure.
	
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
	
	  Date         Time   Version        Size     File name     Platform
	  ------------------------------------------------------------------
	  24-Sep-1999  03:54  4.0.1381.7001  198,416  Rasapi32.dll  Alpha
	  24-Sep-1999  03:54  4.0.1381.7001   71,440  Rastapi.dll   Alpha
	  24-Sep-1999  03:55  4.0.1381.7001  127,760  Rasapi32.dll  i386
	  24-Sep-1999  03:55  4.0.1381.7001   35,600  Rastapi.dll   i386
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, configure both computers on the direct RAS
	connection to use one stop bit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
