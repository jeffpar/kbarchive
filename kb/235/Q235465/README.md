---
layout: page
title: "Q235465: MMC Access Violation Connecting to Remote IIS Server with SMTP"
permalink: /kb/235/Q235465/
---

## Q235465: MMC Access Violation Connecting to Remote IIS Server with SMTP

{% raw %}

	Article: Q235465
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Management Console (MMC) may generate an "Access violation" error
	message when you are connecting to a remote computer that is running Microsoft
	Internet Information Server (IIS).
	
	CAUSE
	=====
	
	The "Access violation" error message occurs if the computer that is
	administering the remote server has Simple Mail Transport Protocol (SMTP)
	installed but the remote client does not.
	
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
	
	  Date        Time     Size      File name     Platform
	  -----------------------------------------------------
	  2/03/1999   01:38p   346,384   Smtpadm.dll   i386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: mcis
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search
	Version           : winnt:2.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
