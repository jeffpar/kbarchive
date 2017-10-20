---
layout: page
title: "Q160506: Files Modified by VC42b Patch - Part 4 of 4"
permalink: /kb/160/Q160506/
---

## Q160506: Files Modified by VC42b Patch - Part 4 of 4

{% raw %}

	Article: Q160506
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbenv kbfile kbother kbnokeyword kbDAOsearch kbDatabase kbGenInfo kbMFC kbODBC kbVC kbH
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ 4.2 patch is a technology update that updates the Visual C++ 4.2
	retail installation to work with the final release of the Win32 and ActiveX
	SDKs. In addition, AppWizard, ClassWizard, and BSCMAKE.EXE have been updated.
	There are four self-extracting files available for this patch. These files
	contain different combinations of the patch. You should download the proper
	self-extracting files that best suit your needs.
	
	For more information on how to download the patch, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q156934 PATCH: Visual C++ 4.2b Patch
	
	This article is broken into four parts with different article numbers. Please see
	the REFERENCES section at the end of this article for information on the
	additional parts.
	
	This is part 4 of 4.
	
	MORE INFORMATION
	================
	
	Below is a list of files with file size, date, time stamps, and version numbers
	(as proper) before and after the patch is applied. This list is based on the
	comprehensive patch extracted from file vc42b.exe.
	
	Files that are modified by other combinations of the patch are also listed below
	without the file information. You should be able to find the file information
	from the ones listed for the comprehensive patch.
	
	VC42B.EXE Patch
	---------------
	
	2. Files patched by vc42b.rtp in the \msdev directory (continued from
	  Part 3):
	
	- include\winerror.h
	  (Before)  Size: 198,267  Date: 5/30/96  Time:  1:58a
	  (After)         203,050         9/6/96        10:57a
	
	- include\wingdi.h
	  (Before)  Size: 147,365  Date:  5/6/96  Time:  2:14a
	  (After)         147,629         9/6/96        10:58a
	
	- include\wininet.h
	  (Before)  Size: 74,233  Date: 5/24/96  Time: 10:15a
	  (After)         78,840         9/6/96        10:58a
	
	- lib\wininet.lib
	  (Before)  Size: 108,394  Date: 5/28/96  Time:  8:58a
	  (After)         112,308         9/6/96        10:59a
	
	- include\winioctl.h
	  (Before)  Size: 28,535  Date:  4/8/96  Time: 12:44p
	  (After)         30,511         9/6/96        10:58a
	
	- lib\winmm.lib
	  (Before)  Size: 183,086  Date:  5/6/96  Time:  2:14a
	  (After)         183,086         9/6/96        10:59a
	
	- include\winnetwk.h
	  (Before)  Size: 22,695  Date:  5/6/96  Time:  2:14a
	  (After)         22,739         9/6/96        10:58a
	
	- include\winnls.h
	  (Before)  Size: 39,325  Date: 3/29/96  Time: 10:03p
	  (After)         39,651         9/6/96        10:58a
	
	- include\winnls32.h
	  (Before)  Size: 3,002  Date: 2/14/96  Time: 12:29p
	  (After)         2,972         9/6/96        10:58a
	
	- include\winnt.h
	  (Before)  Size: 179,577  Date:  5/6/96  Time:  2:14a
	  (After)         179,078         9/6/96        10:58a
	
	- include\winperf.h
	  (Before)  Size: 28,283  Date:  1/7/96  Time:  7:31p
	  (After)         28,279         9/6/96        10:58a
	
	- include\winresrc.h
	  (Before)  This is a newly added file.
	  (After)   Size: 53,424  Date:  9/6/96  Time: 10:58a
	
	- include\winsock2.h
	  (Before)  Size: 95,748  Date:  5/6/96  Time:  2:14a
	  (After)         93,959         9/6/96        10:58a
	
	- include\winspool.h
	  (Before)  Size: 51,513  Date: 3/29/96  Time: 10:02p
	  (After)         52,635         9/6/96        10:58a
	
	- lib\winspool.lib
	  (Before)  Size: 127,016  Date:  5/6/96  Time:  2:14a
	  (After)         131,748         9/6/96        10:59a
	
	- lib\winstrm.lib
	  (Before)  Size: 7,774  Date:  5/6/96  Time:  2:14a
	  (After)         7,774         9/6/96        10:59a
	
	- include\wintrust.h
	  (Before)  This is a newly added file.
	  (After)   Size: 11,053  Date:  9/6/96  Time: 10:58a
	
	- lib\wintrust.lib
	  (Before)  Size: 2,058  Date: 2/27/96  Time:  5:02p
	  (After)         4,550         9/6/96        10:59a
	
	- include\winuser.h
	  (Before)  Size: 189,481  Date:  5/6/96  Time:  2:14a
	  (After)         192,575         9/6/96        10:58a
	
	- include\wownt16.h
	  (Before)  Size: 4,374  Date:  1/7/96  Time:  7:31p
	  (After)         4,380         9/6/96        10:58a
	
	- include\wpapi.h
	  (Before)  Size: 2,587  Date:  5/2/96  Time:  5:52p
	  (After)         2,730         9/6/96        10:58a
	
	- include\wpobj.h
	  (Before)  Size: 1,713  Date: 4/16/96  Time:  1:25p
	  (After)         1,778         9/6/96        10:58a
	
	- include\wpspi.h
	  (Before)  Size: 8,365  Date:  5/2/96  Time:  5:53p
	  (After)         8,411         9/6/96        10:58a
	
	- lib\ws2_32.lib
	  (Before)  Size: 94,826  Date:  5/6/96  Time:  2:14a
	  (After)         93,208         9/6/96        10:59a
	
	- include\ws2atm.h
	  (Before)  This is a newly added file.
	  (After)   Size: 16,643  Date:  9/6/96  Time: 10:58a
	
	- include\ws2spi.h
	  (Before)  Size: 17,490  Date:  5/6/96  Time:  2:14a
	  (After)         18,485         9/6/96        10:58a
	
	- include\ws2tcpip.h
	  (Before)  This is a newly added file.
	  (After)   Size: 2,611  Date:  9/6/96  Time: 10:58a
	
	- include\wshisotp.h
	  (Before)  Size: 3,356  Date:  1/7/96  Time:  7:31p
	  (After)         3,355         9/6/96        10:58a
	
	- include\wsipx.h
	  (Before)  Size: 1,943  Date: 1/7/96  Time:  7:31p
	  (After)         1,941        9/6/96        10:58a
	
	- include\wsnwlink.h
	  (Before)  Size: 9,317  Date: 1/7/96  Time:  7:31p
	  (After)         9,315        9/6/96        10:58a
	
	- lib\wsock32.lib
	  (Before)  Size: 77,258  Date: 5/6/96  Time:  2:14a
	  (After)         61,422        9/6/96        10:59a
	
	- lib\wst.lib
	  (Before)  Size: 2,496  Date: 5/6/96  Time:  2:14a
	  (After)         2,496        9/6/96        10:59a
	
	- include\wtypes.h
	  (Before)  Size: 28,449  Date: 5/23/96  Time:  5:42p
	  (After)         29,754         9/6/96        10:58a
	
	- include\wtypes.idl
	  (Before)  Size: 35,047  Date: 3/13/96  Time:  2:48p
	  (After)         38,273         9/6/96        10:58a
	
	- mfc\include\afxcom_.h
	  (Before)  Size: 13,082  Date:  6/6/96  Time: 12:52p
	  (After)         13,121        9/12/96         1:00a
	
	- mfc\include\afxctl.h
	  (Before)  Size: 59,606  Date: 6/11/96  Time:  3:54p
	  (After)         59,321        9/12/96         1:00a
	
	- mfc\include\afxdisp.h
	  (Before)  Size: 48,910  Date: 6/10/96  Time: 12:55p
	  (After)         49,958        9/12/96         1:00a
	
	- mfc\include\afxdocob.h
	  (Before)  Size: 10,668  Date: 6/13/96  Time:  6:59p
	  (After)         10,671        9/12/96         1:00a
	
	- mfc\include\afxinet.h
	  (Before)  Size: 18,937  Date: 6/11/96  Time:  6:12p
	  (After)         19,632        9/12/96         1:00a
	
	- mfc\include\afxisapi.h
	  (Before)  Size: 18,119  Date:  6/3/96  Time:  1:46p
	  (After)         18,206        9/12/96         1:00a
	
	- mfc\include\afxmsg_.h
	  (Before)  Size: 33,434  Date:  6/3/96  Time:  1:46p
	  (After)         33,440        9/12/96         1:00a
	
	- mfc\include\afxole.h
	  (Before)  Size: 66,654  Date: 6/12/96  Time:  3:22p
	  (After)         66,855        9/12/96         1:00a
	
	- mfc\include\afxtempl.h
	  (Before)  Size: 44,667  Date:  6/3/96  Time:  1:46p
	  (After)         44,669        9/12/96         1:00a
	
	- mfc\include\afxwin.h
	  (Before)  Size: 151,029  Date:  6/3/96  Time:  1:46p
	  (After)         151,232        9/12/96         1:00a
	
	- mfc\src\appui2.cpp
	  (Before)  Size: 6,983  Date:  6/3/96  Time:  1:59p
	  (After)         6,921        9/12/96         1:07a
	
	- mfc\src\barstat.cpp
	  (Before)  Size: 19,075  Date: 10/9/95  Time:  1:28p
	  (After)         19,078        9/12/96         1:07a
	
	- bin\bscmake.exe
	  (Before)  Size: 81,408  Date:  2/7/96  Time:  10:37p
	  (After)         81,408        8/30/96          3:43a
	
	- mfc\src\ctlconn.cpp
	  (Before)  Size: 6,678  Date: 10/23/96  Time: 12:44p
	  (After)         6,678        9/12/96          1:07a
	
	- mfc\src\ctlcore.cpp
	  (Before)  Size: 51,690  Date:  6/3/96  Time:  2:00p
	  (After)         51,698        9/12/96         1:07a
	
	- mfc\src\ctldata.cpp
	  (Before)  Size: 11,304  Date:  6/3/96  Time:  2:00p
	  (After)         11,342        9/12/96         1:07a
	
	- mfc\src\ctlevent.cpp
	  (Before)  Size: 16,543  Date:  6/3/96  Time:  2:00p
	  (After)         16,543        9/12/96         1:07a
	
	- mfc\src\ctlfont.cpp
	  (Before)  Size: 6,067  Date: 10/24/95  Time:  4:53p
	  (After)         6,050         9/12/96         1:07a
	
	- mfc\src\ctlinplc.cpp
	  (Before)  Size: 15,857  Date: 6/11/96  Time: 11:12p
	  (After)         15,859        9/12/96         1:07a
	
	- mfc\src\ctlobj.cpp
	  (Before)  Size: 10,581  Date:  6/3/96  Time:  2:00p
	  (After)         10,696        9/12/96         1:07a
	
	- mfc\src\ctlpict.cpp
	  (Before)  Size: 4,710  Date: 10/9/95  Time:  1:27p
	  (After)         4,726        9/12/96         1:07a
	
	- mfc\src\ctlprop.cpp
	  (Before)  Size: 37,494  Date:  6/4/96  Time:  1:44p
	  (After)         37,298        9/12/96         1:07a
	
	- mfc\src\ctlpropx.cpp
	  (Before)  Size: 29,882  Date: 6/12/96  Time:  3:17p
	  (After)         29,831        9/12/96         1:07a
	
	- mfc\src\ctlpset.cpp
	  (Before)  Size: 24,669  Date:  3/1/96  Time: 11:23a
	  (After)         24,683        9/12/96         1:07a
	
	- mfc\src\ctlquick.cpp
	  (Before)  Size: 4,011  Date: 6/11/96  Time: 10:42a
	  (After)         4,189        9/12/96         1:07a
	
	- mfc\src\daocore.cpp
	  (Before)  Size: 131,376  Date: 5/31/96  Time:  9:26a
	  (After)         131,389        9/12/96         1:07a
	
	- mfc\src\dlgfnt.cpp
	  (Before)  Size: 6,936  Date: 4/23/96  Time:  7:23p
	  (After)         6,971        9/12/96         1:07a
	
	- mfc\src\dlgprop.cpp
	  (Before)  Size: 31,330  Date:  6/8/96  Time:  1:17p
	  (After)         31,179        9/12/96         1:07a
	
	- mfc\src\dllmodul.cpp
	  (Before)  Size: 6,427  Date: 5/14/96  Time:  2:36p
	  (After)         6,431        9/12/96         1:07a
	
	- mfc\lib\eafxis.lib
	  (Before)  Size: 112,610  Date: 6/18/96  Time:  6:46p
	  (After)         113,094        9/12/96         1:54a
	
	- mfc\lib\eafxisd.lib
	  (Before)  Size: 110,912  Date: 6/18/96  Time:  6:45p
	  (After)         111,338        9/12/96         1:54a
	
	- mfc\lib\eafxisd.pdb
	  (Before)  Size: 372,736  Date: 6/18/96  Time:  6:45p
	  (After)         380,928        9/12/96         1:54a
	
	- mfc\src\except.cpp
	  (Before)  Size: 8,733  Date: 5/14/96  Time: 11:34p
	  (After)         8,733        9/12/96         1:07a
	
	- mfc\src\filefind.cpp
	  (Before)  Size: 7,698  Date: 6/3/96  Time:  2:01p
	  (After)         7,692        9/12/96        1:07a
	
	- mfc\src\filemem.cpp
	  (Before)  Size: 8,155  Date: 10/9/95  Time:  1:29p
	  (After)         8,224        9/12/96         1:07a
	
	- mfc\src\inet.cpp
	  (Before)  Size: 61,254  Date: 6/13/96  Time:  7:01p
	  (After)         67,004        9/12/96         1:07a
	
	- mfc\src\inetimpl.cpp
	  (Before)  Size: 13,539  Date: 6/12/96  Time:  3:17p
	  (After)         14,149        9/12/96         1:07a
	
	- mfc\src\inetimpl.h
	  (Before)  Size: 10,160  Date: 6/12/96  Time:  3:17p
	  (After)         10,693        9/12/96         1:07a
	
	- mfc\src\isapi.cpp
	  (Before)  Size: 48,559  Date:  6/3/96  Time:  2:01p
	  (After)         48,608        9/12/96         1:07a
	
	- mfc\src\map_so.cpp
	  (Before)  Size: 8,865  Date: 10/9/95  Time:  1:29p
	  (After)         8,936        9/12/96         1:08a
	
	- mfc\src\map_sp.cpp
	  (Before)  Size: 8,092  Date: 10/9/95  Time:  1:27p
	  (After)         8,163        9/12/96         1:08a
	
	- mfc\src\map_ss.cpp
	  (Before)  Size: 9,111  Date: 10/9/95  Time:  1:29p
	  (After)         9,127        9/12/96         1:08a
	
	- mfc\src\intel\mfc42.def
	  (Before)  Size: 375,779  Date: 6/19/96  Time: 10:03a
	  (After)         376,857        9/12/96         2:26a
	
	- mfc\lib\MFC42.LIB
	  (Before)  Size: 4,163,666  Date: 6/19/96  Time: 10:03a
	  (After)         4,174,336        9/12/96         2:26a
	
	- mfc\src\intel\mfc42d.def
	  (Before)  Size: 253,445  Date: 6/19/96  Time: 10:01a
	  (After)         254,054        9/25/96         5:36p
	
	- mfc\lib\MFC42D.LIB
	  (Before)  Size: 2,980,212  Date: 6/19/96  Time: 10:03a
	  (After)         2,986,310        9/25/96         5:36p
	
	- mfc\src\intel\mfc42u.def
	  (Before)  Size: 375,543  Date: 6/19/96  Time: 10:03a
	  (After)         376,613        9/25/96         5:40p
	
	- mfc\lib\MFC42U.LIB
	  (Before)  Size: 4,167,310  Date: 6/19/96  Time: 10:06a
	  (After)         4,177,948        9/25/96         5:41p
	
	- mfc\src\intel\mfc42ud.def
	  (Before)  Size: 253,953  Date: 6/19/96  Time: 10:04a
	  (After)         254,488        9/25/96         5:39p
	
	- mfc\lib\MFC42UD.LIB
	  (Before)  Size: 2,991,054  Date: 6/19/96  Time: 10:04a
	  (After)         2,996,056        9/25/96         5:39p
	
	- bin\ide\mfcapwz.dll
	  (Before)  Size: 922,384  Date: 6/20/96  Time: 11:24p
	  (After)         925,968        8/29/96         3:07p
	
	- bin\mfcclswz.dll
	  (Before)  Size: 645,904  Date: 6/20/96  Time: 11:25p
	  (After)         650,512        8/29/96         3:03p
	
	- mfc\src\intel\mfcd42d.def
	  (Before)  Size: 42,252  Date: 6/19/96  Time: 10:02a
	  (After)         42,307        9/12/96         2:16a
	
	- mfc\lib\MFCD42D.LIB
	  (Before)  Size: 484,232  Date: 6/19/96  Time: 10:02a
	  (After)         484,232        9/12/96         2:16a
	
	- mfc\src\intel\mfcd42ud.def
	  (Before)  Size: 42,188  Date: 6/19/96  Time: 10:05a
	  (After)         42,243        9/12/96         2:35a
	
	- mfc\lib\MFCD42UD.LIB
	  (Before)  Size: 483,898  Date: 6/19/96  Time: 10:05a
	  (After)         483,898        9/12/96         2:35a
	
	- mfc\src\intel\mfcn42d.def
	  (Before)  Size: 7,798  Date: 6/19/96  Time: 10:02a
	  (After)         7,853        9/12/96         2:16a
	
	- mfc\lib\MFCN42D.LIB
	  (Before)  Size: 91,134  Date: 6/19/96  Time: 10:02a
	  (After)         91,134        9/12/96         2:16a
	
	- mfc\src\intel\mfcn42ud.def
	  (Before)  Size: 7,767  Date: 6/19/96  Time: 10:05a
	  (After)         7,822        9/12/96         2:36a
	
	- mfc\lib\mfcn42ud.lib
	  (Before)  Size: 90,740  Date: 6/19/96  Time: 10:05a
	  (After)         90,740        9/12/96         2:36a
	
	- mfc\src\intel\mfco42d.def
	  (Before)  Size: 199,812  Date: 6/19/96  Time: 10:02a
	  (After)         201,359        9/12/96         2:15a
	
	- mfc\lib\mfco42d.lib
	  (Before)  Size: 2,144,026  Date: 6/19/96  Time: 10:02a
	  (After)         2,156,938        9/12/96         2:15a
	
	- mfc\src\intel\mfco42ud.def
	  (Before)  Size: 199,704  Date: 6/19/96  Time: 10:05a
	  (After)         201,431        9/12/96         2:34a
	
	- mfc\lib\mfco42ud.lib
	  (Before)  Size: 2,146,982  Date: 6/19/96  Time: 10:05a
	  (After)         2,159,362        9/12/96         2:34a
	
	- mfc\src\mfcole.mak
	  (Before)  Size: 4,682  Date: 6/13/96  Time:  7:01p
	  (After)         4,683        9/12/96         1:08a
	
	- mfc\lib\mfcs42.lib
	  (Before)  Size: 147,418  Date: 6/18/96  Time:  7:18p
	  (After)         147,454        9/12/96         2:26a
	
	- mfc\lib\mfcs42.pdb
	  (Before)  Size: 708,608  Date: 6/18/96  Time:  7:18p
	  (After)         700,416        9/12/96         2:26a
	
	- mfc\lib\mfcs42d.lib
	  (Before)  Size: 149,516  Date: 6/18/96  Time:  7:03p
	  (After)         149,552        9/12/96         2:11a
	
	- mfc\lib\mfcs42d.pdb
	  (Before)  Size: 716,800  Date: 6/18/96  Time:  7:03p
	  (After)         716,800        9/12/96         2:11a
	
	- mfc\lib\mfcs42u.lib
	  (Before)  Size: 147,590  Date: 6/18/96  Time:  7:38p
	  (After)         147,624        9/12/96         2:45a
	
	- mfc\lib\mfcs42u.pdb
	  (Before)  Size: 708,608  Date: 6/18/96  Time:  7:38p
	  (After)         700,416        9/12/96         2:45a
	
	- mfc\lib\mfcs42ud.lib
	  (Before)  Size: 149,906  Date: 6/18/96  Time:  7:23p
	  (After)         149,940        9/12/96         2:31a
	
	- mfc\lib\mfcs42ud.pdb
	  (Before)  Size: 716,800  Date: 6/18/96  Time:  7:23p
	  (After)         716,800        9/12/96         2:31a
	
	- mfc\lib\nafxcw.lib
	  (Before)  Size: 7,543,504  Date: 6/18/96  Time:  6:44p
	  (After)         7,586,968        9/12/96         1:53a
	
	- mfc\lib\nafxcw.pdb
	  (Before)  Size: 733,184  Date: 6/18/96  Time:  6:44p
	  (After)         741,376        9/12/96         1:53a
	
	- mfc\lib\nafxcwd.lib
	  (Before)  Size: 8,440,612  Date: 6/18/96  Time:  6:36p
	  (After)         8,501,750        9/12/96         1:46a
	
	- mfc\lib\nafxcwd.pdb
	  (Before)  Size: 749,568  Date: 6/18/96  Time:  6:36p
	  (After)         749,568        9/12/96         1:46a
	
	- mfc\lib\nafxis.lib
	  (Before)  Size: 100,204  Date: 6/18/96  Time:  6:45p
	  (After)          88,028        9/12/96         1:54a
	
	- mfc\lib\nafxisd.lib
	  (Before)  Size: 97,438  Date: 6/18/96  Time:  6:44p
	  (After)         97,840        9/12/96         1:53a
	
	- mfc\lib\nafxisd.pdb
	  (Before)  Size: 69,632  Date: 6/18/96  Time:  6:44p
	  (After)         69,632        9/12/96         1:53a
	
	- mfc\src\occcont.cpp
	  (Before)  Size: 17,689  Date: 6/13/96  Time:  7:01p
	  (After)         17,693        9/12/96         1:08a
	
	- mfc\src\oleasmon.cpp
	  (Before)  Size: 12,861  Date: 6/13/96  Time:  7:01p
	  (After)         16,759        9/12/96         1:08a
	
	- mfc\src\olebind.h
	  (Before)  Size: 2,813  Date:  6/3/96  Time:  2:03p
	  (After)         2,811        9/12/96         1:08a
	
	- mfc\src\oleconn.cpp
	  (Before)  Size: 12,981  Date:  6/3/96  Time:  2:01p
	  (After)         12,981        9/12/96         1:08a
	
	- mfc\src\oledocob.cpp
	  (Before)  Size: 24,624  Date:  6/7/96  Time:  4:08p
	  (After)         25,016        9/12/96         1:08a
	
	- mfc\src\oledoctg.cpp
	  (Before)  Size: 5,486  Date: 6/13/96  Time:  7:02p
	  (After)         5,937        9/12/96         1:08a
	
	- mfc\src\oledocvw.cpp
	  (Before)  Size: 11,826  Date:  6/7/96  Time:  4:05p
	  (After)         11,851        9/12/96         1:08a
	
	- mfc\src\olefact.cpp
	  (Before)  Size: 14,097  Date: 6/11/96  Time:  3:06p
	  (After)         14,008        9/12/96         1:08a
	
	- mfc\src\oleimpl.h
	  (Before)  Size: 31,186  Date:  6/3/96  Time:  5:22p
	  (After)         31,105        9/12/96         1:08a
	
	- mfc\src\oleimpl2.h
	  (Before)  Size: 10,381  Date:  6/3/96  Time:  2:03p
	  (After)         10,477        9/12/96         1:08a
	
	- mfc\src\oleinit.cpp
	  (Before)  Size: 6,874  Date:  6/3/96  Time:  2:02p
	  (After)         6,954        9/12/96         1:08a
	
	- mfc\src\oleipfrm.cpp
	  (Before)  Size: 19,762  Date: 5/10/96  Time:  1:59p
	  (After)         19,741        9/12/96         1:08a
	
	- mfc\src\olemisc.cpp
	  (Before)  Size: 39,592  Date:  6/3/96  Time:  2:02p
	  (After)         39,685        9/12/96         1:08a
	
	- mfc\src\olemon.cpp
	  (Before)  Size: 8,758  Date: 6/12/96  Time:  3:49p
	  (After)         8,858        9/12/96         1:08a
	
	- mfc\src\olepro32.cpp
	  (Before)  Size: 3,995  Date: 5/31/96  Time: 11:58a
	  (After)         4,021        9/12/96         1:08a
	
	- mfc\src\olestrm.cpp
	  (Before)  Size: 11,557  Date: 5/14/96  Time:  2:25p
	  (After)         11,865        9/12/96         1:08a
	
	- mfc\src\olesvr1.cpp
	  (Before)  Size: 77,615  Date: 6/12/96  Time:  3:17p
	  (After)         77,667        9/12/96         1:08a
	
	- mfc\src\ppgpict.cpp
	  (Before)  Size: 11,333  Date: 5/28/96  Time: 10:41a
	  (After)         11,341        9/12/96         1:08a
	
	- mfc\src\sockcore.cpp
	  (Before)  Size: 31,842  Date:  6/5/96  Time: 10:27a
	  (After)         31,826        9/12/96         1:08a
	
	- mfc\src\thrdcore.cpp
	  (Before)  Size: 24,872  Date:  6/3/96  Time:  2:02p
	  (After)         24,972        9/12/96         1:08a
	
	- mfc\lib\uafxcw.lib
	  (Before)  Size: 7,577,428  Date: 6/18/96  Time:  6:59p
	  (After)         7,617,746        9/12/96         2:07a
	
	- mfc\lib\uafxcw.pdb
	  (Before)  Size: 741,376  Date: 6/18/96  Time:  6:58p
	  (After)         741,376        9/12/96         2:07a
	
	- mfc\lib\uafxcwd.lib
	  (Before)  Size: 8,475,500  Date: 6/18/96  Time:  6:51p
	  (After)         8,536,952        9/12/96         2:00a
	
	- mfc\lib\uafxcwd.pdb
	  (Before)  Size: 749,568  Date: 6/18/96  Time:  6:51p
	  (After)         749,568        9/12/96         2:00a
	
	- mfc\src\viewcore.cpp
	  (Before)  Size: 14,682  Date:  6/3/96  Time:  2:02p
	  (After)         14,821        9/12/96         1:08a
	
	- mfc\src\viewprev.cpp
	  (Before)  Size: 32,817  Date: 10/9/96  Time:  1:29p
	  (After)         32,961        9/12/96         1:08a
	
	- mfc\src\viewrich.cpp
	  (Before)  Size: 57,619  Date: 6/10/96  Time:  5:21p
	  (After)         58,063        9/12/96         1:08a
	
	- mfc\src\wincore.cpp
	  (Before)  Size: 102,800  Date:  6/3/96  Time:  5:21p
	  (After)         102,814        9/12/96         1:08a
	
	- mfc\src\winhand.cpp
	  (Before)  Size: 6,645  Date: 5/31/96  Time:  3:42p
	  (After)         6,688        9/12/96         1:08a
	
	- mfc\src\winmain.cpp
	  (Before)  Size: 1,919  Date: 5/21/96  Time: 10:20p
	  (After)         1,921        9/12/96         1:08a
	
	- mfc\src\winocc.cpp
	  (Before)  Size: 11,726  Date: 6/14/96  Time:  6:10p
	  (After)         11,635        9/12/96         1:08a
	
	42BB1B2.EXE Patch
	-----------------
	
	1. Files patched by dll42b.rtp in the \windows\system directory on Windows
	  95 or \windows\system32 directory on Windows NT:
	
	  mfc42.dll         mfc42u.dll          mfc42.dbg
	  mfc42.map         mfc42chs.dll        mfc42cht.dll        mfc42d.dll
	  mfc42d.map        mfc42d.pdb          mfc42deu.dll        mfc42enu.dll
	  mfc42esp.dll      mfc42fra.dll        mfc42ita.dll        mfc42jpn.dll
	  mfc42kor.dll      mfc42u.dbg          mfc42u.dll          mfc42u.map
	  mfc42ud.dll       mfc42ud.map         mfc42ud.pdb         mfcd42d.dll
	  mfcd42d.map       mfcd42d.pdb         mfcd42ud.dll        mfcd42ud.pdb
	  mfcn42d.dll       mfcn42d.map         mfcn42d.pdb         mfcn42ud.dll
	  mfcn42ud.map      mfcn42ud.pdb        mfco42d.dll         mfco42d.map
	  mfco42d.pdb       mfco42ud.dll        mfco42ud.map        mfco42ud.pdb
	
	2. Files patched by vc42b.rtp in the \msdev directory:
	
	  include\accctrl.h            include\aclapi.h
	  include\alphaops.h           lib\comctl32.lib
	  include\cplext.h             include\d3d.h
	  include\d3dcaps.h            include\d3drm.h
	  lib\d3drm.lib                include\d3drmdef.h
	  include\d3drmobj.h           include\d3drmwin.h
	  include\d3dtypes.h           lib\daouuid.lib
	  include\dbt.h                lib\dflayout.lib
	  include\dispdib.h            include\exdispid.h
	  lib\fdi.lib                  include\gl\gl.h
	  include\gl\glu.h             lib\hlink.lib
	  include\httpext.h            include\httpfilt.h
	  include\idf.h                include\intshcut.h
	  include\lmaccess.h           include\lmat.h
	  include\lmbrowsr.h           include\lmerr.h
	  include\lmerrlog.h           include\lmserver.h
	  include\lmshare.h            include\lsapi.h
	  lib\lsapi32.lib              lib\mapi.lib
	  include\mapivb.bas           lib\mfcuia32.lib
	  include\mgmtapi.h            bin\midl.exe
	  bin\mktyplib.exe             include\nspapi.h
	  include\ocidl.idl            lib\olepro32.lib
	  include\pbt.h                include\pcrt32.h
	  include\pdh.h                lib\pdh.lib
	  include\pdhmsg.h             include\penwin.h
	  lib\penwin32.lib             lib\pkpd32.lib
	  include\rasdlg.h             include\rassapi.h
	  include\rasshost.h           include\setupapi.h
	  lib\setupapi.lib             include\sporder.h
	  lib\sporder.lib              include\svcguid.h
	  include\svrapi.h             lib\svrapi.lib
	  lib\th32.lib                 lib\thunk32.lib
	  include\tlhelp32.h           include\urlmon.idl
	  lib\uuid.lib                 include\vcr.h
	  include\wininet.h            include\winioctl.h
	  include\winnls32.h           include\winperf.h
	  include\winresrc.h           include\wintrust.h
	  lib\wintrust.lib             lib\wow32.lib
	  include\wownt16.h            include\ws2atm.h
	  include\ws2tcpip.h           include\wshisotp.h
	  mfc\include\afxinet.h        mfc\include\afxisapi.h
	  mfc\include\afxwin.h         mfc\src\appui2.cpp
	  bin\bscmake.exe              mfc\src\create.bat
	  mfc\src\ctlobj.cpp           mfc\src\dlgprop.cpp
	  mfc\lib\eafxis.lib           mfc\lib\eafxis.pdb
	  mfc\lib\eafxisd.lib          mfc\lib\eafxisd.pdb
	  mfc\src\filefind.cpp         mfc\src\filemem.cpp
	  mfc\src\inet.cpp             mfc\src\inetimpl.cpp
	  mfc\src\inetimpl.h           mfc\src\intel\mfc42.def
	  mfc\lib\mfc42.exp            mfc\lib\mfc42.lib
	  mfc\src\intel\mfc42d.def     mfc\lib\mfc42d.exp
	  mfc\lib\mfc42d.lib           mfc\src\intel\mfc42u.def
	  mfc\lib\mfc42u.exp           mfc\lib\mfc42u.lib
	  mfc\src\intel\mfc42ud.def    mfc\lib\mfc42ud.exp
	  mfc\lib\mfc42ud.lib          bin\ide\mfcapwz.dll
	  bin\mfcclswz.dll             mfc\src\intel\mfcd42d.def
	  mfc\lib\mfcd42d.lib          mfc\src\intel\mfcd42ud.def
	  mfc\lib\mfcd42ud.lib         mfc\src\intel\mfcn42d.def
	  mfc\lib\mfcn42d.lib          mfc\src\intel\mfcn42ud.def
	  mfc\lib\mfcn42ud.lib         mfc\src\intel\mfco42d.def
	  mfc\lib\mfco42d.lib          mfc\src\intel\mfco42ud.def
	  mfc\lib\mfco42ud.lib         mfc\lib\mfcs42.lib
	  mfc\lib\mfcs42.pdb           mfc\lib\mfcs42d.lib
	  mfc\lib\mfcs42d.pdb          mfc\lib\mfcs42u.lib
	  mfc\lib\mfcs42u.pdb          mfc\lib\mfcs42ud.lib
	  mfc\lib\mfcs42ud.pdb         mfc\lib\nafxcw.lib
	  mfc\lib\nafxcw.pdb           mfc\lib\nafxcwd.lib
	  mfc\lib\nafxcwd.pdb          mfc\lib\nafxis.lib
	  mfc\lib\nafxis.pdb           mfc\lib\nafxisd.lib
	  mfc\lib\nafxisd.pdb          mfc\src\oledocob.cpp
	  mfc\src\oledoctg.cpp         mfc\src\oledocvw.cpp
	  mfc\src\olemon.cpp           mfc\src\olesvr1.cpp
	  mfc\src\sockcore.cpp         mfc\lib\uafxcw.lib
	  mfc\lib\uafxcw.pdb           mfc\lib\uafxcwd.lib
	  mfc\lib\uafxcwd.pdb          mfc\src\viewcore.cpp
	  mfc\src\viewprev.cpp         mfc\src\viewrich.cpp
	  mfc\src\winocc.cpp
	
	MSDEV42B.EXE Patch
	------------------
	
	1. Files patched by dll42b.rtp in the \windows\system directory on Windows
	  95 or \windows\system32 directory on Windows NT:
	
	  mfc42.dll           mfc42u.dll           mfc42.dbg
	  mfc42.map           mfc42chs.dll         mfc42cht.dll
	  mfc42d.dll          mfc42d.map           mfco42ud.pdb
	  mfc42d.pdb          mfc42deu.dll         mfc42enu.dll
	  mfc42esp.dll        mfc42fra.dll         mfc42ita.dll
	  mfc42jpn.dll        mfc42kor.dll         mfc42u.dbg
	  mfc42u.dll          mfc42u.map           mfc42ud.dll
	  mfc42ud.map         mfc42ud.pdb          mfcd42d.dll
	  mfcd42d.map         mfcd42d.pdb          mfcd42ud.dll
	  mfcd42ud.pdb        mfcn42d.dll          mfcn42d.map
	  mfcn42d.pdb         mfcn42ud.dll         mfcn42ud.map
	  mfcn42ud.pdb        mfco42d.dll          mfco42d.map
	  mfco42d.pdb         mfco42ud.dll         mfco42ud.map
	
	2. Files patched by msdev42b.rtp in the \msdev directory:
	
	  mfcclswz.dll                ide\mfcapwz.dll
	  mfc\include\afxcom_.h       mfc\include\afxctl.h
	  mfc\include\afxdisp.h       mfc\include\afxdocob.h
	  mfc\include\afxinet.h       mfc\include\afxisapi.h
	  mfc\include\afxmsg_.h       mfc\include\afxole.h
	  mfc\include\afxtempl.h      mfc\include\afxwin.h
	  mfc\src\appui2.cpp          mfc\src\barstat.cpp
	  bin\bscmake.exe             mfc\src\ctlconn.cpp
	  mfc\src\ctlcore.cpp         mfc\src\ctldata.cpp
	  mfc\src\ctlevent.cpp        mfc\src\ctlfont.cpp
	  mfc\src\ctlinplc.cpp        mfc\src\ctlobj.cpp
	  mfc\src\ctlpict.cpp         mfc\src\ctlprop.cpp
	  mfc\src\ctlpropx.cpp        mfc\src\ctlpset.cpp
	  mfc\src\ctlquick.cpp        mfc\src\daocore.cpp
	  mfc\src\dlgfnt.cpp          mfc\src\dlgprop.cpp
	  mfc\src\dllmodul.cpp        mfc\lib\eafxis.lib
	  mfc\lib\eafxisd.lib         mfc\lib\eafxisd.pdb
	  mfc\src\except.cpp          mfc\src\filefind.cpp
	  mfc\src\filemem.cpp         mfc\src\inet.cpp
	  mfc\src\inetimpl.cpp        mfc\src\inetimpl.h
	  mfc\src\isapi.cpp           mfc\src\map_so.cpp
	  mfc\src\map_sp.cpp          mfc\src\map_ss.cpp
	  mfc\src\intel\mfc42.def     mfc\lib\mfc42.lib
	  mfc\src\intel\mfc42d.def    mfc\lib\mfc42d.lib
	  mfc\src\intel\mfc42u.def    mfc\lib\mfc42u.lib
	  mfc\src\intel\mfc42ud.def   mfc\lib\mfc42ud.lib
	  bin\ide\mfcapwz.dll         bin\mfcclswz.dll
	  mfc\src\intel\mfcd42d.def   mfc\lib\mfcd42d.lib
	  mfc\src\intel\mfcd42ud.def
	  mfc\lib\mfcd42ud.lib        mfc\src\intel\mfcn42d.def
	  mfc\lib\mfcn42d.lib         mfc\src\intel\mfcn42ud.def
	  mfc\lib\mfcn42ud.lib        mfc\src\intel\mfco42d.def
	  mfc\lib\mfco42d.lib         mfc\src\intel\mfco42ud.def
	  mfc\lib\mfco42ud.lib        mfc\src\mfcole.mak
	  mfc\lib\mfcs42.lib          mfc\lib\mfcs42.pdb
	  mfc\lib\mfcs42d.lib         mfc\lib\mfcs42d.pdb
	  mfc\lib\mfcs42u.lib         mfc\lib\mfcs42u.pdb
	  mfc\lib\mfcs42ud.lib        mfc\lib\mfcs42ud.pdb
	  mfc\lib\nafxcw.lib          mfc\lib\nafxcw.pdb
	  mfc\lib\nafxcwd.lib         mfc\lib\nafxcwd.pdb
	  mfc\lib\nafxis.lib          mfc\lib\nafxisd.lib
	  mfc\lib\nafxisd.pdb         mfc\src\occcont.cpp
	  mfc\src\oleasmon.cpp        mfc\src\olebind.h
	  mfc\src\oleconn.cpp         mfc\src\oledocob.cpp
	  mfc\src\oledoctg.cpp        mfc\src\oledocvw.cpp
	  mfc\src\olefact.cpp         mfc\src\oleimpl.h
	  mfc\src\oleimpl2.h          mfc\src\oleinit.cpp
	  mfc\src\oleipfrm.cpp        mfc\src\olemisc.cpp
	  mfc\src\olemon.cpp          mfc\src\olepro32.cpp
	  mfc\src\olestrm.cpp         mfc\src\olesvr1.cpp
	  mfc\src\ppgpict.cpp         mfc\src\sockcore.cpp
	  mfc\src\thrdcore.cpp        mfc\lib\uafxcw.lib
	  mfc\lib\uafxcw.pdb          mfc\lib\uafxcwd.lib
	  mfc\lib\uafxcwd.pdb         mfc\src\viewcore.cpp
	  mfc\src\viewprev.cpp        mfc\src\viewrich.cpp
	  mfc\src\wincore.cpp         mfc\src\winhand.cpp
	  mfc\src\winmain.cpp         mfc\src\winocc.cpp
	
	SDK42B.EXE Patch
	----------------
	
	1. Files patched by sdk42b.rtp in the \msdev directory:
	
	  include\accctrl.h         include\aclapi.h
	  include\activscp.h        lib\advapi32.lib
	  include\alphaops.h        include\basetyps.h
	  lib\cap.lib               include\cguid.h
	  lib\chkstk.obj            include\comcat.h
	  include\comcat.idl        lib\comctl32.lib
	  lib\comdlg32.lib          include\commctrl.h
	  lib\commode.obj           include\compobj.h
	  include\cplext.h          include\d3d.h
	  include\d3dcaps.h         include\d3drm.h
	  lib\d3drm.lib             include\d3drmdef.h
	  include\d3drmobj.h        include\d3drmwin.h
	  include\d3dtypes.h        lib\daouuid.lib
	  include\dbt.h             include\dde.h
	  include\ddeml.h           include\ddraw.h
	  lib\ddraw.lib             lib\dflayout.lib
	  include\digitalv.h        include\dispatch.h
	  include\dispdib.h         lib\dlcapi.lib
	  include\docobj.h          include\docobj.idl
	  include\dplay.h           lib\dplay.lib
	  include\dsound.h          lib\dsound.lib
	  include\dvobj.h           include\error.h
	  include\exdisp.h          include\exdisp.odl
	  include\exdispid.h        lib\fdi.lib
	  include\ftsiface.h        lib\gdi32.lib
	  include\gl\gl.h           lib\glaux.lib
	  include\gl\glu.h          lib\glu32.lib
	  include\hliface.h         include\hliface.idl
	  include\hlink.h           include\hlink.idl
	  include\httpext.h         include\httpfilt.h
	  include\idf.h             include\imagehlp.h
	  lib\imagehlp.lib          include\ime.h
	  include\imm.h             lib\imm32.lib
	  include\inetsdk.h         include\inetsdk.idl
	  include\inetsdk.mak       include\intshcut.h
	  include\isguids.h         lib\kernel32.lib
	  include\lmaccess.h        include\lmat.h
	  include\lmbrowsr.h        include\lmerr.h
	  include\lmerrlog.h        include\lmserver.h
	  include\lmshare.h         lib\loadperf.lib
	  include\lsapi.h           lib\lz32.lib
	  lib\mapi32.lib            include\mapivb.bas
	  include\mciavi.h          include\mcx.h
	  include\mgmtapi.h         lib\mgmtapi.lib
	  bin\midl.exe              bin\mktyplib.exe
	  include\mmreg.h           include\mmsystem.h
	  include\moniker.h         lib\mpr.lib
	  include\msacm.h           lib\msacm32.lib
	  include\msacmdlg.dlg      include\msacmdlg.h
	  include\msconf.h          lib\msconf.lib
	  include\mswsock.h         lib\mswsock.lib
	  lib\nddeapi.lib           lib\netapi32.lib
	  include\nspapi.h          include\oaidl.h
	  include\oaidl.idl         include\objbase.h
	  include\objerror.h        include\objidl.h
	  include\objidl.idl        include\objsafe.h
	  include\ocidl.h           include\ocidl.idl
	  include\ole2.h            lib\ole32.lib
	  lib\oleaut32.lib          include\oleauto.h
	  include\olectl.h          include\olectlid.h
	  include\oledlg.h          lib\oledlg.lib
	  include\oleidl.h          include\oleidl.idl
	  lib\olepro32.lib          lib\opengl32.lib
	  include\pbt.h             include\pcrt32.h
	  include\pdh.h             lib\pdh.lib
	  include\pdhmsg.h          lib\penter.lib
	  include\penwin.h          include\prsht.h
	  include\pshpack4.h        include\ras.h
	  lib\rasapi32.lib          include\rasdlg.h
	  lib\rasdlg.lib            include\raserror.h
	  include\rassapi.h         lib\rassapi.lib
	  include\rasshost.h        include\regstr.h
	  include\richedit.h        include\rpcdce.h
	  include\rpcdcep.h         include\rpcndr.h
	  lib\rpcndr.lib            lib\rpcns4.lib
	  include\rpcproxy.h        lib\rpcrt4.lib
	  include\scode.h           include\scrnsave.h
	  lib\scrnsave.lib          include\servprov.h
	  include\servprov.idl      include\setupapi.h
	  lib\setupapi.lib          lib\shell32.lib
	  include\shlguid.h         include\shlobj.h
	  include\smpab.h           include\smpms.h
	  include\smpxp.h           include\snmp.h
	  lib\snmpapi.lib           include\sporder.h
	  lib\sporder.lib           include\storage.h
	  include\svcguid.h         include\svrapi.h
	  include\tapi.h            lib\tapi32.lib
	  include\tlhelp32.h        include\tspi.h
	  include\unknwn.h          include\unknwn.idl
	  include\urlhlink.h        include\urlmon.h
	  include\urlmon.idl        lib\urlmon.lib
	  lib\user32.lib            lib\uuid.lib
	  lib\uuid2.lib             lib\uuid3.lib
	  include\variant.h         include\vcr.h
	  lib\vdmdbg.lib            lib\version.lib
	  include\vfw.h             lib\vfw32.lib
	  lib\webpost.lib           include\win32.mak
	  lib\win32api.csv          lib\win32spl.lib
	  include\winbase.h         include\wincrypt.h
	  include\windef.h          include\windows.h
	  include\windowsx.h        include\winerror.h
	  include\wingdi.h          include\wininet.h
	  lib\wininet.lib           include\winioctl.h
	  lib\winmm.lib             include\winnetwk.h
	  include\winnls.h          include\winnls32.h
	  include\winnt.h           include\winperf.h
	  include\winresrc.h        include\winsock2.h
	  include\winspool.h        lib\winspool.lib
	  lib\winstrm.lib           include\wintrust.h
	  lib\wintrust.lib          include\winuser.h
	  include\wownt16.h         include\wpapi.h
	  include\wpobj.h           include\wpspi.h
	  lib\ws2_32.lib            include\ws2atm.h
	  include\ws2spi.h          include\ws2tcpip.h
	  include\wshisotp.h        include\wsipx.h
	  include\wsnwlink.h        lib\wsock32.lib
	  lib\wst.lib               include\wtypes.h
	  include\wtypes.idl
	
	This is the end of Part 4 and the end of the article.
	
	REFERENCES
	==========
	
	You can find the (http://support.microsoft.com/download/support/mslfiles/the)
	additional parts of this article on the Microsoft Knowledge Base:
	
	  Q160491 INFO: Files Modified by VC42b Patch - Part 1 of 4
	
	  Q160496 INFO: Files Modified by VC42b Patch - Part 2 of 4
	
	  Q160505 INFO: Files Modified by VC42b Patch - Part 3 of 4
	
	Additional query words: patch
	
	======================================================================
	Keywords          : kbenv kbfile kbother kbnokeyword kbDAOsearch kbDatabase kbGenInfo kbMFC kbODBC kbVC kbHWx86 kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
