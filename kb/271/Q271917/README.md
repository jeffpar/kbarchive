---
layout: page
title: "Q271917: Read-Only File Appears to Be Deleted from NFS Share But Is Not"
permalink: kb/271/Q271917/
---

## Q271917: Read-Only File Appears to Be Deleted from NFS Share But Is Not

	Article: Q271917
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a read-only file from a mapped network file system (NFS)
	share by using Windows Explorer or from a command prompt, the file may appear to
	have been deleted. However, the file may reappear if you press F5 to refresh
	Windows Explorer, or if you use the dir command at a command prompt.
	
	CAUSE
	=====
	
	This problem can occur when a logic error generates an incorrect status report
	that indicates the file deletion was successful when it was not.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows Services for UNIX service pack that contains this fix.
	
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
	
	  Date        Time    Version       Size     File name     Platform
	  -----------------------------------------------------------------
	  10/13/2000  01:21a  5.2000.328.7  168,960  Nfsclnt.exe   Intel
	  10/13/2000  01:21a  5.2000.328.7  316,192  Nfsrdr.sys    Intel
	
	
	
	
	NOTE: This fix has been included in Q-article Q274427 and you need to reference
	the article to pull down the hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
