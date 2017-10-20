---
layout: page
title: "Q216836: GP Fault When Creating or Manipulating Many Windows"
permalink: /kb/216/Q216836/
---

## Q216836: GP Fault When Creating or Manipulating Many Windows

{% raw %}

	Article: Q216836
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When many windows are being created or manipulated, a general protection (GP)
	fault may occur in User.exe. In rare circumstances, the computer may seem to
	stop responding (hang).
	
	CAUSE
	=====
	
	A problem with an internal function in User.exe may cause a pointer to be
	calculated incorrectly. Under stress, this pointer may cause corruption to the
	user heap, which eventually leads to the GP fault when calls are made to
	GetWindowLong() or SetWindowLong().
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next update that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	  Date      Time      Version   Size    File name  Locale
	  -----------------------------------------------------------------
	  07/24/98   8:26pm   4.00.952  462,528 User.exe   English
	  01/06/99  12:45am   4.00.952  463,359 User.exe   French (Standard)
	  01/27/99   2:28am   4.00.952  463,351 User.exe   German
	  01/28/99   7:25am   4.00.952  463,215 User.exe   Spanish
	  01/28/99   7:10am   4.00.952  463,015 User.exe   Italian
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This issue is resolved in Microsoft Windows 98.
	
	
	Additional query words: ipf
	
	======================================================================
	Keywords          : osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
