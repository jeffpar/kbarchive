---
layout: page
title: "Q281772: Simple Maps Are Not Mapped Correctly for User Group Mappings"
permalink: /kb/281/Q281772/
---

## Q281772: Simple Maps Are Not Mapped Correctly for User Group Mappings

	Article: Q281772
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Services for Unix Administration utility has an option to configure the User
	Name Mapping service. On the MAPS tab, you can enable the display of simple maps
	for users or groups. If you select Groups, the simple maps are displayed.
	However, if you create an advanced mapping for a group, the simple group maps
	are no longer displayed. Even though the Service for Unix Administration tool in
	the graphical user interface did not show the simple group maps, the
	Mapadmin.exe command-line utility still displays the simple maps.
	
	CAUSE
	=====
	
	This problem occurs because a logic error removes the simple maps if an advanced
	map exists.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
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
	
	  Date        Time        Size    File name     Platform
	  ------------------------------------------------------
	  10/07/2000  10:40a      21,635  Mapmnty.js    i386
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Mapadmin.exe command-line utility to
	display the group maps.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinServiceUNIX100 kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :1.0,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
