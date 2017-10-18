---
layout: page
title: "Q303437: Security Update MS00-024 Breaks SHGetFolderPath in Shfolder.dll"
permalink: kb/303/Q303437/
---

## Q303437: Security Update MS00-024 Breaks SHGetFolderPath in Shfolder.dll

	Article: Q303437
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbWinNT400PreSP7Fix kbIE550preSP2fix kbIE550SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the security update that is referred to in Q259496 (MS00-024),
	the SHGetFolderPath function in Shfolder.dll may not work correctly, and it may
	generate "access denied" error messages when it is called by an account that is
	not a member of the administrators group.
	
	CAUSE
	=====
	
	Because of changes that are made by the security patch, the SHGetFolderPath
	function does not work when it makes an Open/Write call to a key in the
	registry. Because the function was unable to access this key by using write
	access, an "access denied" error message is generated. When this happens, some
	third-party programs may stop working.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 or Microsoft Internet Explorer 5.5 or 6.0 service
	pack that contains this fix.
	
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
	
	  Date           Time    Version         Size    File name     Platform
	  ---------------------------------------------------------------------
	  July 11, 2001  02:42p  5.50.4719.1100  23,312  Shfolder.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	This problem has been resolved by changing the method in which the GetFolderPath
	function accesses the registry key so no "access denied" error message is
	generated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbWinNT400PreSP7Fix kbIE550preSP2fix kbIE550SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
