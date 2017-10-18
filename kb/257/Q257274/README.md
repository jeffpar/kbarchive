---
layout: page
title: "Q257274: License Server Components Are Not Updated in Intl. Versions"
permalink: kb/257/Q257274/
---

## Q257274: License Server Components Are Not Updated in Intl. Versions

	Article: Q257274
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a Windows NT 4.0 Service Pack to an international version of
	Windows NT, the following files are not updated. The file date is still from
	1996:
	
	  Liccpa.cpl
	  Llsrpc.dll
	  Llssrv.exe
	  Ntlsapi.dll
	
	CAUSE
	=====
	
	The Service Pack Installer (Update.exe) does not recognize these files correctly
	and therefore does not update them.
	
	
	WORKAROUND
	==========
	
	You can manually copy the four files listed above from a Service Pack
	distribution to the System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about extracting service pack files, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q194422 How to Extract Service Pack 3 Files
	
	You can apply these instructions to later service packs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
