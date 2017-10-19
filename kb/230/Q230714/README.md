---
layout: page
title: "Q230714: Y2K: Internet Explorer and Windows NT 4.0 Compliance Issues"
permalink: /kb/230/Q230714/
---

## Q230714: Y2K: Internet Explorer and Windows NT 4.0 Compliance Issues

	Article: Q230714
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbIE kbOSWinNT400
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When users load the Windows NT Server 4.0 operating system on a computer, they
	are asked to select from many installation options. In addition to the
	selectable options offered during installation of the Windows NT Server 4.0
	operating system, there are additional features of the Windows NT Server 4.0
	product that may be installed on the target computer. These features have been
	made available by Microsoft through service packs, the Windows NT Option Pack
	and the Windows NT Server Web site.
	
	MORE INFORMATION
	================
	
	Because users may have selected a variety of options and installed additional
	features on a given system, all options and features must be considered when
	assessing the computer's Year 2000 readiness status. For an installation of
	Windows NT 4.0 to reach "Y2K compliant" status, Microsoft has created:
	
	- Service Pack 5 (SP5) to help users address all the known Year 2000 compliance
	  issues with their installations of Windows NT Server in a simple and
	  automated fashion.
	
	- Service Pack 4 (SP4), which addresses most known Year 2000 issues. However,
	  users must update or upgrade certain features to newer versions, in addition
	  to applying SP4. The Windows NT Server 4.0 features that must be updated or
	  upgraded in addition to applying SP4, along with specific update/upgrade
	  instructions:
	
	   - Microsoft Data Access Components (MDAC), multiple versions.
	
	   - Microsoft Internet Explorer, multiple versions.
	
	
	The Windows NT Server 4.0 optional features that must be updated or upgraded only
	if previous versions exist on the computer are:
	
	- Active Directory Services Interface, version 1.0
	
	- Microsoft FrontPage 97
	
	- Microsoft FrontPage 97 Server Extensions
	
	- Microsoft Internet Locator Service, version 1.0
	
	- Site Server Express, version 2.0
	
	- Microsoft Transaction Server, version 1.0
	
	- Microsoft Transaction Server, version 1.1
	
	The installation of SP4 applies updates to the base Windows NT Server 4.0 product
	including the installation options. Applying SP4 also updates certain Windows NT
	Server 4.0 features. Users should also apply any Windows NT Year 2000 (Y2K)
	Updates that have been made available post-SP4.
	
	The current post-SP4 Y2K update can be obtained from:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/nt4y2kpostsp4/default.asp
	
	For more information discussing the known Year 2000 issues that are addressed by
	the current post-SP4 update, please see the following Microsoft Knowledge Base
	article:
	
	  Q218877 Mfc40.dll Causes Programs to Display Wrong Date After 01/01/2000
	
	Note that these updates and upgrades can be performed either before or after
	applying SP4.
	
	Additional query words: Y2K; IE4.0 ;
	
	======================================================================
	Keywords          : kbIE kbOSWinNT400 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
