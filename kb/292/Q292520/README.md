---
layout: page
title: "Q292520: Conflicting Access Control List Entries Cause Error Message"
permalink: kb/292/Q292520/
---

## Q292520: Conflicting Access Control List Entries Cause Error Message

	Article: Q292520
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
	
	On a server that is running Windows NT 4.0 Service Pack 6 (SP6), you can add
	extended Microsoft Windows 2000 file permissions by using the Security
	Configuration Manager tool from the Service Pack 4 (SP4) CD-ROM.
	
	This procedure illustrates the problem:
	
	1. You are running Windows Explorer and viewing a folder's security properties.
	
	2. You add a test user to the list of permissions.
	
	3. For this user, you set a deny flag for writing.
	
	4. In a subfolder under that folder, you add the same user and set the Allow
	  Write flag.
	
	5. You select the Allow Inherited Permissions check box for the folder.
	
	6. You click OK.
	
	7. You try to open the Security dialog box again.
	
	8. You see this error message:
	
	  Unable to display security information
	
	On a Windows 2000-based server, the typical security screen is display as you
	expect for the same configuration. You can verify this by using Cacls.exe to
	view the access permissions from a command prompt.
	
	The Deny Access setting takes precedence over any other flags, so the Write
	Access flag has no effect. Any user with the conflicting flags set for the
	folder will cause the screen not to be displayed.
	
	CAUSE
	=====
	
	Windows checks to determine if both the allow and deny flags are set for the
	object being checked. If they are, error 1336 ("ERROR_INVALID_ACL") is generated
	and is returned from the function that sums the flags for an access
	determination. Any error from this function causes the screen not to be
	displayed.
	
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
	
	  Date      Time    Size     File name    Platform
	  ------------------------------------------------
	  04/20/01  04:12p   84,240  Ntmarta.dll  Intel
	  04/20/01  04:08p  140,048  Ntmarta.dll  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	Using Cacls.exe, clear the Allow Write flag on the folder. Avoid using deny
	flags if possible. This symptom also occurs if you set read deny for the
	Everyone group because Supervisor is part of the group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
