---
layout: page
title: "Q248113: Files That Are Not Removed When You Uninstall SP6 or SP6a"
permalink: /kb/248/Q248113/
---

## Q248113: Files That Are Not Removed When You Uninstall SP6 or SP6a

{% raw %}

	Article: Q248113
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you uninstall Microsoft Windows NT 4.0 Service Pack 6 (SP6) or Service Pack
	6a (SP6a), some files are intentionally not removed or reverted back to the
	version prior to SP6 or SP6a.
	
	MORE INFORMATION
	================
	
	Most of the files are not removed because changes that are made to Security
	Accounts Manager (SAM) and the security registry hives that are not removed
	require the SP6 or SP6a version of the files. You must not remove the files
	after SP6 or SP6a is applied unless you fully restore your computer to its
	previous installation of Windows NT 4.0.
	
	The following files are not removed after you uninstall SP6 or SP6a:
	
	  Certmgr.msc
	  Comcat.dll
	  Comctl32.dll
	  Crypt32.dll
	  Cryptdlg.dll
	  Cryptext.dll
	  Cryptnet.dll
	  Cryptui.dll
	  Dssbase.dll
	  Dsssig.exe
	  Enhsig.dll
	  Initpki.dll
	  Lsasrv.dll
	  Mscat32.dll
	  Msoss.dll
	  Mssign32.dll
	  Mssip32.dll
	  Msv1_0.dll
	  Odbccp32.cpl
	  Odbccp32.dll
	  Odbcint.dll
	  Pcomdrv.sys
	  Psbase.dll
	  Pstorec.dll
	  Pstorerc.dll
	  Pstores.exe
	  Regsvr32.exe
	  Rsabase.dll
	  Rsaenh.dll
	  Rsasig.dll
	  Samlib.dll
	  Samsrv.dll
	  Schannel.dll
	  Secauth.hlp
	  Services.exe
	  Shfolder.dll
	  Softpub.dll
	  Spmsg.dll
	  Syskey.exe
	  Winlogon.exe
	  Wintrust.dll
	  Wldap32.dll
	  Xenroll.dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP6,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
