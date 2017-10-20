---
layout: page
title: "Q254306: Typing a Letter in a List Box May Not Jump to the Correct Entry"
permalink: /kb/254/Q254306/
---

## Q254306: Typing a Letter in a List Box May Not Jump to the Correct Entry

{% raw %}

	Article: Q254306
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are typing a user name in the Global Group Properties dialog box in
	User Manager for Domains, the list box is typically updated to show the closest
	name. For example, if you type "Y" (without the quotation marks), you jump to
	the first entry that starts with Y in the list. However, under certain
	circumstances, you jump to the end of the list instead.
	
	This problem is known to occur in the Global Group Properties dialog box in User
	Manager for Domains, but may also occur in any paired list boxes that are used
	for adding names from one list box to another.
	
	CAUSE
	=====
	
	Windows builds one list that contains all the names. Windows then tracks those
	names that are in one list box or the other. There are those that are already
	included in the collection (those that appear in the other list box), and those
	that are yet to be addded. When Windows iterates the list of items searching for
	a match, it calculates only the items in the current list box, instead of the
	combination. After Windows moves beyond the number of items in the current list
	box it returns "failure," which jumps you to the end of the list.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  03/28/2000  09:35p  305,936  Usrmgr.exe  Intel
	  03/28/2000  09:34p  459,024  Usrmgr.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
