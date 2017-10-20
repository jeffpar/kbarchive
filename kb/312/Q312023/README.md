---
layout: page
title: "Q312023: UuidCreateSequential() Is Not Exported in Rpcrt4.dll from SP6a"
permalink: /kb/312/Q312023/
---

## Q312023: UuidCreateSequential() Is Not Exported in Rpcrt4.dll from SP6a

{% raw %}

	Article: Q312023
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFixkbbuglist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that rely on the UuidCreateSequential Remote Procedure Call (RPC)
	function may not work, and you may receive an error message that is similar to:
	
	  <Programname.exe> - Entry Point Not Found
	
	  The procedure entry point UuidCreateSequential could not be located in the
	  dynamic link library Rpct4.lib.
	
	CAUSE
	=====
	
	The Rpcrt4.dll (version 4.0.1381.7097) component that is included with Windows
	NT 4.0 Service Pack 6a (SP6a) contains modified UuidCreate functionality to
	match that of Microsoft Windows 2000, but does not export UuidCreateSequential.
	
	The UuidCreate function was modified for security reasons so that it no longer
	uses the Media Access Control (MAC) address of the installed Ethernet adapter to
	generate Universally Unique Identifiers (UUIDs). UuidCreateSequential was
	introduced to allow the creation of UUIDs by using the MAC address of the
	installed Ethernet adapter.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name   Platform
	  ----------------------------------------------------------------
	  13-Nov-2001  11:32  4.0.1381.7108  345,872  Rpcrt4.dll  i386
	  13-Nov-2001  11:27  4.0.1381.7108  607,504  Rpcrt4.dll  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
