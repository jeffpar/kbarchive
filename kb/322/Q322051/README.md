---
layout: page
title: "Q322051: Programs May Not Connect to Server with Mismatched Security DLLs"
permalink: /kb/322/Q322051/
---

## Q322051: Programs May Not Connect to Server with Mismatched Security DLLs

	Article: Q322051
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft Windows 2000 Security Rollup Package (SRP) or
	you use NTLM version 2 to connect to a Windows NT 4.0-based server with the SRP
	installed, your programs may not connect to the server.
	
	CAUSE
	=====
	
	Installing the SRP on Windows NT 4.0 with the 56-bit version of Service Pack 6a
	(SP6a) and Microsoft Internet Explorer 6 can cause the following mismatched
	dynamic-link libraries (DLLs) to be installed:
	
	  Schannel.dll
	  Ntlmssps.dll
	
	This causes the Windows NT 4.0-based server to negotiate a 128-bit connection.
	However, the 56-bit security DLLs cannot decrypt the packets. The Windows 2000
	SRP forces NTLM version 2 connections with the Windows NT 4.0-based server.
	
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
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Size    File name     Platform
	  --------------------------------------------------------
	  16-Jul-2001  12:05  36,112  Ntlmssps.dll  I386 - 128-bit
	  23-Sep-1999  11:04  59,152  Security.dll  I386 - 128-bit
	  16-Jul-2001  12:05  36,112  Ntlmssps.dll  I386 - 56-bit
	  18-Nov-1999  12:04  59,152  Security.dll  I386 - 56-bit
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, install the hotfix that is mentioned in the
	"Resolution" section. This upgrades the computer to 128-bit security.
	
	If you must use the 56-bit versions of the DLLs in Windows NT 4.0, you can
	manually replace the Schannel.dll and Ntlmssps.dll files with the 56-bit
	versions from the SRP:
	
	1. Extract the files from the SRP. Use this command "q299444i -x".
	
	2. Rename the current Schannel.dll and Ntlmssps.dll files in the
	  %SystemRoot%\System32 folder.
	
	3. Copy the SRP versions of the Schannel.dll and Ntlmssps.dll files to the
	  %SystemRoot%\System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem may occur with Microsoft Exchange 5.5 administrative programs
	connecting to Exchange 5.5-based servers. This causes the following error
	message:
	
	  DS_E_COMMUNICATION_PROBLEMS
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
