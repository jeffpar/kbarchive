---
layout: page
title: "Q257286: Changing Password Over RAS May Not Work"
permalink: /kb/257/Q257286/
---

## Q257286: Changing Password Over RAS May Not Work

{% raw %}

	Article: Q257286
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Windows NT with cached credentials and then attempt to make a
	Remote Access Services (RAS) or virtual private network (VPN) connection to
	another Windows NT domain on which your domain password has expired (you must
	change the password), you may be unable to change the password. If you cannot
	change the password, you are not authenticated and you are disconnected from the
	server. Error 709 may be logged when the password change attempt does not
	succeed.
	
	Note that if you are not required to change the password, changes to the password
	are successful.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time      Size     File name   Platform
	  -------------------------------------------------
	  3/9/2000  10:00PM   341 KB   Rasdlg.dll  Intel
	  3/9/2000  9:59 PM   501 KB   Rasdlg.dll  Alpha
	 
	
	
	
	NOTE: The Hotfix should be installed on the RAS client.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
