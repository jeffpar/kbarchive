---
layout: page
title: "Q236881: Incorrect Old Password When Updating Multiple Passwords"
permalink: /kb/236/Q236881/
---

## Q236881: Incorrect Old Password When Updating Multiple Passwords

{% raw %}

	Article: Q236881
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbui win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to two or more network providers, after you successfully log on to
	the primary provider, your secondary provider may generate a message that says
	you need to change your password. Windows 95 prompts you with a Change Password
	dialog box, and then uses the old and new passwords that you provide to
	synchronize your updated password on all password providers. After your primary
	provider password is updated successfully, you may receive the following error
	message:
	
	  Your old password is incorrect. Try typing it again.
	
	Also, this problem may occur even if your old password is correct, and your
	secondary provider may have successfully updated your password. However, your
	logon to the secondary network provider may be disconnected without any notice
	or error message.
	
	CAUSE
	=====
	
	This problem can occur when password caching has been disabled, and the
	Mprserv.dll file has been updated to version 4.00.952-4.00.962.
	
	
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
	
	  Date      Time    Version      Size            File name 
	  ----------------------------------------------------------
	  03/23/99  7:20pm  4.0.0.963    126,976 bytes   Mprserv.dll
	
	
	
	
	To work around this problem, enable password caching. For information bout how to
	do so, please see the following articles in the Microsoft Knowledge Base :
	
	  Q137826 Disabling Password Caching and Changing Passwords
	
	  Q140709 How to Cache Your Windows NT Domain Password in Windows 95/98
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	The problem can occur regardless of which network provider is the primary
	provider. For example, this problem can occur if your primary logon provider is
	set to Novell, and your Microsoft Windows NT domain password has expired. This
	problem can also occur if your primary logon provider is a Windows NT domain,
	and your Novell password has expired. The third-party products discussed in this
	article are manufactured by vendors independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: login
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbui win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
