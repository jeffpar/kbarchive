---
layout: page
title: "Q237987: FTP GET Does Not Work Correctly on UNC Virtual Directories"
permalink: kb/237/Q237987/
---

## Q237987: FTP GET Does Not Work Correctly on UNC Virtual Directories

	Article: Q237987
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map a virtual directory to a UNC path and allow Anonymous Access, you
	may be able to PUT a file to the FTP site, but the GET command fails.
	
	
	CAUSE
	=====
	
	When handling a PUT, FTP uses the credentials configured in the virtual
	directory configuration dialog. The GET command uses the credentials of the
	logged on user. The result is that you can send and delete the file to or on the
	FTP server, but cannot get it back.
	
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
	
	  Version      Size    File name     Platform
	  --------------------------------------------
	  4.02.0718    81888   Ftpsvc2.dll   (x86)
	  4.02.0718   126736   Ftpsvc2.dll   (alpha)
	
	
	
	WORKAROUND
	==========
	
	On the UNC path that the virtual directory is mapped to, grant the correct
	permissions to the Windows NT account used for Anonymous Access.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server.
	
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch NT4SP6FIX
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
