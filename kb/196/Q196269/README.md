---
layout: page
title: "Q196269: When to Reinstall a Service Pack"
permalink: kb/196/Q196269/
---

## Q196269: When to Reinstall a Service Pack

	Article: Q196269
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After initial installation of a service pack for Windows NT, there are times the
	service pack may need to be reinstalled. This article describes those scenarios.
	
	MORE INFORMATION
	================
	
	The simple rule is this: Any operation that causes system files older than the
	service pack to be installed (for example, any time you are prompted to install
	files from the original Windows NT Server CD) should then be followed by
	reinstalling the service pack.
	
	This includes the following:
	
	1. Adding any components that install files from the original Windows NT CD.
	
	2. Performing an emergency repair operation that causes files to be restored
	  that are older than the current service pack files.
	
	3. Restoring from a tape backup that was created before the time the current
	  service pack was installed
	
	4. Installation of applications that may install older components.
	
	NOTE:
	
	If you have made any changes that replaced files with older versions as listed
	above, when asked to restart the computer click "No" until you have reinstalled
	the service pack, applied any post service pack hotfixes, and applied the latest
	SSD if on Compaq computer with the Compaq SSD loaded. This will keep the number
	of times you restart to a minimum and lessen the chance of a blue screen error
	message when restarting.
	
	In the case of Small Business Server or Windows Terminal Server, these rules
	apply only for Service Pack 4 and later. Do not reapply Service Pack 3 as it is
	slip-streamed into the initial build of Small Business Server and Windows
	Terminal Server.
	
	Service Pack updates also affect installations of Windows NT Option Pack. When
	Windows NT Option Pack, or components, are reinstalled, the latest service pack
	should also be reapplied.
	
	Additional query words: service packs smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:3.51,4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	
