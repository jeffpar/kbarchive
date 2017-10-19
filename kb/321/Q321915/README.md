---
layout: page
title: "Q321915: &quot;Incompatible Version of the RPC Stub&quot; Error with InstallShield"
permalink: /kb/321/Q321915/
---

## Q321915: &quot;Incompatible Version of the RPC Stub&quot; Error with InstallShield

	Article: Q321915
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbsetup
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a program that uses the InstallShield program, you may receive
	the following error message:
	
	  Unhandled Exception
	
	  Error: 0x80070725
	  Description: Incompatible version of the RPC stub.
	
	  Setup will now terminate.
	
	CAUSE
	=====
	
	This issue may be caused by any program that installs different versions of the
	Oleaut32.dll, Olepro32.dll, Asycfilt.dll and Stdole2.tlb files (and possibly
	others). This may create a mixed file version environment with files that are
	not compatible with each other.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Microsoft Office 2000 or an Office 2000 Component Is Installed on Your Computer
	-------------------------------------------------------------------------------
	
	If Office 2000 or or an Office 2000 component is installed on your computer,
	obtain and install the Office 2000 Service Release 1 (SR-1). For information
	about how to do so, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/office/previous/default.htm
	
	Microsoft Office 2000 or an Office 2000 Component Is Not Installed on Your Computer
	-----------------------------------------------------------------------------------
	
	If Office 2000 or or an Office 2000 component is not installed on your computer,
	obtain and install the Mcrepair.exe tool. To do so, please visit the following
	Microsoft Web site, save the Mcrepair.exe file to the desktop, and then run
	Mcrepair.exe:
	
	  http://download.microsoft.com/download/msninvestor/patch/1.0/win98/en-us/mcrepair.exe
	
	Restart your computer after you install Mcrepair.exe.
	
	MORE INFORMATION
	================
	
	Office 2000 SR-1 and the Mcrepair.exe tool both update and re-register the
	following files with the following file versions:
	
	- Asycfilt.dll (2.40.4515)
	
	- Oleaut32.dll (2.40.4515)
	
	- Stdole2.tlb (2.40.4515
	
	- Olepro32.dll (5.0.4515)
	
	For additional information about the Mcrepair.exe tool, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q259737 INV: Invalid Page Fault in OLEAUT32 When You Quit Microsoft Internet
	  Explorer
	
	For additional information about the error message that is listed in the
	"Symptoms" section of this article, please view Q105810 in the InstallShield
	Knowledge Base:
	
	  http://support.installshield.com/kb/view.asp?articleid=Q105810
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Acknowledgment: InstallShield contributed to this Microsoft Knowledge Base
	article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2 kbWinNTW400SP6a
	Version           : :2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
