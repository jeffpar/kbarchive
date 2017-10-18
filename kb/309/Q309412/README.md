---
layout: page
title: "Q309412: Services for UNIX 2.0 Redirector Not Working After Upgrade to XP"
permalink: kb/309/Q309412/
---

## Q309412: Services for UNIX 2.0 Redirector Not Working After Upgrade to XP

	Article: Q309412
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv w2000sfu
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0, used with:
	   - Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade to Windows XP, the Windows Services for Unix 2.0 redirector may
	not work and you may receive a message that indicates that the Windows Services
	for UNIX client redirector is disabled because of problems.
	
	CAUSE
	=====
	
	When Windows Services for Unix 2.0 was released, it was supported on both
	Windows NT 4.0 and Windows 2000-based computers. This problem occurs because
	changes that are made in Windows XP require strict driver checking which causes
	problems in the Windows Services for UNIX redirector.
	
	
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
	
	  Date         Time   Version        Size     File name     
	  -------------------------------------------------------
	  12-Nov-2001  16:19  5.2000.328.21  168,960  Nfsclnt.exe
	  12-Nov-2001  16:19  5.2000.328.21  318,048  Nfsrdr.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you install Windows Services for Unix 2.0 on a Windows XP-based computer, you
	may continue to receive the problem that is mentioned in the Symptoms section of
	this article. After you install certain Windows Services for Unix 2.0
	components, you must restart the computer. When you restart the computer, a
	bugcheck may be encountered. To avoid this, disable the Client for NFS service,
	restart the computer, and then apply the hotfix from this article.
	
	
	Additional query words: sfu
	
	======================================================================
	Keywords          : kbenv w2000sfu 
	Technology        : kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
