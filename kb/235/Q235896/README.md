---
layout: page
title: "Q235896: Files That Are Not Removed When You Uninstall Service Pack 5"
permalink: /kb/235/Q235896/
---

## Q235896: Files That Are Not Removed When You Uninstall Service Pack 5

{% raw %}

	Article: Q235896
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you uninstall Microsoft Windows NT 4.0 Service Pack 5 (SP5), some files
	intentionally are not removed or reverted back to the version previous to SP5.
	
	MORE INFORMATION
	================
	
	Most of the files are not removed because changes made to the Security Accounts
	Manager (SAM) and the security registry hives that are not backed out require
	the SP5 version of the files. You must not remove the files after SP5 is applied
	unless you fully restore your computer to its previous installation of Windows
	NT 4.0.
	
	The following list shows the files that are not removed after you uninstall SP5:
	
	- Certmgr.msc
	
	- Comcat.dll
	
	- Comctl32.dll
	
	- Crypt32.dll
	
	- Cryptdlg.dll
	
	- Cryptext.dll
	
	- Cryptnet.dll
	
	- Cryptui.dll
	
	- Dssbase.dll
	
	- Dsssig.exe
	
	- Initpki.dll
	
	- Lsasrv.dll
	
	- Mscat32.dll
	
	- Msoss.dll
	
	- Mssign32.dll
	
	- Mssip32.dll
	
	- Msv1_0.dll
	
	- Odbccp32.cpl
	
	- Odbccp32.dll
	
	- Odbcint.dll
	
	- Psbase.dll
	
	- Pstorec.dll
	
	- Pstorerc.dll
	
	- Pstores.exe
	
	- Regsvr32.exe
	
	- Rsabase.dll
	
	- Rsaenh.dll
	
	- Rsasig.dll
	
	- Samlib.dll
	
	- Samsrv.dll
	
	- Schannel.dll
	
	- Secauth.hlp
	
	- Services.exe
	
	- Shfolder.dll
	
	- Softpub.dll
	
	- Syskey.exe
	
	- Winlogon.exe
	
	- Wintrust.dll
	
	- Wldap32.dll
	
	- Xenroll.dll
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
