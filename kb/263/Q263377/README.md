---
layout: page
title: "Q263377: Sitecomp.exe May Generate Access Violations After Site Install"
permalink: /kb/263/Q263377/
---

## Q263377: Sitecomp.exe May Generate Access Violations After Site Install

{% raw %}

	Article: Q263377
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install a Systems Management Server (SMS) 2.0 site, you may receive
	"Access violation" error messages that list Sitecomp.exe.
	
	CAUSE
	=====
	
	This behavior can occur if the Counter (REG_MULTI_SZ) value in he following
	registry key contains an empty (null) string, or is damaged:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Perflib\009
	
	The value may be similar to:
	
	  .
	  .
	  .
	  1858
	  Committed pages
	  1860
	  Procedure cache pages in use
	  1862
	
	  1864
	  Free buffers
	  1866
	  Lazy Writes
	  .
	  .
	.
	
	The error message occurs when Site Component Manager reads the unexpected string
	value. The damage may have been caused if you previously stopped an SMS
	installation before it was finished.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If the registry damage is not significant and the Counter value simply contains
	an empty string (as noted in the example), you can resolve the issue by changing
	the empty string to a non-empty string such as ABCDEFG.
	
	For example:
	
	  .
	  .
	  .
	  1858
	  Committed pages
	  1860
	  Procedure cache pages in use
	  1862
	  ABCDEFG
	  1864
	  Free buffers
	  1866
	  Lazy Writes
	  .
	  .
	.
	
	If the registry damage is significant, you may have to reinstall Microsoft
	Windows NT.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
