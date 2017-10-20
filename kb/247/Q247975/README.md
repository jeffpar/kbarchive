---
layout: page
title: "Q247975: Strong Passwords May Contain Parts of the Full Name"
permalink: /kb/247/Q247975/
---

## Q247975: Strong Passwords May Contain Parts of the Full Name

{% raw %}

	Article: Q247975
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Service Pack 2 includes a new feature that forces users to use
	strong passwords. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q161990 How to Enable Strong Password Functionality in Windows NT
	
	The strong password policy states that the password may not contain your user
	name or any part of your full name; however, this does not hold true. For
	example, a user who is named "Userfirstname Userlastname" can successfully
	create the password "xxx*Userlastname123."
	
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
	
	  Date         Time     Size     File name      Platform
	  ------------------------------------------------------
	  12/06/1999   02:35p    7,952   Passfilt.dll   x86
	  12/06/1999   02:34p   13,072   Passfilt.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
