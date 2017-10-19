---
layout: page
title: "Q253382: Error Message: Unable to Display Security Information"
permalink: /kb/253/Q253382/
---

## Q253382: Error Message: Unable to Display Security Information

	Article: Q253382
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Security Configuration Manager (SCM) on a Windows NT 4.0-based
	server or workstation, you may not be able to use Windows NT Explorer on that
	computer to remotely administer file permissions on other Windows NT-based
	computers on the network.
	
	This problem most commonly occurs on computers that are running localized
	versions of Windows NT when you try to view permissions on computers running the
	English-language version of Windows NT. The problem may also occur when both
	computers are running the same language version of Windows NT.
	
	When you try to view file permissions on a remote computer over the network after
	installing SCM, you may receive the following error message:
	
	  Unable to display security information
	
	In the French-language version of Windows NT:
	
	  Impossible d'afficher les informations de securite
	
	In the German-language version of Windows NT:
	
	  Die Sicherheitseinstellungen konnen nicht angezeigt werden
	
	In a Network Monitor capture of network traffic from the computer with the
	problem, you may see the computer trying to resolve "BUILTIN" or "NT AUTHORITY"
	as NetBIOS names immediately before the error message is displayed.
	
	CAUSE
	=====
	
	Security Configuration Manager is included with Windows NT 4.0 Service Packs
	starting with Service Pack 4, and runs as a part of Explorer.exe to provide
	compatibility with Microsoft Windows 2000.
	
	The new version of SCM cannot handle information on domain BUILTIN and NT
	AUTHORITY accounts returned by remote computers in the domain.
	
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
	
	  Date      Time   Version        Size     File name     Platform
	  -------------------------------------------------------------
	  02/03/00  14:46  4.0.1381.7040  155,408  Lsasrv.dll   i386
	  11/28/00  21:21  4.0.1381.7086   84,240  Ntmarta.dll  i386
	  02/03/00  14:44  4.0.1381.7040  254,224  Lsasrv.dll   alpha
	  11/28/00  21:19  4.0.1381.7086  140,048  Ntmarta.dll  alpha
	
	
	
	WORKAROUND
	==========
	
	Disable SCM as described in the following article in the Microsoft Knowledge
	Base, or use File Manager for remote administration of file permissions on other
	Windows NT-based computers:
	
	  Q195509 Installing SCM from SP4 Changes Windows NT 4.0 ACL Editor
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: sce mssce mssce.exe
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
